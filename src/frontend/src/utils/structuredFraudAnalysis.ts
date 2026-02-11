// Frontend-only structured fraud analysis engine
// Implements deterministic heuristic rules with professional scoring (0-100)
// Returns structured results with transparency citations and collaborative-basis references
// Supports full localization with critical-keyword High-risk overrides for all languages

import { normalizeText, containsAnyKeyword, findMatchingKeywords, findMatchingPhrasePatterns } from './antifraudTextNormalize';
import { HIGH_RISK_PHRASE_PATTERNS, MEDIUM_RISK_PHRASE_PATTERNS } from './highRiskPhrases';
import { computeRiskScore, scoreToRiskLevel, type RiskFactors } from './riskScoring';
import { riskConfig } from './riskWeights';

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
  highReportFrequency: 'frequência elevada de denúncias'
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
  highReportFrequency: 'high report frequency'
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
  highRisk: (indicators: string, score: number) => ({
    explanation: `Riesgo alto detectado (Puntuación: ${score}/100) con indicadores: ${indicators}. Común en intentos de phishing y fraude.`,
    recommendation: 'No responda, no haga clic en enlaces ni comparta información personal. Elimine este mensaje y bloquee al remitente.'
  }),
  mediumRisk: (indicators: string, score: number) => ({
    explanation: `Patrones sospechosos encontrados (Puntuación: ${score}/100): ${indicators}. Tenga precaución.`,
    recommendation: 'Verifique la identidad del remitente a través de canales oficiales antes de tomar cualquier acción. No haga clic en enlaces ni comparta datos sensibles.'
  }),
  lowRisk: (indicators: string, score: number) => ({
    explanation: indicators ? `Indicadores menores detectados (Puntuación: ${score}/100): ${indicators}, pero el riesgo general es bajo.` : `No se detectaron indicadores de riesgo significativos (Puntuación: ${score}/100).`,
    recommendation: 'El contenido parece seguro, pero siempre verifique la identidad del remitente para solicitudes importantes.'
  }),
  noIndicators: {
    explanation: 'No se detectaron indicadores de riesgo significativos.',
    recommendation: 'El contenido parece seguro, pero siempre verifique la identidad del remitente para solicitudes importantes.'
  },
  criticalKeywordTrigger: 'frases críticas de alto riesgo detectadas',
  collaborativeBasisStatement: 'Este análisis se calcula localmente en su dispositivo utilizando heurísticas determinísticas y motor de puntuación profesional. No consulta informes de la comunidad a menos que realice una búsqueda separada en la base de datos colaborativa.'
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
  highValueTarget: 'objetivo de alto valor',
  highRiskPhrases: 'frases de alto riesgo',
  mediumRiskPhrases: 'frases de riesgo medio',
  internalReports: 'informes internos',
  publicSourcePresence: 'presencia en fuentes públicas',
  highReportFrequency: 'alta frecuencia de informes'
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
  highRisk: (indicators: string, score: number) => ({
    explanation: `Risque élevé détecté (Score: ${score}/100) avec indicateurs: ${indicators}. Courant dans les tentatives de phishing et de fraude.`,
    recommendation: 'Ne répondez pas, ne cliquez pas sur les liens et ne partagez aucune information personnelle. Supprimez ce message et bloquez l\'expéditeur.'
  }),
  mediumRisk: (indicators: string, score: number) => ({
    explanation: `Modèles suspects trouvés (Score: ${score}/100): ${indicators}. Soyez prudent.`,
    recommendation: 'Vérifiez l\'identité de l\'expéditeur via des canaux officiels avant toute action. Ne cliquez pas sur les liens et ne partagez pas de données sensibles.'
  }),
  lowRisk: (indicators: string, score: number) => ({
    explanation: indicators ? `Indicateurs mineurs détectés (Score: ${score}/100): ${indicators}, mais le risque global est faible.` : `Aucun indicateur de risque significatif détecté (Score: ${score}/100).`,
    recommendation: 'Le contenu semble sûr, mais vérifiez toujours l\'identité de l\'expéditeur pour les demandes importantes.'
  }),
  noIndicators: {
    explanation: 'Aucun indicateur de risque significatif détecté.',
    recommendation: 'Le contenu semble sûr, mais vérifiez toujours l\'identité de l\'expéditeur pour les demandes importantes.'
  },
  criticalKeywordTrigger: 'phrases critiques à haut risque détectées',
  collaborativeBasisStatement: 'Cette analyse est calculée localement sur votre appareil à l\'aide d\'heuristiques déterministes et d\'un moteur de notation professionnel. Elle ne consulte pas les rapports de la communauté sauf si vous effectuez une recherche séparée dans la base de données collaborative.'
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
  highValueTarget: 'cible de grande valeur',
  highRiskPhrases: 'phrases à haut risque',
  mediumRiskPhrases: 'phrases à risque moyen',
  internalReports: 'rapports internes',
  publicSourcePresence: 'présence dans les sources publiques',
  highReportFrequency: 'fréquence élevée de rapports'
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
  highRisk: (indicators: string, score: number) => ({
    explanation: `检测到高风险（评分：${score}/100），指标：${indicators}。常见于网络钓鱼和诈骗尝试。`,
    recommendation: '不要回复、点击链接或分享任何个人信息。删除此消息并屏蔽发件人。'
  }),
  mediumRisk: (indicators: string, score: number) => ({
    explanation: `发现可疑模式（评分：${score}/100）：${indicators}。请谨慎。`,
    recommendation: '在采取任何行动之前，通过官方渠道验证发件人身份。不要点击链接或分享敏感数据。'
  }),
  lowRisk: (indicators: string, score: number) => ({
    explanation: indicators ? `检测到轻微指标（评分：${score}/100）：${indicators}，但总体风险较低。` : `未检测到重大风险指标（评分：${score}/100）。`,
    recommendation: '内容似乎安全，但对于重要请求，请始终验证发件人身份。'
  }),
  noIndicators: {
    explanation: '未检测到重大风险指标。',
    recommendation: '内容似乎安全，但对于重要请求，请始终验证发件人身份。'
  },
  criticalKeywordTrigger: '检测到关键高风险短语',
  collaborativeBasisStatement: '此分析使用确定性启发式方法和专业评分引擎在您的设备上本地计算。除非您在协作数据库中执行单独的查找，否则它不会检查社区报告。'
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
  highValueTarget: '高价值目标',
  highRiskPhrases: '高风险短语',
  mediumRiskPhrases: '中等风险短语',
  internalReports: '内部报告',
  publicSourcePresence: '公共来源存在',
  highReportFrequency: '高报告频率'
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
  highRisk: (indicators: string, score: number) => ({
    explanation: `تم اكتشاف مخاطر عالية (النتيجة: ${score}/100) مع المؤشرات: ${indicators}. شائع في محاولات التصيد الاحتيالي والاحتيال.`,
    recommendation: 'لا ترد، لا تنقر على الروابط، ولا تشارك أي معلومات شخصية. احذف هذه الرسالة واحظر المرسل.'
  }),
  mediumRisk: (indicators: string, score: number) => ({
    explanation: `تم العثور على أنماط مشبوهة (النتيجة: ${score}/100): ${indicators}. توخ الحذر.`,
    recommendation: 'تحقق من هوية المرسل عبر القنوات الرسمية قبل اتخاذ أي إجراء. لا تنقر على الروابط ولا تشارك البيانات الحساسة.'
  }),
  lowRisk: (indicators: string, score: number) => ({
    explanation: indicators ? `تم اكتشاف مؤشرات طفيفة (النتيجة: ${score}/100): ${indicators}، لكن المخاطر الإجمالية منخفضة.` : `لم يتم اكتشاف مؤشرات مخاطر كبيرة (النتيجة: ${score}/100).`,
    recommendation: 'يبدو المحتوى آمنًا، ولكن تحقق دائمًا من هوية المرسل للطلبات المهمة.'
  }),
  noIndicators: {
    explanation: 'لم يتم اكتشاف مؤشرات مخاطر كبيرة.',
    recommendation: 'يبدو المحتوى آمنًا، ولكن تحقق دائمًا من هوية المرسل للطلبات المهمة.'
  },
  criticalKeywordTrigger: 'تم اكتشاف عبارات حرجة عالية المخاطر',
  collaborativeBasisStatement: 'يتم حساب هذا التحليل محليًا على جهازك باستخدام الاستدلالات الحتمية ومحرك التسجيل المهني. لا يتحقق من تقارير المجتمع ما لم تقم بإجراء بحث منفصل في قاعدة البيانات التعاونية.'
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
  highValueTarget: 'هدف عالي القيمة',
  highRiskPhrases: 'عبارات عالية المخاطر',
  mediumRiskPhrases: 'عبارات متوسطة المخاطر',
  internalReports: 'تقارير داخلية',
  publicSourcePresence: 'وجود في المصادر العامة',
  highReportFrequency: 'تردد عالي للتقارير'
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
  highRisk: (indicators: string, score: number) => ({
    explanation: `Обнаружен высокий риск (Оценка: ${score}/100) с индикаторами: ${indicators}. Часто встречается в попытках фишинга и мошенничества.`,
    recommendation: 'Не отвечайте, не переходите по ссылкам и не делитесь личной информацией. Удалите это сообщение и заблокируйте отправителя.'
  }),
  mediumRisk: (indicators: string, score: number) => ({
    explanation: `Обнаружены подозрительные шаблоны (Оценка: ${score}/100): ${indicators}. Будьте осторожны.`,
    recommendation: 'Проверьте личность отправителя через официальные каналы перед любыми действиями. Не переходите по ссылкам и не делитесь конфиденциальными данными.'
  }),
  lowRisk: (indicators: string, score: number) => ({
    explanation: indicators ? `Обнаружены незначительные индикаторы (Оценка: ${score}/100): ${indicators}, но общий риск низкий.` : `Значительных индикаторов риска не обнаружено (Оценка: ${score}/100).`,
    recommendation: 'Контент кажется безопасным, но всегда проверяйте личность отправителя для важных запросов.'
  }),
  noIndicators: {
    explanation: 'Значительных индикаторов риска не обнаружено.',
    recommendation: 'Контент кажется безопасным, но всегда проверяйте личность отправителя для важных запросов.'
  },
  criticalKeywordTrigger: 'обнаружены критические фразы высокого риска',
  collaborativeBasisStatement: 'Этот анализ вычисляется локально на вашем устройстве с использованием детерминированной эвристики и профессионального механизма оценки. Он не проверяет отчеты сообщества, если вы не выполните отдельный поиск в совместной базе данных.'
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
  disposableEmail: 'одноразовая почтовая служба',
  suspiciousDomain: 'подозрительное расширение домена',
  typosquatting: 'возможная подделка домена',
  excessiveNumbers: 'чрезмерные числа',
  randomPattern: 'подозрительный случайный шаблон',
  invalidPhoneFormat: 'неверный формат телефона',
  tooShort: 'номер слишком короткий',
  tooLong: 'номер слишком длинный',
  suspiciousPattern: 'подозрительный шаблон',
  invalidCryptoFormat: 'неверный формат адреса',
  knownScamAddress: 'известный адрес мошенничества',
  newAddress: 'новый адрес без истории',
  highValueTarget: 'цель высокой ценности',
  highRiskPhrases: 'фразы высокого риска',
  mediumRiskPhrases: 'фразы среднего риска',
  internalReports: 'внутренние отчеты',
  publicSourcePresence: 'присутствие в публичных источниках',
  highReportFrequency: 'высокая частота отчетов'
};

// Template and label maps
const TEMPLATES_MAP: Record<string, AnalysisTemplates> = {
  pt: PT_TEMPLATES,
  en: EN_TEMPLATES,
  es: ES_TEMPLATES,
  fr: FR_TEMPLATES,
  zh: ZH_TEMPLATES,
  ar: AR_TEMPLATES,
  ru: RU_TEMPLATES,
};

const LABELS_MAP: Record<string, IndicatorLabels> = {
  pt: PT_LABELS,
  en: EN_LABELS,
  es: ES_LABELS,
  fr: FR_LABELS,
  zh: ZH_LABELS,
  ar: AR_LABELS,
  ru: RU_LABELS,
};

// Get templates for language (fallback to English)
function getTemplates(lang: string): AnalysisTemplates {
  return TEMPLATES_MAP[lang] || EN_TEMPLATES;
}

// Get labels for language (fallback to English)
function getLabels(lang: string): IndicatorLabels {
  return LABELS_MAP[lang] || EN_LABELS;
}

// Analyze message content
export function analyzeMessage(
  message: string,
  lang: string = 'pt',
  internalReportCount: number = 0,
  hasPublicSourcePresence: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(lang);
  const labels = getLabels(lang);

  if (!message || message.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      ...templates.emptyInput,
      sources: [],
      collaborativeBasis: { statement: templates.collaborativeBasisStatement },
    };
  }

  const indicators: string[] = [];
  const normalized = normalizeText(message);

  // Check for high-risk phrase patterns
  const highRiskMatches = findMatchingPhrasePatterns(message, HIGH_RISK_PHRASE_PATTERNS);
  const hasHighRiskPhrases = highRiskMatches.length > 0;
  if (hasHighRiskPhrases) {
    indicators.push(labels.highRiskPhrases);
  }

  // Check for medium-risk phrase patterns
  const mediumRiskMatches = findMatchingPhrasePatterns(message, MEDIUM_RISK_PHRASE_PATTERNS);
  const hasMediumRiskPhrases = mediumRiskMatches.length > 0;
  if (hasMediumRiskPhrases) {
    indicators.push(labels.mediumRiskPhrases);
  }

  // Legacy urgency keywords
  const urgencyKeywords = ['urgente', 'urgent', 'imediato', 'immediate', 'agora', 'now', 'rapido', 'quick'];
  const urgencyMatches = findMatchingKeywords(message, urgencyKeywords);
  if (urgencyMatches.length > 0) {
    indicators.push(labels.urgencyLanguage);
    if (urgencyMatches.length >= 2) {
      indicators.push(labels.multipleUrgency);
    }
  }

  // Financial keywords
  const financialKeywords = ['dinheiro', 'money', 'transferencia', 'transfer', 'pagar', 'pay', 'pagamento', 'payment'];
  if (containsAnyKeyword(message, financialKeywords)) {
    indicators.push(labels.financialRequests);
  }

  // Credential keywords
  const credentialKeywords = ['senha', 'password', 'pin', 'codigo', 'code', 'login', 'acesso', 'access'];
  if (containsAnyKeyword(message, credentialKeywords)) {
    indicators.push(labels.credentialRequests);
  }

  // Links
  if (/https?:\/\//.test(message)) {
    indicators.push(labels.containsLinks);
  }

  // Crypto addresses
  if (/\b[13][a-km-zA-HJ-NP-Z1-9]{25,34}\b|\b0x[a-fA-F0-9]{40}\b/.test(message)) {
    indicators.push(labels.cryptoAddresses);
  }

  // Excessive punctuation
  if ((message.match(/[!?]{2,}/g) || []).length > 0) {
    indicators.push(labels.excessivePunctuation);
  }

  // Excessive capitalization
  const upperCount = (message.match(/[A-Z]/g) || []).length;
  if (upperCount > message.length * 0.5 && message.length > 10) {
    indicators.push(labels.excessiveCapitalization);
  }

  // Add internal reports indicator
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source presence indicator
  if (hasPublicSourcePresence) {
    indicators.push(labels.publicSourcePresence);
  }

  // Add high report frequency indicator
  const isHighFrequency = internalReportCount >= riskConfig.thresholds.highFrequencyReportCount;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  // Compute risk factors
  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: hasHighRiskPhrases,
    hasMediumRiskKeywords: hasMediumRiskPhrases,
    internalReportCount,
    hasExternalPublicSource: hasPublicSourcePresence,
    isHighReportFrequency: isHighFrequency,
  };

  // Compute aggregated risk score
  const riskScore = computeRiskScore(riskFactors);
  const risk = scoreToRiskLevel(riskScore);

  const indicatorText = indicators.join(', ');

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
    sources: [
      {
        name: 'AntiFraud Heuristics Engine',
        url: 'https://github.com/antifraud-project',
      },
    ],
    collaborativeBasis: { statement: templates.collaborativeBasisStatement },
  };
}

// Analyze email address
export function analyzeEmail(
  email: string,
  lang: string = 'pt',
  internalReportCount: number = 0,
  hasPublicSourcePresence: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(lang);
  const labels = getLabels(lang);

  if (!email || email.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      ...templates.emptyInput,
      sources: [],
      collaborativeBasis: { statement: templates.collaborativeBasisStatement },
    };
  }

  const indicators: string[] = [];
  const normalized = normalizeText(email);

  // Disposable email services
  const disposableDomains = ['tempmail', 'guerrillamail', '10minutemail', 'throwaway', 'mailinator'];
  if (containsAnyKeyword(email, disposableDomains)) {
    indicators.push(labels.disposableEmail);
  }

  // Suspicious TLDs
  const suspiciousTlds = ['.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top'];
  if (suspiciousTlds.some(tld => email.endsWith(tld))) {
    indicators.push(labels.suspiciousDomain);
  }

  // Typosquatting detection (common brand variations)
  const commonBrands = ['gmail', 'outlook', 'yahoo', 'hotmail', 'protonmail'];
  const domain = email.split('@')[1] || '';
  const domainNormalized = normalizeText(domain);
  for (const brand of commonBrands) {
    if (domainNormalized.includes(brand) && !domainNormalized.includes(`${brand}.com`)) {
      indicators.push(labels.typosquatting);
      break;
    }
  }

  // Excessive numbers in local part
  const localPart = email.split('@')[0] || '';
  const numberCount = (localPart.match(/\d/g) || []).length;
  if (numberCount > localPart.length * 0.5 && localPart.length > 5) {
    indicators.push(labels.excessiveNumbers);
  }

  // Random pattern detection
  if (localPart.length > 10 && !/[aeiou]/i.test(localPart)) {
    indicators.push(labels.randomPattern);
  }

  // Add internal reports indicator
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source presence indicator
  if (hasPublicSourcePresence) {
    indicators.push(labels.publicSourcePresence);
  }

  // Add high report frequency indicator
  const isHighFrequency = internalReportCount >= riskConfig.thresholds.highFrequencyReportCount;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  // Compute risk factors
  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: indicators.includes(labels.typosquatting) || indicators.includes(labels.disposableEmail),
    hasMediumRiskKeywords: indicators.includes(labels.suspiciousDomain) || indicators.includes(labels.randomPattern),
    internalReportCount,
    hasExternalPublicSource: hasPublicSourcePresence,
    isHighReportFrequency: isHighFrequency,
  };

  // Compute aggregated risk score
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
    sources: [
      {
        name: 'AntiFraud Heuristics Engine',
        url: 'https://github.com/antifraud-project',
      },
    ],
    collaborativeBasis: { statement: templates.collaborativeBasisStatement },
  };
}

// Analyze phone number
export function analyzePhone(
  phone: string,
  lang: string = 'pt',
  internalReportCount: number = 0,
  hasPublicSourcePresence: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(lang);
  const labels = getLabels(lang);

  if (!phone || phone.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      ...templates.emptyInput,
      sources: [],
      collaborativeBasis: { statement: templates.collaborativeBasisStatement },
    };
  }

  const indicators: string[] = [];
  const digitsOnly = phone.replace(/\D/g, '');

  // Invalid format
  if (digitsOnly.length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      ...templates.invalidFormat,
      sources: [],
      collaborativeBasis: { statement: templates.collaborativeBasisStatement },
    };
  }

  // Too short
  if (digitsOnly.length < 8) {
    indicators.push(labels.tooShort);
  }

  // Too long
  if (digitsOnly.length > 15) {
    indicators.push(labels.tooLong);
  }

  // Suspicious patterns (all same digit, sequential)
  if (/^(\d)\1+$/.test(digitsOnly)) {
    indicators.push(labels.suspiciousPattern);
  }

  // Add internal reports indicator
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source presence indicator
  if (hasPublicSourcePresence) {
    indicators.push(labels.publicSourcePresence);
  }

  // Add high report frequency indicator
  const isHighFrequency = internalReportCount >= riskConfig.thresholds.highFrequencyReportCount;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  // Compute risk factors
  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: indicators.includes(labels.suspiciousPattern),
    hasMediumRiskKeywords: indicators.includes(labels.tooShort) || indicators.includes(labels.tooLong),
    internalReportCount,
    hasExternalPublicSource: hasPublicSourcePresence,
    isHighReportFrequency: isHighFrequency,
  };

  // Compute aggregated risk score
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
    sources: [
      {
        name: 'AntiFraud Heuristics Engine',
        url: 'https://github.com/antifraud-project',
      },
    ],
    collaborativeBasis: { statement: templates.collaborativeBasisStatement },
  };
}

// Analyze crypto address
export function analyzeCrypto(
  address: string,
  lang: string = 'pt',
  internalReportCount: number = 0,
  hasPublicSourcePresence: boolean = false
): StructuredAnalysisResult {
  const templates = getTemplates(lang);
  const labels = getLabels(lang);

  if (!address || address.trim().length === 0) {
    return {
      risk: 'Low',
      riskScore: 0,
      ...templates.emptyInput,
      sources: [],
      collaborativeBasis: { statement: templates.collaborativeBasisStatement },
    };
  }

  const indicators: string[] = [];

  // Basic format validation
  const isBitcoin = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address);
  const isEthereum = /^0x[a-fA-F0-9]{40}$/.test(address);

  if (!isBitcoin && !isEthereum) {
    indicators.push(labels.invalidCryptoFormat);
  }

  // Add internal reports indicator
  if (internalReportCount > 0) {
    indicators.push(`${labels.internalReports} (${internalReportCount})`);
  }

  // Add public source presence indicator
  if (hasPublicSourcePresence) {
    indicators.push(labels.publicSourcePresence);
  }

  // Add high report frequency indicator
  const isHighFrequency = internalReportCount >= riskConfig.thresholds.highFrequencyReportCount;
  if (isHighFrequency) {
    indicators.push(labels.highReportFrequency);
  }

  // Compute risk factors
  const riskFactors: RiskFactors = {
    hasHighRiskKeywords: false,
    hasMediumRiskKeywords: indicators.includes(labels.invalidCryptoFormat),
    internalReportCount,
    hasExternalPublicSource: hasPublicSourcePresence,
    isHighReportFrequency: isHighFrequency,
  };

  // Compute aggregated risk score
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
    sources: [
      {
        name: 'AntiFraud Heuristics Engine',
        url: 'https://github.com/antifraud-project',
      },
    ],
    collaborativeBasis: { statement: templates.collaborativeBasisStatement },
  };
}
