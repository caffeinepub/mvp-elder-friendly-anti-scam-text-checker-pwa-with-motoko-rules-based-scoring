import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Search, AlertCircle, WifiOff } from 'lucide-react';
import { analyzeMessage, analyzeEmail, analyzePhone, analyzeCrypto } from '@/utils/structuredFraudAnalysis';
import { detectContactType, normalizeContactInput } from '@/utils/contactInputHeuristics';
import { lookupPublicContact } from '@/utils/publicContactLookup';
import { useAntiFraudActors } from '@/hooks/useAntiFraudActors';
import { useOfflineStatus } from '@/hooks/useOfflineStatus';
import { useAdvancedContactLookupCache } from '@/hooks/useAdvancedContactLookupCache';
import { AdvancedContactLookupResultCard } from './AdvancedContactLookupResultCard';
import type { StructuredAnalysisResult } from '@/utils/structuredFraudAnalysis';
import type { ContactType } from '@/utils/contactInputHeuristics';

export function AdvancedContactLookup() {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<StructuredAnalysisResult | null>(null);
  const [detectedType, setDetectedType] = useState<ContactType>('unknown');
  const [publicInfo, setPublicInfo] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const { extraActor } = useAntiFraudActors();
  const isOffline = useOfflineStatus();
  const { getCached, addToCache } = useAdvancedContactLookupCache();

  const handleAnalyze = async () => {
    if (!input.trim()) {
      setError('Please enter content to analyze');
      return;
    }

    setIsAnalyzing(true);
    setError('');
    setResult(null);
    setPublicInfo(null);

    try {
      // Detect input type
      const type = detectContactType(input);
      setDetectedType(type);

      // Normalize input
      const normalized = normalizeContactInput(input, type);

      // Check cache first if offline (only for phone/email)
      if (isOffline && (type === 'phone' || type === 'email')) {
        const cached = getCached(normalized, type);
        if (cached) {
          setResult(cached.antifraudResult);
          setPublicInfo(cached.publicInfo);
          setIsAnalyzing(false);
          return;
        }
      }

      // Lookup public information (only for phone/email)
      let publicData: any = null;
      if (type === 'phone' || type === 'email') {
        const lookupResult = await lookupPublicContact(normalized, type);
        if (lookupResult.found && lookupResult.info) {
          publicData = {
            displayName: lookupResult.info.displayName,
            summary: lookupResult.info.summary,
            source: lookupResult.info.source,
            sourceUrl: lookupResult.info.sourceUrl,
            asOf: lookupResult.info.asOfDate,
            isPublicEntity: lookupResult.info.displayName?.toLowerCase().includes('government') ||
                           lookupResult.info.displayName?.toLowerCase().includes('official') ||
                           lookupResult.info.displayName?.toLowerCase().includes('ministry') ||
                           lookupResult.info.displayName?.toLowerCase().includes('department')
          };
        }
      }
      setPublicInfo(publicData);

      // Get internal report counts from backend
      let internalReportCount = 0;
      let publicSourcePresent = !!publicData;

      if (extraActor && !isOffline) {
        try {
          if (type === 'phone') {
            const reports = await extraActor.getPhoneReports(normalized);
            internalReportCount = reports ? Number(reports) : 0;
          } else if (type === 'email') {
            // Email reports are tracked in authenticated reports only
            internalReportCount = 0;
          }
        } catch (err) {
          console.warn('Failed to fetch backend reports:', err);
        }
      }

      // Perform structured analysis based on type
      let analysisResult: StructuredAnalysisResult;
      
      // PUBLIC PHONE RULE: Override risk for public/official entities
      if (type === 'phone' && publicData && publicData.isPublicEntity) {
        // Force LOW risk (0%) for public/official phone numbers
        analysisResult = analyzePhone(normalized, 'pt', 0, false);
        analysisResult = {
          ...analysisResult,
          risk: 'Low',
          riskScore: 0,
          explanation: `Public/official entity: ${publicData.displayName}. Risk level: 0% (LOW).`,
          recommendation: 'This is a verified public or official contact number.'
        };
      } else {
        // Normal analysis for non-public entities
        switch (type) {
          case 'phone':
            analysisResult = analyzePhone(normalized, 'pt', internalReportCount, publicSourcePresent);
            break;
          case 'email':
            analysisResult = analyzeEmail(normalized, 'pt', internalReportCount, publicSourcePresent);
            break;
          case 'unknown':
          default:
            // Treat unknown as message text analysis (applies risk_dictionary)
            analysisResult = analyzeMessage(normalized, 'pt', internalReportCount, publicSourcePresent);
        }
      }

      setResult(analysisResult);

      // Cache result for offline use (only for phone/email)
      if (type === 'phone' || type === 'email') {
        addToCache({
          query: normalized,
          type,
          timestamp: Date.now(),
          antifraudResult: analysisResult,
          publicInfo: publicData
        });
      }

    } catch (err: any) {
      console.error('Analysis error:', err);
      setError(err.message || 'Analysis failed');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Advanced Contact Lookup
          </CardTitle>
          <CardDescription>
            Analyze messages, emails, phone numbers, or crypto addresses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isOffline && (
            <Alert>
              <WifiOff className="h-4 w-4" />
              <AlertDescription>
                Offline mode: Using cached data when available
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="contact-input">
              Enter content to analyze
            </Label>
            <Input
              id="contact-input"
              placeholder="Message, email, phone, or crypto address..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              disabled={isAnalyzing}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !input.trim()}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Analyze
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <AdvancedContactLookupResultCard
          result={result}
          detectedType={detectedType}
          publicInfo={publicInfo}
          input={input}
        />
      )}
    </div>
  );
}
