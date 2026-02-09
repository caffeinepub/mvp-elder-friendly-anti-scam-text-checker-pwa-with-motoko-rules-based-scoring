// Frontend-only email risk analysis using deterministic heuristics
// No external services or backend calls

export interface EmailAnalysisResult {
  category: 'safe' | 'flagged';
  reason: string;
}

const SUSPICIOUS_PATTERNS = {
  // Common scam/phishing domains
  suspiciousDomains: [
    'tempmail', 'throwaway', 'guerrillamail', 'mailinator', 'maildrop',
    'yopmail', '10minutemail', 'fakeinbox', 'trashmail', 'getnada'
  ],
  
  // Suspicious TLDs often used in scams
  suspiciousTlds: ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top', '.work'],
  
  // Patterns that suggest typosquatting or impersonation
  typosquatPatterns: [
    'paypa1', 'paypai', 'arnaz0n', 'arnazon', 'micr0soft', 'g00gle',
    'app1e', 'netf1ix', 'faceb00k', 'tw1tter', 'inst4gram'
  ],
  
  // Excessive numbers or random characters
  randomPattern: /[0-9]{5,}|[a-z]{15,}/i,
  
  // Multiple consecutive numbers
  excessiveNumbers: /\d{4,}/,
};

export function analyzeEmail(email: string): EmailAnalysisResult {
  const lowerEmail = email.toLowerCase();
  const [localPart, domain] = lowerEmail.split('@');
  
  if (!domain) {
    return { category: 'safe', reason: 'invalid_format' };
  }

  // Check for suspicious domains
  for (const suspiciousDomain of SUSPICIOUS_PATTERNS.suspiciousDomains) {
    if (domain.includes(suspiciousDomain)) {
      return { category: 'flagged', reason: 'temporary_email' };
    }
  }

  // Check for suspicious TLDs
  for (const tld of SUSPICIOUS_PATTERNS.suspiciousTlds) {
    if (domain.endsWith(tld)) {
      return { category: 'flagged', reason: 'suspicious_tld' };
    }
  }

  // Check for typosquatting patterns
  for (const pattern of SUSPICIOUS_PATTERNS.typosquatPatterns) {
    if (domain.includes(pattern) || localPart.includes(pattern)) {
      return { category: 'flagged', reason: 'typosquatting' };
    }
  }

  // Check for excessive random characters
  if (localPart.length > 20 && SUSPICIOUS_PATTERNS.randomPattern.test(localPart)) {
    return { category: 'flagged', reason: 'random_characters' };
  }

  // Check for excessive consecutive numbers
  if (SUSPICIOUS_PATTERNS.excessiveNumbers.test(localPart)) {
    return { category: 'flagged', reason: 'excessive_numbers' };
  }

  // Check for very short local part (often used in scams)
  if (localPart.length <= 2) {
    return { category: 'flagged', reason: 'suspicious_format' };
  }

  // If no red flags, consider it safe
  return { category: 'safe', reason: 'no_red_flags' };
}
