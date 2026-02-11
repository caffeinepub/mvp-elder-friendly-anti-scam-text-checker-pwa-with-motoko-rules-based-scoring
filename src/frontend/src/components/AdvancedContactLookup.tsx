// Advanced Contact Lookup module component
// Single input for phone/email with automatic type detection
// Integrates professional scoring, public info lookup, and backend report aggregates
// Supports offline mode with cached results

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search, Loader2, AlertCircle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { detectContactType, normalizeContactInput } from '@/utils/contactInputHeuristics';
import { analyzeEmail, analyzePhone } from '@/utils/structuredFraudAnalysis';
import { checkPublicSourcePresence } from '@/utils/publicSourceProviders';
import { useOfflineStatus } from '@/hooks/useOfflineStatus';
import { useAdvancedContactLookupCache } from '@/hooks/useAdvancedContactLookupCache';
import { AdvancedContactLookupResultCard } from './AdvancedContactLookupResultCard';
import { useActor } from '@/hooks/useActor';

export function AdvancedContactLookup() {
  const { t, language } = useI18n();
  const { actor } = useActor();
  const { isOffline } = useOfflineStatus();
  const { getCachedResult, cacheResult } = useAdvancedContactLookupCache();

  const [input, setInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [searchedContact, setSearchedContact] = useState<string | undefined>();
  const [contactType, setContactType] = useState<'phone' | 'email' | undefined>();

  const handleSearch = async () => {
    setError(null);
    setResult(null);
    setSearchedContact(undefined);
    setContactType(undefined);

    if (!input.trim()) {
      setError(t.advancedLookupInvalidInput || 'Please enter a phone number or email');
      return;
    }

    setIsSearching(true);

    try {
      // Detect contact type
      const detectedType = detectContactType(input);
      if (detectedType === 'unknown') {
        setError(t.advancedLookupInvalidInput || 'Invalid format. Please enter a valid phone number or email.');
        setIsSearching(false);
        return;
      }

      // Normalize input
      const normalized = normalizeContactInput(input, detectedType);
      setSearchedContact(normalized);
      setContactType(detectedType);

      // Check cache first if offline
      if (isOffline) {
        const cached = getCachedResult(normalized, detectedType);
        if (cached) {
          setResult({ ...cached, fromCache: true });
          setIsSearching(false);
          return;
        }
      }

      // Fetch internal report count from backend
      let internalReportCount = 0;
      if (actor) {
        try {
          if (detectedType === 'phone') {
            const count = await actor.getPhoneReports(normalized);
            internalReportCount = count ? Number(count) : 0;
          }
          // Email reports are tracked in authenticatedReports only
          // Future: add getEmailReports query method
        } catch (err) {
          console.warn('Failed to fetch internal reports:', err);
        }
      }

      // Check public source presence
      const publicSourceResult = await checkPublicSourcePresence(normalized, detectedType);

      // Run antifraud analysis with report aggregates
      const antifraudResult = detectedType === 'phone'
        ? analyzePhone(normalized, language, internalReportCount, publicSourceResult.found)
        : analyzeEmail(normalized, language, internalReportCount, publicSourceResult.found);

      const lookupResult = {
        antifraudResult,
        publicInfo: publicSourceResult.info,
        fromCache: false,
      };

      setResult(lookupResult);

      // Cache result for offline use
      cacheResult(normalized, detectedType, lookupResult);
    } catch (err) {
      console.error('Lookup error:', err);
      setError(t.advancedLookupSearchError || 'An error occurred during lookup');
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSearching) {
      handleSearch();
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{t.advancedLookupTitle}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder={t.advancedLookupInputPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isSearching}
              className="flex-1"
            />
            <Button
              onClick={handleSearch}
              disabled={isSearching || !input.trim()}
              className="min-w-[100px]"
            >
              {isSearching ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {t.advancedLookupSearching}
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  {t.advancedLookupSearchButton}
                </>
              )}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {result && (
        <AdvancedContactLookupResultCard
          antifraudResult={result.antifraudResult}
          publicInfo={result.publicInfo}
          isOffline={isOffline}
          fromCache={result.fromCache}
          searchedContact={searchedContact}
          contactType={contactType}
        />
      )}
    </div>
  );
}
