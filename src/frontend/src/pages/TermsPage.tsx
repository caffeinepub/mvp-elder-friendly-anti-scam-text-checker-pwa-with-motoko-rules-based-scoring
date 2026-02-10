import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';

export function TermsPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSeoMetadata(
      t.termsPageTitle,
      t.termsPageDescription
    );
  }, [t]);

  // Defensive rendering helper
  const renderParagraphs = (paragraphs: any, fallback: string = 'Conteúdo em carregamento...') => {
    if (!paragraphs || !Array.isArray(paragraphs) || paragraphs.length === 0) {
      return <p className="leading-relaxed">{fallback}</p>;
    }
    return paragraphs.map((paragraph: string, index: number) => (
      <p key={index} className="leading-relaxed">{paragraph || fallback}</p>
    ));
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t.termsPageTitle || 'Termos e Condições'}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.termsPageDescription || 'Leia atentamente antes de usar'}
          </p>
          <p className="text-sm text-muted-foreground italic">
            {t.termsEffectiveDate || 'Data de vigência: 10 de fevereiro de 2026'}
          </p>
        </div>

        {/* Terms Content */}
        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection1Title || 'Aceitação dos Termos'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection1Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection2Title || 'Uso do Serviço'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection2Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection3Title || 'Limitações de Responsabilidade'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection3Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection4Title || 'Propriedade Intelectual'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection4Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection5Title || 'Modificações'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection5Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection6Title || 'Lei Aplicável'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection6Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection7Title || 'Contato'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection7Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection8Title || 'Disposições Gerais'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.termsSection8Paragraphs)}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
