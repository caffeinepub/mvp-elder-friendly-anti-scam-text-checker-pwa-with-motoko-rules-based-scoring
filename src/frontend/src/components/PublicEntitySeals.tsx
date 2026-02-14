import { useI18n } from '@/i18n/I18nProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export function PublicEntitySeals() {
  const { t } = useI18n();

  const seals = {
    portugal: [
      {
        name: t.sealPortugalCNCS,
        icon: '/assets/generated/seal-cncs.dim_64x64.png',
        url: 'https://www.cncs.gov.pt/',
      },
      {
        name: t.sealPortugalBanco,
        icon: '/assets/generated/seal-banco-portugal.dim_64x64.png',
        url: 'https://www.bportugal.pt/',
      },
      {
        name: t.sealPortugalGov,
        icon: '/assets/generated/seal-pt.dim_64x64.png',
        url: 'https://www.portugal.gov.pt/',
      },
    ],
    usa: [
      {
        name: t.sealUSACISA,
        icon: '/assets/generated/seal-cisa.dim_64x64.png',
        url: 'https://www.cisa.gov/',
      },
      {
        name: t.sealUSAFTC,
        icon: '/assets/generated/seal-ftc.dim_64x64.png',
        url: 'https://www.ftc.gov/',
      },
    ],
    eu: [
      {
        name: t.sealEUENISA,
        icon: '/assets/generated/seal-enisa.dim_64x64.png',
        url: 'https://www.enisa.europa.eu/',
      },
      {
        name: t.sealEUEuropol,
        icon: '/assets/generated/seal-europol.dim_64x64.png',
        url: 'https://www.europol.europa.eu/',
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{t.sealsTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Portugal */}
        <div>
          <h3 className="font-semibold text-sm mb-3 text-foreground">{t.sealPortugalLabel}</h3>
          <div className="flex flex-wrap gap-4">
            {seals.portugal.map((seal, index) => (
              <a
                key={index}
                href={seal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <img src={seal.icon} alt={seal.name} className="w-12 h-12 object-contain" />
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground group-hover:text-foreground">
                    {seal.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* USA */}
        <div>
          <h3 className="font-semibold text-sm mb-3 text-foreground">{t.sealUSALabel}</h3>
          <div className="flex flex-wrap gap-4">
            {seals.usa.map((seal, index) => (
              <a
                key={index}
                href={seal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <img src={seal.icon} alt={seal.name} className="w-12 h-12 object-contain" />
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground group-hover:text-foreground">
                    {seal.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* EU */}
        <div>
          <h3 className="font-semibold text-sm mb-3 text-foreground">{t.sealEULabel}</h3>
          <div className="flex flex-wrap gap-4">
            {seals.eu.map((seal, index) => (
              <a
                key={index}
                href={seal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <img src={seal.icon} alt={seal.name} className="w-12 h-12 object-contain" />
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted-foreground group-hover:text-foreground">
                    {seal.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground italic">
            {t.footerSealsDisclaimer}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
