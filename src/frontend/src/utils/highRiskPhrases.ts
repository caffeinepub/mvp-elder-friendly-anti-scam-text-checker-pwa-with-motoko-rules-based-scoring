// Data-driven high-risk phrase patterns for fraud detection
// Supports partial matching with normalization (case-insensitive, accent-insensitive)
// Includes common EN/PT variants for scam phrases

export interface HighRiskPhrasePattern {
  fragments: string[]; // All fragments must be present (AND logic)
  category: 'account_takeover' | 'financial_urgency' | 'credential_theft' | 'payment_scam';
  weight: 'high' | 'medium';
}

// High-risk phrase patterns (normalized fragments)
export const HIGH_RISK_PHRASE_PATTERNS: HighRiskPhrasePattern[] = [
  // Account takeover / New number scams
  {
    fragments: ['novo', 'numero'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['new', 'number'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['guarda', 'numero'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['save', 'number'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['perdi', 'telemovel'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['perdi', 'telefone'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['lost', 'phone'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['lost', 'mobile'],
    category: 'account_takeover',
    weight: 'high',
  },
  
  // Credential theft
  {
    fragments: ['envia', 'codigo'],
    category: 'credential_theft',
    weight: 'high',
  },
  {
    fragments: ['send', 'code'],
    category: 'credential_theft',
    weight: 'high',
  },
  {
    fragments: ['enviar', 'codigo'],
    category: 'credential_theft',
    weight: 'high',
  },
  {
    fragments: ['codigo', 'verificacao'],
    category: 'credential_theft',
    weight: 'high',
  },
  {
    fragments: ['verification', 'code'],
    category: 'credential_theft',
    weight: 'high',
  },
  
  // Payment scams
  {
    fragments: ['mbway'],
    category: 'payment_scam',
    weight: 'high',
  },
  {
    fragments: ['mb', 'way'],
    category: 'payment_scam',
    weight: 'high',
  },
  {
    fragments: ['urgente', 'transferencia'],
    category: 'financial_urgency',
    weight: 'high',
  },
  {
    fragments: ['urgent', 'transfer'],
    category: 'financial_urgency',
    weight: 'high',
  },
  {
    fragments: ['urgente', 'pagamento'],
    category: 'financial_urgency',
    weight: 'high',
  },
  {
    fragments: ['urgent', 'payment'],
    category: 'financial_urgency',
    weight: 'high',
  },
  {
    fragments: ['transferencia', 'imediata'],
    category: 'financial_urgency',
    weight: 'high',
  },
  {
    fragments: ['immediate', 'transfer'],
    category: 'financial_urgency',
    weight: 'high',
  },
  
  // Additional high-risk patterns
  {
    fragments: ['conta', 'bloqueada'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['account', 'blocked'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['conta', 'suspensa'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['account', 'suspended'],
    category: 'account_takeover',
    weight: 'high',
  },
  {
    fragments: ['confirmar', 'identidade'],
    category: 'credential_theft',
    weight: 'high',
  },
  {
    fragments: ['confirm', 'identity'],
    category: 'credential_theft',
    weight: 'high',
  },
  {
    fragments: ['atualizar', 'dados'],
    category: 'credential_theft',
    weight: 'high',
  },
  {
    fragments: ['update', 'details'],
    category: 'credential_theft',
    weight: 'high',
  },
];

// Medium-risk phrase patterns
export const MEDIUM_RISK_PHRASE_PATTERNS: HighRiskPhrasePattern[] = [
  {
    fragments: ['clique', 'aqui'],
    category: 'credential_theft',
    weight: 'medium',
  },
  {
    fragments: ['click', 'here'],
    category: 'credential_theft',
    weight: 'medium',
  },
  {
    fragments: ['link', 'seguro'],
    category: 'credential_theft',
    weight: 'medium',
  },
  {
    fragments: ['secure', 'link'],
    category: 'credential_theft',
    weight: 'medium',
  },
  {
    fragments: ['premio'],
    category: 'financial_urgency',
    weight: 'medium',
  },
  {
    fragments: ['prize'],
    category: 'financial_urgency',
    weight: 'medium',
  },
  {
    fragments: ['ganhou'],
    category: 'financial_urgency',
    weight: 'medium',
  },
  {
    fragments: ['won'],
    category: 'financial_urgency',
    weight: 'medium',
  },
];
