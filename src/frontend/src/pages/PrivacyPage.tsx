import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { setSeoMetadata } from '@/utils/seo';

export function PrivacyPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSeoMetadata(
      t.privacyPageTitle,
      t.privacyPageDescription
    );
  }, [t]);

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{t.privacyTitle}</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.privacySubtitle}
          </p>
          <p className="text-sm text-muted-foreground italic">
            {t.privacyEffectiveDate}
          </p>
        </div>

        {/* Privacy Content */}
        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection1Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection1Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection2Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection2Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection3Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection3Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection4Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection4Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection5Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection5Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection6Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection6Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection7Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection7Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.privacySection8Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.privacySection8Paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
