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

  // Defensive rendering helpers
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
            {t.missionPageHeading || 'Nossa Missão'}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.missionPageSubheading || 'Protegendo pessoas contra fraudes digitais'}
          </p>
        </div>

        {/* Vision Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Globe className="h-6 w-6 text-primary" />
              {t.missionVisionTitle || 'Nossa Visão'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.missionVisionParagraphs)}
          </CardContent>
        </Card>

        {/* Core Mission Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="h-6 w-6 text-primary" />
              {t.missionCoreTitle || 'Missão Central'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.missionCoreParagraphs)}
          </CardContent>
        </Card>

        {/* Social Impact Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="h-6 w-6 text-primary" />
              {t.missionImpactTitle || 'Impacto Social'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.missionImpactParagraphs)}
          </CardContent>
        </Card>

        {/* Values Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6 text-primary" />
              {t.missionValuesTitle || 'Nossos Valores'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.missionValuesParagraphs)}
          </CardContent>
        </Card>

        {/* System Limitations Section */}
        <Card className="border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-700 dark:text-orange-400">
              <Shield className="h-6 w-6" />
              {t.missionLimitationsTitle || 'Limitações do Sistema'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.missionLimitationsParagraphs, 'Informações sobre limitações...')}
          </CardContent>
        </Card>

        {/* Responsible Use Section */}
        <Card className="border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-blue-700 dark:text-blue-400">
              <Zap className="h-6 w-6" />
              {t.missionResponsibleUseTitle || 'Uso Responsável'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderParagraphs(t.missionResponsibleUseParagraphs, 'Diretrizes de uso responsável...')}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
