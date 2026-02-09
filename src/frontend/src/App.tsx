import { useEffect } from 'react';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { I18nProvider } from './i18n/I18nProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSimpleRouter } from './router/useSimpleRouter';
import { AppLayout } from './components/AppLayout';
import { MissionPage } from './pages/MissionPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  const { currentRoute } = useSimpleRouter();

  useEffect(() => {
    document.title = 'AntiFraud / by HCoragem';
  }, []);

  // Render page based on current route
  let pageContent: React.ReactNode;
  
  // Normalize route for legacy compatibility
  const normalizedRoute = currentRoute.replace(/^\/institucional(\/mission)?$/, '/mission');
  
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
    case '/':
    default:
      pageContent = <HomePage />;
      break;
  }

  return <AppLayout>{pageContent}</AppLayout>;
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
