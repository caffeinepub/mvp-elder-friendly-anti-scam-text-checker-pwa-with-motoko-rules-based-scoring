// Frontend-only structured fraud analysis engine
// Implements deterministic heuristic rules for message/email/phone/crypto analysis
// Returns structured results: { risk: 'Low'|'Medium'|'High', explanation: string, recommendation: string }
// Supports full localization with critical-keyword High-risk overrides for all languages

import { normalizeText, containsAnyKeyword } from './antifraudTextNormalize';

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
  criticalKeywordTrigger: string; // Localized explanation for critical keyword override
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
  },
  criticalKeywordTrigger: 'palavras-chave críticas de alto risco detectadas'
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
  highValueTarget: 'alvo de alto valor'
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
  },
  criticalKeywordTrigger: 'critical high-risk keywords detected'
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
  highValueTarget: 'high-value target'
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
  },
  criticalKeywordTrigger: 'palabras clave críticas de alto riesgo detectadas'
};

const ES_LABELS: IndicatorLabels = {
  urgencyLanguage: 'lenguaje de urgencia',
  multipleUrgency: 'múltiples palabras de urgencia',
  financialRequests: 'solicitudes financieras',
  credentialRequests: 'solicitudes de credenciales',
  containsLinks: 'contiene enlaces',
  cryptoAddresses: 'direcciones de criptomoneda',
  excessivePunctuation: 'puntuación excesiva',
  excessiveCapitalization: 'capitalización excesiva',
  disposableEmail: 'servicio de correo desechable',
  suspiciousDomain: 'extensión de dominio sospechosa',
  typosquatting: 'posible imitación de dominio',
  excessiveNumbers: 'números excesivos',
  randomPattern: 'patrón aleatorio sospechoso',
  invalidPhoneFormat: 'formato de teléfono inválido',
  tooShort: 'número demasiado corto',
  tooLong: 'número demasiado largo',
  suspiciousPattern: 'patrón sospechoso',
  invalidCryptoFormat: 'formato de dirección inválido',
  knownScamAddress: 'dirección conocida en fraudes',
  newAddress: 'dirección nueva sin historial',
  highValueTarget: 'objetivo de alto valor'
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
  },
  criticalKeywordTrigger: 'mots-clés critiques à haut risque détectés'
};

const FR_LABELS: IndicatorLabels = {
  urgencyLanguage: 'langage d\'urgence',
  multipleUrgency: 'plusieurs mots d\'urgence',
  financialRequests: 'demandes financières',
  credentialRequests: 'demandes d\'identifiants',
  containsLinks: 'contient des liens',
  cryptoAddresses: 'adresses de cryptomonnaie',
  excessivePunctuation: 'ponctuation excessive',
  excessiveCapitalization: 'capitalisation excessive',
  disposableEmail: 'service de courrier jetable',
  suspiciousDomain: 'extension de domaine suspecte',
  typosquatting: 'possible imitation de domaine',
  excessiveNumbers: 'nombres excessifs',
  randomPattern: 'motif aléatoire suspect',
  invalidPhoneFormat: 'format de téléphone invalide',
  tooShort: 'numéro trop court',
  tooLong: 'numéro trop long',
  suspiciousPattern: 'motif suspect',
  invalidCryptoFormat: 'format d\'adresse invalide',
  knownScamAddress: 'adresse connue dans les fraudes',
  newAddress: 'nouvelle adresse sans historique',
  highValueTarget: 'cible de grande valeur'
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
  },
  criticalKeywordTrigger: '检测到关键高风险关键词'
};

const ZH_LABELS: IndicatorLabels = {
  urgencyLanguage: '紧急语言',
  multipleUrgency: '多个紧急关键词',
  financialRequests: '财务请求',
  credentialRequests: '凭证请求',
  containsLinks: '包含链接',
  cryptoAddresses: '加密货币地址',
  excessivePunctuation: '过度标点',
  excessiveCapitalization: '过度大写',
  disposableEmail: '一次性电子邮件服务',
  suspiciousDomain: '可疑域名扩展',
  typosquatting: '可能的域名仿冒',
  excessiveNumbers: '过多数字',
  randomPattern: '可疑随机模式',
  invalidPhoneFormat: '无效电话格式',
  tooShort: '号码太短',
  tooLong: '号码太长',
  suspiciousPattern: '可疑模式',
  invalidCryptoFormat: '无效地址格式',
  knownScamAddress: '已知诈骗地址',
  newAddress: '无历史记录的新地址',
  highValueTarget: '高价值目标'
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
  },
  criticalKeywordTrigger: 'تم اكتشاف كلمات رئيسية حرجة عالية المخاطر'
};

const AR_LABELS: IndicatorLabels = {
  urgencyLanguage: 'لغة الإلحاح',
  multipleUrgency: 'كلمات إلحاح متعددة',
  financialRequests: 'طلبات مالية',
  credentialRequests: 'طلبات بيانات الاعتماد',
  containsLinks: 'يحتوي على روابط',
  cryptoAddresses: 'عناوين العملات المشفرة',
  excessivePunctuation: 'علامات ترقيم مفرطة',
  excessiveCapitalization: 'أحرف كبيرة مفرطة',
  disposableEmail: 'خدمة بريد إلكتروني مؤقت',
  suspiciousDomain: 'امتداد نطاق مشبوه',
  typosquatting: 'احتمال انتحال النطاق',
  excessiveNumbers: 'أرقام مفرطة',
  randomPattern: 'نمط عشوائي مشبوه',
  invalidPhoneFormat: 'تنسيق هاتف غير صالح',
  tooShort: 'رقم قصير جدًا',
  tooLong: 'رقم طويل جدًا',
  suspiciousPattern: 'نمط مشبوه',
  invalidCryptoFormat: 'تنسيق عنوان غير صالح',
  knownScamAddress: 'عنوان معروف في الاحتيال',
  newAddress: 'عنوان جديد بدون سجل',
  highValueTarget: 'هدف عالي القيمة'
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
  },
  criticalKeywordTrigger: 'обнаружены критические ключевые слова высокого риска'
};

const RU_LABELS: IndicatorLabels = {
  urgencyLanguage: 'язык срочности',
  multipleUrgency: 'несколько слов срочности',
  financialRequests: 'финансовые запросы',
  credentialRequests: 'запросы учетных данных',
  containsLinks: 'содержит ссылки',
  cryptoAddresses: 'адреса криптовалют',
  excessivePunctuation: 'чрезмерная пунктуация',
  excessiveCapitalization: 'чрезмерные заглавные буквы',
  disposableEmail: 'одноразовый почтовый сервис',
  suspiciousDomain: 'подозрительное расширение домена',
  typosquatting: 'возможная подделка домена',
  excessiveNumbers: 'чрезмерные числа',
  randomPattern: 'подозрительный случайный шаблон',
  invalidPhoneFormat: 'неверный формат телефона',
  tooShort: 'номер слишком короткий',
  tooLong: 'номер слишком длинный',
  suspiciousPattern: 'подозрительный шаблон',
  invalidCryptoFormat: 'неверный формат адреса',
  knownScamAddress: 'известный мошеннический адрес',
  newAddress: 'новый адрес без истории',
  highValueTarget: 'цель высокой стоимости'
};

// Template and label selectors with English fallback
function getTemplates(language: string): AnalysisTemplates {
  switch (language) {
    case 'pt': return PT_TEMPLATES;
    case 'en': return EN_TEMPLATES;
    case 'es': return ES_TEMPLATES;
    case 'fr': return FR_TEMPLATES;
    case 'zh': return ZH_TEMPLATES;
    case 'ar': return AR_TEMPLATES;
    case 'ru': return RU_TEMPLATES;
    default: return EN_TEMPLATES; // Fallback to English
  }
}

function getIndicatorLabels(language: string): IndicatorLabels {
  switch (language) {
    case 'pt': return PT_LABELS;
    case 'en': return EN_LABELS;
    case 'es': return ES_LABELS;
    case 'fr': return FR_LABELS;
    case 'zh': return ZH_LABELS;
    case 'ar': return AR_LABELS;
    case 'ru': return RU_LABELS;
    default: return EN_LABELS; // Fallback to English
  }
}

// ============================================================================
// CRITICAL KEYWORDS (Mandatory High-risk override for all languages)
// ============================================================================

const CRITICAL_KEYWORDS_BY_LANGUAGE: Record<string, string[]> = {
  pt: [
    'dinheiro', 'lucro', 'promoção', 'oportunidade', 'grátis', 'gratis',
    'encontros', 'investimento', 'criptomoeda', 'bitcoin', 'ganhe', 'prêmio'
  ],
  en: [
    'money', 'profit', 'promotion', 'opportunity', 'free', 'dating',
    'investment', 'cryptocurrency', 'bitcoin', 'earn', 'prize', 'winner'
  ],
  es: [
    'dinero', 'lucro', 'promoción', 'oportunidad', 'gratis', 'citas',
    'inversión', 'criptomoneda', 'bitcoin', 'gana', 'premio', 'ganador'
  ],
  fr: [
    'argent', 'profit', 'promotion', 'opportunité', 'gratuit', 'rencontres',
    'investissement', 'cryptomonnaie', 'bitcoin', 'gagner', 'prix', 'gagnant'
  ],
  zh: [
    '钱', '利润', '促销', '机会', '免费', '约会',
    '投资', '加密货币', '比特币', '赚钱', '奖品', '赢家'
  ],
  ar: [
    'مال', 'ربح', 'ترويج', 'فرصة', 'مجاني', 'مواعدة',
    'استثمار', 'عملة_مشفرة', 'بيتكوين', 'اكسب', 'جائزة', 'فائز'
  ],
  ru: [
    'деньги', 'прибыль', 'акция', 'возможность', 'бесплатно', 'знакомства',
    'инвестиция', 'криптовалюта', 'биткоин', 'заработать', 'приз', 'победитель'
  ]
};

// Get all critical keywords (union of all languages for comprehensive detection)
function getAllCriticalKeywords(): string[] {
  const allKeywords = new Set<string>();
  Object.values(CRITICAL_KEYWORDS_BY_LANGUAGE).forEach(keywords => {
    keywords.forEach(kw => allKeywords.add(kw));
  });
  return Array.from(allKeywords);
}

// ============================================================================
// MESSAGE ANALYSIS
// ============================================================================

const MESSAGE_PATTERNS = {
  urgencyKeywords: [
    'urgente', 'imediatamente', 'agora', 'rápido', 'última chance', 'expira',
    'urgent', 'immediately', 'now', 'fast', 'last chance', 'expires',
    'ação imediata', 'immediate action', 'conta bloqueada', 'account blocked',
    'urgente', 'inmediatamente', 'ahora', 'rápido', 'última oportunidad', 'expira',
    'urgent', 'immédiatement', 'maintenant', 'rapide', 'dernière chance', 'expire',
    '紧急', '立即', '现在', '快速', '最后机会', '过期',
    'عاجل', 'فورا', 'الآن', 'سريع', 'آخر_فرصة', 'ينتهي',
    'срочно', 'немедленно', 'сейчас', 'быстро', 'последний_шанс', 'истекает'
  ],
  financialKeywords: [
    'dinheiro', 'pagamento', 'transferência', 'conta bancária', 'cartão',
    'money', 'payment', 'transfer', 'bank account', 'card', 'credit',
    'pix', 'mbway', 'paypal', 'bitcoin', 'crypto', 'investimento', 'investment',
    'dinero', 'pago', 'transferencia', 'cuenta bancaria', 'tarjeta',
    'argent', 'paiement', 'virement', 'compte bancaire', 'carte',
    '钱', '支付', '转账', '银行账户', '卡',
    'مال', 'دفع', 'تحويل', 'حساب_بنكي', 'بطاقة',
    'деньги', 'платеж', 'перевод', 'банковский_счет', 'карта'
  ],
  credentialRequests: [
    'senha', 'password', 'pin', 'código', 'verificação', 'verification',
    'confirme', 'confirm', 'dados pessoais', 'personal data', 'login',
    'contraseña', 'código', 'verificación', 'confirmar', 'datos personales',
    'mot de passe', 'code', 'vérification', 'confirmer', 'données personnelles',
    '密码', '验证码', '验证', '确认', '个人数据',
    'كلمة_السر', 'رمز', 'تحقق', 'تأكيد', 'بيانات_شخصية',
    'пароль', 'код', 'проверка', 'подтвердить', 'личные_данные'
  ],
  suspiciousUrls: /https?:\/\/[^\s]+/gi,
  cryptoAddresses: /\b(0x[a-fA-F0-9]{40}|[13][a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[a-z0-9]{39,59})\b/g,
  excessivePunctuation: /[!?]{3,}/g,
  allCaps: /\b[A-Z]{5,}\b/g,
};

export function analyzeMessage(message: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getIndicatorLabels(language);
  
  if (!message || message.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput
    };
  }

  // Safety: handle very long messages
  const safeMessage = message.slice(0, 10000);
  const lowerMessage = safeMessage.toLowerCase();
  
  // MANDATORY HIGH-RISK OVERRIDE: Check for critical keywords (all languages)
  const allCriticalKeywords = getAllCriticalKeywords();
  const hasCriticalKeyword = containsAnyKeyword(safeMessage, allCriticalKeywords);
  
  if (hasCriticalKeyword) {
    // Force High risk for messages containing critical keywords
    return {
      risk: 'High',
      ...templates.highRisk(templates.criticalKeywordTrigger)
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
    indicators.push(labels.multipleUrgency);
  } else if (urgencyCount === 1) {
    riskScore += 1;
    indicators.push(labels.urgencyLanguage);
  }

  // Check financial keywords
  const financialCount = MESSAGE_PATTERNS.financialKeywords.filter(kw => 
    lowerMessage.includes(kw.toLowerCase())
  ).length;
  if (financialCount >= 2) {
    riskScore += 2;
    indicators.push(labels.financialRequests);
  } else if (financialCount === 1) {
    riskScore += 1;
  }

  // Check credential requests (very high risk)
  const credentialCount = MESSAGE_PATTERNS.credentialRequests.filter(kw => 
    lowerMessage.includes(kw.toLowerCase())
  ).length;
  if (credentialCount >= 1) {
    riskScore += 3;
    indicators.push(labels.credentialRequests);
  }

  // Check for URLs
  const urls = safeMessage.match(MESSAGE_PATTERNS.suspiciousUrls);
  if (urls && urls.length > 0) {
    riskScore += 2;
    indicators.push(labels.containsLinks);
  }

  // Check for crypto addresses
  const cryptoAddresses = safeMessage.match(MESSAGE_PATTERNS.cryptoAddresses);
  if (cryptoAddresses && cryptoAddresses.length > 0) {
    riskScore += 2;
    indicators.push(labels.cryptoAddresses);
  }

  // Check excessive punctuation
  const excessivePunct = safeMessage.match(MESSAGE_PATTERNS.excessivePunctuation);
  if (excessivePunct && excessivePunct.length >= 2) {
    riskScore += 1;
    indicators.push(labels.excessivePunctuation);
  }

  // Check all caps (shouting)
  const allCaps = safeMessage.match(MESSAGE_PATTERNS.allCaps);
  if (allCaps && allCaps.length >= 3) {
    riskScore += 1;
    indicators.push(labels.excessiveCapitalization);
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
  const labels = getIndicatorLabels(language);
  
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
      indicators.push(labels.disposableEmail);
      break;
    }
  }

  // Check for suspicious TLDs
  for (const tld of EMAIL_PATTERNS.suspiciousTlds) {
    if (domain.endsWith(tld)) {
      riskScore += 2;
      indicators.push(labels.suspiciousDomain);
      break;
    }
  }

  // Check for typosquatting/impersonation
  for (const pattern of EMAIL_PATTERNS.typosquatPatterns) {
    if (domain.includes(pattern)) {
      riskScore += 3;
      indicators.push(labels.typosquatting);
      break;
    }
  }

  // Check for excessive numbers in local part
  if (EMAIL_PATTERNS.excessiveNumbers.test(localPart)) {
    riskScore += 1;
    indicators.push(labels.excessiveNumbers);
  }

  // Check for random-looking patterns
  if (EMAIL_PATTERNS.randomPattern.test(localPart)) {
    riskScore += 1;
    indicators.push(labels.randomPattern);
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
  validFormats: [
    /^\+?[1-9]\d{7,14}$/,           // International format
    /^\d{9,11}$/,                    // National format
    /^\(\d{2,3}\)\s?\d{4,5}-?\d{4}$/ // Formatted (XX) XXXXX-XXXX
  ],
  suspiciousPatterns: [
    /^0{5,}/,      // Too many zeros
    /^1{5,}/,      // Repeated 1s
    /^(\d)\1{6,}/, // Same digit repeated 7+ times
  ]
};

export function analyzePhone(phone: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getIndicatorLabels(language);
  
  if (!phone || phone.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput
    };
  }

  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  let riskScore = 0;
  const indicators: string[] = [];

  // Check format validity
  const isValidFormat = PHONE_PATTERNS.validFormats.some(pattern => pattern.test(cleanPhone));
  if (!isValidFormat) {
    riskScore += 2;
    indicators.push(labels.invalidPhoneFormat);
  }

  // Check length
  if (cleanPhone.length < 8) {
    riskScore += 2;
    indicators.push(labels.tooShort);
  } else if (cleanPhone.length > 15) {
    riskScore += 1;
    indicators.push(labels.tooLong);
  }

  // Check for suspicious patterns
  for (const pattern of PHONE_PATTERNS.suspiciousPatterns) {
    if (pattern.test(cleanPhone)) {
      riskScore += 2;
      indicators.push(labels.suspiciousPattern);
      break;
    }
  }

  // Determine risk level
  const indicatorText = indicators.join(', ');
  
  if (riskScore >= 4) {
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
// CRYPTO ANALYSIS
// ============================================================================

const CRYPTO_PATTERNS = {
  bitcoin: /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/,
  ethereum: /^0x[a-fA-F0-9]{40}$/,
  bech32: /^bc1[a-z0-9]{39,59}$/,
};

export function analyzeCrypto(address: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getIndicatorLabels(language);
  
  if (!address || address.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput
    };
  }

  const cleanAddress = address.trim();
  let riskScore = 0;
  const indicators: string[] = [];

  // Check format validity
  const isValidFormat = 
    CRYPTO_PATTERNS.bitcoin.test(cleanAddress) ||
    CRYPTO_PATTERNS.ethereum.test(cleanAddress) ||
    CRYPTO_PATTERNS.bech32.test(cleanAddress);

  if (!isValidFormat) {
    riskScore += 2;
    indicators.push(labels.invalidCryptoFormat);
  }

  // Note: In a real implementation, we would check against known scam databases
  // For now, we provide a baseline risk assessment
  
  // Determine risk level
  const indicatorText = indicators.join(', ');
  
  if (riskScore >= 4) {
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
