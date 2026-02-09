import { useState, useEffect } from 'react';

export type Route = '/' | '/institucional' | '/institucional/mission' | '/terms';

interface SimpleRouter {
  currentRoute: Route;
  navigate: (path: Route) => void;
}

export function useSimpleRouter(): SimpleRouter {
  const [currentRoute, setCurrentRoute] = useState<Route>(() => {
    const path = window.location.pathname as Route;
    return ['/', '/institucional', '/institucional/mission', '/terms'].includes(path) ? path : '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as Route;
      setCurrentRoute(['/', '/institucional', '/institucional/mission', '/terms'].includes(path) ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: Route) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
  };

  return { currentRoute, navigate };
}
