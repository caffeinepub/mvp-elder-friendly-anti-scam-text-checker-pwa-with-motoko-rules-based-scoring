// Report submission dialog for anonymous reporting from Advanced Contact Lookup
// Supports prefilled contact value with limited category options (Spam/Phishing/Scam/Other)

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { useSubmitLookupReport } from '@/hooks/useSubmitLookupReport';

interface ReportSubmissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefilledContact?: string;
  contactType?: 'phone' | 'email';
}

type ReportCategory = 'Spam' | 'Phishing' | 'Scam' | 'Other';

export function ReportSubmissionDialog({
  open,
  onOpenChange,
  prefilledContact,
  contactType,
}: ReportSubmissionDialogProps) {
  const { t } = useI18n();
  const { submitReport, isSubmitting, error: submitError, success } = useSubmitLookupReport();

  const [category, setCategory] = useState<ReportCategory | ''>('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!prefilledContact || !contactType) return;

    // Default to "Other" if no category selected
    const finalCategory = category || 'Other';

    const result = await submitReport({
      contact: prefilledContact,
      type: contactType,
      category: finalCategory,
      description: description.trim(),
    });

    if (result.success) {
      // Reset form and close after brief delay
      setTimeout(() => {
        setCategory('');
        setDescription('');
        onOpenChange(false);
      }, 1500);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!isSubmitting) {
      if (!newOpen) {
        // Reset form when closing
        setCategory('');
        setDescription('');
      }
      onOpenChange(newOpen);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t.reportDialogTitle}</DialogTitle>
          <DialogDescription>{t.reportDialogDescription}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Anonymity Notice */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              {t.reportAnonymityNotice}
            </AlertDescription>
          </Alert>

          {/* Prefilled Contact (read-only display) */}
          <div className="space-y-2">
            <Label>{t.reportContactLabel}</Label>
            <div className="px-3 py-2 bg-muted rounded-md text-sm font-mono">
              {prefilledContact}
            </div>
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="category">{t.reportCategoryLabel}</Label>
            <Select
              value={category}
              onValueChange={(value) => setCategory(value as ReportCategory)}
              disabled={isSubmitting}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder={t.reportCategoryPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Spam">{t.reportCategorySpam}</SelectItem>
                <SelectItem value="Phishing">{t.reportCategoryPhishing}</SelectItem>
                <SelectItem value="Scam">{t.reportCategoryScam}</SelectItem>
                <SelectItem value="Other">{t.reportCategoryOther}</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {t.reportCategoryOptionalNote}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">{t.reportDescriptionLabel}</Label>
            <Textarea
              id="description"
              placeholder={t.reportDescriptionPlaceholder}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isSubmitting}
              rows={4}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              {t.reportDescriptionNote}
            </p>
          </div>

          {/* Error Alert */}
          {submitError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          )}

          {/* Success Alert */}
          {success && (
            <Alert className="border-success bg-success/10">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <AlertDescription className="text-success">
                {t.reportSuccessMessage}
              </AlertDescription>
            </Alert>
          )}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={isSubmitting}
          >
            {t.reportCancelButton}
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !prefilledContact}
          >
            {isSubmitting ? t.reportSubmittingButton : t.reportSubmitButton}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
