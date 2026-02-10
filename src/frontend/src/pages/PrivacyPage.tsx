import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';
import { InstitutionalPageLayout } from '@/components/InstitutionalPageLayout';

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
      return <p className="text-base leading-relaxed">{fallback}</p>;
    }
    return paragraphs.map((paragraph: string, index: number) => (
      <p key={index} className="text-base leading-relaxed">{paragraph || fallback}</p>
    ));
  };

  return (
    <InstitutionalPageLayout
      title={t.privacyPageTitle || 'Política de Privacidade'}
      subtitle={t.privacyPageDescription || 'Como protegemos seus dados'}
      description={t.privacyPageSubheading || 'Última atualização: 10 de fevereiro de 2026'}
    >
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection1Title || 'Compromisso com a Privacidade'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection1Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection2Title || 'Dados Coletados'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection2Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection3Title || 'Uso dos Dados'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection3Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection4Title || 'Compartilhamento de Dados'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection4Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection5Title || 'Segurança'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection5Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection6Title || 'Seus Direitos'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection6Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection7Title || 'Cookies'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection7Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.privacySection8Title || 'Alterações'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.privacySection8Paragraphs)}
        </CardContent>
      </Card>
    </InstitutionalPageLayout>
  );
}
