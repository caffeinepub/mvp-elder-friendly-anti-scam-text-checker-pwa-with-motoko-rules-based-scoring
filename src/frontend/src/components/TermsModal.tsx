import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TermsContent } from './TermsContent';
import { useI18n } from '@/i18n/I18nProvider';

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsModal({ open, onOpenChange }: TermsModalProps) {
  const { t } = useI18n();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>{t.termsPageTitle}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-80px)] px-6 pb-6">
          <TermsContent showSeals={false} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
