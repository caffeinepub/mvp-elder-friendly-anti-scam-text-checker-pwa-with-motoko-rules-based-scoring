// Text normalization utility for accent-insensitive and case-insensitive matching
// Extended with robust partial matching for phrase patterns

/**
 * Normalize text: lowercase + remove diacritics + remove punctuation + collapse whitespace
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .replace(/\s+/g, ' ') // Collapse multiple spaces to single space
    .trim(); // Remove leading/trailing whitespace
}

/**
 * Check if normalized text contains any of the keywords
 */
export function containsAnyKeyword(text: string, keywords: string[]): boolean {
  const normalized = normalizeText(text);
  return keywords.some(keyword => normalized.includes(normalizeText(keyword)));
}

/**
 * Find all matching keywords in text
 */
export function findMatchingKeywords(text: string, keywords: string[]): string[] {
  const normalized = normalizeText(text);
  return keywords.filter(keyword => normalized.includes(normalizeText(keyword)));
}

/**
 * Check if text matches a phrase pattern (all fragments must be present)
 * Supports partial matching with normalization
 */
export function matchesPhrasePattern(text: string, fragments: string[]): boolean {
  const normalized = normalizeText(text);
  return fragments.every(fragment => normalized.includes(normalizeText(fragment)));
}

/**
 * Find all matching phrase patterns in text
 */
export function findMatchingPhrasePatterns<T extends { fragments: string[] }>(
  text: string,
  patterns: T[]
): T[] {
  return patterns.filter(pattern => matchesPhrasePattern(text, pattern.fragments));
}
