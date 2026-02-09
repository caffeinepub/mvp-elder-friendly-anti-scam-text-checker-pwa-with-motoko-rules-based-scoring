import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    /**
     * / Phase 2c: Analyzes text for scam indicators and returns a risk assessment string.
     */
    analyzeText(text: string): Promise<string>;
    /**
     * / Looks up a crypto address in stable map and returns the number of reports if found (returns null if never reported).
     */
    getCryptoReports(address: string): Promise<bigint | null>;
    /**
     * / Phase 3a: Read-only persistent stable store. Looks up a phone number in stable map and returns the number of reports if found (returns null if never reported).
     */
    getPhoneReports(phone: string): Promise<bigint | null>;
}
