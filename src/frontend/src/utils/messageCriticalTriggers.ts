// Critical trigger phrases for message text analysis
// These phrases elevate risk to 85-100% when detected
// Used exclusively by message text analysis (not phone/email/crypto)

export const MESSAGE_CRITICAL_TRIGGERS = [
  // Financial and transparency keywords
  'dinheiro',
  'transparência',
  'ola pai',
  'olá mãe',
  'investimento',
  'grátis',
  'amigo',
  'amiga',
  'o seu filho',
  'a sua filha',
  'criptomoedas',
  'dados',
  'bancários',
  'morada',
  'liquidez',
  
  // Urgency phrases
  'Urgente',
  'Urgentíssimo',
  'Ação necessária',
  'Resposta imediata',
  'Responda agora',
  'Act immediately',
  'Último aviso',
  'Final warning',
  
  // Account threats
  'Sua conta será bloqueada hoje',
  'Seu acesso será cancelado',
  'Atividade suspeita',
  'Suspicious activity',
  'Tentativa de acesso indevido',
  
  // Detected activity warnings
  'Detectámos atividade suspeita no seu IP',
  'na sua conta',
  'Sua conta está em risco',
  'será encerrada',
  'foi suspensa',
  
  // Payment failures
  'Não conseguimos processar o seu pagamento',
  'Falha no pagamento',
  'Payment failed',
  'Fatura em atraso',
  'Invoice em aberto',
  'Cobrança pendente',
  
  // Verification requests
  'Atualize seus dados',
  'Confirme o cadastro',
  'Verificação necessária',
  'Precisamos da sua informação',
  'We need your information',
  'Verify now',
  
  // Code and link requests
  'Envie o código de 6 dígitos',
  'Reenvie o código que recebeu por engano',
  'Clique no link para confirmar',
  'instalar',
  'verificar',
  
  // Credential requests
  'Informe os dados do seu cartão',
  'Dados bancários',
  'CVV',
  'Senha de acesso',
  
  // Prize and rewards
  'Você ganhou!',
  'Prémio',
  'Sorteio',
  'Giveaway',
  'Presente exclusivo',
  'Bónus especial',
  'Cashback garantido',
  'Reembolso imediato',
  
  // Investment scams
  'Poucas horas de trabalho alto retorno financeiro',
  'Oferta imperdível',
  'Uma oportunidade única na vida',
  
  // Family impersonation
  'Mudei de número salva este novo',
  'Estou com problema no banco cartão podes fazer um pagamento por mim',
  
  // Emergency scams
  'Estou no estrangeiro e tive um acidente preciso de ajuda urgente',
  'Faz uma transferência para este IBAN',
  'Pix',
  'MBWay para mim'
];
