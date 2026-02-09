// Frontend-only message analysis utility
// This provides immediate functionality while the backend analyzeText is being implemented

interface ScamIndicator {
  keyword: string;
  weight: number;
  category: string;
}

const scamIndicators: ScamIndicator[] = [
  // Urgency indicators
  { keyword: 'urgente', weight: 15, category: 'urgência' },
  { keyword: 'imediato', weight: 15, category: 'urgência' },
  { keyword: 'agora', weight: 10, category: 'urgência' },
  { keyword: 'rápido', weight: 10, category: 'urgência' },
  { keyword: 'última chance', weight: 20, category: 'urgência' },
  
  // Prize/money indicators
  { keyword: 'ganhou', weight: 20, category: 'prêmio' },
  { keyword: 'prêmio', weight: 20, category: 'prêmio' },
  { keyword: 'prémio', weight: 20, category: 'prêmio' },
  { keyword: 'sorteio', weight: 15, category: 'prêmio' },
  { keyword: 'grátis', weight: 10, category: 'prêmio' },
  { keyword: 'gratuito', weight: 10, category: 'prêmio' },
  
  // Financial indicators
  { keyword: 'transferência', weight: 15, category: 'financeiro' },
  { keyword: 'pix', weight: 15, category: 'financeiro' },
  { keyword: 'conta bancária', weight: 20, category: 'financeiro' },
  { keyword: 'cartão de crédito', weight: 20, category: 'financeiro' },
  { keyword: 'senha', weight: 25, category: 'dados pessoais' },
  { keyword: 'dados pessoais', weight: 20, category: 'dados pessoais' },
  { keyword: 'cpf', weight: 20, category: 'dados pessoais' },
  
  // Action indicators
  { keyword: 'clique', weight: 15, category: 'ação suspeita' },
  { keyword: 'acesse', weight: 10, category: 'ação suspeita' },
  { keyword: 'confirme', weight: 15, category: 'ação suspeita' },
  { keyword: 'atualize', weight: 15, category: 'ação suspeita' },
  { keyword: 'verifique', weight: 10, category: 'ação suspeita' },
  
  // Threat indicators
  { keyword: 'bloqueado', weight: 20, category: 'ameaça' },
  { keyword: 'suspenso', weight: 20, category: 'ameaça' },
  { keyword: 'cancelado', weight: 15, category: 'ameaça' },
  { keyword: 'expirado', weight: 15, category: 'ameaça' },
];

// Crypto address patterns
const cryptoPatterns = [
  /\b[13][a-km-zA-HJ-NP-Z1-9]{25,34}\b/, // Bitcoin
  /\b0x[a-fA-F0-9]{40}\b/, // Ethereum
  /\b[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}\b/, // Litecoin
];

// URL patterns
const urlPattern = /(https?:\/\/[^\s]+)/gi;

export function analyzeMessage(message: string): string {
  const lowerMessage = message.toLowerCase();
  let score = 0;
  const detectedCategories = new Set<string>();
  const detectedIndicators: string[] = [];

  // Check for scam keywords
  for (const indicator of scamIndicators) {
    if (lowerMessage.includes(indicator.keyword.toLowerCase())) {
      score += indicator.weight;
      detectedCategories.add(indicator.category);
      detectedIndicators.push(indicator.keyword);
    }
  }

  // Check for crypto addresses
  let hasCryptoAddress = false;
  for (const pattern of cryptoPatterns) {
    if (pattern.test(message)) {
      score += 25;
      hasCryptoAddress = true;
      detectedCategories.add('endereço cripto');
      break;
    }
  }

  // Check for URLs
  const urls = message.match(urlPattern);
  if (urls && urls.length > 0) {
    score += 10 * Math.min(urls.length, 3);
    detectedCategories.add('links suspeitos');
  }

  // Check for excessive punctuation (!!!, ???)
  const excessivePunctuation = /[!?]{3,}/g;
  if (excessivePunctuation.test(message)) {
    score += 10;
    detectedCategories.add('pontuação excessiva');
  }

  // Check for ALL CAPS (more than 50% of letters)
  const letters = message.replace(/[^a-zA-Z]/g, '');
  const upperCaseLetters = message.replace(/[^A-Z]/g, '');
  if (letters.length > 10 && upperCaseLetters.length / letters.length > 0.5) {
    score += 15;
    detectedCategories.add('texto em maiúsculas');
  }

  // Determine risk level
  let riskLevel: string;
  let riskDescription: string;

  if (score >= 60) {
    riskLevel = 'ALTO';
    riskDescription = 'Esta mensagem contém múltiplos indicadores de fraude. Não responda, não clique em links e não forneça informações pessoais ou financeiras.';
  } else if (score >= 30) {
    riskLevel = 'MÉDIO';
    riskDescription = 'Esta mensagem contém alguns indicadores suspeitos. Tenha cuidado e verifique a autenticidade antes de tomar qualquer ação.';
  } else {
    riskLevel = 'BAIXO';
    riskDescription = 'Esta mensagem não apresenta indicadores significativos de fraude, mas mantenha sempre cautela com mensagens não solicitadas.';
  }

  // Build detailed analysis
  let analysis = `Risco: ${riskLevel}\n\n`;
  analysis += `Análise: ${riskDescription}\n\n`;
  analysis += `Pontuação: ${score} pontos\n\n`;

  if (detectedCategories.size > 0) {
    analysis += `Indicadores detectados:\n`;
    const categories = Array.from(detectedCategories);
    categories.forEach(cat => {
      analysis += `• ${cat}\n`;
    });
  }

  if (hasCryptoAddress) {
    analysis += `\n⚠️ Atenção: Endereço de criptomoeda detectado. Nunca envie dinheiro para endereços desconhecidos.`;
  }

  if (urls && urls.length > 0) {
    analysis += `\n⚠️ Atenção: Links detectados. Não clique em links de fontes não confiáveis.`;
  }

  analysis += `\n\nRecomendação: `;
  if (score >= 60) {
    analysis += `Não interaja com esta mensagem. Delete-a imediatamente e bloqueie o remetente.`;
  } else if (score >= 30) {
    analysis += `Verifique a identidade do remetente através de canais oficiais antes de responder ou clicar em qualquer link.`;
  } else {
    analysis += `Mantenha sempre cautela com mensagens não solicitadas, mesmo que pareçam legítimas.`;
  }

  return analysis;
}
