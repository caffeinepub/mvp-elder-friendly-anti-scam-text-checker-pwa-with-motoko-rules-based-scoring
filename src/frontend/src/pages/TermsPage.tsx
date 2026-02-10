import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';
import { InstitutionalPageLayout } from '@/components/InstitutionalPageLayout';

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
      return <p className="text-base leading-relaxed">{fallback}</p>;
    }
    return paragraphs.map((paragraph: string, index: number) => (
      <p key={index} className="text-base leading-relaxed">{paragraph || fallback}</p>
    ));
  };

  return (
    <InstitutionalPageLayout
      title={t.termsPageTitle || 'Termos e Condições'}
      subtitle={t.termsPageDescription || 'Leia atentamente antes de usar'}
      description={t.termsPageSubheading || 'Última atualização: 10 de fevereiro de 2026'}
    >
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection1Title || 'Aceitação dos Termos'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection1Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection2Title || 'Uso do Serviço'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection2Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection3Title || 'Limitações de Responsabilidade'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection3Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection4Title || 'Propriedade Intelectual'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection4Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection5Title || 'Modificações'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection5Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection6Title || 'Lei Aplicável'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection6Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection7Title || 'Contato'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection7Paragraphs)}
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{t.termsSection8Title || 'Disposições Gerais'}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {renderParagraphs(t.termsSection8Paragraphs)}
        </CardContent>
      </Card>
    </InstitutionalPageLayout>
  );
}
