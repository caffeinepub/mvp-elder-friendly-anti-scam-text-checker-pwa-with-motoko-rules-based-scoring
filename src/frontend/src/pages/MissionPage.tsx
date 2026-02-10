import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';
import { InstitutionalPageLayout } from '@/components/InstitutionalPageLayout';
import { Target, Globe, Heart, Shield, Users, Zap } from 'lucide-react';

export function MissionPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSeoMetadata(
      t.missionPageTitle,
      t.missionPageDescription
    );
  }, [t]);

  // Defensive rendering helpers
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
      title={t.missionPageHeading || 'Nossa Missão'}
      subtitle={t.missionPageSubheading || 'Protegendo pessoas contra fraudes digitais'}
    >
      {/* Vision Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
            <Globe className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span>{t.missionVisionTitle || 'Nossa Visão'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.missionVisionParagraphs)}
        </CardContent>
      </Card>

      {/* Core Mission Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
            <Target className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span>{t.missionCoreTitle || 'Missão Central'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.missionCoreParagraphs)}
        </CardContent>
      </Card>

      {/* Social Impact Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
            <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span>{t.missionImpactTitle || 'Impacto Social'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.missionImpactParagraphs)}
        </CardContent>
      </Card>

      {/* Values Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl">
            <Users className="h-6 w-6 sm:h-7 sm:w-7 text-primary shrink-0" />
            <span>{t.missionValuesTitle || 'Nossos Valores'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.missionValuesParagraphs)}
        </CardContent>
      </Card>

      {/* System Limitations Section */}
      <Card className="border-2 border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-orange-700 dark:text-orange-400">
            <Shield className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
            <span>{t.missionLimitationsTitle || 'Limitações do Sistema'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.missionLimitationsParagraphs, 'Informações sobre limitações...')}
        </CardContent>
      </Card>

      {/* Responsible Use Section */}
      <Card className="border-2 border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-blue-700 dark:text-blue-400">
            <Zap className="h-6 w-6 sm:h-7 sm:w-7 shrink-0" />
            <span>{t.missionResponsibleUseTitle || 'Uso Responsável'}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {renderParagraphs(t.missionResponsibleUseParagraphs, 'Diretrizes de uso responsável...')}
        </CardContent>
      </Card>
    </InstitutionalPageLayout>
  );
}
