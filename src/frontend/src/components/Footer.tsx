import { useI18n } from '@/i18n/I18nProvider';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          {/* Branding */}
          <div className="flex items-center gap-2">
            <span>{t.appSubtitle}</span>
          </div>

          {/* ICP Blockchain Security */}
          <div className="flex items-center gap-2">
            <a
              href="https://internetcomputer.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              <img
                src="/assets/generated/icp-logo-icon.dim_16x16.png"
                alt="ICP"
                className="h-4 w-4"
                style={{ width: '16px', height: '16px' }}
              />
              <span>{t.footerIcpSecurity}</span>
            </a>
          </div>

          {/* Public Data Sources */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">{t.footerPublicSources}:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://haveibeenpwned.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="HaveIBeenPwned"
              >
                <img
                  src="/assets/generated/haveibeenpwned-icon.dim_16x16.png"
                  alt="HaveIBeenPwned"
                  className="h-4 w-4"
                  style={{ width: '16px', height: '16px' }}
                />
              </a>
              <a
                href="https://phishtank.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="PhishTank"
              >
                <img
                  src="/assets/generated/phishtank-icon.dim_16x16.png"
                  alt="PhishTank"
                  className="h-4 w-4"
                  style={{ width: '16px', height: '16px' }}
                />
              </a>
            </div>
          </div>

          {/* Portuguese Public Entities */}
          <div className="flex items-center gap-2 text-xs">
            <span>{t.footerPortugueseEntities}:</span>
            <a
              href="https://www.bportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t.footerBancoPortugal}
            </a>
            <span>·</span>
            <a
              href="https://www.cncs.gov.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {t.footerCNCS}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
