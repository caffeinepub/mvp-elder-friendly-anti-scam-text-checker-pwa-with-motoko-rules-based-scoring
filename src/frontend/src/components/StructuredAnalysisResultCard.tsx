import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, AlertCircle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import type { StructuredAnalysisResult } from '@/utils/structuredFraudAnalysis';

interface StructuredAnalysisResultCardProps {
  result: StructuredAnalysisResult;
}

export function StructuredAnalysisResultCard({ result }: StructuredAnalysisResultCardProps) {
  const { t } = useI18n();

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
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          {getRiskIcon(result.risk)}
          {t.structuredResultTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Risk Level */}
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">
            {t.structuredRiskLabel}
          </div>
          <Badge variant={getRiskColor(result.risk)} className="text-base px-3 py-1">
            {t[`structuredRisk${result.risk}` as keyof typeof t] || result.risk}
          </Badge>
        </div>

        {/* Explanation */}
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">
            {t.structuredExplanationLabel}
          </div>
          <p className="text-foreground leading-relaxed">
            {result.explanation}
          </p>
        </div>

        {/* Recommendation */}
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">
            {t.structuredRecommendationLabel}
          </div>
          <p className="text-foreground leading-relaxed font-medium">
            {result.recommendation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
