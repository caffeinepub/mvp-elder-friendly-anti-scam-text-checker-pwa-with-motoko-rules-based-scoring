import { useEffect } from 'react';
import { setSEO } from '@/utils/seo';
import { useI18n } from '@/i18n/I18nProvider';
import { TermsContent } from '@/components/TermsContent';

export function TermsPage() {
  const { t } = useI18n();

  useEffect(() => {
    setSEO(t.termsPageTitle, t.termsPageDescription);
  }, [t]);

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <TermsContent showSeals={true} />
    </main>
  );
}
