import { Language } from '@/i18n/translations';

// Simple dictionary-based translation for common Portuguese scam analysis terms
const translationDictionary: Record<Language, Record<string, string>> = {
  pt: {},
  en: {
    'Risco': 'Risk',
    'ALTO': 'HIGH',
    'MÉDIO': 'MEDIUM',
    'BAIXO': 'LOW',
    'Análise': 'Analysis',
    'Esta mensagem': 'This message',
    'contém': 'contains',
    'indicadores': 'indicators',
    'de fraude': 'of fraud',
    'golpe': 'scam',
    'suspeita': 'suspicious',
    'urgência': 'urgency',
    'prêmio': 'prize',
    'ganhou': 'won',
    'clique': 'click',
    'link': 'link',
    'dados pessoais': 'personal data',
    'senha': 'password',
    'conta bancária': 'bank account',
    'transferência': 'transfer',
    'dinheiro': 'money',
    'pagamento': 'payment',
    'imediato': 'immediate',
    'urgente': 'urgent',
    'atenção': 'attention',
    'cuidado': 'caution',
    'Pontuação': 'Score',
    'pontos': 'points',
    'Recomendação': 'Recommendation',
    'Não': 'Do not',
    'não': 'do not',
    'responda': 'respond',
    'clique em links': 'click on links',
    'forneça informações': 'provide information',
    'segura': 'safe',
    'parece': 'appears',
    'legítima': 'legitimate',
  },
  es: {
    'Risco': 'Riesgo',
    'ALTO': 'ALTO',
    'MÉDIO': 'MEDIO',
    'BAIXO': 'BAJO',
    'Análise': 'Análisis',
    'Esta mensagem': 'Este mensaje',
    'contém': 'contiene',
    'indicadores': 'indicadores',
    'de fraude': 'de fraude',
    'golpe': 'estafa',
    'suspeita': 'sospechoso',
    'urgência': 'urgencia',
    'prêmio': 'premio',
    'ganhou': 'ganó',
    'clique': 'haga clic',
    'link': 'enlace',
    'dados pessoais': 'datos personales',
    'senha': 'contraseña',
    'conta bancária': 'cuenta bancaria',
    'transferência': 'transferencia',
    'dinheiro': 'dinero',
    'pagamento': 'pago',
    'imediato': 'inmediato',
    'urgente': 'urgente',
    'atenção': 'atención',
    'cuidado': 'cuidado',
    'Pontuação': 'Puntuación',
    'pontos': 'puntos',
    'Recomendação': 'Recomendación',
    'Não': 'No',
    'não': 'no',
    'responda': 'responda',
    'clique em links': 'haga clic en enlaces',
    'forneça informações': 'proporcione información',
    'segura': 'seguro',
    'parece': 'parece',
    'legítima': 'legítimo',
  },
  fr: {},
  zh: {},
  ar: {},
  ru: {},
};

export function translateBackendResult(originalText: string, targetLanguage: Language): string {
  if (targetLanguage === 'pt' || !originalText) {
    return originalText;
  }

  const dictionary = translationDictionary[targetLanguage];
  if (!dictionary || Object.keys(dictionary).length === 0) {
    return originalText;
  }

  let translatedText = originalText;

  // Sort by length (longest first) to avoid partial replacements
  const sortedKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    const regex = new RegExp(key, 'gi');
    translatedText = translatedText.replace(regex, dictionary[key]);
  }

  return translatedText;
}
