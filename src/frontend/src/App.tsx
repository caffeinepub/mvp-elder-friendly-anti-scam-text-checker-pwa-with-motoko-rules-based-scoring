import { useEffect } from 'react';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { I18nProvider } from './i18n/I18nProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSimpleRouter } from './router/useSimpleRouter';
import { AppLayout } from './components/AppLayout';
import { InstitutionalMissionPage } from './pages/InstitutionalMissionPage';
import { InstitutionalPage } from './pages/InstitutionalPage';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';

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
    document.title = 'AntiFraud';
  }, []);

  return (
    <AppLayout>
      {currentRoute === '/institucional/mission' ? (
        <InstitutionalMissionPage />
      ) : currentRoute === '/institucional' ? (
        <InstitutionalPage />
      ) : currentRoute === '/terms' ? (
        <TermsPage />
      ) : (
        <HomePage />
      )}
    </AppLayout>
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
