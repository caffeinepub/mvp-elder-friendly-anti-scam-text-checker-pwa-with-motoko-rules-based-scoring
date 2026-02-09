/**
 * Single source of truth for all AntiFraud canister IDs.
 * Main canister: message analysis and core functionality
 * Extra canister: phone and crypto lookups
 * Reports canister: user-submitted reports and collaborative database
 */

export const CANISTER_IDS = {
  main: 'v63rh-lqaaa-aaaaa-qewvq-cai',
  extra: 'c6sjf-tqaaa-aaaap-qsiea-cai',
  reports: '7w5qg-6aaaa-aaaab-ael4a-cai',
} as const;

export type CanisterType = keyof typeof CANISTER_IDS;

export function getCanisterId(type: CanisterType): string {
  return CANISTER_IDS[type];
}
