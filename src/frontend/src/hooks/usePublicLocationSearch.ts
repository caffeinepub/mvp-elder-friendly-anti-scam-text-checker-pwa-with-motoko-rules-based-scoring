/**
 * React hook for public location search
 * 
 * Wraps the publicLocationSearch utility with React state management
 */

import { useState } from 'react';
import { searchPublicLocations, PublicLocationSearchResult } from '@/search/publicLocationSearch';

export function usePublicLocationSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<PublicLocationSearchResult | null>(null);
  const [error, setError] = useState<string>('');

  const search = async (query: string) => {
    setIsSearching(true);
    setError('');
    setResult(null);

    try {
      const searchResult = await searchPublicLocations(query);
      setResult(searchResult);
      
      if (searchResult.error) {
        setError(searchResult.error);
      }
    } catch (err: any) {
      setError(err.message || 'Search failed');
    } finally {
      setIsSearching(false);
    }
  };

  return {
    search,
    isSearching,
    result,
    error,
  };
}
