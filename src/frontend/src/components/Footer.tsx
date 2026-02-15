import { useI18n } from '@/i18n/I18nProvider';

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        {/* Branding Row */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>© {currentYear} {t.appSubtitle}</span>
          </div>
        </div>

        {/* Official Seals - Centered */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://www.cncs.gov.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            title="CNCS"
          >
            <img
              src="/assets/generated/cncs-seal-icon.dim_64x64.png"
              alt="CNCS"
              className="w-12 h-12"
            />
            <span className="text-xs">CNCS</span>
          </a>

          <a
            href="https://www.bportugal.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Banco de Portugal"
          >
            <img
              src="/assets/generated/banco-portugal-seal-icon.dim_64x64.png"
              alt="Banco de Portugal"
              className="w-12 h-12"
            />
            <span className="text-xs">Banco de Portugal</span>
          </a>

          <a
            href="https://www.enisa.europa.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            title="ENISA"
          >
            <img
              src="/assets/generated/enisa-seal-icon.dim_64x64.png"
              alt="ENISA"
              className="w-12 h-12"
            />
            <span className="text-xs">ENISA</span>
          </a>

          <a
            href="https://www.europol.europa.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Europol"
          >
            <img
              src="/assets/generated/europol-seal-icon.dim_64x64.png"
              alt="Europol"
              className="w-12 h-12"
            />
            <span className="text-xs">Europol</span>
          </a>

          <a
            href="https://www.cisa.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            title="CISA/US-CERT"
          >
            <img
              src="/assets/generated/cisa-uscert-seal-icon.dim_64x64.png"
              alt="CISA/US-CERT"
              className="w-12 h-12"
            />
            <span className="text-xs">CISA/US-CERT</span>
          </a>

          <a
            href="https://www.ftc.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            title="FTC"
          >
            <img
              src="/assets/generated/ftc-seal-icon.dim_64x64.png"
              alt="FTC"
              className="w-12 h-12"
            />
            <span className="text-xs">FTC</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
