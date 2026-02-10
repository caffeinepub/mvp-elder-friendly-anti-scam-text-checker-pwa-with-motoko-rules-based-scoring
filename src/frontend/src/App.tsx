import { useEffect } from 'react';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { I18nProvider } from './i18n/I18nProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSimpleRouter, setNavigationGuard } from './router/useSimpleRouter';
import { useConsentGate } from './hooks/useConsentGate';
import { ConsentGateModal } from './components/ConsentGateModal';
import { AppLayout } from './components/AppLayout';
import { MissionPage } from './pages/MissionPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { pwaRuntime } from './pwa/pwaRuntime';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  const { currentRoute, navigate } = useSimpleRouter();
  const { consentRequired, isLoading, acceptConsent } = useConsentGate();

  useEffect(() => {
    document.title = 'AntiFraud / by HCoragem';
    
    // Initialize PWA runtime (register service worker and capture beforeinstallprompt)
    pwaRuntime.registerServiceWorker().catch((error) => {
      console.error('Failed to initialize PWA runtime:', error);
    });
  }, []);

  // Set navigation guard to restrict routes when consent is required
  useEffect(() => {
    if (consentRequired && !isLoading) {
      setNavigationGuard((path: string) => {
        // Only allow /terms and /privacy when consent is required
        if (path === '/terms' || path === '/privacy') {
          return null; // Allow navigation
        }
        return '/'; // Redirect to home (which will be blocked by UI)
      });
    } else {
      setNavigationGuard(null); // Remove guard when consent is given
    }

    return () => {
      setNavigationGuard(null);
    };
  }, [consentRequired, isLoading]);

  // Render page based on current route
  let pageContent: React.ReactNode;
  
  // Normalize route for legacy compatibility and trailing slashes
  let normalizedRoute = currentRoute
    .replace(/\/$/, '') // Remove trailing slash
    .toLowerCase();
  
  // Legacy alias handling: /institucional and /institucional/mission → /mission
  if (normalizedRoute === '/institucional' || normalizedRoute === '/institucional/mission') {
    // Update client-side route to canonical /mission
    if (currentRoute !== '/mission') {
      navigate('/mission');
    }
    normalizedRoute = '/mission';
  }
  
  switch (normalizedRoute) {
    case '/mission':
      pageContent = <MissionPage />;
      break;
    case '/how-it-works':
      pageContent = <HowItWorksPage />;
      break;
    case '/terms':
      pageContent = <TermsPage />;
      break;
    case '/privacy':
      pageContent = <PrivacyPage />;
      break;
    case '/documentation':
      pageContent = <DocumentationPage />;
      break;
    case '':
    case '/':
      pageContent = <HomePage />;
      break;
    default:
      // Unknown route - redirect to home
      pageContent = <HomePage />;
      break;
  }

  // Show consent modal if required (and not loading)
  // The modal blocks all interaction until consent is given
  return (
    <>
      <ConsentGateModal
        open={!isLoading && consentRequired}
        onAccept={acceptConsent}
      />
      <div
        style={{
          pointerEvents: consentRequired && !isLoading ? 'none' : 'auto',
          opacity: consentRequired && !isLoading ? 0.5 : 1,
          userSelect: consentRequired && !isLoading ? 'none' : 'auto',
        }}
        inert={consentRequired && !isLoading ? ('' as any) : undefined}
      >
        <AppLayout>{pageContent}</AppLayout>
      </div>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <I18nProvider>
          <AppContent />
        </I18nProvider>
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}

export default App;
