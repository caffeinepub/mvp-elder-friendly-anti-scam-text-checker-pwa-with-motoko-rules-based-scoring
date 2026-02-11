import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ExtendedContactDetails {
    content: string;
    contactType: LookupProvider;
    details: ContactDetails;
}
export interface FieldSource {
    value: string;
    sourceUrl: string;
}
export type LookupProvider = {
    __kind__: "numLookup";
    numLookup: null;
} | {
    __kind__: "custom";
    custom: string;
} | {
    __kind__: "google";
    google: null;
} | {
    __kind__: "amazon";
    amazon: null;
};
export interface ProviderConfig {
    endpoint?: string;
    name: LookupProvider;
    enabled: boolean;
    apiKey?: string;
}
export interface ContactDetails {
    id: string;
    verified: string;
    country: string;
    validationSource?: FieldSource;
    type: string;
    trustScore: string;
    riskScoreDescription: string;
    trustScoreSource?: FieldSource;
    countryValidationSource?: FieldSource;
    address?: string;
    reports: string;
    reportsSource?: FieldSource;
    adjustedRiskScore?: string;
    riskLevel: string;
    riskScore: string;
    adjustedRiskScoreSource?: FieldSource;
}
export interface UserProfile {
    name: string;
}
export enum TargetType {
    email = "email",
    crypto = "crypto",
    phoneNumber = "phoneNumber"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    clearCryptoReports(address: string): Promise<void>;
    clearPhoneReports(phone: string): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCryptoReports(address: string): Promise<bigint | null>;
    getLookupDetails(key: string): Promise<ExtendedContactDetails | null>;
    getPhoneReports(phone: string): Promise<bigint | null>;
    getProviderConfig(name: string): Promise<ProviderConfig | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getUserRole(user: Principal): Promise<UserRole>;
    isAdmin(): Promise<boolean>;
    isCallerAdmin(): Promise<boolean>;
    report(targetType: TargetType, target: string, category: string | null): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setProviderConfig(name: string, config: ProviderConfig): Promise<void>;
}
