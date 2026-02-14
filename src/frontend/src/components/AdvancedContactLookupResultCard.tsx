import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, Info, ExternalLink, Flag, Globe } from 'lucide-react';
import { ReportSubmissionDialog } from './ReportSubmissionDialog';
import type { StructuredAnalysisResult } from '@/utils/structuredFraudAnalysis';
import type { ContactType } from '@/utils/contactInputHeuristics';
import { deriveCountryFromPhone } from '@/utils/phoneCountry';

interface AdvancedContactLookupResultCardProps {
  result: StructuredAnalysisResult;
  detectedType: ContactType;
  publicInfo: any;
  input: string;
}

export function AdvancedContactLookupResultCard({
  result,
  detectedType,
  publicInfo,
  input
}: AdvancedContactLookupResultCardProps) {
  const [showReportDialog, setShowReportDialog] = useState(false);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'destructive';
      case 'Medium': return 'default';
      case 'Low': return 'outline';
      default: return 'outline';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'High': return <AlertTriangle className="h-4 w-4" />;
      case 'Medium': return <Info className="h-4 w-4" />;
      case 'Low': return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  // Derive country for phone numbers
  const derivedCountry = detectedType === 'phone' ? deriveCountryFromPhone(input) : null;

  // Map detectedType to contactType for ReportSubmissionDialog
  const reportContactType: 'phone' | 'email' | undefined = 
    detectedType === 'phone' ? 'phone' : 
    detectedType === 'email' ? 'email' : 
    undefined;

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                {getRiskIcon(result.risk)}
                Analysis Result
              </CardTitle>
              <CardDescription>
                Detected type: {detectedType}
              </CardDescription>
            </div>
            <Badge variant={getRiskColor(result.risk)} className="text-sm">
              {result.risk} ({result.riskScore}/100)
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Risk Score Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Risk Score</span>
              <span className="text-muted-foreground">{result.riskScore}/100</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full transition-all ${
                  result.risk === 'High' ? 'bg-destructive' :
                  result.risk === 'Medium' ? 'bg-warning' :
                  'bg-success'
                }`}
                style={{ width: `${result.riskScore}%` }}
              />
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Explanation</h4>
            <p className="text-sm text-muted-foreground">{result.explanation}</p>
          </div>

          {/* Recommendation */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Recommendation</h4>
            <Alert variant={result.risk === 'High' ? 'destructive' : 'default'}>
              <AlertDescription>{result.recommendation}</AlertDescription>
            </Alert>
          </div>

          {/* Public Information Section */}
          {publicInfo && (
            <div className="space-y-2 pt-4 border-t">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Public Information
              </h4>
              <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                {publicInfo.displayName && (
                  <div>
                    <span className="text-sm font-medium">Entity: </span>
                    <span className="text-sm text-muted-foreground">{publicInfo.displayName}</span>
                  </div>
                )}
                {publicInfo.summary && (
                  <div>
                    <span className="text-sm font-medium">Summary: </span>
                    <span className="text-sm text-muted-foreground">{publicInfo.summary}</span>
                  </div>
                )}
                {derivedCountry && (
                  <div>
                    <span className="text-sm font-medium">Country: </span>
                    <span className="text-sm text-muted-foreground">{derivedCountry}</span>
                  </div>
                )}
                {publicInfo.source && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Source:</span>
                    <a
                      href={publicInfo.sourceUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      {publicInfo.source}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                {publicInfo.asOf && (
                  <div className="text-xs text-muted-foreground">
                    As of: {publicInfo.asOf}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Public Sources */}
          {result.sources && result.sources.length > 0 && (
            <div className="space-y-2 pt-4 border-t">
              <h4 className="font-medium text-sm">Public Sources</h4>
              <div className="space-y-1">
                {result.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {source.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Collaborative Basis */}
          <div className="pt-4 border-t">
            <p className="text-xs text-muted-foreground italic">
              {result.collaborativeBasis.statement}
            </p>
          </div>

          {/* Report Action - only show for phone/email */}
          {reportContactType && (
            <div className="pt-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowReportDialog(true)}
                className="w-full"
              >
                <Flag className="mr-2 h-4 w-4" />
                Report this contact
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {reportContactType && (
        <ReportSubmissionDialog
          open={showReportDialog}
          onOpenChange={setShowReportDialog}
          prefilledContact={input}
          contactType={reportContactType}
        />
      )}
    </>
  );
}
