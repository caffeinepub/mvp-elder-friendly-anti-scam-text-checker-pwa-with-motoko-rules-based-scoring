import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';
import { InstitutionalPageLayout } from '@/components/InstitutionalPageLayout';
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
      return <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{fallback}</p>;
    }
    return paragraphs.map((paragraph: string, index: number) => (
      <p key={index} className="text-base sm:text-lg leading-relaxed text-muted-foreground">
        {paragraph || fallback}
      </p>
    ));
  };

  return (
    <InstitutionalPageLayout
      title={t.howItWorksPageHeading || 'Como Funciona'}
      subtitle={t.howItWorksPageSubheading || 'Entenda como verificamos e protegemos você'}
    >
      {/* Verification Methods */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">{t.howItWorksVerificationTitle || 'Métodos de Verificação'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="email">
              <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" />
                  <span>{t.howItWorksEmailTitle || 'Verificação de Email'}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4 text-base sm:text-lg">
                {renderParagraphs(t.howItWorksEmailParagraphs)}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phone">
              <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" />
                  <span>{t.howItWorksPhoneTitle || 'Verificação de Telefone'}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4 text-base sm:text-lg">
                {renderParagraphs(t.howItWorksPhoneParagraphs)}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="message">
              <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" />
                  <span>{t.howItWorksMessageTitle || 'Análise de Mensagens'}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4 text-base sm:text-lg">
                {renderParagraphs(t.howItWorksMessageParagraphs)}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="crypto">
              <AccordionTrigger className="text-base sm:text-lg hover:no-underline">
                <div className="flex items-center gap-3">
                  <Coins className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" />
                  <span>{t.howItWorksCryptoTitle || 'Verificação de Endereços Cripto'}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pt-4 text-base sm:text-lg">
                {renderParagraphs(t.howItWorksCryptoParagraphs)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Scoring System */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
            <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span>{t.howItWorksScoringTitle || 'Sistema de Pontuação'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.howItWorksScoringParagraphs)}
        </CardContent>
      </Card>

      {/* Limitations */}
      <Card className="border-2 border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-orange-700 dark:text-orange-400">
            <Shield className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
            <span>{t.howItWorksLimitationsTitle || 'Limitações'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.howItWorksLimitationsParagraphs, 'Informações sobre limitações...')}
        </CardContent>
      </Card>

      {/* Responsible Use */}
      <Card className="border-2 border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-blue-700 dark:text-blue-400">
            <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
            <span>{t.howItWorksResponsibleUseTitle || 'Uso Responsável'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.howItWorksResponsibleUseParagraphs, 'Diretrizes de uso responsável...')}
        </CardContent>
      </Card>
    </InstitutionalPageLayout>
  );
}
