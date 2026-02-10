import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';

export function PrivacyPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSeoMetadata(
      t.privacyPageTitle,
      t.privacyPageDescription
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
            {t.privacyPageTitle || 'Política de Privacidade'}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.privacyPageDescription || 'Como protegemos seus dados'}
          </p>
          <p className="text-sm text-muted-foreground italic">
            {t.privacyEffectiveDate || 'Data de vigência: 10 de fevereiro de 2026'}
          </p>
        </div>

        {/* Privacy Content */}
        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection1Title || 'Compromisso com a Privacidade'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection1Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection2Title || 'Dados Coletados'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection2Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection3Title || 'Uso dos Dados'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection3Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection4Title || 'Compartilhamento de Dados'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection4Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection5Title || 'Segurança'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection5Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection6Title || 'Seus Direitos'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection6Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection7Title || 'Cookies'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection7Paragraphs)}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection8Title || 'Alterações'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {renderParagraphs(t.privacySection8Paragraphs)}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
