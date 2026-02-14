import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useI18n } from '@/i18n/I18nProvider';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { useTermsDocument } from '@/hooks/useTermsDocument';
import { useActor } from '@/hooks/useActor';
import { setSEO } from '@/utils/seo';
import { toast } from 'sonner';
import { Shield, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function AdminTermsPage() {
  const { t } = useI18n();
  const { isAdmin, isLoading: adminLoading } = useIsAdmin();
  const { termsDocument, isLoading: termsLoading } = useTermsDocument();
  const { actor } = useActor();

  const [version, setVersion] = useState('1');
  const [effectiveDate, setEffectiveDate] = useState('2025-01-01');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setSEO(t.adminTermsPageTitle, t.adminTermsPageDescription);
  }, [t]);

  useEffect(() => {
    if (termsDocument) {
      setVersion(termsDocument.version.toString());
      setEffectiveDate(termsDocument.effectiveDate);
      setContent(termsDocument.content);
    }
  }, [termsDocument]);

  const handleSave = async () => {
    if (!actor) {
      toast.error(t.adminTermsError);
      return;
    }

    setIsSaving(true);
    try {
      await actor.updateTerms({
        version: BigInt(version),
        effectiveDate,
        content,
      });
      toast.success(t.adminTermsSuccess);
    } catch (error) {
      console.error('Error updating terms:', error);
      toast.error(t.adminTermsError);
    } finally {
      setIsSaving(false);
    }
  };

  if (adminLoading || termsLoading) {
    return (
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{t.adminTermsUnauthorized}</AlertDescription>
        </Alert>
      </main>
    );
  }

  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            {t.adminTermsPageHeading}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.adminTermsPageDescription}
          </p>
        </div>

        {/* Current Version Info */}
        {termsDocument && (
          <Card>
            <CardHeader>
              <CardTitle>{t.adminTermsCurrentVersion}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{t.adminTermsVersionLabel}:</span>
                <span className="font-mono font-semibold">{termsDocument.version.toString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{t.adminTermsEffectiveDateLabel}:</span>
                <span className="font-semibold">{termsDocument.effectiveDate}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Editor Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t.adminTermsPageHeading}</CardTitle>
            <CardDescription>{t.adminTermsPageDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="version">{t.adminTermsVersionLabel}</Label>
                <Input
                  id="version"
                  type="number"
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  min="1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="effectiveDate">{t.adminTermsEffectiveDateLabel}</Label>
                <Input
                  id="effectiveDate"
                  type="date"
                  value={effectiveDate}
                  onChange={(e) => setEffectiveDate(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">{t.adminTermsContentLabel}</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={t.adminTermsContentPlaceholder}
                rows={20}
                className="font-mono text-sm"
              />
            </div>

            <Button
              onClick={handleSave}
              disabled={isSaving}
              size="lg"
              className="w-full"
            >
              {isSaving ? t.adminTermsSaving : t.adminTermsSaveButton}
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
