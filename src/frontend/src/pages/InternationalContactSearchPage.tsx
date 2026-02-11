import { useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Search, AlertCircle } from 'lucide-react';
import { InternationalContactSearchResult } from '@/components/InternationalContactSearchResult';
import { useInternationalContactLookup } from '@/hooks/useInternationalContactLookup';
import { validateContact, normalizeContactInput } from '@/utils/contactInputHeuristics';
import { setSEO } from '@/utils/seo';
import { useEffect } from 'react';

export function InternationalContactSearchPage() {
  const { t, language } = useI18n();
  const [input, setInput] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const { lookup, data, isLoading, error, reset } = useInternationalContactLookup();

  useEffect(() => {
    setSEO(t.internationalSearchPageTitle, t.internationalSearchPageDescription);
  }, [t.internationalSearchPageTitle, t.internationalSearchPageDescription]);

  const handleSearch = async () => {
    // Reset previous results and errors
    reset();
    setValidationError(null);

    // Validate input
    const validation = validateContact(input, language);
    
    if (!validation.isValid) {
      setValidationError(validation.error || t.internationalSearchInvalidInput);
      return;
    }

    // Normalize input based on detected type
    const normalized = normalizeContactInput(input, validation.type);

    // Call backend lookup
    await lookup(normalized, validation.type);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSearch();
    }
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{t.internationalSearchPageTitle}</h1>
          <p className="text-muted-foreground">{t.internationalSearchPageDescription}</p>
        </div>

        {/* Search Card */}
        <Card>
          <CardHeader>
            <CardTitle>{t.internationalSearchCardTitle}</CardTitle>
            <CardDescription>{t.internationalSearchCardDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-input">{t.internationalSearchInputLabel}</Label>
              <Input
                id="contact-input"
                type="text"
                placeholder={t.internationalSearchInputPlaceholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="text-base"
              />
            </div>

            {validationError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{validationError}</AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleSearch}
              disabled={isLoading || !input.trim()}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.internationalSearchSearching}
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  {t.internationalSearchSearchButton}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{t.internationalSearchError}</AlertDescription>
          </Alert>
        )}

        {/* Results Display */}
        {data && <InternationalContactSearchResult result={data} />}
      </div>
    </main>
  );
}
