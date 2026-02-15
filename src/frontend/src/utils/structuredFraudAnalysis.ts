// Frontend-only structured fraud analysis engine
// Implements deterministic heuristic rules with professional scoring (0-100)
// Returns structured results with transparency citations and collaborative-basis references
// Supports full localization with critical-keyword High-risk overrides for all languages

import { normalizeText, containsAnyKeyword, findMatchingKeywords, countKeywordOccurrences } from './antifraudTextNormalize';
import { HIGH_RISK_PHRASE_PATTERNS, MEDIUM_RISK_PHRASE_PATTERNS, type HighRiskPhrasePattern } from './highRiskPhrases';
import { computeRiskScore, scoreToRiskLevel, type RiskFactors } from './riskScoring';
import { riskConfig } from './riskWeights';
import { MESSAGE_CRITICAL_TRIGGERS } from './messageCriticalTriggers';

export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface PublicSource {
  name: string;
  url: string;
}

export interface CollaborativeBasis {
  statement: string;
  reference?: string;
}

export interface StructuredAnalysisResult {
  risk: RiskLevel;
  riskScore: number; // 0-100 aggregated score
  explanation: string;
  recommendation: string;
  sources: PublicSource[];
  collaborativeBasis: CollaborativeBasis;
}

// Risk Dictionary - Critical Risk Detection System
// Internal constant for maximum risk classification
// This dictionary affects ONLY message text analysis
const risk_dictionary = {
  severity: "critical" as const,
  risk_level: "maximum" as const,
  groups: {
    urgencyAndPressure: [
      "urgente", "urgência", "imediatamente", "agora", "já", "hoje",
      "último aviso", "tempo limitado", "atenção", "alerta", "importante"
    ],
    authorityAndEntities: [
      "banco", "segurança", "governo", "finanças", "SNS", "Ministério da Saúde",
      "tribunal", "polícia", "MB WAY", "Multibanco", "CGD", "Millennium",
      "Santander", "BPI", "Novo Banco", "Revolut", "PayPal", "Amazon",
      "Netflix", "Google", "Facebook", "Instagram"
    ],
    accountProblems: [
      "atividade suspeita", "tentativa de acesso", "violação", "bloqueio",
      "bloqueada", "restrita", "suspensa", "verificação", "atualização",
      "confirmação", "regularizar", "desbloquear", "reativar", "recuperar"
    ],
    paymentsAndMoney: [
      "fatura", "pagamento", "pendente", "em atraso", "dívida", "cobrança",
      "referência", "referência MB", "transferência", "IBAN", "NIB", "cartão",
      "cartão de crédito", "dados bancários", "saldo", "reembolso", "devolução",
      "taxa", "taxa aduaneira", "encomenda", "alfândega", "entrega"
    ],
    codesAndCredentials: [
      "código", "código SMS", "código de segurança", "PIN", "palavra-passe",
      "password", "credenciais", "dados pessoais", "NIF", "número de contribuinte",
      "cartão de cidadão", "enviar código", "confirme código"
    ],
    investmentAndGains: [
      "prémio", "oferta exclusiva", "campanha", "promoção", "ganhar dinheiro",
      "lucro", "retorno garantido", "rentabilidade alta", "investimento seguro",
      "criptomoedas", "forex", "trading"
    ],
    familyFraud: [
      "Olá pai", "Olá mãe", "troquei de número", "perdi o telemóvel",
      "estou com um problema", "preciso de ajuda", "faz transferência",
      "podes transferir"
    ],
    linksAndActions: [
      "clique aqui", "aceda aqui", "acesse aqui", "link", "ligação",
      "em anexo", "abrir link", "verificar aqui"
    ]
  }
};

// Language-specific templates for analysis outputs
interface AnalysisTemplates {
  emptyInput: { explanation: string; recommendation: string };
  invalidFormat: { explanation: string; recommendation: string };
  highRisk: (indicators: string, score: number) => { explanation: string; recommendation: string };
  mediumRisk: (indicators: string, score: number) => { explanation: string; recommendation: string };
  lowRisk: (indicators: string, score: number) => { explanation: string; recommendation: string };
  noIndicators: { explanation: string; recommendation: string };
  criticalKeywordTrigger: string;
  collaborativeBasisStatement: string;
}

// Language-specific indicator labels
interface IndicatorLabels {
  urgencyLanguage: string;
  multipleUrgency: string;
  financialRequests: string;
  credentialRequests: string;
  containsLinks: string;
  cryptoAddresses: string;
  excessivePunctuation: string;
  excessiveCapitalization: string;
  disposableEmail: string;
  suspiciousDomain: string;
  typosquatting: string;
  excessiveNumbers: string;
  randomPattern: string;
  invalidPhoneFormat: string;
  tooShort: string;
  tooLong: string;
  suspiciousPattern: string;
  invalidCryptoFormat: string;
  knownScamAddress: string;
  newAddress: string;
  highValueTarget: string;
  highRiskPhrases: string;
  mediumRiskPhrases: string;
  internalReports: string;
  publicSourcePresence: string;
  highReportFrequency: string;
  criticalDictionaryMatches: string;
  criticalTriggerPhrases: string;
}

// Portuguese templates
const PT_TEMPLATES: AnalysisTemplates = {
  emptyInput: {
    explanation: 'Nenhum conteúdo fornecido.',
    recommendation: 'Por favor, insira o conteúdo para análise.'
  },
  invalidFormat: {
    explanation: 'Formato inválido.',
    recommendation: 'Por favor, verifique o formato do conteúdo.'
  },
  highRisk: (indicators: string, score: number) => ({
    explanation: `Risco elevado detectado (Score: ${score}/100) com indicadores: ${indicators}. Comum em tentativas de phishing e fraude.`,
    recommendation: 'Não responda, não clique em links e não partilhe informações pessoais. Elimine esta mensagem e bloqueie o remetente.'
  }),
  mediumRisk: (indicators: string, score: number) => ({
    explanation: `Padrões suspeitos encontrados (Score: ${score}/100): ${indicators}. Tenha cautela.`,
    recommendation: 'Verifique a identidade do remetente através de canais oficiais antes de tomar qualquer ação. Não clique em links nem partilhe dados sensíveis.'
  }),
  lowRisk: (indicators: string, score: number) => ({
    explanation: indicators ? `Indicadores menores detectados (Score: ${score}/100): ${indicators}, mas o risco geral é baixo.` : `Nenhum indicador de risco significativo detectado (Score: ${score}/100).`,
    recommendation: 'O conteúdo parece seguro, mas sempre verifique a identidade do remetente para pedidos importantes.'
  }),
  noIndicators: {
    explanation: 'Nenhum indicador de risco significativo detectado.',
    recommendation: 'O conteúdo parece seguro, mas sempre verifique a identidade do remetente para pedidos importantes.'
  },
  criticalKeywordTrigger: 'frases críticas de alto risco detectadas',
  collaborativeBasisStatement: 'Esta análise é calculada localmente no seu dispositivo usando heurísticas determinísticas e motor de scoring profissional. Não consulta reportes da comunidade a menos que você execute uma pesquisa separada na base colaborativa.'
};

const PT_LABELS: IndicatorLabels = {
  urgencyLanguage: 'linguagem de urgência',
  multipleUrgency: 'múltiplas palavras de urgência',
  financialRequests: 'pedidos financeiros',
  credentialRequests: 'pedidos de credenciais',
  containsLinks: 'contém links',
  cryptoAddresses: 'endereços de criptomoeda',
  excessivePunctuation: 'pontuação excessiva',
  excessiveCapitalization: 'capitalização excessiva',
  disposableEmail: 'serviço de email descartável',
  suspiciousDomain: 'extensão de domínio suspeita',
  typosquatting: 'possível imitação de domínio',
  excessiveNumbers: 'números excessivos',
  randomPattern: 'padrão aleatório suspeito',
  invalidPhoneFormat: 'formato de telefone inválido',
  tooShort: 'número muito curto',
  tooLong: 'número muito longo',
  suspiciousPattern: 'padrão suspeito',
  invalidCryptoFormat: 'formato de endereço inválido',
  knownScamAddress: 'endereço conhecido em fraudes',
  newAddress: 'endereço novo sem histórico',
  highValueTarget: 'alvo de alto valor',
  highRiskPhrases: 'frases de alto risco',
  mediumRiskPhrases: 'frases de risco médio',
  internalReports: 'denúncias internas',
  publicSourcePresence: 'presença em fontes públicas',
  highReportFrequency: 'frequência elevada de denúncias',
  criticalDictionaryMatches: 'palavras-chave críticas do dicionário de risco',
  criticalTriggerPhrases: 'frases críticas de gatilho detectadas'
};

// English templates
const EN_TEMPLATES: AnalysisTemplates = {
  emptyInput: {
    explanation: 'No content provided.',
    recommendation: 'Please enter content to analyze.'
  },
  invalidFormat: {
    explanation: 'Invalid format.',
    recommendation: 'Please verify the content format.'
  },
  highRisk: (indicators: string, score: number) => ({
    explanation: `High risk detected (Score: ${score}/100) with indicators: ${indicators}. Common in phishing and scam attempts.`,
    recommendation: 'Do not respond, click links, or share any personal information. Delete this message and block the sender.'
  }),
  mediumRisk: (indicators: string, score: number) => ({
    explanation: `Suspicious patterns found (Score: ${score}/100): ${indicators}. Exercise caution.`,
    recommendation: 'Verify sender identity through official channels before taking any action. Do not click links or share sensitive data.'
  }),
  lowRisk: (indicators: string, score: number) => ({
    explanation: indicators ? `Minor indicators detected (Score: ${score}/100): ${indicators}, but overall risk is low.` : `No significant risk indicators detected (Score: ${score}/100).`,
    recommendation: 'Content appears safe, but always verify sender identity for important requests.'
  }),
  noIndicators: {
    explanation: 'No significant risk indicators detected.',
    recommendation: 'Content appears safe, but always verify sender identity for important requests.'
  },
  criticalKeywordTrigger: 'critical high-risk phrases detected',
  collaborativeBasisStatement: 'This analysis is computed locally on your device using deterministic heuristics and professional scoring engine. It does not check community reports unless you perform a separate lookup in the collaborative database.'
};

const EN_LABELS: IndicatorLabels = {
  urgencyLanguage: 'urgency language',
  multipleUrgency: 'multiple urgency keywords',
  financialRequests: 'financial requests',
  credentialRequests: 'credential requests',
  containsLinks: 'contains links',
  cryptoAddresses: 'cryptocurrency addresses',
  excessivePunctuation: 'excessive punctuation',
  excessiveCapitalization: 'excessive capitalization',
  disposableEmail: 'disposable email service',
  suspiciousDomain: 'suspicious domain extension',
  typosquatting: 'possible domain impersonation',
  excessiveNumbers: 'excessive numbers',
  randomPattern: 'suspicious random pattern',
  invalidPhoneFormat: 'invalid phone format',
  tooShort: 'number too short',
  tooLong: 'number too long',
  suspiciousPattern: 'suspicious pattern',
  invalidCryptoFormat: 'invalid address format',
  knownScamAddress: 'known scam address',
  newAddress: 'new address with no history',
  highValueTarget: 'high-value target',
  highRiskPhrases: 'high-risk phrases',
  mediumRiskPhrases: 'medium-risk phrases',
  internalReports: 'internal reports',
  publicSourcePresence: 'public source presence',
  highReportFrequency: 'high report frequency',
  criticalDictionaryMatches: 'critical risk dictionary keywords',
  criticalTriggerPhrases: 'critical trigger phrases detected'
};

// Language selector helper
function getTemplates(language: string): AnalysisTemplates {
  switch (language.toLowerCase()) {
    case 'en': return EN_TEMPLATES;
    case 'pt':
    default: return PT_TEMPLATES;
  }
}

function getLabels(language: string): IndicatorLabels {
  switch (language.toLowerCase()) {
    case 'en': return EN_LABELS;
    case 'pt':
    default: return PT_LABELS;
  }
}

// Urgency keywords (multilingual)
const URGENCY_KEYWORDS = [
  'urgente', 'imediatamente', 'agora', 'já', 'hoje', 'rápido', 'atenção', 'alerta', 'importante',
  'urgent', 'immediately', 'now', 'today', 'quick', 'attention', 'alert', 'important',
];

// Financial keywords (multilingual)
const FINANCIAL_KEYWORDS = [
  'pagamento', 'transferência', 'conta', 'banco', 'cartão', 'dinheiro', 'euros', 'reais', 'pagar', 'fatura',
  'débito', 'crédito', 'saldo', 'taxa', 'multa', 'cobrança', 'reembolso', 'devolução',
  'payment', 'transfer', 'account', 'bank', 'card', 'money', 'dollars', 'pay', 'invoice',
  'debit', 'credit', 'balance', 'fee', 'fine', 'charge', 'refund', 'return',
];

// Credential keywords (multilingual)
const CREDENTIAL_KEYWORDS = [
  'senha', 'password', 'palavra-passe', 'código', 'pin', 'verificação', 'confirmar', 'autenticação',
  'credenciais', 'login', 'acesso', 'dados pessoais', 'informações pessoais',
  'code', 'verification', 'confirm', 'authentication',
  'credentials', 'access', 'personal data', 'personal information',
];

// Crypto address patterns
const CRYPTO_ADDRESS_PATTERNS = [
  /\b(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,62}\b/i, // Bitcoin
  /\b0x[a-fA-F0-9]{40}\b/, // Ethereum
  /\b[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}\b/, // Litecoin
  /\bD{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}\b/, // Dogecoin
];

// URL pattern
const URL_PATTERN = /https?:\/\/[^\s]+/gi;

/**
 * Helper to find matching phrase patterns from HighRiskPhrasePattern array
 */
function findMatchingPhrases(content: string, patterns: HighRiskPhrasePattern[]): string[] {
  const normalized = normalizeText(content);
  const matches: string[] = [];
  
  for (const pattern of patterns) {
    const allFragmentsPresent = pattern.fragments.every(fragment => 
      normalized.includes(normalizeText(fragment))
    );
    if (allFragmentsPresent) {
      matches.push(pattern.fragments.join(' '));
    }
  }
  
  return matches;
}

/**
 * Compute cumulative risk_dictionary score for message text only
 * Each occurrence increases score cumulatively
 */
function computeDictionaryRiskScore(content: string): number {
  let dictionaryScore = 0;
  
  // Flatten all dictionary groups into a single array
  const allDictionaryKeywords = Object.values(risk_dictionary.groups).flat();
  
  // Count all occurrences cumulatively
  const occurrenceCount = countKeywordOccurrences(content, allDictionaryKeywords);
  
  // Each occurrence adds to the score (weight: 5 points per occurrence)
  dictionaryScore = occurrenceCount * 5;
  
  return dictionaryScore;
}

/**
 * Count critical trigger phrase matches in message text
 * Returns count of unique trigger phrases detected (case-insensitive, accent-insensitive)
 */
function countCriticalTriggers(content: string): number {
  const normalized = normalizeText(content);
  let triggerCount = 0;
  
  for (const trigger of MESSAGE_CRITICAL_TRIGGERS) {
    const normalizedTrigger = normalizeText(trigger);
    if (normalized.includes(normalizedTrigger)) {
      triggerCount++;
    }
  }
  
  return triggerCount;
}

/**
 * Core analysis function used by all specialized analyzers
 */
function analyzeContent(
  content: string,
  language: string = 'pt',
  internalReportCount: number = 0,
  publicSourcePresent: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);

  if (!content || content.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      explanation: templates.emptyInput.explanation,
      recommendation: templates.emptyInput.recommendation,
      sources: [],
      collaborativeBasis: {
        statement: templates.collaborativeBasisStatement
      }
    };
  }

  const normalized = normalizeText(content);
  const indicators: string[] = [];

  // Initialize risk factors with boolean flags
  let hasHighRisk = false;
  let hasMediumRisk = false;

  // Check for high-risk phrase patterns
  const highRiskMatches = findMatchingPhrases(content, HIGH_RISK_PHRASE_PATTERNS);
  if (highRiskMatches.length > 0) {
    hasHighRisk = true;
    indicators.push(labels.highRiskPhrases);
  }

  // Check for medium-risk phrase patterns
  const mediumRiskMatches = findMatchingPhrases(content, MEDIUM_RISK_PHRASE_PATTERNS);
  if (mediumRiskMatches.length > 0) {
    hasMediumRisk = true;
    indicators.push(labels.mediumRiskPhrases);
  }

  // Check urgency language
  const urgencyMatches = findMatchingKeywords(content, URGENCY_KEYWORDS);
  if (urgencyMatches.length > 0) {
    if (urgencyMatches.length >= 3) {
      hasHighRisk = true;
      indicators.push(labels.multipleUrgency);
    } else {
      hasMediumRisk = true;
      indicators.push(labels.urgencyLanguage);
    }
  }

  // Check financial requests
  const financialMatches = findMatchingKeywords(content, FINANCIAL_KEYWORDS);
  if (financialMatches.length > 0) {
    hasHighRisk = true;
    indicators.push(labels.financialRequests);
  }

  // Check credential requests
  const credentialMatches = findMatchingKeywords(content, CREDENTIAL_KEYWORDS);
  if (credentialMatches.length > 0) {
    hasHighRisk = true;
    indicators.push(labels.credentialRequests);
  }

  // Check for links
  const urlMatches = content.match(URL_PATTERN);
  if (urlMatches && urlMatches.length > 0) {
    hasHighRisk = true;
    indicators.push(labels.containsLinks);
  }

  // Check for crypto addresses
  const hasCryptoAddress = CRYPTO_ADDRESS_PATTERNS.some(pattern => pattern.test(content));
  if (hasCryptoAddress) {
    hasHighRisk = true;
    indicators.push(labels.cryptoAddresses);
  }

  // Check excessive punctuation
  const punctuationCount = (content.match(/[!?]{2,}/g) || []).length;
  if (punctuationCount >= 3) {
    hasMediumRisk = true;
    indicators.push(labels.excessivePunctuation);
  }

  // Check excessive capitalization
  const capsRatio = (content.match(/[A-Z]/g) || []).length / content.length;
  if (capsRatio > 0.5 && content.length > 20) {
    hasMediumRisk = true;
    indicators.push(labels.excessiveCapitalization);
  }

  // Add internal reports indicator if present
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source indicator if present
  if (publicSourcePresent) {
    indicators.push(labels.publicSourcePresence);
  }

  // Add high frequency indicator if applicable
  const isHighFrequency = internalReportCount >= 10;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  // Build risk factors for scoring
  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: hasHighRisk,
    hasMediumRiskKeywords: hasMediumRisk,
    internalReportCount,
    hasExternalPublicSource: publicSourcePresent,
    isHighReportFrequency: isHighFrequency
  };

  // Compute aggregated risk score (0-100)
  let riskScore = computeRiskScore(riskFactors);
  
  // Apply critical trigger override AFTER normal heuristic scoring
  // This is the new critical trigger threshold logic
  const criticalTriggerCount = countCriticalTriggers(content);
  if (criticalTriggerCount > 0) {
    indicators.push(`${labels.criticalTriggerPhrases} (${criticalTriggerCount})`);
    
    // Apply minimum thresholds based on trigger count
    if (criticalTriggerCount === 1) {
      // 1 trigger: minimum 85%
      riskScore = Math.max(riskScore, 85);
    } else if (criticalTriggerCount === 2) {
      // 2 triggers: minimum 92%
      riskScore = Math.max(riskScore, 92);
    } else {
      // 3+ triggers: force 100%
      riskScore = 100;
    }
  }
  
  const risk = scoreToRiskLevel(riskScore);

  // Generate explanation and recommendation
  const indicatorText = indicators.length > 0 ? indicators.join(', ') : '';
  let explanation: string;
  let recommendation: string;

  if (risk === 'High') {
    const result = templates.highRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else if (risk === 'Medium') {
    const result = templates.mediumRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else {
    const result = templates.lowRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  }

  return {
    risk,
    riskScore,
    explanation,
    recommendation,
    sources: [],
    collaborativeBasis: {
      statement: templates.collaborativeBasisStatement
    }
  };
}

/**
 * Analyze message text (SMS, WhatsApp, email body, etc.)
 * This is the primary entry point for message text analysis
 */
export function analyzeMessage(
  message: string,
  language: string = 'pt',
  internalReportCount: number = 0,
  publicSourcePresent: boolean = false
): StructuredAnalysisResult {
  return analyzeContent(message, language, internalReportCount, publicSourcePresent);
}

/**
 * Analyze email address
 * Does NOT apply critical trigger overrides (message-text only)
 */
export function analyzeEmail(
  email: string,
  language: string = 'pt',
  internalReportCount: number = 0,
  publicSourcePresent: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);

  if (!email || email.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      explanation: templates.emptyInput.explanation,
      recommendation: templates.emptyInput.recommendation,
      sources: [],
      collaborativeBasis: {
        statement: templates.collaborativeBasisStatement
      }
    };
  }

  const indicators: string[] = [];
  let hasHighRisk = false;
  let hasMediumRisk = false;

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      risk: 'Low',
      riskScore: 0,
      explanation: templates.invalidFormat.explanation,
      recommendation: templates.invalidFormat.recommendation,
      sources: [],
      collaborativeBasis: {
        statement: templates.collaborativeBasisStatement
      }
    };
  }

  const [localPart, domain] = email.toLowerCase().split('@');

  // Check for disposable email services
  const disposableDomains = ['tempmail.com', 'guerrillamail.com', '10minutemail.com', 'throwaway.email'];
  if (disposableDomains.some(d => domain.includes(d))) {
    hasHighRisk = true;
    indicators.push(labels.disposableEmail);
  }

  // Check for suspicious TLDs
  const suspiciousTlds = ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top'];
  if (suspiciousTlds.some(tld => domain.endsWith(tld))) {
    hasMediumRisk = true;
    indicators.push(labels.suspiciousDomain);
  }

  // Check for typosquatting (common brand impersonation)
  const legitimateDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com'];
  const similarDomain = legitimateDomains.find(legit => {
    const distance = levenshteinDistance(domain, legit);
    return distance > 0 && distance <= 2;
  });
  if (similarDomain) {
    hasHighRisk = true;
    indicators.push(labels.typosquatting);
  }

  // Check for excessive numbers in local part
  const numberCount = (localPart.match(/\d/g) || []).length;
  if (numberCount > localPart.length * 0.5) {
    hasMediumRisk = true;
    indicators.push(labels.excessiveNumbers);
  }

  // Check for random-looking patterns
  const hasRandomPattern = /[a-z]{10,}/.test(localPart) && !/[aeiou]{2}/.test(localPart);
  if (hasRandomPattern) {
    hasMediumRisk = true;
    indicators.push(labels.randomPattern);
  }

  // Add internal reports indicator if present
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source indicator if present
  if (publicSourcePresent) {
    indicators.push(labels.publicSourcePresence);
  }

  const isHighFrequency = internalReportCount >= 10;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: hasHighRisk,
    hasMediumRiskKeywords: hasMediumRisk,
    internalReportCount,
    hasExternalPublicSource: publicSourcePresent,
    isHighReportFrequency: isHighFrequency
  };

  const riskScore = computeRiskScore(riskFactors);
  const risk = scoreToRiskLevel(riskScore);

  const indicatorText = indicators.length > 0 ? indicators.join(', ') : '';
  let explanation: string;
  let recommendation: string;

  if (risk === 'High') {
    const result = templates.highRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else if (risk === 'Medium') {
    const result = templates.mediumRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else {
    const result = templates.lowRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  }

  return {
    risk,
    riskScore,
    explanation,
    recommendation,
    sources: [],
    collaborativeBasis: {
      statement: templates.collaborativeBasisStatement
    }
  };
}

/**
 * Analyze phone number
 * Does NOT apply critical trigger overrides (message-text only)
 */
export function analyzePhone(
  phone: string,
  language: string = 'pt',
  internalReportCount: number = 0,
  publicSourcePresent: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);

  if (!phone || phone.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      explanation: templates.emptyInput.explanation,
      recommendation: templates.emptyInput.recommendation,
      sources: [],
      collaborativeBasis: {
        statement: templates.collaborativeBasisStatement
      }
    };
  }

  const indicators: string[] = [];
  let hasHighRisk = false;
  let hasMediumRisk = false;

  // Clean phone number
  const cleaned = phone.replace(/\D/g, '');

  // Basic validation
  if (cleaned.length < 7) {
    hasMediumRisk = true;
    indicators.push(labels.tooShort);
  }

  if (cleaned.length > 15) {
    hasMediumRisk = true;
    indicators.push(labels.tooLong);
  }

  // Check for suspicious patterns
  const hasRepeatingDigits = /(\d)\1{5,}/.test(cleaned);
  const hasSequentialDigits = /(0123|1234|2345|3456|4567|5678|6789|9876|8765|7654|6543|5432|4321|3210)/.test(cleaned);
  
  if (hasRepeatingDigits || hasSequentialDigits) {
    hasMediumRisk = true;
    indicators.push(labels.suspiciousPattern);
  }

  // Add internal reports indicator if present
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source indicator if present
  if (publicSourcePresent) {
    indicators.push(labels.publicSourcePresence);
  }

  const isHighFrequency = internalReportCount >= 10;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: hasHighRisk,
    hasMediumRiskKeywords: hasMediumRisk,
    internalReportCount,
    hasExternalPublicSource: publicSourcePresent,
    isHighReportFrequency: isHighFrequency
  };

  const riskScore = computeRiskScore(riskFactors);
  const risk = scoreToRiskLevel(riskScore);

  const indicatorText = indicators.length > 0 ? indicators.join(', ') : '';
  let explanation: string;
  let recommendation: string;

  if (risk === 'High') {
    const result = templates.highRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else if (risk === 'Medium') {
    const result = templates.mediumRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else {
    const result = templates.lowRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  }

  return {
    risk,
    riskScore,
    explanation,
    recommendation,
    sources: [],
    collaborativeBasis: {
      statement: templates.collaborativeBasisStatement
    }
  };
}

/**
 * Analyze cryptocurrency address
 * Does NOT apply critical trigger overrides (message-text only)
 */
export function analyzeCrypto(
  address: string,
  language: string = 'pt',
  internalReportCount: number = 0,
  publicSourcePresent: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);

  if (!address || address.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      explanation: templates.emptyInput.explanation,
      recommendation: templates.emptyInput.recommendation,
      sources: [],
      collaborativeBasis: {
        statement: templates.collaborativeBasisStatement
      }
    };
  }

  const indicators: string[] = [];
  let hasHighRisk = false;
  let hasMediumRisk = false;

  // Validate crypto address format
  const isValidBitcoin = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,62}$/.test(address);
  const isValidEthereum = /^0x[a-fA-F0-9]{40}$/.test(address);
  const isValidLitecoin = /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/.test(address);
  const isValidDogecoin = /^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/.test(address);

  if (!isValidBitcoin && !isValidEthereum && !isValidLitecoin && !isValidDogecoin) {
    hasMediumRisk = true;
    indicators.push(labels.invalidCryptoFormat);
  }

  // Check against known scam addresses (placeholder - would need real database)
  const knownScamAddresses = [
    '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', // Example placeholder
  ];
  if (knownScamAddresses.includes(address)) {
    hasHighRisk = true;
    indicators.push(labels.knownScamAddress);
  }

  // Add internal reports indicator if present
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source indicator if present
  if (publicSourcePresent) {
    indicators.push(labels.publicSourcePresence);
  }

  const isHighFrequency = internalReportCount >= 10;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: hasHighRisk,
    hasMediumRiskKeywords: hasMediumRisk,
    internalReportCount,
    hasExternalPublicSource: publicSourcePresent,
    isHighReportFrequency: isHighFrequency
  };

  const riskScore = computeRiskScore(riskFactors);
  const risk = scoreToRiskLevel(riskScore);

  const indicatorText = indicators.length > 0 ? indicators.join(', ') : '';
  let explanation: string;
  let recommendation: string;

  if (risk === 'High') {
    const result = templates.highRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else if (risk === 'Medium') {
    const result = templates.mediumRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  } else {
    const result = templates.lowRisk(indicatorText, riskScore);
    explanation = result.explanation;
    recommendation = result.recommendation;
  }

  return {
    risk,
    riskScore,
    explanation,
    recommendation,
    sources: [],
    collaborativeBasis: {
      statement: templates.collaborativeBasisStatement
    }
  };
}

// Helper: Levenshtein distance for typosquatting detection
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
