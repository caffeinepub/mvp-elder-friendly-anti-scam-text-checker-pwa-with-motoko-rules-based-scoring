import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { triggerPWAInstall } from '../pwa/install';

export function InstallButton() {
  const handleInstall = async () => {
    const ok = await triggerPWAInstall();
    if (!ok) {
      alert('A aplicação ainda não está elegível para instalação.');
    }
  };

  return (
    <Button onClick={handleInstall} variant="default" size="default" className="gap-2">
      <Download className="h-5 w-5" />
      <span>Baixar Aplicação AntiFraud gratuitamente</span>
    </Button>
  );
}
