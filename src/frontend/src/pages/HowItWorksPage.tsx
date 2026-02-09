import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';
import { Mail, Phone, MessageSquare, Wallet, BarChart3, AlertTriangle, Shield } from 'lucide-react';

export function HowItWorksPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSeoMetadata(
      t.howItWorksPageTitle,
      t.howItWorksPageDescription
    );
  }, [t]);

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{t.howItWorksPageHeading}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.howItWorksPageSubheading}
          </p>
        </div>

        {/* Overview Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.howItWorksOverviewTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.howItWorksOverviewParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Verification Types Accordion */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.howItWorksVerificationTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="email">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    {t.howItWorksEmailTitle}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {t.howItWorksEmailParagraphs.map((paragraph: string, index: number) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="phone">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    {t.howItWorksPhoneTitle}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {t.howItWorksPhoneParagraphs.map((paragraph: string, index: number) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="message">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    {t.howItWorksMessageTitle}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {t.howItWorksMessageParagraphs.map((paragraph: string, index: number) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="crypto">
                <AccordionTrigger className="text-lg">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-primary" />
                    {t.howItWorksCryptoTitle}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {t.howItWorksCryptoParagraphs.map((paragraph: string, index: number) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Scoring System Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart3 className="h-6 w-6 text-primary" />
              {t.howItWorksScoringTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.howItWorksScoringParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Limitations Section */}
        <Card className="border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-700 dark:text-orange-400">
              <AlertTriangle className="h-6 w-6" />
              {t.howItWorksLimitationsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.howItWorksLimitationsParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-orange-900 dark:text-orange-200 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Responsible Use Section */}
        <Card className="border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-blue-700 dark:text-blue-400">
              <Shield className="h-6 w-6" />
              {t.howItWorksResponsibleUseTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.howItWorksResponsibleUseParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-blue-900 dark:text-blue-200 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
