import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { useSimpleRouter } from '../router/useSimpleRouter';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from './ui/alert-dialog';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface ConsentGateModalProps {
  open: boolean;
  onAccept: () => void;
}

export function ConsentGateModal({ open, onAccept }: ConsentGateModalProps) {
  const { t } = useI18n();
  const { navigate } = useSimpleRouter();
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Reset checkboxes when modal opens
  useEffect(() => {
    if (open) {
      setCookiesAccepted(false);
      setTermsAccepted(false);
    }
  }, [open]);

  const handleViewTerms = () => {
    navigate('/terms');
  };

  const handleViewPrivacy = () => {
    navigate('/privacy');
  };

  const handleAccept = () => {
    if (cookiesAccepted && termsAccepted) {
      onAccept();
    }
  };

  const canAccept = cookiesAccepted && termsAccepted;

  // Prevent ESC key from closing the modal
  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent
        className="max-w-md"
        onEscapeKeyDown={handleEscapeKeyDown}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center">
            {t.consentModalTitle}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base">
            {t.consentModalDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="cookies-consent"
              checked={cookiesAccepted}
              onCheckedChange={(checked) => setCookiesAccepted(checked === true)}
              aria-label={t.consentCookiesLabel}
            />
            <Label
              htmlFor="cookies-consent"
              className="text-sm font-medium leading-relaxed cursor-pointer"
            >
              {t.consentCookiesLabel}
            </Label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms-consent"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked === true)}
              aria-label={t.consentTermsLabel}
            />
            <Label
              htmlFor="terms-consent"
              className="text-sm font-medium leading-relaxed cursor-pointer"
            >
              {t.consentTermsLabel}
            </Label>
          </div>

          <div className="pt-2 space-y-2">
            <p className="text-sm text-muted-foreground">
              {t.consentReadBeforeAccepting}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleViewTerms}
                className="flex-1"
              >
                {t.consentViewTermsButton}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleViewPrivacy}
                className="flex-1"
              >
                {t.consentViewPrivacyButton}
              </Button>
            </div>
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={handleAccept}
            disabled={!canAccept}
            className="w-full"
          >
            {t.consentAcceptButton}
          </AlertDialogAction>
        </AlertDialogFooter>

        <p className="text-xs text-center text-muted-foreground pt-2">
          {t.consentFooterNote}
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
}
