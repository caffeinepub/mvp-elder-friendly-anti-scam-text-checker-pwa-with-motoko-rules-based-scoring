import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { triggerPWAInstall } from '@/pwa/install';
import { useI18n } from '@/i18n/I18nProvider';

export function PwaInstallAction() {
  const { t } = useI18n();

  const handleInstall = async () => {
    await triggerPWAInstall();
  };

  return (
    <Button onClick={handleInstall} variant="default" size="sm" className="gap-2">
      <Download className="h-4 w-4" />
      <span>{t.installPrimaryButton}</span>
    </Button>
  );
}
