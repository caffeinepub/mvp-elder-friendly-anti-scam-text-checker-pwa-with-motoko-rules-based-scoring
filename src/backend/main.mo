import Map "mo:core/Map";
import Text "mo:core/Text";



actor {
  // Persist only stable data structures - the persistent tables (phone numbers, crypto addresses).
  // Immutable persistent (stable) data structures for deterministic and secure transitions across upgrade boundaries.
  let persistentTablePhone = Map.empty<Text, Nat>();
  let persistentTableCrypto = Map.empty<Text, Nat>();

  /// Phase 3a: Read-only persistent stable store. Looks up a phone number in stable map and returns the number of reports if found (returns null if never reported).
  public query ({ caller }) func getPhoneReports(phone : Text) : async ?Nat {
    persistentTablePhone.get(phone);
  };

  /// Looks up a crypto address in stable map and returns the number of reports if found (returns null if never reported).
  public query ({ caller }) func getCryptoReports(address : Text) : async ?Nat {
    persistentTableCrypto.get(address);
  };
};
