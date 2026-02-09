import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Flag, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { checkRateLimit, recordSubmission } from '@/utils/localRateLimit';
import type { ReportType, ReportCategory } from '@/ic/idl/reports.idl';

interface ReportSubmissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: ReportFormData) => Promise<void>;
}

export interface ReportFormData {
  reportType: ReportType;
  value: string;
  category: ReportCategory;
  country: string;
  description: string;
}

export function ReportSubmissionDialog({ open, onOpenChange, onSubmit }: ReportSubmissionDialogProps) {
  const { t } = useI18n();
  const [type, setType] = useState<string>('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState<string>('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setType('');
    setValue('');
    setCategory('');
    setCountry('');
    setDescription('');
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess(false);

    // Validate required fields
    if (!type) {
      setError(t.errorReportTypeEmpty);
      return;
    }
    if (!value.trim()) {
      setError(t.errorReportValueEmpty);
      return;
    }
    if (!category) {
      setError(t.errorReportCategoryEmpty);
      return;
    }
    if (!country.trim()) {
      setError(t.errorReportCountryEmpty);
      return;
    }

    // Check rate limit
    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      setError(t.errorReportCooldown.replace('{seconds}', rateLimit.remainingTime.toString()));
      return;
    }

    setLoading(true);

    try {
      // Convert string selections to proper types
      const reportType: ReportType = 
        type === 'email' ? { Email: null } :
        type === 'phone' ? { Phone: null } :
        type === 'message' ? { Message: null } :
        { Crypto: null };

      const reportCategory: ReportCategory =
        category === 'phishing' ? { Phishing: null } :
        category === 'scam' ? { Scam: null } :
        category === 'spam' ? { Spam: null } :
        category === 'fraud' ? { Fraud: null } :
        category === 'impersonation' ? { Impersonation: null } :
        { Other: null };

      await onSubmit({
        reportType,
        value: value.trim(),
        category: reportCategory,
        country: country.trim(),
        description: description.trim(),
      });

      recordSubmission();
      setSuccess(true);
      setTimeout(() => {
        resetForm();
        onOpenChange(false);
      }, 2000);
    } catch (err) {
      console.error('Error submitting report:', err);
      setError(t.errorReportSubmission);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      onOpenChange(newOpen);
      if (!newOpen) {
        resetForm();
      }
    }}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Flag className="h-5 w-5" />
            {t.reportTitle}
          </DialogTitle>
          <DialogDescription>{t.reportDescription}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="report-type">{t.reportTypeLabel}</Label>
            <Select value={type} onValueChange={setType} disabled={loading}>
              <SelectTrigger id="report-type">
                <SelectValue placeholder={t.reportTypePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">{t.reportTypeEmail}</SelectItem>
                <SelectItem value="phone">{t.reportTypePhone}</SelectItem>
                <SelectItem value="message">{t.reportTypeMessage}</SelectItem>
                <SelectItem value="crypto">{t.reportTypeCrypto}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Value Input */}
          <div className="space-y-2">
            <Label htmlFor="report-value">{t.reportValueLabel}</Label>
            <Input
              id="report-value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t.reportValuePlaceholder}
              disabled={loading}
            />
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="report-category">{t.reportCategoryLabel}</Label>
            <Select value={category} onValueChange={setCategory} disabled={loading}>
              <SelectTrigger id="report-category">
                <SelectValue placeholder={t.reportCategoryPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phishing">{t.categoryPhishing}</SelectItem>
                <SelectItem value="scam">{t.categoryScam}</SelectItem>
                <SelectItem value="spam">{t.categorySpam}</SelectItem>
                <SelectItem value="fraud">{t.categoryFraud}</SelectItem>
                <SelectItem value="impersonation">{t.categoryImpersonation}</SelectItem>
                <SelectItem value="other">{t.categoryOther}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Country Input */}
          <div className="space-y-2">
            <Label htmlFor="report-country">{t.reportCountryLabel}</Label>
            <Input
              id="report-country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder={t.reportCountryPlaceholder}
              disabled={loading}
            />
          </div>

          {/* Description (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="report-description">{t.reportDescriptionLabel}</Label>
            <Textarea
              id="report-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.reportDescriptionPlaceholder}
              disabled={loading}
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Success Alert */}
          {success && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>{t.reportSuccess}</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button onClick={handleSubmit} disabled={loading || success} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.reportSubmitting}
              </>
            ) : (
              t.reportSubmitButton
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
