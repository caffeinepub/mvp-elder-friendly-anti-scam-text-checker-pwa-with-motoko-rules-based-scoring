// Frontend-only structured fraud analysis engine
// Implements deterministic heuristic rules for message/email/phone/crypto analysis
// Returns structured results with transparency citations and collaborative-basis references
// Supports full localization with critical-keyword High-risk overrides for all languages

import { normalizeText, containsAnyKeyword } from './antifraudTextNormalize';

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
  explanation: string;
  recommendation: string;
  sources: PublicSource[];
  collaborativeBasis: CollaborativeBasis;
}

// Language-specific templates for analysis outputs
interface AnalysisTemplates {
  emptyInput: { explanation: string; recommendation: string };
  invalidFormat: { explanation: string; recommendation: string };
  highRisk: (indicators: string) => { explanation: string; recommendation: string };
  mediumRisk: (indicators: string) => { explanation: string; recommendation: string };
  lowRisk: (indicators: string) => { explanation: string; recommendation: string };
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
  criticalKeywordTrigger: 'palavras-chave críticas de alto risco detectadas',
  collaborativeBasisStatement: 'Esta análise é calculada localmente no seu dispositivo usando heurísticas determinísticas. Não consulta reportes da comunidade a menos que você execute uma pesquisa separada na base colaborativa.'
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
  criticalKeywordTrigger: 'critical high-risk keywords detected',
  collaborativeBasisStatement: 'This analysis is computed locally on your device using deterministic heuristics. It does not check community reports unless you perform a separate lookup in the collaborative database.'
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
  criticalKeywordTrigger: 'palabras clave críticas de alto riesgo detectadas',
  collaborativeBasisStatement: 'Este análisis se calcula localmente en su dispositivo utilizando heurísticas determinísticas. No consulta informes de la comunidad a menos que realice una búsqueda separada en la base de datos colaborativa.'
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
  criticalKeywordTrigger: 'mots-clés critiques à haut risque détectés',
  collaborativeBasisStatement: 'Cette analyse est calculée localement sur votre appareil à l\'aide d\'heuristiques déterministes. Elle ne consulte pas les rapports de la communauté sauf si vous effectuez une recherche séparée dans la base de données collaborative.'
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
  criticalKeywordTrigger: '检测到关键高风险关键词',
  collaborativeBasisStatement: '此分析使用确定性启发式方法在您的设备上本地计算。除非您在协作数据库中执行单独的查找，否则它不会检查社区报告。'
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
  criticalKeywordTrigger: 'تم اكتشاف كلمات رئيسية حرجة عالية المخاطر',
  collaborativeBasisStatement: 'يتم حساب هذا التحليل محليًا على جهازك باستخدام الاستدلالات الحتمية. لا يتحقق من تقارير المجتمع ما لم تقم بإجراء بحث منفصل في قاعدة البيانات التعاونية.'
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
  criticalKeywordTrigger: 'обнаружены критические ключевые слова высокого риска',
  collaborativeBasisStatement: 'Этот анализ вычисляется локально на вашем устройстве с использованием детерминированных эвристик. Он не проверяет отчеты сообщества, если вы не выполните отдельный поиск в совместной базе данных.'
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
  switch (language.toLowerCase()) {
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

function getLabels(language: string): IndicatorLabels {
  switch (language.toLowerCase()) {
    case 'pt': return PT_LABELS;
    case 'en': return EN_LABELS;
    case 'es': return ES_LABELS;
    case 'fr': return FR_LABELS;
    case 'zh': return ZH_LABELS;
    case 'ar': return AR_LABELS;
    case 'ru': return RU_LABELS;
    default: return EN_LABELS;
  }
}

// Public sources for transparency (same for all languages, URLs are universal)
function getPublicSources(): PublicSource[] {
  return [
    {
      name: 'Federal Trade Commission (FTC) - Scam Alerts',
      url: 'https://www.ftc.gov/news-events/topics/consumer-alerts/scam-alerts'
    },
    {
      name: 'Anti-Phishing Working Group (APWG)',
      url: 'https://apwg.org/'
    },
    {
      name: 'Internet Crime Complaint Center (IC3)',
      url: 'https://www.ic3.gov/'
    }
  ];
}

// Critical keywords that trigger High risk across all languages
const CRITICAL_KEYWORDS_MULTILANG = {
  pt: [
    'urgente', 'imediato', 'bloqueado', 'suspenso', 'verificar agora',
    'clique aqui', 'confirme seus dados', 'atualize suas informações',
    'ganhe dinheiro', 'prêmio', 'loteria', 'herança', 'transferência',
    'bitcoin', 'criptomoeda', 'investimento garantido', 'lucro rápido'
  ],
  en: [
    'urgent', 'immediate', 'blocked', 'suspended', 'verify now',
    'click here', 'confirm your details', 'update your information',
    'make money', 'prize', 'lottery', 'inheritance', 'transfer',
    'bitcoin', 'cryptocurrency', 'guaranteed investment', 'quick profit'
  ],
  es: [
    'urgente', 'inmediato', 'bloqueado', 'suspendido', 'verificar ahora',
    'haga clic aquí', 'confirme sus datos', 'actualice su información',
    'ganar dinero', 'premio', 'lotería', 'herencia', 'transferencia',
    'bitcoin', 'criptomoneda', 'inversión garantizada', 'ganancia rápida'
  ],
  fr: [
    'urgent', 'immédiat', 'bloqué', 'suspendu', 'vérifier maintenant',
    'cliquez ici', 'confirmez vos données', 'mettez à jour vos informations',
    'gagner de l\'argent', 'prix', 'loterie', 'héritage', 'transfert',
    'bitcoin', 'cryptomonnaie', 'investissement garanti', 'profit rapide'
  ],
  zh: [
    '紧急', '立即', '已封锁', '已暂停', '立即验证',
    '点击这里', '确认您的详细信息', '更新您的信息',
    '赚钱', '奖品', '彩票', '遗产', '转账',
    '比特币', '加密货币', '保证投资', '快速利润'
  ],
  ar: [
    'عاجل', 'فوري', 'محظور', 'معلق', 'تحقق الآن',
    'انقر هنا', 'أكد تفاصيلك', 'حدث معلوماتك',
    'اكسب المال', 'جائزة', 'يانصيب', 'ميراث', 'تحويل',
    'بيتكوين', 'عملة مشفرة', 'استثمار مضمون', 'ربح سريع'
  ],
  ru: [
    'срочно', 'немедленно', 'заблокирован', 'приостановлен', 'проверить сейчас',
    'нажмите здесь', 'подтвердите свои данные', 'обновите свою информацию',
    'заработать деньги', 'приз', 'лотерея', 'наследство', 'перевод',
    'биткоин', 'криптовалюта', 'гарантированная инвестиция', 'быстрая прибыль'
  ]
};

function getCriticalKeywords(language: string): string[] {
  const lang = language.toLowerCase();
  return CRITICAL_KEYWORDS_MULTILANG[lang as keyof typeof CRITICAL_KEYWORDS_MULTILANG] || CRITICAL_KEYWORDS_MULTILANG.en;
}

// Message analysis
export function analyzeMessage(message: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);
  const sources = getPublicSources();
  const collaborativeBasis: CollaborativeBasis = {
    statement: templates.collaborativeBasisStatement,
    reference: 'local-heuristic-analysis'
  };

  if (!message || message.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput,
      sources,
      collaborativeBasis
    };
  }

  const normalized = normalizeText(message);
  const indicators: string[] = [];
  let score = 0;

  // Critical keyword check (immediate High risk)
  const criticalKeywords = getCriticalKeywords(language);
  if (containsAnyKeyword(normalized, criticalKeywords)) {
    return {
      risk: 'High',
      ...templates.highRisk(templates.criticalKeywordTrigger),
      sources,
      collaborativeBasis
    };
  }

  // Urgency language
  const urgencyWords = ['urgent', 'urgente', 'immediate', 'imediato', 'now', 'agora', 'quickly', 'rapidamente'];
  const urgencyCount = urgencyWords.filter(word => normalized.includes(normalizeText(word))).length;
  if (urgencyCount > 0) {
    indicators.push(labels.urgencyLanguage);
    score += urgencyCount > 1 ? 3 : 2;
    if (urgencyCount > 1) {
      indicators.push(labels.multipleUrgency);
    }
  }

  // Financial requests
  const financialWords = ['money', 'dinheiro', 'payment', 'pagamento', 'bank', 'banco', 'card', 'cartao', 'account', 'conta'];
  if (containsAnyKeyword(normalized, financialWords)) {
    indicators.push(labels.financialRequests);
    score += 3;
  }

  // Credential requests
  const credentialWords = ['password', 'senha', 'pin', 'code', 'codigo', 'verify', 'verificar', 'confirm', 'confirmar'];
  if (containsAnyKeyword(normalized, credentialWords)) {
    indicators.push(labels.credentialRequests);
    score += 3;
  }

  // Links
  if (/https?:\/\/|www\./i.test(message)) {
    indicators.push(labels.containsLinks);
    score += 2;
  }

  // Crypto addresses
  if (/0x[a-fA-F0-9]{40}|[13][a-km-zA-HJ-NP-Z1-9]{25,34}/.test(message)) {
    indicators.push(labels.cryptoAddresses);
    score += 2;
  }

  // Excessive punctuation
  const punctuationCount = (message.match(/[!?]{2,}/g) || []).length;
  if (punctuationCount > 0) {
    indicators.push(labels.excessivePunctuation);
    score += 1;
  }

  // Excessive capitalization
  const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
  if (capsRatio > 0.5 && message.length > 10) {
    indicators.push(labels.excessiveCapitalization);
    score += 1;
  }

  // Determine risk level
  let risk: RiskLevel;
  if (score >= 6) {
    risk = 'High';
    return {
      risk,
      ...templates.highRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else if (score >= 3) {
    risk = 'Medium';
    return {
      risk,
      ...templates.mediumRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else {
    risk = 'Low';
    return {
      risk,
      ...(indicators.length > 0 ? templates.lowRisk(indicators.join(', ')) : templates.noIndicators),
      sources,
      collaborativeBasis
    };
  }
}

// Email analysis
export function analyzeEmail(email: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);
  const sources = getPublicSources();
  const collaborativeBasis: CollaborativeBasis = {
    statement: templates.collaborativeBasisStatement,
    reference: 'local-heuristic-analysis'
  };

  if (!email || email.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput,
      sources,
      collaborativeBasis
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      risk: 'Low',
      ...templates.invalidFormat,
      sources,
      collaborativeBasis
    };
  }

  const normalized = normalizeText(email);
  const indicators: string[] = [];
  let score = 0;

  // Disposable email services
  const disposableDomains = ['tempmail', 'guerrillamail', '10minutemail', 'throwaway', 'mailinator'];
  if (containsAnyKeyword(normalized, disposableDomains)) {
    indicators.push(labels.disposableEmail);
    score += 3;
  }

  // Suspicious TLDs
  const suspiciousTlds = ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top'];
  if (suspiciousTlds.some(tld => email.toLowerCase().endsWith(tld))) {
    indicators.push(labels.suspiciousDomain);
    score += 2;
  }

  // Typosquatting patterns (common brand misspellings)
  const typosquatPatterns = ['paypa1', 'g00gle', 'micros0ft', 'amaz0n', 'app1e'];
  if (containsAnyKeyword(normalized, typosquatPatterns)) {
    indicators.push(labels.typosquatting);
    score += 4;
  }

  // Excessive numbers in local part
  const localPart = email.split('@')[0];
  const numberCount = (localPart.match(/\d/g) || []).length;
  if (numberCount > localPart.length * 0.5) {
    indicators.push(labels.excessiveNumbers);
    score += 1;
  }

  // Random character patterns
  if (/[a-z]{10,}[0-9]{5,}/i.test(localPart) || /[0-9]{5,}[a-z]{10,}/i.test(localPart)) {
    indicators.push(labels.randomPattern);
    score += 1;
  }

  // Determine risk level
  let risk: RiskLevel;
  if (score >= 5) {
    risk = 'High';
    return {
      risk,
      ...templates.highRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else if (score >= 2) {
    risk = 'Medium';
    return {
      risk,
      ...templates.mediumRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else {
    risk = 'Low';
    return {
      risk,
      ...(indicators.length > 0 ? templates.lowRisk(indicators.join(', ')) : templates.noIndicators),
      sources,
      collaborativeBasis
    };
  }
}

// Phone analysis
export function analyzePhone(phone: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);
  const sources = getPublicSources();
  const collaborativeBasis: CollaborativeBasis = {
    statement: templates.collaborativeBasisStatement,
    reference: 'local-heuristic-analysis'
  };

  if (!phone || phone.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput,
      sources,
      collaborativeBasis
    };
  }

  const digitsOnly = phone.replace(/\D/g, '');
  const indicators: string[] = [];
  let score = 0;

  // Basic format validation
  if (digitsOnly.length === 0) {
    indicators.push(labels.invalidPhoneFormat);
    return {
      risk: 'Low',
      ...templates.invalidFormat,
      sources,
      collaborativeBasis
    };
  }

  // Length checks
  if (digitsOnly.length < 7) {
    indicators.push(labels.tooShort);
    score += 2;
  } else if (digitsOnly.length > 15) {
    indicators.push(labels.tooLong);
    score += 1;
  }

  // Suspicious patterns
  if (/^(.)\1+$/.test(digitsOnly)) {
    indicators.push(labels.suspiciousPattern);
    score += 3;
  }

  if (/^(012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210)/.test(digitsOnly)) {
    indicators.push(labels.suspiciousPattern);
    score += 2;
  }

  // Determine risk level
  let risk: RiskLevel;
  if (score >= 4) {
    risk = 'High';
    return {
      risk,
      ...templates.highRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else if (score >= 2) {
    risk = 'Medium';
    return {
      risk,
      ...templates.mediumRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else {
    risk = 'Low';
    return {
      risk,
      ...(indicators.length > 0 ? templates.lowRisk(indicators.join(', ')) : templates.noIndicators),
      sources,
      collaborativeBasis
    };
  }
}

// Crypto analysis
export function analyzeCrypto(address: string, language: string = 'pt'): StructuredAnalysisResult {
  const templates = getTemplates(language);
  const labels = getLabels(language);
  const sources = getPublicSources();
  const collaborativeBasis: CollaborativeBasis = {
    statement: templates.collaborativeBasisStatement,
    reference: 'local-heuristic-analysis'
  };

  if (!address || address.trim().length === 0) {
    return {
      risk: 'Low',
      ...templates.emptyInput,
      sources,
      collaborativeBasis
    };
  }

  const indicators: string[] = [];
  let score = 0;

  // Ethereum address validation
  const ethRegex = /^0x[a-fA-F0-9]{40}$/;
  // Bitcoin address validation (simplified)
  const btcRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

  const isValidEth = ethRegex.test(address);
  const isValidBtc = btcRegex.test(address);

  if (!isValidEth && !isValidBtc) {
    indicators.push(labels.invalidCryptoFormat);
    return {
      risk: 'Medium',
      ...templates.invalidFormat,
      sources,
      collaborativeBasis
    };
  }

  // Known scam patterns (example patterns, not real addresses)
  const knownScamPatterns = ['0x0000000000000000000000000000000000000000', '0xdead', '0xbeef'];
  if (knownScamPatterns.some(pattern => address.toLowerCase().includes(pattern))) {
    indicators.push(labels.knownScamAddress);
    score += 5;
  }

  // New/unused address heuristic (all zeros or very simple pattern)
  if (/^0x0+$/.test(address) || /^0x(.)\1+$/.test(address)) {
    indicators.push(labels.newAddress);
    score += 1;
  }

  // High-value target indicator (this is a placeholder heuristic)
  // In a real system, this would check against known exchange addresses
  if (address.toLowerCase().startsWith('0xaaaa') || address.toLowerCase().startsWith('0xffff')) {
    indicators.push(labels.highValueTarget);
    score += 1;
  }

  // Determine risk level
  let risk: RiskLevel;
  if (score >= 4) {
    risk = 'High';
    return {
      risk,
      ...templates.highRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else if (score >= 2) {
    risk = 'Medium';
    return {
      risk,
      ...templates.mediumRisk(indicators.join(', ')),
      sources,
      collaborativeBasis
    };
  } else {
    risk = 'Low';
    return {
      risk,
      ...(indicators.length > 0 ? templates.lowRisk(indicators.join(', ')) : templates.noIndicators),
      sources,
      collaborativeBasis
    };
  }
}
