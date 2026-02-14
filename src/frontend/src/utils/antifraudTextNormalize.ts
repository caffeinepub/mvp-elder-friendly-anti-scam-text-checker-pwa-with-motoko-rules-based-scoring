// Text normalization utility for accent-insensitive and case-insensitive matching
// Supports robust partial matching for phrase patterns with punctuation removal

/**
 * Normalize text for comparison: lowercase, remove accents, collapse whitespace
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with space
    .replace(/\s+/g, ' ') // Collapse whitespace
    .trim();
}

/**
 * Check if text contains any of the given keywords (normalized matching)
 */
export function containsAnyKeyword(text: string, keywords: string[]): boolean {
  const normalized = normalizeText(text);
  return keywords.some(keyword => normalized.includes(normalizeText(keyword)));
}

/**
 * Find all matching keywords in text (normalized matching)
 */
export function findMatchingKeywords(text: string, keywords: string[]): string[] {
  const normalized = normalizeText(text);
  return keywords.filter(keyword => normalized.includes(normalizeText(keyword)));
}

/**
 * Find matching phrase patterns with partial matching support
 */
export function findMatchingPhrasePatterns(text: string, patterns: string[]): string[] {
  const normalized = normalizeText(text);
  return patterns.filter(pattern => {
    const normalizedPattern = normalizeText(pattern);
    // Support partial matching: pattern words can appear in any order within a window
    const patternWords = normalizedPattern.split(/\s+/);
    if (patternWords.length === 1) {
      return normalized.includes(normalizedPattern);
    }
    // For multi-word patterns, check if all words appear within a reasonable window
    const textWords = normalized.split(/\s+/);
    for (let i = 0; i < textWords.length; i++) {
      const window = textWords.slice(i, i + patternWords.length + 3).join(' ');
      if (patternWords.every(word => window.includes(word))) {
        return true;
      }
    }
    return false;
  });
}

/**
 * Count occurrences of keywords/phrases in text (cumulative, occurrence-based)
 * Returns total count of all matches including duplicates
 */
export function countKeywordOccurrences(text: string, keywords: string[]): number {
  const normalized = normalizeText(text);
  let totalCount = 0;
  
  for (const keyword of keywords) {
    const normalizedKeyword = normalizeText(keyword);
    // Count all occurrences of this keyword
    let index = 0;
    while ((index = normalized.indexOf(normalizedKeyword, index)) !== -1) {
      totalCount++;
      index += normalizedKeyword.length;
    }
  }
  
  return totalCount;
}

/**
 * Count phrase pattern occurrences with partial matching
 */
export function countPhraseOccurrences(text: string, patterns: string[]): number {
  const normalized = normalizeText(text);
  const textWords = normalized.split(/\s+/);
  let totalCount = 0;
  
  for (const pattern of patterns) {
    const normalizedPattern = normalizeText(pattern);
    const patternWords = normalizedPattern.split(/\s+/);
    
    if (patternWords.length === 1) {
      // Single word: count exact occurrences
      let index = 0;
      while ((index = normalized.indexOf(normalizedPattern, index)) !== -1) {
        totalCount++;
        index += normalizedPattern.length;
      }
    } else {
      // Multi-word: count window matches
      for (let i = 0; i < textWords.length; i++) {
        const window = textWords.slice(i, i + patternWords.length + 3).join(' ');
        if (patternWords.every(word => window.includes(word))) {
          totalCount++;
        }
      }
    }
  }
  
  return totalCount;
}
