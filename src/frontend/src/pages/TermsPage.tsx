import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { setSEO } from '@/utils/seo';
import { FileText } from 'lucide-react';

export function TermsPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSEO(
      t.termsPageTitle,
      t.termsPageDescription
    );
  }, [t]);

  const sections = [
    { title: t.termsSection1Title, paragraphs: t.termsSection1Paragraphs },
    { title: t.termsSection2Title, paragraphs: t.termsSection2Paragraphs },
    { title: t.termsSection3Title, paragraphs: t.termsSection3Paragraphs },
    { title: t.termsSection4Title, paragraphs: t.termsSection4Paragraphs },
    { title: t.termsSection5Title, paragraphs: t.termsSection5Paragraphs },
    { title: t.termsSection6Title, paragraphs: t.termsSection6Paragraphs },
    { title: t.termsSection7Title, paragraphs: t.termsSection7Paragraphs },
    { title: t.termsSection8Title, paragraphs: t.termsSection8Paragraphs },
  ];

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {t.termsPageHeading || 'Termos e Condições'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.termsPageSubheading || 'Vigente desde 1 de Janeiro de 2025'}
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
