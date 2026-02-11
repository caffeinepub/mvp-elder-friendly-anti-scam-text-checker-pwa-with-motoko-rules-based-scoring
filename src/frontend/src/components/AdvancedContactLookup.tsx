// Advanced Contact Lookup module component
// Single input for phone/email with antifraud analysis, public info lookup, and reporting capability

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search, AlertTriangle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { validateContact } from '@/utils/contactInputHeuristics';
import { analyzeEmail, analyzePhone } from '@/utils/structuredFraudAnalysis';
import { lookupPublicContact } from '@/utils/publicContactLookup';
import { AdvancedContactLookupResultCard } from './AdvancedContactLookupResultCard';
import { useOfflineStatus } from '@/hooks/useOfflineStatus';
import { useAdvancedContactLookupCache } from '@/hooks/useAdvancedContactLookupCache';

export function AdvancedContactLookup() {
  const { t, language } = useI18n();
  const { isOffline } = useOfflineStatus();
  const { addToCache, getCached } = useAdvancedContactLookupCache();

  const [input, setInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{
    antifraudResult: any;
    publicInfo?: any;
    fromCache?: boolean;
    searchedContact?: string;
    contactType?: 'phone' | 'email';
  } | null>(null);

  const handleSearch = async () => {
    setError('');
    setResult(null);

    // Validate input
    const validation = validateContact(input, language);
    
    if (!validation.isValid) {
      setError(validation.error || t.advancedLookupInvalidInput);
      return;
    }

    // Check if offline and we have cached result
    if (isOffline) {
      const cached = getCached(validation.normalized, validation.type as 'phone' | 'email');
      if (cached) {
        setResult({
          antifraudResult: cached.antifraudResult,
          publicInfo: cached.publicInfo,
          fromCache: true,
          searchedContact: validation.normalized,
          contactType: validation.type as 'phone' | 'email',
        });
        return;
      } else {
        setError(t.advancedLookupOfflineNoCache);
        return;
      }
    }

    setIsSearching(true);

    try {
      // Run antifraud analysis (frontend-only)
      let antifraudResult;
      if (validation.type === 'email') {
        antifraudResult = analyzeEmail(validation.normalized, language);
      } else if (validation.type === 'phone') {
        antifraudResult = analyzePhone(validation.normalized, language);
      }

      // Lookup public information
      const publicLookup = await lookupPublicContact(
        validation.normalized,
        validation.type as 'phone' | 'email'
      );

      const resultData = {
        antifraudResult,
        publicInfo: publicLookup.found ? publicLookup.info : undefined,
        fromCache: false,
        searchedContact: validation.normalized,
        contactType: validation.type as 'phone' | 'email',
      };

      setResult(resultData);

      // Cache the result
      addToCache({
        query: validation.normalized,
        type: validation.type as 'phone' | 'email',
        timestamp: Date.now(),
        antifraudResult,
        publicInfo: publicLookup.found ? publicLookup.info : undefined
      });
    } catch (err) {
      console.error('Search error:', err);
      setError(t.advancedLookupSearchError);
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
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{t.advancedLookupTitle}</CardTitle>
          <CardDescription>{t.advancedLookupDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-input">{t.advancedLookupInputLabel}</Label>
            <Input
              id="contact-input"
              placeholder={t.advancedLookupInputPlaceholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isSearching}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button 
            onClick={handleSearch} 
            className="w-full"
            disabled={isSearching || !input.trim()}
          >
            <Search className="h-4 w-4 mr-2" />
            {isSearching ? t.advancedLookupSearching : t.advancedLookupSearchButton}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <AdvancedContactLookupResultCard
          antifraudResult={result.antifraudResult}
          publicInfo={result.publicInfo}
          isOffline={isOffline}
          fromCache={result.fromCache}
          searchedContact={result.searchedContact}
          contactType={result.contactType}
        />
      )}
    </div>
  );
}
