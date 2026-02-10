// Frontend-only structured fraud analysis engine
// Implements deterministic heuristic rules for message/email/phone/crypto analysis
// Returns structured results: { risk: 'Low'|'Medium'|'High', explanation: string, recommendation: string }
// Now supports full localization - all outputs in the selected UI language

export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface StructuredAnalysisResult {
  risk: RiskLevel;
  explanation: string;
  recommendation: string;
}

// Language-specific templates for analysis outputs
interface AnalysisTemplates {
  emptyInput: { explanation: string; recommendation: string };
  invalidFormat: { explanation: string; recommendation: string };
  highRisk: (indicators: string) => { explanation: string; recommendation: string };
  mediumRisk: (indicators: string) => { explanation: string; recommendation: string };
  lowRisk: (indicators: string) => { explanation: string; recommendation: string };
  noIndicators: { explanation: string; recommendation: string };
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
  highRisk: (indicators: string) => ({
    explanation: `Risco elevado detectado com indicadores: ${indicators}. Comum em tentativas de phishing e fraude.`,
    recommendation: 'Não responda, não clique em links e não partilhe informações pessoais. Elimine esta mensagem e bloqueie o remetente.'
  }),
  mediumRisk: (indicators: string) => ({
    explanation: `Padrões suspeitos encontrados: ${indicators}. Tenha cautela.`,
    recommendation: 'Verifique a identidade do remetente através de canais oficiais antes de tomar qualquer ação. Não clique em links nem partilhe dados sensíveis.'
  }),
  lowRisk: (indicators: string) => ({
    explanation: indicators ? `Indicadores menores detectados: ${indicators}, mas o risco geral é baixo.` : 'Nenhum indicador de risco significativo detectado.',
    recommendation: 'O conteúdo parece seguro, mas sempre verifique a identidade do remetente para pedidos importantes.'
  }),
  noIndicators: {
    explanation: 'Nenhum indicador de risco significativo detectado.',
    recommendation: 'O conteúdo parece seguro, mas sempre verifique a identidade do remetente para pedidos importantes.'
  }
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
  highRisk: (indicators: string) => ({
    explanation: `High risk detected with indicators: ${indicators}. Common in phishing and scam attempts.`,
    recommendation: 'Do not respond, click links, or share any personal information. Delete this message and block the sender.'
  }),
  mediumRisk: (indicators: string) => ({
    explanation: `Suspicious patterns found: ${indicators}. Exercise caution.`,
    recommendation: 'Verify sender identity through official channels before taking any action. Do not click links or share sensitive data.'
  }),
  lowRisk: (indicators: string) => ({
    explanation: indicators ? `Minor indicators detected: ${indicators}, but overall risk is low.` : 'No significant risk indicators detected.',
    recommendation: 'Content appears safe, but always verify sender identity for important requests.'
  }),
  noIndicators: {
    explanation: 'No significant risk indicators detected.',
    recommendation: 'Content appears safe, but always verify sender identity for important requests.'
  }
};

// Spanish templates
const ES_TEMPLATES: AnalysisTemplates = {
  emptyInput: {
    explanation: 'Ningún contenido proporcionado.',
    recommendation: 'Por favor, ingrese el contenido para analizar.'
  },
  invalidFormat: {
    explanation: 'Formato inválido.',
    recommendation: 'Por favor, verifique el formato del contenido.'
  },
  highRisk: (indicators: string) => ({
    explanation: `Riesgo alto detectado con indicadores: ${indicators}. Común en intentos de phishing y fraude.`,
    recommendation: 'No responda, no haga clic en enlaces ni comparta información personal. Elimine este mensaje y bloquee al remitente.'
  }),
  mediumRisk: (indicators: string) => ({
    explanation: `Patrones sospechosos encontrados: ${indicators}. Tenga precaución.`,
    recommendation: 'Verifique la identidad del remitente a través de canales oficiales antes de tomar cualquier acción. No haga clic en enlaces ni comparta datos sensibles.'
  }),
  lowRisk: (indicators: string) => ({
    explanation: indicators ? `Indicadores menores detectados: ${indicators}, pero el riesgo general es bajo.` : 'No se detectaron indicadores de riesgo significativos.',
    recommendation: 'El contenido parece seguro, pero siempre verifique la identidad del remitente para solicitudes importantes.'
  }),
  noIndicators: {
    explanation: 'No se detectaron indicadores de riesgo significativos.',
    recommendation: 'El contenido parece seguro, pero siempre verifique la identidad del remitente para solicitudes importantes.'
  }
};

// French templates
const FR_TEMPLATES: AnalysisTemplates = {
  emptyInput: {
    explanation: 'Aucun contenu fourni.',
    recommendation: 'Veuillez saisir le contenu à analyser.'
  },
  invalidFormat: {
    explanation: 'Format invalide.',
    recommendation: 'Veuillez vérifier le format du contenu.'
  },
  highRisk: (indicators: string) => ({
    explanation: `Risque élevé détecté avec indicateurs: ${indicators}. Courant dans les tentatives de phishing et de fraude.`,
    recommendation: 'Ne répondez pas, ne cliquez pas sur les liens et ne partagez aucune information personnelle. Supprimez ce message et bloquez l\'expéditeur.'
  }),
  mediumRisk: (indicators: string) => ({
    explanation: `Modèles suspects trouvés: ${indicators}. Soyez prudent.`,
    recommendation: 'Vérifiez l\'identité de l\'expéditeur via des canaux officiels avant toute action. Ne cliquez pas sur les liens et ne partagez pas de données sensibles.'
  }),
  lowRisk: (indicators: string) => ({
    explanation: indicators ? `Indicateurs mineurs détectés: ${indicators}, mais le risque global est faible.` : 'Aucun indicateur de risque significatif détecté.',
    recommendation: 'Le contenu semble sûr, mais vérifiez toujours l\'identité de l\'expéditeur pour les demandes importantes.'
  }),
  noIndicators: {
    explanation: 'Aucun indicateur de risque significatif détecté.',
    recommendation: 'Le contenu semble sûr, mais vérifiez toujours l\'identité de l\'expéditeur pour les demandes importantes.'
  }
};

// Chinese templates
const ZH_TEMPLATES: AnalysisTemplates = {
  emptyInput: {
    explanation: '未提供内容。',
    recommendation: '请输入要分析的内容。'
  },
  invalidFormat: {
    explanation: '格式无效。',
    recommendation: '请验证内容格式。'
  },
  highRisk: (indicators: string) => ({
    explanation: `检测到高风险，指标：${indicators}。常见于网络钓鱼和诈骗尝试。`,
    recommendation: '不要回复、点击链接或分享任何个人信息。删除此消息并屏蔽发件人。'
  }),
  mediumRisk: (indicators: string) => ({
    explanation: `发现可疑模式：${indicators}。请谨慎。`,
    recommendation: '在采取任何行动之前，通过官方渠道验证发件人身份。不要点击链接或分享敏感数据。'
  }),
  lowRisk: (indicators: string) => ({
    explanation: indicators ? `检测到轻微指标：${indicators}，但总体风险较低。` : '未检测到重大风险指标。',
    recommendation: '内容似乎安全，但对于重要请求，请始终验证发件人身份。'
  }),
  noIndicators: {
    explanation: '未检测到重大风险指标。',
    recommendation: '内容似乎安全，但对于重要请求，请始终验证发件人身份。'
  }
};

// Arabic templates
const AR_TEMPLATES: AnalysisTemplates = {
  emptyInput: {
    explanation: 'لم يتم تقديم محتوى.',
    recommendation: 'يرجى إدخال المحتوى للتحليل.'
  },
  invalidFormat: {
    explanation: 'تنسيق غير صالح.',
    recommendation: 'يرجى التحقق من تنسيق المحتوى.'
  },
  highRisk: (indicators: string) => ({
    explanation: `تم اكتشاف مخاطر عالية مع المؤشرات: ${indicators}. شائع في محاولات التصيد الاحتيالي والاحتيال.`,
    recommendation: 'لا ترد، لا تنقر على الروابط، ولا تشارك أي معلومات شخصية. احذف هذه الرسالة واحظر المرسل.'
  }),
  mediumRisk: (indicators: string) => ({
    explanation: `تم العثور على أنماط مشبوهة: ${indicators}. توخ الحذر.`,
    recommendation: 'تحقق من هوية المرسل عبر القنوات الرسمية قبل اتخاذ أي إجراء. لا تنقر على الروابط ولا تشارك البيانات الحساسة.'
  }),
  lowRisk: (indicators: string) => ({
    explanation: indicators ? `تم اكتشاف مؤشرات طفيفة: ${indicators}، لكن المخاطر الإجمالية منخفضة.` : 'لم يتم اكتشاف مؤشرات مخاطر كبيرة.',
    recommendation: 'يبدو المحتوى آمنًا، ولكن تحقق دائمًا من هوية المرسل للطلبات المهمة.'
  }),
  noIndicators: {
    explanation: 'لم يتم اكتشاف مؤشرات مخاطر كبيرة.',
    recommendation: 'يبدو المحتوى آمنًا، ولكن تحقق دائمًا من هوية المرسل للطلبات المهمة.'
  }
};

// Russian templates
const RU_TEMPLATES: AnalysisTemplates = {
  emptyInput: {
    explanation: 'Контент не предоставлен.',
    recommendation: 'Пожалуйста, введите контент для анализа.'
  },
  invalidFormat: {
    explanation: 'Неверный формат.',
    recommendation: 'Пожалуйста, проверьте формат контента.'
  },
  highRisk: (indicators: string) => ({
    explanation: `Обнаружен высокий риск с индикаторами: ${indicators}. Часто встречается в попытках фишинга и мошенничества.`,
    recommendation: 'Не отвечайте, не переходите по ссылкам и не делитесь личной информацией. Удалите это сообщение и заблокируйте отправителя.'
  }),
  mediumRisk: (indicators: string) => ({
    explanation: `Обнаружены подозрительные шаблоны: ${indicators}. Будьте осторожны.`,
    recommendation: 'Проверьте личность отправителя через официальные каналы перед любыми действиями. Не переходите по ссылкам и не делитесь конфиденциальными данными.'
  }),
  lowRisk: (indicators: string) => ({
    explanation: indicators ? `Обнаружены незначительные индикаторы: ${indicators}, но общий риск низкий.` : 'Значительных индикаторов риска не обнаружено.',
    recommendation: 'Контент кажется безопасным, но всегда проверяйте личность отправителя для важных запросов.'
  }),
  noIndicators: {
    explanation: 'Значительных индикаторов риска не обнаружено.',
    recommendation: 'Контент кажется безопасным, но всегда проверяйте личность отправителя для важных запросов.'
  }
};

// Template selector
function getTemplates(language: string): AnalysisTemplates {
  switch (language) {
    case 'pt': return PT_TEMPLATES;
    case 'en': return EN_TEMPLATES;
    case 'es': return ES_TEMPLATES;
    case 'fr': return FR_TEMPLATES;
    case 'zh': return ZH_TEMPLATES;
    case 'ar': return AR_TEMPLATES;
    case 'ru': return RU_TEMPLATES;
    default: return EN_TEMPLATES;
  }
}

// ============================================================================
// MESSAGE ANALYSIS
// ============================================================================

// High-risk keywords for Portuguese (mandatory override to High risk)
const PT_HIGH_RISK_KEYWORDS = [
  'dinheiro',
  'lucro',
  'promoção',
  'oportunidade',
  'grátis',
  'gratis', // without accent
  'encontros',
  'investimento',
  'criptomoeda'
];

// Normalize text for accent-insensitive matching
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
}

const MESSAGE_PATTERNS = {
  urgencyKeywords: [
    'urgente', 'imediatamente', 'agora', 'rápido', 'última chance', 'expira',
    'urgent', 'immediately', 'now', 'fast', 'last chance', 'expires',
    'ação imediata', 'immediate action', 'conta bloqueada', 'account blocked'
  ],
  financialKeywords: [
    'dinheiro', 'pagamento', 'transferência', 'conta bancária', 'cartão',
    'money', 'payment', 'transfer', 'bank account', 'card', 'credit',
    'pix', 'mbway', 'paypal', 'bitcoin', 'crypto', 'investimento', 'investment'
  ],
  credentialRequests: [
    'senha', 'password', 'pin', 'código', 'verificação', 'verification',
    'confirme', 'confirm', 'dados pessoais', 'personal data', 'login'
  ],
  suspiciousUrls: /https?:\/\/[^\s]+/gi,
  cryptoAddresses: /\b(0x[a-fA-F0-9]{40}|[13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[a-z0-9]{39,59})\b/g,
  excessivePunctuation: /[!?]{3,}/g,
  allCaps: /\b[A-Z]{5,}\b/g,
};

export function analyzeMessage(message: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  
  if (!message || message.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput
    };
  }

  // Safety: handle very long messages
  const safeMessage = message.slice(0, 10000);
  const lowerMessage = safeMessage.toLowerCase();
  const normalizedMessage = normalizeText(safeMessage);
  
  // MANDATORY HIGH-RISK OVERRIDE: Check for Portuguese high-risk keywords
  const hasHighRiskKeyword = PT_HIGH_RISK_KEYWORDS.some(keyword => 
    normalizedMessage.includes(normalizeText(keyword))
  );
  
  if (hasHighRiskKeyword) {
    // Force High risk for messages containing these keywords
    const keywordIndicators = language === 'pt' 
      ? 'palavras-chave de alto risco (dinheiro, lucro, promoção, oportunidade, grátis, encontros, investimento, criptomoeda)'
      : 'high-risk keywords (money, profit, promotion, opportunity, free, dating, investment, cryptocurrency)';
    
    return {
      risk: 'High',
      ...templates.highRisk(keywordIndicators)
    };
  }
  
  let riskScore = 0;
  const indicators: string[] = [];

  // Check urgency language (high risk indicator)
  const urgencyCount = MESSAGE_PATTERNS.urgencyKeywords.filter(kw => 
    lowerMessage.includes(kw.toLowerCase())
  ).length;
  if (urgencyCount >= 2) {
    riskScore += 3;
    indicators.push(language === 'pt' ? 'múltiplas palavras de urgência' : 'multiple urgency keywords');
  } else if (urgencyCount === 1) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'linguagem de urgência' : 'urgency language');
  }

  // Check financial keywords
  const financialCount = MESSAGE_PATTERNS.financialKeywords.filter(kw => 
    lowerMessage.includes(kw.toLowerCase())
  ).length;
  if (financialCount >= 2) {
    riskScore += 2;
    indicators.push(language === 'pt' ? 'pedidos financeiros' : 'financial requests');
  } else if (financialCount === 1) {
    riskScore += 1;
  }

  // Check credential requests (very high risk)
  const credentialCount = MESSAGE_PATTERNS.credentialRequests.filter(kw => 
    lowerMessage.includes(kw.toLowerCase())
  ).length;
  if (credentialCount >= 1) {
    riskScore += 3;
    indicators.push(language === 'pt' ? 'pedidos de credenciais' : 'credential requests');
  }

  // Check for URLs
  const urls = safeMessage.match(MESSAGE_PATTERNS.suspiciousUrls);
  if (urls && urls.length > 0) {
    riskScore += 2;
    indicators.push(language === 'pt' ? 'contém links' : 'contains links');
  }

  // Check for crypto addresses
  const cryptoAddresses = safeMessage.match(MESSAGE_PATTERNS.cryptoAddresses);
  if (cryptoAddresses && cryptoAddresses.length > 0) {
    riskScore += 2;
    indicators.push(language === 'pt' ? 'endereços de criptomoeda' : 'cryptocurrency addresses');
  }

  // Check excessive punctuation
  const excessivePunct = safeMessage.match(MESSAGE_PATTERNS.excessivePunctuation);
  if (excessivePunct && excessivePunct.length >= 2) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'pontuação excessiva' : 'excessive punctuation');
  }

  // Check all caps (shouting)
  const allCaps = safeMessage.match(MESSAGE_PATTERNS.allCaps);
  if (allCaps && allCaps.length >= 3) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'capitalização excessiva' : 'excessive capitalization');
  }

  // Determine risk level and generate response
  const indicatorText = indicators.join(', ');
  
  if (riskScore >= 6) {
    return {
      risk: 'High',
      ...templates.highRisk(indicatorText)
    };
  } else if (riskScore >= 3) {
    return {
      risk: 'Medium',
      ...templates.mediumRisk(indicatorText)
    };
  } else {
    return {
      risk: 'Low',
      ...(indicators.length > 0 ? templates.lowRisk(indicatorText) : templates.noIndicators)
    };
  }
}

// ============================================================================
// EMAIL ANALYSIS
// ============================================================================

const EMAIL_PATTERNS = {
  suspiciousDomains: [
    'tempmail', 'throwaway', 'guerrillamail', 'mailinator', 'maildrop',
    'yopmail', '10minutemail', 'fakeinbox', 'trashmail', 'getnada'
  ],
  suspiciousTlds: ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top', '.work', '.click'],
  typosquatPatterns: [
    'paypa1', 'paypai', 'arnaz0n', 'arnazon', 'micr0soft', 'g00gle',
    'app1e', 'netf1ix', 'faceb00k', 'tw1tter', 'inst4gram', 'goog1e'
  ],
  excessiveNumbers: /\d{4,}/,
  randomPattern: /[a-z0-9]{20,}/i,
};

export function analyzeEmail(email: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  
  if (!email || email.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput
    };
  }

  const safeEmail = email.trim().slice(0, 500).toLowerCase();
  const parts = safeEmail.split('@');
  
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return {
      risk: 'Low',
      ...templates.invalidFormat
    };
  }

  const [localPart, domain] = parts;
  let riskScore = 0;
  const indicators: string[] = [];

  // Check for temporary/disposable email services
  for (const suspDomain of EMAIL_PATTERNS.suspiciousDomains) {
    if (domain.includes(suspDomain)) {
      riskScore += 3;
      indicators.push(language === 'pt' ? 'serviço de email descartável' : 'disposable email service');
      break;
    }
  }

  // Check for suspicious TLDs
  for (const tld of EMAIL_PATTERNS.suspiciousTlds) {
    if (domain.endsWith(tld)) {
      riskScore += 2;
      indicators.push(language === 'pt' ? 'extensão de domínio suspeita' : 'suspicious domain extension');
      break;
    }
  }

  // Check for typosquatting/impersonation
  for (const pattern of EMAIL_PATTERNS.typosquatPatterns) {
    if (domain.includes(pattern) || localPart.includes(pattern)) {
      riskScore += 3;
      indicators.push(language === 'pt' ? 'possível personificação de marca' : 'possible brand impersonation');
      break;
    }
  }

  // Check for excessive numbers
  if (EMAIL_PATTERNS.excessiveNumbers.test(localPart)) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'padrão numérico incomum' : 'unusual number pattern');
  }

  // Check for very long random strings
  if (localPart.length > 20 && EMAIL_PATTERNS.randomPattern.test(localPart)) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'padrão de caracteres aleatórios' : 'random character pattern');
  }

  // Check for very short local part
  if (localPart.length <= 2) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'endereço invulgarmente curto' : 'unusually short address');
  }

  // Determine risk level
  const indicatorText = indicators.join(', ');
  
  if (riskScore >= 5) {
    return {
      risk: 'High',
      ...templates.highRisk(indicatorText)
    };
  } else if (riskScore >= 2) {
    return {
      risk: 'Medium',
      ...templates.mediumRisk(indicatorText)
    };
  } else {
    return {
      risk: 'Low',
      ...(indicators.length > 0 ? templates.lowRisk(indicatorText) : templates.noIndicators)
    };
  }
}

// ============================================================================
// PHONE ANALYSIS
// ============================================================================

const PHONE_PATTERNS = {
  // Common scam prefixes (international)
  scamPrefixes: [
    '+234', '+233', '+254', // West/East Africa (common in advance-fee fraud)
    '+92', '+91',           // Pakistan/India (common in tech support scams)
    '+62',                  // Indonesia
  ],
  // Premium rate prefixes (varies by country, these are examples)
  premiumPrefixes: ['900', '901', '902', '903', '904', '905'],
  // Suspicious patterns
  repeatingDigits: /(\d)\1{4,}/,
  allSameDigit: /^(\d)\1+$/,
  sequential: /(0123|1234|2345|3456|4567|5678|6789|9876|8765|7654|6543|5432|4321|3210)/,
};

export function analyzePhone(phone: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  
  if (!phone || phone.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput
    };
  }

  const safePhone = phone.trim().slice(0, 50);
  const digitsOnly = safePhone.replace(/\D/g, '');
  
  if (digitsOnly.length < 7) {
    return {
      risk: 'Low',
      ...templates.invalidFormat
    };
  }

  let riskScore = 0;
  const indicators: string[] = [];

  // Check for known scam country codes
  for (const prefix of PHONE_PATTERNS.scamPrefixes) {
    if (safePhone.startsWith(prefix)) {
      riskScore += 3;
      indicators.push(language === 'pt' ? 'código de país de alto risco' : 'high-risk country code');
      break;
    }
  }

  // Check for premium rate numbers
  for (const prefix of PHONE_PATTERNS.premiumPrefixes) {
    if (digitsOnly.startsWith(prefix)) {
      riskScore += 2;
      indicators.push(language === 'pt' ? 'número de tarifa premium' : 'premium rate number');
      break;
    }
  }

  // Check for repeating digits (often fake/test numbers)
  if (PHONE_PATTERNS.repeatingDigits.test(digitsOnly)) {
    riskScore += 2;
    indicators.push(language === 'pt' ? 'padrão de dígitos repetidos' : 'repeating digit pattern');
  }

  // Check if all digits are the same
  if (PHONE_PATTERNS.allSameDigit.test(digitsOnly)) {
    riskScore += 3;
    indicators.push(language === 'pt' ? 'padrão inválido (todos os dígitos iguais)' : 'invalid pattern (all same digit)');
  }

  // Check for sequential patterns
  if (PHONE_PATTERNS.sequential.test(digitsOnly)) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'padrão de dígitos sequenciais' : 'sequential digit pattern');
  }

  // Very long numbers are suspicious
  if (digitsOnly.length > 15) {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'número invulgarmente longo' : 'unusually long number');
  }

  // Determine risk level
  const indicatorText = indicators.join(', ');
  
  if (riskScore >= 5) {
    return {
      risk: 'High',
      ...templates.highRisk(indicatorText)
    };
  } else if (riskScore >= 2) {
    return {
      risk: 'Medium',
      ...templates.mediumRisk(indicatorText)
    };
  } else {
    return {
      risk: 'Low',
      ...(indicators.length > 0 ? templates.lowRisk(indicatorText) : templates.noIndicators)
    };
  }
}

// ============================================================================
// CRYPTO ADDRESS ANALYSIS
// ============================================================================

const CRYPTO_PATTERNS = {
  // Ethereum address
  ethereum: /^0x[a-fA-F0-9]{40}$/,
  // Bitcoin legacy
  bitcoinLegacy: /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/,
  // Bitcoin SegWit
  bitcoinSegwit: /^bc1[a-z0-9]{39,59}$/,
  // Suspicious patterns
  repeatingChars: /(.)\1{6,}/,
  allZeros: /^0x0+$/,
};

export function analyzeCrypto(address: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  
  if (!address || address.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput
    };
  }

  const safeAddress = address.trim().slice(0, 200);
  let riskScore = 0;
  const indicators: string[] = [];
  let addressType = language === 'pt' ? 'desconhecido' : 'unknown';

  // Identify address type
  if (CRYPTO_PATTERNS.ethereum.test(safeAddress)) {
    addressType = 'Ethereum';
  } else if (CRYPTO_PATTERNS.bitcoinLegacy.test(safeAddress)) {
    addressType = language === 'pt' ? 'Bitcoin (Legacy)' : 'Bitcoin (Legacy)';
  } else if (CRYPTO_PATTERNS.bitcoinSegwit.test(safeAddress)) {
    addressType = language === 'pt' ? 'Bitcoin (SegWit)' : 'Bitcoin (SegWit)';
  } else {
    riskScore += 1;
    indicators.push(language === 'pt' ? 'formato não reconhecido' : 'unrecognized format');
  }

  // Check for all zeros (burn address or invalid)
  if (CRYPTO_PATTERNS.allZeros.test(safeAddress)) {
    riskScore += 3;
    indicators.push(language === 'pt' ? 'endereço nulo/queima' : 'null/burn address');
  }

  // Check for excessive repeating characters (suspicious)
  if (CRYPTO_PATTERNS.repeatingChars.test(safeAddress)) {
    riskScore += 2;
    indicators.push(language === 'pt' ? 'repetição incomum de caracteres' : 'unusual character repetition');
  }

  // Very short addresses are invalid
  if (safeAddress.length < 26) {
    riskScore += 2;
    indicators.push(language === 'pt' ? 'endereço demasiado curto' : 'address too short');
  }

  // Check for mixed case in Ethereum (checksum validation would be ideal but complex)
  if (addressType === 'Ethereum') {
    const hasUpperCase = /[A-F]/.test(safeAddress.slice(2));
    const hasLowerCase = /[a-f]/.test(safeAddress.slice(2));
    if (hasUpperCase && hasLowerCase) {
      // Mixed case suggests checksum, which is good
      riskScore -= 1;
    }
  }

  // Determine risk level
  const indicatorText = indicators.join(', ');
  const typeInfo = addressType !== (language === 'pt' ? 'desconhecido' : 'unknown') 
    ? (language === 'pt' ? `Tipo: ${addressType}.` : `Type: ${addressType}.`)
    : '';
  
  if (riskScore >= 4) {
    const explanation = `${templates.highRisk(indicatorText).explanation} ${typeInfo}`.trim();
    return {
      risk: 'High',
      explanation,
      recommendation: templates.highRisk(indicatorText).recommendation
    };
  } else if (riskScore >= 2) {
    const explanation = `${templates.mediumRisk(indicatorText).explanation} ${typeInfo}`.trim();
    return {
      risk: 'Medium',
      explanation,
      recommendation: templates.mediumRisk(indicatorText).recommendation
    };
  } else {
    const baseExplanation = addressType !== (language === 'pt' ? 'desconhecido' : 'unknown')
      ? (language === 'pt' 
          ? `Formato de endereço ${addressType} válido. ${indicators.length > 0 ? `Notas menores: ${indicatorText}.` : ''}`
          : `Valid ${addressType} address format. ${indicators.length > 0 ? `Minor notes: ${indicatorText}.` : ''}`)
      : (language === 'pt' ? 'Formato de endereço parece válido.' : 'Address format appears valid.');
    
    return {
      risk: 'Low',
      explanation: baseExplanation,
      recommendation: language === 'pt' 
        ? 'Sempre verifique endereços de criptomoeda através de múltiplos canais antes de enviar fundos.'
        : 'Always verify cryptocurrency addresses through multiple channels before sending funds.'
    };
  }
}
