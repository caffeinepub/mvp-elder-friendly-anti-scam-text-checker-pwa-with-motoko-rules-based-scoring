// Best-effort offline persistence for Advanced Contact Lookup results

import { useState, useEffect } from 'react';
import type { StructuredAnalysisResult } from '@/utils/structuredFraudAnalysis';
import type { PublicContactInfo } from '@/utils/publicContactLookup';

export interface CachedLookupResult {
  query: string;
  type: 'phone' | 'email';
  timestamp: number;
  antifraudResult: StructuredAnalysisResult;
  publicInfo?: PublicContactInfo;
}

const CACHE_KEY = 'antifraud_contact_lookup_cache';
const MAX_CACHE_ITEMS = 50;

/**
 * Load cached results from localStorage
 */
function loadCache(): CachedLookupResult[] {
  try {
    const stored = localStorage.getItem(CACHE_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Failed to load lookup cache:', error);
    return [];
  }
}

/**
 * Save cached results to localStorage
 */
function saveCache(cache: CachedLookupResult[]): void {
  try {
    // Keep only the most recent items
    const trimmed = cache.slice(0, MAX_CACHE_ITEMS);
    localStorage.setItem(CACHE_KEY, JSON.stringify(trimmed));
  } catch (error) {
    console.warn('Failed to save lookup cache:', error);
  }
}

/**
 * Hook for managing cached lookup results
 */
export function useAdvancedContactLookupCache() {
  const [cache, setCache] = useState<CachedLookupResult[]>([]);

  useEffect(() => {
    setCache(loadCache());
  }, []);

  const addToCache = (result: CachedLookupResult) => {
    setCache((prev) => {
      // Remove any existing entry for the same query
      const filtered = prev.filter(
        (item) => item.query !== result.query || item.type !== result.type
      );
      
      // Add new result at the beginning
      const updated = [result, ...filtered];
      saveCache(updated);
      return updated;
    });
  };

  const getCached = (query: string, type: 'phone' | 'email'): CachedLookupResult | undefined => {
    return cache.find((item) => item.query === query && item.type === type);
  };

  const clearCache = () => {
    setCache([]);
    localStorage.removeItem(CACHE_KEY);
  };

  return {
    cache,
    addToCache,
    getCached,
    clearCache
  };
}
