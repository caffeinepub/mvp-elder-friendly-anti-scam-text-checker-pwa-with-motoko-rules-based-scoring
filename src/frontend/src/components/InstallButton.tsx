import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { triggerPWAInstall } from '../pwa/install';
import { useI18n } from '../i18n/I18nProvider';

export function InstallButton() {
  const { t } = useI18n();

  const handleInstall = async () => {
    const ok = await triggerPWAInstall();
    if (!ok) {
      alert(t.installNotEligibleMessage);
    }
  };

  return (
    <Button onClick={handleInstall} variant="default" size="default" className="gap-2">
      <Download className="h-5 w-5" />
      <span>{t.installPrimaryButton}</span>
    </Button>
  );
}
