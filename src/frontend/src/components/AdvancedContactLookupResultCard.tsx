// Result card component for Advanced Contact Lookup
// Combines antifraud analysis with public information section and report action

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  AlertTriangle, 
  Shield, 
  AlertCircle, 
  ExternalLink, 
  Info,
  Calendar,
  FileText,
  WifiOff,
  Flag
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import type { StructuredAnalysisResult } from '@/utils/structuredFraudAnalysis';
import type { PublicContactInfo } from '@/utils/publicContactLookup';
import { ReportSubmissionDialog } from './ReportSubmissionDialog';

interface AdvancedContactLookupResultCardProps {
  antifraudResult: StructuredAnalysisResult;
  publicInfo?: PublicContactInfo;
  isOffline?: boolean;
  fromCache?: boolean;
  searchedContact?: string;
  contactType?: 'phone' | 'email';
}

export function AdvancedContactLookupResultCard({ 
  antifraudResult, 
  publicInfo,
  isOffline = false,
  fromCache = false,
  searchedContact,
  contactType
}: AdvancedContactLookupResultCardProps) {
  const { t } = useI18n();
  const [reportDialogOpen, setReportDialogOpen] = useState(false);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'High':
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case 'Medium':
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case 'Low':
        return <Shield className="h-5 w-5 text-success" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Offline/Cache indicator */}
      {(isOffline || fromCache) && (
        <Alert>
          <WifiOff className="h-4 w-4" />
          <AlertDescription>
            {t.advancedLookupOfflineIndicator}
          </AlertDescription>
        </Alert>
      )}

      {/* Antifraud Analysis Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            {getRiskIcon(antifraudResult.risk)}
            {t.structuredResultTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Risk Level */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">
              {t.structuredRiskLabel}
            </div>
            <Badge variant={getRiskColor(antifraudResult.risk)} className="text-base px-3 py-1">
              {t[`structuredRisk${antifraudResult.risk}` as keyof typeof t] || antifraudResult.risk}
            </Badge>
          </div>

          {/* Explanation */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">
              {t.structuredExplanationLabel}
            </div>
            <p className="text-foreground leading-relaxed">
              {antifraudResult.explanation}
            </p>
          </div>

          {/* Recommendation */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">
              {t.structuredRecommendationLabel}
            </div>
            <p className="text-foreground leading-relaxed font-medium">
              {antifraudResult.recommendation}
            </p>
          </div>

          <Separator className="my-4" />

          {/* Public Sources */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              {t.transparencySourcesLabel}
            </div>
            <ul className="space-y-1.5 text-sm">
              {antifraudResult.sources.map((source, index) => (
                <li key={index}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {source.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborative Basis */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Info className="h-4 w-4" />
              {t.transparencyCollaborativeBasisLabel}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {antifraudResult.collaborativeBasis.statement}
            </p>
          </div>

          <Separator className="my-4" />

          {/* Report Action */}
          <div className="pt-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setReportDialogOpen(true)}
              disabled={!searchedContact || !contactType}
            >
              <Flag className="h-4 w-4 mr-2" />
              {t.reportSuspiciousContactButton}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Public Information Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {t.advancedLookupPublicInfoTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {publicInfo ? (
            <>
              {/* Display Name */}
              {publicInfo.displayName && (
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    {t.advancedLookupDisplayName}
                  </div>
                  <p className="text-foreground font-medium">
                    {publicInfo.displayName}
                  </p>
                </div>
              )}

              {/* Summary */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">
                  {t.advancedLookupSummary}
                </div>
                <p className="text-foreground leading-relaxed">
                  {publicInfo.summary}
                </p>
              </div>

              {/* Details */}
              {publicInfo.details && (
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    {t.advancedLookupDetails}
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {publicInfo.details}
                  </p>
                </div>
              )}

              <Separator className="my-4" />

              {/* Attribution */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  {t.advancedLookupAttribution}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground min-w-[80px]">
                      {t.advancedLookupSource}:
                    </span>
                    {publicInfo.sourceUrl ? (
                      <a
                        href={publicInfo.sourceUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {publicInfo.source}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-foreground">{publicInfo.source}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t.advancedLookupAsOf}:
                    </span>
                    <span className="text-foreground">{publicInfo.asOfDate}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                {t.advancedLookupNoPublicInfo}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Report Dialog */}
      <ReportSubmissionDialog
        open={reportDialogOpen}
        onOpenChange={setReportDialogOpen}
        prefilledContact={searchedContact}
        contactType={contactType}
      />
    </div>
  );
}
