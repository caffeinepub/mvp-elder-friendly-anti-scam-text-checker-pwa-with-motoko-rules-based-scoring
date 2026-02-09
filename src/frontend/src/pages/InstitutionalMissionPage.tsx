import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Target, Heart, Lock, Globe, Lightbulb, Zap, ShieldCheck } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export function InstitutionalMissionPage() {
  const { t } = useI18n();

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Shield className="h-16 w-16 sm:h-20 sm:w-20 text-primary mx-auto" strokeWidth={2} />
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{t.institutionalTitle}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.institutionalSubtitle}
          </p>
        </div>

        {/* Vision Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Eye className="h-6 w-6 text-primary" />
              {t.visionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground leading-relaxed">{t.visionContent}</p>
          </CardContent>
        </Card>

        {/* Mission Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Target className="h-6 w-6 text-primary" />
              {t.missionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground leading-relaxed mb-4">{t.missionContent}</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3 text-base text-foreground">
                <ShieldCheck className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>{t.missionPoint1}</span>
              </li>
              <li className="flex items-start gap-3 text-base text-foreground">
                <Lightbulb className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>{t.missionPoint2}</span>
              </li>
              <li className="flex items-start gap-3 text-base text-foreground">
                <Zap className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>{t.missionPoint3}</span>
              </li>
              <li className="flex items-start gap-3 text-base text-foreground">
                <Heart className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>{t.missionPoint4}</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Values Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Heart className="h-6 w-6 text-primary" />
              {t.valuesTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Lock className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.valueProtectionTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.valueProtection}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Eye className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.valueTransparencyTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.valueTransparency}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Globe className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.valueAccessibilityTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.valueAccessibility}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Lightbulb className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.valueEducationTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.valueEducation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Zap className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.valueInnovationTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.valueInnovation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <ShieldCheck className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.valueFutureSecureTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.valueFutureSecure}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
