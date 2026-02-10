import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSelector } from './LanguageSelector';
import { AuthControl } from './AuthControl';
import { useI18n } from '@/i18n/I18nProvider';
import { useSimpleRouter } from '@/router/useSimpleRouter';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { t } = useI18n();
  const { navigate, currentRoute } = useSimpleRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentRoute]);

  const navItems = [
    { label: t.navHome, path: '/' },
    { label: t.navMission, path: '/mission' },
    { label: t.navHowItWorks, path: '/how-it-works' },
    { label: t.navTerms, path: '/terms' },
    { label: t.navPrivacy, path: '/privacy' },
    { label: t.navDocumentation, path: '/documentation' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo/Brand */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="AntiFraud Home"
          >
            <img 
              src="/assets/generated/antifraud-logo-icon.dim_256x256.png" 
              alt="AntiFraud Logo" 
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-foreground">{t.appTitle}</span>
              <span className="text-xs text-muted-foreground">{t.appSubtitle}</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentRoute === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSelector />
            <AuthControl />
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-6">
                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className={`text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        currentRoute === item.path
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="flex flex-col gap-3 pt-4 border-t">
                  <LanguageSelector />
                  <AuthControl />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="mt-auto border-t bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            by HCoragem
          </div>
        </div>
      </footer>
    </div>
  );
}
