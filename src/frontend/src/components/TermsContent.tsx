import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { FileText } from 'lucide-react';
import { PublicEntitySeals } from './PublicEntitySeals';

interface TermsContentProps {
  showSeals?: boolean;
}

export function TermsContent({ showSeals = true }: TermsContentProps) {
  const { t } = useI18n();

  const sections = [
    { title: t.termsSection1Title, paragraphs: t.termsSection1Paragraphs },
    { title: t.termsSection2Title, paragraphs: t.termsSection2Paragraphs },
    { title: t.termsSection3Title, paragraphs: t.termsSection3Paragraphs },
    { title: t.termsSection4Title, paragraphs: t.termsSection4Paragraphs },
    { title: t.termsSection5Title, paragraphs: t.termsSection5Paragraphs },
    { title: t.termsSection6Title, paragraphs: t.termsSection6Paragraphs },
    { title: t.termsSection7Title, paragraphs: t.termsSection7Paragraphs },
    { title: t.termsSection8Title, paragraphs: t.termsSection8Paragraphs },
    { title: t.termsSection9Title, paragraphs: t.termsSection9Paragraphs },
    { title: t.termsSection10Title, paragraphs: t.termsSection10Paragraphs },
    { title: t.termsSection11Title, paragraphs: t.termsSection11Paragraphs },
    { title: t.termsSection12Title, paragraphs: t.termsSection12Paragraphs },
    { title: t.termsSection13Title, paragraphs: t.termsSection13Paragraphs },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <div className="p-4 bg-primary/10 rounded-full">
            <FileText className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
          {t.termsPageHeading}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t.termsPageSubheading}
        </p>
        <p className="text-sm text-muted-foreground">
          {t.termsContactEmail}
        </p>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-xl">{section.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {section.paragraphs && Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((paragraph: string, pIndex: number) => (
                <p key={pIndex} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-muted-foreground leading-relaxed">
                {t.termsPageDescription}
              </p>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Public Entity Seals */}
      {showSeals && (
        <div className="mt-8">
          <PublicEntitySeals />
        </div>
      )}
    </div>
  );
}
