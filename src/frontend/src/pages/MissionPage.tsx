import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';
import { Target, Globe, Heart, Shield, Users, Zap } from 'lucide-react';

export function MissionPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSeoMetadata(
      t.missionPageTitle,
      t.missionPageDescription
    );
  }, [t]);

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{t.missionPageHeading}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.missionPageSubheading}
          </p>
        </div>

        {/* Vision Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Globe className="h-6 w-6 text-primary" />
              {t.missionVisionTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.missionVisionParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Core Mission Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-primary" />
              {t.missionCoreTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.missionCoreParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Social Impact Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="h-6 w-6 text-primary" />
              {t.missionImpactTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.missionImpactParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Values Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-primary" />
              {t.missionValuesTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.missionValuesParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* System Limitations Section */}
        <Card className="border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-700 dark:text-orange-400">
              <Shield className="h-6 w-6" />
              {t.missionLimitationsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.missionLimitationsParagraphs.map((paragraph: string, index: number) => (
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
              <Zap className="h-6 w-6" />
              {t.missionResponsibleUseTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {t.missionResponsibleUseParagraphs.map((paragraph: string, index: number) => (
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
