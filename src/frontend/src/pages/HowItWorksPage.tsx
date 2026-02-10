import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';
import { Mail, Phone, MessageSquare, Coins, BarChart3, Shield, AlertTriangle } from 'lucide-react';

export function HowItWorksPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSeoMetadata(
      t.howItWorksPageTitle,
      t.howItWorksPageDescription
    );
  }, [t]);

  // Defensive rendering helper
  const renderParagraphs = (paragraphs: any, fallback: string = 'Conteúdo em carregamento...') => {
    if (!paragraphs || !Array.isArray(paragraphs) || paragraphs.length === 0) {
      return <p className="text-muted-foreground leading-relaxed">{fallback}</p>;
    }
    return paragraphs.map((paragraph: string, index: number) => (
      <p key={index} className="text-muted-foreground leading-relaxed">
        {paragraph || fallback}
      </p>
    ));
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {t.howItWorksPageHeading || 'Como Funciona'}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.howItWorksPageSubheading || 'Entenda como verificamos e protegemos você'}
          </p>
        </div>

        {/* Verification Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.howItWorksVerificationTitle || 'Métodos de Verificação'}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="email">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    {t.howItWorksEmailTitle || 'Verificação de Email'}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  {renderParagraphs(t.howItWorksEmailParagraphs)}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="phone">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    {t.howItWorksPhoneTitle || 'Verificação de Telefone'}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  {renderParagraphs(t.howItWorksPhoneParagraphs)}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="message">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    {t.howItWorksMessageTitle || 'Análise de Mensagens'}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  {renderParagraphs(t.howItWorksMessageParagraphs)}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="crypto">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-primary" />
                    {t.howItWorksCryptoTitle || 'Verificação de Endereços Cripto'}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  {renderParagraphs(t.howItWorksCryptoParagraphs)}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Scoring System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart3 className="h-6 w-6 text-primary" />
              {t.howItWorksScoringTitle || 'Sistema de Pontuação'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.howItWorksScoringParagraphs)}
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-700 dark:text-orange-400">
              <Shield className="h-6 w-6" />
              {t.howItWorksLimitationsTitle || 'Limitações'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.howItWorksLimitationsParagraphs, 'Informações sobre limitações...')}
          </CardContent>
        </Card>

        {/* Responsible Use */}
        <Card className="border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-blue-700 dark:text-blue-400">
              <AlertTriangle className="h-6 w-6" />
              {t.howItWorksResponsibleUseTitle || 'Uso Responsável'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.howItWorksResponsibleUseParagraphs, 'Diretrizes de uso responsável...')}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
