import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { setSEO } from '@/utils/seo';
import { Shield } from 'lucide-react';

export function PrivacyPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSEO(
      t.privacyPageTitle,
      t.privacyPageDescription
    );
  }, [t]);

  const sections = [
    { title: t.privacySection1Title, paragraphs: t.privacySection1Paragraphs },
    { title: t.privacySection2Title, paragraphs: t.privacySection2Paragraphs },
    { title: t.privacySection3Title, paragraphs: t.privacySection3Paragraphs },
    { title: t.privacySection4Title, paragraphs: t.privacySection4Paragraphs },
    { title: t.privacySection5Title, paragraphs: t.privacySection5Paragraphs },
    { title: t.privacySection6Title, paragraphs: t.privacySection6Paragraphs },
    { title: t.privacySection7Title, paragraphs: t.privacySection7Paragraphs },
    { title: t.privacySection8Title, paragraphs: t.privacySection8Paragraphs },
  ];

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {t.privacyPageHeading || 'Política de Privacidade'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.privacyPageSubheading || 'Vigente desde 1 de Janeiro de 2025'}
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{section.title || `Secção ${index + 1}`}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.paragraphs && Array.isArray(section.paragraphs) ? (
                section.paragraphs.map((paragraph: string, pIndex: number) => (
                  <p key={pIndex} className="text-muted-foreground leading-relaxed">
                    {paragraph || 'Conteúdo em carregamento...'}
                  </p>
                ))
              ) : (
                <p className="text-muted-foreground leading-relaxed">Conteúdo em carregamento...</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
