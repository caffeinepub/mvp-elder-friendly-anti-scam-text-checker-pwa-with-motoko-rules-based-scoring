import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Nat "mo:core/Nat";
import List "mo:core/List";

actor {
  // Feature flag boundary for PRO features
  type ProConfig = { enabled : Bool };
  let proConfig : ProConfig = { enabled = true };

  // Core types for reports
  public type ReportCount = {
    target : Text;
    count : Nat;
    category : ?Text;
  };

  public type AuthenticatedReport = {
    targetType : Text;
    target : Text;
    hash : Text; // hash of submitter
    timestamp : Int;
    category : ?Text;
  };

  // Domain-specific enums
  public type TargetType = { #phoneNumber; #email; #crypto };

  // International Contact Lookup types
  public type LookupProvider = {
    #numLookup;
    #google;
    #amazon;
    #custom : Text;
  };

  public type FieldSource = {
    value : Text;
    sourceUrl : Text;
  };

  public type ContactDetails = {
    id : Text;
    type_ : Text;
    country : Text;
    address : ?Text;
    verified : Text;
    riskLevel : Text;
    riskScore : Text;
    reports : Text;
    trustScore : Text;
    validationSource : ?FieldSource;
    reportsSource : ?FieldSource;
    trustScoreSource : ?FieldSource;
    countryValidationSource : ?FieldSource;
    adjustedRiskScoreSource : ?FieldSource;
    adjustedRiskScore : ?Text;
    riskScoreDescription : Text;
  };

  public type ExtendedContactDetails = {
    contactType : LookupProvider;
    content : Text;
    details : ContactDetails;
  };

  public type ProviderConfig = {
    name : LookupProvider;
    apiKey : ?Text;
    endpoint : ?Text;
    enabled : Bool;
    // Additional provider-specific settings can be added here
  };

  // International Contact Lookup Store
  let internationalContactLookup = Map.empty<Text, ExtendedContactDetails>();

  // Persistent storage for provider configurations
  let providerConfigStore = Map.empty<Text, ProviderConfig>();

  // Initialize the access control system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type definition
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Persistent storage for phone and crypto reports
  let persistentTablePhone = Map.empty<Text, Nat>();
  let persistentTableCrypto = Map.empty<Text, Nat>();

  // New persistent report store for authenticated reports
  let authenticatedReports = List.empty<AuthenticatedReport>();

  // Additional state for future use
  let boolResponses = Map.empty<Text, Bool>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Helper methods for role queries
  public query ({ caller }) func getUserRole(user : Principal) : async AccessControl.UserRole {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can query roles");
    };
    AccessControl.getUserRole(accessControlState, user);
  };

  public query ({ caller }) func isAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };

  // Reporting core (handles both anonymous and authenticated reports)
  func handleReport(targetType : TargetType, target : Text, category : ?Text, submitter : ?Principal) {
    // Store authenticated report metadata if submitter is known
    if (submitter != null) {
      let hash = switch (submitter) { 
        case (?principal) { principal.toText() }; 
        case (null) { "anonymous" } 
      };
      let report : AuthenticatedReport = {
        targetType = switch (targetType) {
          case (#phoneNumber) { "phone" };
          case (#email) { "email" };
          case (#crypto) { "crypto" };
        };
        target;
        hash;
        timestamp = 0; // Placeholder for now - add timestamp logic if needed
        category;
      };
      authenticatedReports.add(report);
    };

    // Update aggregate counts
    switch (targetType) {
      case (#phoneNumber) {
        let currentCount = switch (persistentTablePhone.get(target)) {
          case (?count) { count };
          case (null) { 0 };
        };
        persistentTablePhone.add(target, currentCount + 1);
      };
      case (#crypto) {
        let currentCount = switch (persistentTableCrypto.get(target)) {
          case (?count) { count };
          case (null) { 0 };
        };
        persistentTableCrypto.add(target, currentCount + 1);
      };
      case (#email) {
        // Email reports are tracked in authenticatedReports only
      };
    };
  };

  // Public endpoint for reporting (allows both anonymous and authenticated)
  public shared ({ caller }) func report(targetType : TargetType, target : Text, category : ?Text) : async () {
    // No authorization check - allows both anonymous and authenticated users
    let submitter = if (caller.isAnonymous()) { null } else { ?caller };
    handleReport(targetType, target, category, submitter);
  };

  // Public queries for report counts (no authorization required)
  public query func getPhoneReports(phone : Text) : async ?Nat {
    persistentTablePhone.get(phone);
  };

  public query func getCryptoReports(address : Text) : async ?Nat {
    persistentTableCrypto.get(address);
  };

  // Admin-only: Clear reports (moderation)
  public shared ({ caller }) func clearPhoneReports(phone : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can clear reports");
    };
    persistentTablePhone.remove(phone);
  };

  public shared ({ caller }) func clearCryptoReports(address : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can clear reports");
    };
    persistentTableCrypto.remove(address);
  };

  // Provider configuration management
  public shared ({ caller }) func setProviderConfig(name : Text, config : ProviderConfig) : async () {
    // Admin guard - only admins can modify provider configurations
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can modify provider configurations");
    };

    providerConfigStore.add(name, config);
  };

  public query ({ caller }) func getProviderConfig(name : Text) : async ?ProviderConfig {
    // Admin guard - provider configs contain sensitive API keys
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access provider configurations");
    };

    providerConfigStore.get(name);
  };

  // Public query for contact lookup - requires authentication to prevent abuse
  public query ({ caller }) func getLookupDetails(key : Text) : async ?ExtendedContactDetails {
    // Require user-level authentication to prevent abuse of lookup APIs
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can perform contact lookups");
    };

    internationalContactLookup.get(key);
  };
};
