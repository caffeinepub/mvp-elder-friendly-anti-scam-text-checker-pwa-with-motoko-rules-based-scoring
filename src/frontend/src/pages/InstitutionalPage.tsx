import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Database, Users, TrendingUp, Zap, Lock } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export function InstitutionalPage() {
  const { t } = useI18n();

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{t.howItWorksTitle}</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* Core Features */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                {t.featureVerificationTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.featureVerificationDesc}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                {t.featureDatabaseTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.featureDatabaseDesc}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                {t.featureReportsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.featureReportsDesc}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                {t.featureScoringTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{t.featureScoringDesc}</p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works - Detailed */}
        <Card>
          <CardHeader>
            <CardTitle>{t.howItWorksDetailTitle}</CardTitle>
            <CardDescription>{t.howItWorksDetailSubtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="check">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    {t.howCheckTitle}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>{t.howCheckDesc}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="database">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    {t.howDatabaseTitle}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>{t.howDatabaseDesc}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="report">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {t.howReportTitle}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>{t.howReportDesc}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="scoring">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    {t.howScoringTitle}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>{t.howScoringDesc}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ai">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    {t.howAiTitle}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>{t.howAiDesc}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="future">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    {t.howFutureTitle}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground space-y-2">
                  <p>{t.howFutureDesc}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
