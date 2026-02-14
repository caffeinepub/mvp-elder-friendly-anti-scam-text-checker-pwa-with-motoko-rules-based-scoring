import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useI18n } from '@/i18n/I18nProvider';
import { useSimpleRouter } from '@/router/useSimpleRouter';
import { useConsentGate } from '@/hooks/useConsentGate';

interface ConsentGateModalProps {
  open: boolean;
  onAccept: () => void;
}

export function ConsentGateModal({ open, onAccept }: ConsentGateModalProps) {
  const { t } = useI18n();
  const { navigate } = useSimpleRouter();
  const { currentVersion } = useConsentGate();
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const canAccept = cookiesAccepted && termsAccepted;

  const handleAccept = () => {
    if (canAccept) {
      onAccept();
    }
  };

  const handleViewTerms = () => {
    navigate('/terms');
  };

  const handleViewPrivacy = () => {
    navigate('/privacy');
  };

  return (
    <AlertDialog open={open} onOpenChange={() => {}}>
      <AlertDialogContent
        className="max-w-2xl"
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">{t.consentModalTitle}</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            {t.consentModalDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-6 py-4">
          {/* Version info */}
          <div className="p-3 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t.consentVersionLabel}:</span>
              <span className="font-mono font-semibold">{currentVersion}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-muted-foreground">{t.consentEffectiveDateLabel}:</span>
              <span className="font-semibold">{t.termsEffectiveDate}</span>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="cookies"
                checked={cookiesAccepted}
                onCheckedChange={(checked) => setCookiesAccepted(checked === true)}
              />
              <label
                htmlFor="cookies"
                className="text-sm leading-relaxed cursor-pointer select-none"
              >
                {t.consentCookiesLabel}
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              />
              <label
                htmlFor="terms"
                className="text-sm leading-relaxed cursor-pointer select-none"
              >
                {t.consentTermsLabel}
              </label>
            </div>
          </div>

          {/* Read documents */}
          <div className="p-4 bg-muted/30 rounded-lg border border-border">
            <p className="text-sm font-medium mb-3">{t.consentReadBeforeAccepting}</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={handleViewTerms}>
                {t.consentViewTermsButton}
              </Button>
              <Button variant="outline" size="sm" onClick={handleViewPrivacy}>
                {t.consentViewPrivacyButton}
              </Button>
            </div>
          </div>
        </div>

        <AlertDialogFooter className="flex-col sm:flex-row gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left flex-1">
            {t.consentFooterNote}
          </p>
          <Button
            onClick={handleAccept}
            disabled={!canAccept}
            size="lg"
            className="w-full sm:w-auto"
          >
            {t.consentAcceptButton}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
