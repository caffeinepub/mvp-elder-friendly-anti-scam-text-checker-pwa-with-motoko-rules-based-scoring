// Text normalization utility for accent-insensitive and case-insensitive matching
// Used by antifraud heuristics for consistent keyword detection across languages

/**
 * Normalizes text for accent-insensitive and case-insensitive matching
 * - Converts to lowercase
 * - Removes diacritics (accents, umlauts, etc.)
 * @param text Input text to normalize
 * @returns Normalized text
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
}

/**
 * Checks if normalized text contains any of the provided keywords
 * @param text Text to search in
 * @param keywords Array of keywords to search for
 * @returns True if any keyword is found
 */
export function containsAnyKeyword(text: string, keywords: string[]): boolean {
  const normalizedText = normalizeText(text);
  return keywords.some(keyword => normalizedText.includes(normalizeText(keyword)));
}

/**
 * Finds all matching keywords in text
 * @param text Text to search in
 * @param keywords Array of keywords to search for
 * @returns Array of matched keywords (original form)
 */
export function findMatchingKeywords(text: string, keywords: string[]): string[] {
  const normalizedText = normalizeText(text);
  return keywords.filter(keyword => normalizedText.includes(normalizeText(keyword)));
}
