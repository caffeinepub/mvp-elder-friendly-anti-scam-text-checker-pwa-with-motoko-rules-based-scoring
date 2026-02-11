import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExternalLink, AlertTriangle, CheckCircle, Info, Globe, Shield } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import type { ExtendedContactDetails } from '@/backend';

interface InternationalContactSearchResultProps {
  result: ExtendedContactDetails;
}

export function InternationalContactSearchResult({ result }: InternationalContactSearchResultProps) {
  const { t } = useI18n();
  const { details } = result;

  // Map risk level to color and icon
  const getRiskVariant = (level: string): 'default' | 'secondary' | 'destructive' => {
    const normalized = level.toLowerCase();
    if (normalized.includes('high') || normalized.includes('alto') || normalized.includes('elevado')) {
      return 'destructive';
    }
    if (normalized.includes('medium') || normalized.includes('médio') || normalized.includes('medio')) {
      return 'secondary';
    }
    return 'default';
  };

  const getRiskIcon = (level: string) => {
    const normalized = level.toLowerCase();
    if (normalized.includes('high') || normalized.includes('alto') || normalized.includes('elevado')) {
      return <AlertTriangle className="h-4 w-4" />;
    }
    if (normalized.includes('medium') || normalized.includes('médio') || normalized.includes('medio')) {
      return <Info className="h-4 w-4" />;
    }
    return <CheckCircle className="h-4 w-4" />;
  };

  return (
    <div className="space-y-4">
      {/* Risk Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              {t.internationalSearchResultTitle}
            </CardTitle>
            <Badge variant={getRiskVariant(details.riskLevel)} className="flex items-center gap-1">
              {getRiskIcon(details.riskLevel)}
              {details.riskLevel}
            </Badge>
          </div>
          <CardDescription>{result.content}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Risk Score */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.internationalSearchRiskScore}</span>
              <span className="text-2xl font-bold">{details.riskScore}</span>
            </div>
            {details.riskScoreDescription && (
              <p className="text-sm text-muted-foreground">{details.riskScoreDescription}</p>
            )}
          </div>

          <Separator />

          {/* Origin Country */}
          {details.country && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{t.internationalSearchOriginCountry}:</span>
              <span className="text-sm">{details.country}</span>
              {details.countryValidationSource && (
                <a
                  href={details.countryValidationSource.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  {t.internationalSearchSource}
                </a>
              )}
            </div>
          )}

          {/* Trust Score */}
          {details.trustScore && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{t.internationalSearchTrustScore}:</span>
              <span className="text-sm">{details.trustScore}</span>
              {details.trustScoreSource && (
                <a
                  href={details.trustScoreSource.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  {t.internationalSearchSource}
                </a>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Findings Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t.internationalSearchFindingsTitle}</CardTitle>
          <CardDescription>{t.internationalSearchFindingsDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Verification Status */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.internationalSearchVerified}</span>
              <Badge variant={details.verified === 'true' ? 'default' : 'secondary'}>
                {details.verified === 'true' ? t.internationalSearchVerifiedYes : t.internationalSearchVerifiedNo}
              </Badge>
            </div>
            {details.validationSource && (
              <a
                href={details.validationSource.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline inline-flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                {details.validationSource.value}
              </a>
            )}
          </div>

          <Separator />

          {/* Reports Count */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.internationalSearchReports}</span>
              <span className="text-sm font-semibold">{details.reports}</span>
            </div>
            {details.reportsSource && (
              <a
                href={details.reportsSource.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline inline-flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                {details.reportsSource.value}
              </a>
            )}
          </div>

          {/* Adjusted Risk Score (if available) */}
          {details.adjustedRiskScore && (
            <>
              <Separator />
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t.internationalSearchAdjustedRiskScore}</span>
                  <span className="text-sm font-semibold">{details.adjustedRiskScore}</span>
                </div>
                {details.adjustedRiskScoreSource && (
                  <a
                    href={details.adjustedRiskScoreSource.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {details.adjustedRiskScoreSource.value}
                  </a>
                )}
              </div>
            </>
          )}

          {/* Address (if available) */}
          {details.address && (
            <>
              <Separator />
              <div className="space-y-1">
                <span className="text-sm font-medium">{t.internationalSearchAddress}</span>
                <p className="text-sm text-muted-foreground">{details.address}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Limitations Notice */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          {t.internationalSearchLimitations}
        </AlertDescription>
      </Alert>
    </div>
  );
}
