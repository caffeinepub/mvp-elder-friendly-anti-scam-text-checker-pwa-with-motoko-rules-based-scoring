import { CANISTER_IDS } from './canisterIds';
import type { MainCanisterInterface } from './idl/main.idl';
import type { ExtraCanisterInterface } from './idl/extra.idl';
import type { ReportsCanisterInterface } from './idl/reports.idl';

interface ReadinessReport {
  canisterIds: typeof CANISTER_IDS;
  actors: {
    main: {
      available: boolean;
      methods: {
        analyzeText: boolean;
      };
    };
    extra: {
      available: boolean;
      methods: {
        getPhoneReports: boolean;
        getCryptoReports: boolean;
      };
    };
    reports: {
      available: boolean;
      methods: {
        lookupEmail: boolean;
        lookupPhone: boolean;
        lookupMessage: boolean;
        lookupCrypto: boolean;
        submitReport: boolean;
      };
    };
  };
}

export function generateReadinessReport(
  mainActor: MainCanisterInterface | null,
  extraActor: ExtraCanisterInterface | null,
  reportsActor: ReportsCanisterInterface | null
): ReadinessReport {
  const report: ReadinessReport = {
    canisterIds: CANISTER_IDS,
    actors: {
      main: {
        available: mainActor !== null,
        methods: {
          analyzeText: mainActor !== null && typeof mainActor.analyzeText === 'function',
        },
      },
      extra: {
        available: extraActor !== null,
        methods: {
          getPhoneReports: extraActor !== null && typeof extraActor.getPhoneReports === 'function',
          getCryptoReports: extraActor !== null && typeof extraActor.getCryptoReports === 'function',
        },
      },
      reports: {
        available: reportsActor !== null,
        methods: {
          lookupEmail: reportsActor !== null && typeof reportsActor.lookupEmail === 'function',
          lookupPhone: reportsActor !== null && typeof reportsActor.lookupPhone === 'function',
          lookupMessage: reportsActor !== null && typeof reportsActor.lookupMessage === 'function',
          lookupCrypto: reportsActor !== null && typeof reportsActor.lookupCrypto === 'function',
          submitReport: reportsActor !== null && typeof reportsActor.submitReport === 'function',
        },
      },
    },
  };

  return report;
}

export function logReadinessReport(report: ReadinessReport): void {
  console.group('🔍 AntiFraud Readiness Report');
  
  console.log('📋 Canister IDs:');
  console.log(`  Main:    ${report.canisterIds.main}`);
  console.log(`  Extra:   ${report.canisterIds.extra}`);
  console.log(`  Reports: ${report.canisterIds.reports}`);
  
  console.log('\n🎭 Actor Status:');
  
  console.log(`  Main Actor: ${report.actors.main.available ? '✅' : '❌'}`);
  if (report.actors.main.available) {
    console.log(`    - analyzeText: ${report.actors.main.methods.analyzeText ? '✅' : '❌'}`);
  }
  
  console.log(`  Extra Actor: ${report.actors.extra.available ? '✅' : '❌'}`);
  if (report.actors.extra.available) {
    console.log(`    - getPhoneReports: ${report.actors.extra.methods.getPhoneReports ? '✅' : '❌'}`);
    console.log(`    - getCryptoReports: ${report.actors.extra.methods.getCryptoReports ? '✅' : '❌'}`);
  }
  
  console.log(`  Reports Actor: ${report.actors.reports.available ? '✅' : '❌'}`);
  if (report.actors.reports.available) {
    console.log(`    - lookupEmail: ${report.actors.reports.methods.lookupEmail ? '✅' : '❌'}`);
    console.log(`    - lookupPhone: ${report.actors.reports.methods.lookupPhone ? '✅' : '❌'}`);
    console.log(`    - lookupMessage: ${report.actors.reports.methods.lookupMessage ? '✅' : '❌'}`);
    console.log(`    - lookupCrypto: ${report.actors.reports.methods.lookupCrypto ? '✅' : '❌'}`);
    console.log(`    - submitReport: ${report.actors.reports.methods.submitReport ? '✅' : '❌'}`);
  }
  
  console.groupEnd();
}
