import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/I18nProvider';
import { LanguageSelector } from '@/components/LanguageSelector';
import { AuthControl } from '@/components/AuthControl';
import { useSimpleRouter } from '@/router/useSimpleRouter';
import { Heart } from 'lucide-react';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { t } = useI18n();
  const { navigate, currentRoute } = useSimpleRouter();

  const getAppIdentifier = (): string => {
    try {
      return encodeURIComponent(window.location.hostname || 'antifraud-app');
    } catch {
      return 'antifraud-app';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Logo Block */}
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/assets/generated/antifraud-logo-icon.dim_256x256.png" 
                alt="AntiFraud Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 object-contain"
              />
              <div className="text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">AntiFraud</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">by HCoragem</p>
              </div>
            </button>
            
            {/* Navigation and Controls */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto flex-wrap">
              <Button 
                variant={currentRoute === '/' ? 'default' : 'ghost'} 
                onClick={() => navigate('/')} 
                className="text-sm sm:text-base"
              >
                {t.navHome}
              </Button>
              <Button 
                variant={currentRoute === '/institucional' ? 'default' : 'ghost'} 
                onClick={() => navigate('/institucional')} 
                className="text-sm sm:text-base"
              >
                {t.navInstitutional}
              </Button>
              <Button 
                variant={currentRoute === '/institucional/mission' ? 'default' : 'ghost'} 
                onClick={() => navigate('/institucional/mission')} 
                className="text-sm sm:text-base"
              >
                {t.navMission}
              </Button>
              <Button 
                variant={currentRoute === '/terms' ? 'default' : 'ghost'} 
                onClick={() => navigate('/terms')} 
                className="text-sm sm:text-base"
              >
                {t.navTerms}
              </Button>
              <LanguageSelector />
              <AuthControl />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base text-muted-foreground">
            <span>by HCoragem</span>
            <span className="hidden sm:inline">•</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using caffeine.ai
            </a>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} AntiFraud
          </p>
        </div>
      </footer>
    </div>
  );
}
