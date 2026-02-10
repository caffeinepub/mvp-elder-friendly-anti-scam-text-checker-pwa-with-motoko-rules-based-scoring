import { useState, useEffect } from 'react';

// Module-level shared state for synchronization
let currentPath = window.location.pathname;
const listeners = new Set<() => void>();

// Custom event for navigation
const NAVIGATION_EVENT = 'simple-router-navigate';

// Navigation guard callback (set by App.tsx)
let navigationGuard: ((path: string) => string | null) | null = null;

function notifyListeners() {
  listeners.forEach(listener => listener());
}

// Listen for custom navigation events
window.addEventListener(NAVIGATION_EVENT, () => {
  currentPath = window.location.pathname;
  notifyListeners();
});

// Listen for browser back/forward
window.addEventListener('popstate', () => {
  currentPath = window.location.pathname;
  notifyListeners();
});

export function useSimpleRouter() {
  const [route, setRoute] = useState(currentPath);

  useEffect(() => {
    const listener = () => setRoute(currentPath);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const navigate = (path: string) => {
    // Apply navigation guard if set
    if (navigationGuard) {
      const guardedPath = navigationGuard(path);
      if (guardedPath !== null) {
        path = guardedPath;
      }
    }

    if (path !== currentPath) {
      currentPath = path;
      window.history.pushState({}, '', path);
      window.dispatchEvent(new Event(NAVIGATION_EVENT));
    }
  };

  return {
    currentRoute: route,
    navigate,
  };
}

// Export function to set navigation guard (used by App.tsx)
export function setNavigationGuard(guard: ((path: string) => string | null) | null) {
  navigationGuard = guard;
}
