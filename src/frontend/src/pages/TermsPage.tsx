import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';

export function TermsPage() {
  const { t } = useI18n();

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{t.termsTitle}</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t.termsSubtitle}
          </p>
        </div>

        {/* Terms Content */}
        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection1Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.termsSection1Content.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection2Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.termsSection2Content.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection3Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.termsSection3Content.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection4Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.termsSection4Content.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection5Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.termsSection5Content.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.termsSection6Title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            {t.termsSection6Content.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
