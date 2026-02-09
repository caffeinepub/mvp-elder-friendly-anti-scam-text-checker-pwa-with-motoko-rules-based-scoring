import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, Smartphone, Monitor, Info } from 'lucide-react';
import { usePwaInstall } from '@/hooks/usePwaInstall';
import { useI18n } from '@/i18n/I18nProvider';

export function PwaInstallAction() {
  const { isInstallable, isInstalled, platform, promptInstall, getInstructions } = usePwaInstall();
  const { t } = useI18n();

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <Button onClick={promptInstall} variant="default" size="sm" className="gap-2">
        <Download className="h-4 w-4" />
        {t.installApp}
      </Button>
    );
  }

  // Show instructions dialog for platforms that don't support prompt
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          {t.installApp}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {platform === 'ios' ? <Smartphone className="h-5 w-5" /> : <Monitor className="h-5 w-5" />}
            {t.installAppTitle}
          </DialogTitle>
          <DialogDescription className="space-y-4 pt-4">
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <Info className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
              <p className="text-sm text-foreground">{getInstructions()}</p>
            </div>
            <p className="text-xs text-muted-foreground">{t.installAppNote}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
