export type Language = 'pt' | 'en' | 'es' | 'fr' | 'zh' | 'ar' | 'ru';

export interface Translations {
  // Header
  appTitle: string;
  appSubtitle: string;
  
  // Navigation
  navHome: string;
  navInstitutional: string;
  navMission: string;
  navTerms: string;
  
  // Auth
  login: string;
  logout: string;
  loggingIn: string;
  profile: string;
  loggedInAs: string;
  
  // Profile/History
  history: string;
  clearHistory: string;
  noHistory: string;
  
  // Main page
  checkScamReports: string;
  searchDescription: string;
  
  // Quick Actions
  quickActionCheckRisk: string;
  quickActionCheckRiskShort: string;
  quickActionSearch: string;
  quickActionSearchShort: string;
  quickActionReport: string;
  quickActionReportShort: string;
  
  // PWA Install
  installApp: string;
  installAppTitle: string;
  installAppNote: string;
  
  // Tabs
  tabPhone: string;
  tabPhoneShort: string;
  tabCrypto: string;
  tabCryptoShort: string;
  tabMessage: string;
  tabMessageShort: string;
  tabEmail: string;
  tabEmailShort: string;
  
  // Phone tab
  phoneLabel: string;
  phonePlaceholder: string;
  phoneDescription: string;
  checkPhoneButton: string;
  checkingPhone: string;
  phoneNotReported: string;
  phoneReported: string;
  
  // Crypto tab
  cryptoLabel: string;
  cryptoPlaceholder: string;
  cryptoDescription: string;
  checkCryptoButton: string;
  checkingCrypto: string;
  cryptoNotReported: string;
  cryptoReported: string;
  
  // Message tab
  messageLabel: string;
  messagePlaceholder: string;
  messageDescription: string;
  analyzeButton: string;
  analyzing: string;
  originalResult: string;
  translatedResult: string;
  
  // Email tab
  emailLabel: string;
  emailPlaceholder: string;
  emailDescription: string;
  checkEmailButton: string;
  checkingEmail: string;
  emailSafe: string;
  emailFlagged: string;
  emailReason_no_red_flags: string;
  emailReason_temporary_email: string;
  emailReason_suspicious_tld: string;
  emailReason_typosquatting: string;
  emailReason_random_characters: string;
  emailReason_excessive_numbers: string;
  emailReason_suspicious_format: string;
  
  // Collaborative Database
  collaborativeTitle: string;
  collaborativeDescription: string;
  collaborativeRiskScore: string;
  collaborativeReportCount: string;
  collaborativeCategories: string;
  collaborativeDisclaimer: string;
  collaborativeNoData: string;
  
  // Report Categories
  categoryPhishing: string;
  categoryScam: string;
  categorySpam: string;
  categoryFraud: string;
  categoryImpersonation: string;
  categoryOther: string;
  
  // Report Submission
  reportTitle: string;
  reportDescription: string;
  reportTypeLabel: string;
  reportTypePlaceholder: string;
  reportTypeEmail: string;
  reportTypePhone: string;
  reportTypeMessage: string;
  reportTypeCrypto: string;
  reportValueLabel: string;
  reportValuePlaceholder: string;
  reportCategoryLabel: string;
  reportCategoryPlaceholder: string;
  reportCountryLabel: string;
  reportCountryPlaceholder: string;
  reportDescriptionLabel: string;
  reportDescriptionPlaceholder: string;
  reportSubmitButton: string;
  reportSubmitting: string;
  reportSuccess: string;
  
  // Errors
  errorPhoneEmpty: string;
  errorCryptoEmpty: string;
  errorMessageEmpty: string;
  errorEmailEmpty: string;
  errorEmailInvalid: string;
  errorBackendNotReady: string;
  errorCheckPhone: string;
  errorCheckCrypto: string;
  errorAnalyzeMessage: string;
  errorCollaborativeLookup: string;
  errorReportTypeEmpty: string;
  errorReportValueEmpty: string;
  errorReportCategoryEmpty: string;
  errorReportCountryEmpty: string;
  errorReportCooldown: string;
  errorReportSubmission: string;
  
  // How It Works page
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  featureVerificationTitle: string;
  featureVerificationDesc: string;
  featureDatabaseTitle: string;
  featureDatabaseDesc: string;
  featureReportsTitle: string;
  featureReportsDesc: string;
  featureScoringTitle: string;
  featureScoringDesc: string;
  howItWorksDetailTitle: string;
  howItWorksDetailSubtitle: string;
  howCheckTitle: string;
  howCheckDesc: string;
  howDatabaseTitle: string;
  howDatabaseDesc: string;
  howReportTitle: string;
  howReportDesc: string;
  howScoringTitle: string;
  howScoringDesc: string;
  howAiTitle: string;
  howAiDesc: string;
  howFutureTitle: string;
  howFutureDesc: string;
  
  // Institutional page
  institutionalTitle: string;
  institutionalSubtitle: string;
  visionTitle: string;
  visionContent: string;
  missionTitle: string;
  missionContent: string;
  missionPoint1: string;
  missionPoint2: string;
  missionPoint3: string;
  missionPoint4: string;
  valuesTitle: string;
  valueProtectionTitle: string;
  valueProtection: string;
  valueTransparencyTitle: string;
  valueTransparency: string;
  valueAccessibilityTitle: string;
  valueAccessibility: string;
  valueEducationTitle: string;
  valueEducation: string;
  valueInnovationTitle: string;
  valueInnovation: string;
  valueFutureSecureTitle: string;
  valueFutureSecure: string;
  
  // Terms page
  termsTitle: string;
  termsSubtitle: string;
  termsSection1Title: string;
  termsSection1Content: string[];
  termsSection2Title: string;
  termsSection2Content: string[];
  termsSection3Title: string;
  termsSection3Content: string[];
  termsSection4Title: string;
  termsSection4Content: string[];
  termsSection5Title: string;
  termsSection5Content: string[];
  termsSection6Title: string;
  termsSection6Content: string[];
  
  // Language selector
  languageLabel: string;
}

const ptTranslations: Translations = {
  appTitle: 'AntiFraud',
  appSubtitle: 'by HCoragem',
  navHome: 'Início',
  navInstitutional: 'Como Funciona',
  navMission: 'Missão',
  navTerms: 'Termos',
  login: 'Entrar',
  logout: 'Sair',
  loggingIn: 'Entrando...',
  profile: 'Perfil',
  loggedInAs: 'Conectado como:',
  history: 'Histórico',
  clearHistory: 'Limpar',
  noHistory: 'Nenhum histórico ainda',
  checkScamReports: 'Verificar Denúncias',
  searchDescription: 'Pesquise na nossa base de dados para ver se um número de telefone, endereço cripto, email ou mensagem foi denunciado',
  quickActionCheckRisk: 'Verificar Risco',
  quickActionCheckRiskShort: 'Verificar',
  quickActionSearch: 'Pesquisar Base',
  quickActionSearchShort: 'Pesquisar',
  quickActionReport: 'Denunciar',
  quickActionReportShort: 'Denunciar',
  installApp: 'Instalar App',
  installAppTitle: 'Instalar AntiFraud',
  installAppNote: 'Instale o AntiFraud no seu dispositivo para acesso rápido e offline.',
  tabPhone: 'Número de Telefone',
  tabPhoneShort: 'Telefone',
  tabCrypto: 'Endereço Cripto',
  tabCryptoShort: 'Cripto',
  tabMessage: 'Mensagem',
  tabMessageShort: 'Mensagem',
  tabEmail: 'Email',
  tabEmailShort: 'Email',
  phoneLabel: 'Número de Telefone',
  phonePlaceholder: 'Insira o número de telefone',
  phoneDescription: 'Verifique se um número de telefone foi denunciado por fraude',
  checkPhoneButton: 'Verificar Número',
  checkingPhone: 'Verificando...',
  phoneNotReported: 'Este número de telefone ainda não foi denunciado.',
  phoneReported: 'Este número de telefone foi denunciado {count} vez(es).',
  cryptoLabel: 'Endereço Cripto',
  cryptoPlaceholder: 'Insira o endereço cripto',
  cryptoDescription: 'Verifique se um endereço de criptomoeda foi denunciado por fraude',
  checkCryptoButton: 'Verificar Endereço',
  checkingCrypto: 'Verificando...',
  cryptoNotReported: 'Este endereço cripto ainda não foi denunciado.',
  cryptoReported: 'Este endereço cripto foi denunciado {count} vez(es).',
  messageLabel: 'Mensagem Suspeita',
  messagePlaceholder: 'Cole aqui a mensagem recebida',
  messageDescription: 'Analise mensagens de SMS, WhatsApp, email ou redes sociais para detectar fraudes',
  analyzeButton: 'Analisar Mensagem',
  analyzing: 'Analisando...',
  originalResult: 'Resultado Original (Português)',
  translatedResult: 'Tradução Automática',
  emailLabel: 'Endereço de Email',
  emailPlaceholder: 'exemplo@dominio.com',
  emailDescription: 'Verifique se um endereço de email parece suspeito',
  checkEmailButton: 'Verificar Email',
  checkingEmail: 'Verificando...',
  emailSafe: 'Email Parece Seguro',
  emailFlagged: 'Email Suspeito',
  emailReason_no_red_flags: 'Nenhum indicador de fraude detectado',
  emailReason_temporary_email: 'Email temporário ou descartável detectado',
  emailReason_suspicious_tld: 'Domínio de topo suspeito',
  emailReason_typosquatting: 'Possível typosquatting de domínio conhecido',
  emailReason_random_characters: 'Padrão de caracteres aleatórios detectado',
  emailReason_excessive_numbers: 'Excesso de números no endereço',
  emailReason_suspicious_format: 'Formato suspeito detectado',
  collaborativeTitle: 'Base de Dados Colaborativa',
  collaborativeDescription: 'Informação agregada de denúncias da comunidade',
  collaborativeRiskScore: 'Score de Risco',
  collaborativeReportCount: 'Denúncias',
  collaborativeCategories: 'Categorias',
  collaborativeDisclaimer: 'Esta informação é colaborativa e não constitui decisão oficial. Use como referência educativa.',
  collaborativeNoData: 'Nenhuma denúncia encontrada na base de dados colaborativa.',
  categoryPhishing: 'Phishing',
  categoryScam: 'Burla',
  categorySpam: 'Spam',
  categoryFraud: 'Fraude',
  categoryImpersonation: 'Imitação',
  categoryOther: 'Outro',
  reportTitle: 'Denunciar Fraude',
  reportDescription: 'Ajude a comunidade reportando emails, números, mensagens ou endereços suspeitos',
  reportTypeLabel: 'Tipo',
  reportTypePlaceholder: 'Selecione o tipo',
  reportTypeEmail: 'Email',
  reportTypePhone: 'Telefone',
  reportTypeMessage: 'Mensagem',
  reportTypeCrypto: 'Endereço Cripto',
  reportValueLabel: 'Valor',
  reportValuePlaceholder: 'Insira o email, número, mensagem ou endereço',
  reportCategoryLabel: 'Categoria',
  reportCategoryPlaceholder: 'Selecione a categoria',
  reportCountryLabel: 'País',
  reportCountryPlaceholder: 'Ex: Portugal, Brasil',
  reportDescriptionLabel: 'Descrição (Opcional)',
  reportDescriptionPlaceholder: 'Descreva o contexto da fraude...',
  reportSubmitButton: 'Enviar Denúncia',
  reportSubmitting: 'Enviando...',
  reportSuccess: 'Denúncia enviada com sucesso!',
  errorPhoneEmpty: 'Por favor, insira um número de telefone',
  errorCryptoEmpty: 'Por favor, insira um endereço cripto',
  errorMessageEmpty: 'Por favor, insira uma mensagem para analisar',
  errorEmailEmpty: 'Por favor, insira um endereço de email',
  errorEmailInvalid: 'Por favor, insira um endereço de email válido',
  errorBackendNotReady: 'Sistema não está pronto. Por favor, tente novamente.',
  errorCheckPhone: 'Erro ao verificar número. Serviço temporariamente indisponível.',
  errorCheckCrypto: 'Erro ao verificar endereço. Serviço temporariamente indisponível.',
  errorAnalyzeMessage: 'Erro ao analisar mensagem. Serviço temporariamente indisponível.',
  errorCollaborativeLookup: 'Erro ao consultar base colaborativa.',
  errorReportTypeEmpty: 'Por favor, selecione o tipo',
  errorReportValueEmpty: 'Por favor, insira o valor',
  errorReportCategoryEmpty: 'Por favor, selecione a categoria',
  errorReportCountryEmpty: 'Por favor, insira o país',
  errorReportCooldown: 'Aguarde {seconds} segundos antes de enviar outra denúncia.',
  errorReportSubmission: 'Erro ao enviar denúncia. Tente novamente.',
  howItWorksTitle: 'Como Funciona',
  howItWorksSubtitle: 'Proteja-se contra fraudes digitais com tecnologia avançada e inteligência colaborativa',
  featureVerificationTitle: 'Verificação Instantânea',
  featureVerificationDesc: 'Analise mensagens, emails, números de telefone e endereços de criptomoedas em segundos',
  featureDatabaseTitle: 'Base de Dados Global',
  featureDatabaseDesc: 'Acesso a milhões de denúncias colaborativas e listas públicas de fraudes',
  featureReportsTitle: 'Denúncias Comunitárias',
  featureReportsDesc: 'Contribua para a segurança de todos reportando fraudes que encontrar',
  featureScoringTitle: 'Score de Risco',
  featureScoringDesc: 'Algoritmos avançados calculam o nível de risco de 0 a 100',
  howItWorksDetailTitle: 'Funcionalidades Detalhadas',
  howItWorksDetailSubtitle: 'Entenda como cada componente protege você',
  howCheckTitle: 'Verificação de Mensagens e Contactos',
  howCheckDesc: 'Cole qualquer mensagem suspeita ou insira um email, número de telefone ou endereço de criptomoeda. Nossa IA analisa padrões de fraude, urgência artificial, pedidos financeiros e outros indicadores de risco.',
  howDatabaseTitle: 'Base de Dados Colaborativa',
  howDatabaseDesc: 'Agregamos denúncias de utilizadores, listas públicas de fraudes e APIs externas para criar uma base de dados global. Cada consulta verifica milhões de registos em tempo real.',
  howReportTitle: 'Sistema de Denúncias',
  howReportDesc: 'Encontrou uma fraude? Reporte para ajudar a comunidade. Cada denúncia é validada e contribui para o score de risco. Quanto mais denúncias, maior a proteção coletiva.',
  howScoringTitle: 'Algoritmo de Scoring',
  howScoringDesc: 'Calculamos um score de risco de 0 a 100 baseado em: número de denúncias, categorias reportadas, padrões de fraude conhecidos e análise de comportamento. Scores acima de 75 indicam alto risco.',
  howAiTitle: 'Inteligência Artificial',
  howAiDesc: 'Utilizamos algoritmos avançados de análise de texto, detecção de padrões e machine learning para identificar fraudes emergentes antes que se tornem epidemias.',
  howFutureTitle: 'Preparação para Ameaças Futuras',
  howFutureDesc: 'Estamos preparados para ameaças emergentes, incluindo riscos de computação quântica. Nossa arquitetura descentralizada na Internet Computer garante segurança a longo prazo.',
  institutionalTitle: 'Missão, Visão e Valores',
  institutionalSubtitle: 'Conheça nossa missão, visão e valores',
  visionTitle: 'Visão',
  visionContent: 'Ser a plataforma de referência global na prevenção e combate a fraudes digitais, protegendo milhões de pessoas através de tecnologia avançada, educação e colaboração comunitária.',
  missionTitle: 'Missão',
  missionContent: 'Capacitar indivíduos e comunidades com ferramentas tecnológicas avançadas para identificar, prevenir e combater fraudes digitais, promovendo um ambiente digital mais seguro através de:',
  missionPoint1: 'Análise inteligente de mensagens, emails, números de telefone e endereços de criptomoedas',
  missionPoint2: 'Base de dados colaborativa alimentada pela comunidade',
  missionPoint3: 'Educação contínua sobre ameaças digitais emergentes',
  missionPoint4: 'Preparação para ameaças futuras, incluindo riscos quânticos',
  valuesTitle: 'Valores',
  valueProtectionTitle: 'Proteção',
  valueProtection: 'Colocamos a segurança dos utilizadores em primeiro lugar',
  valueTransparencyTitle: 'Transparência',
  valueTransparency: 'Operamos com clareza sobre nossas capacidades e limitações',
  valueAccessibilityTitle: 'Acessibilidade',
  valueAccessibility: 'Tecnologia de proteção disponível para todos',
  valueEducationTitle: 'Educação',
  valueEducation: 'Capacitamos utilizadores com conhecimento preventivo',
  valueInnovationTitle: 'Inovação',
  valueInnovation: 'Evoluímos constantemente para enfrentar novas ameaças',
  valueFutureSecureTitle: 'Segurança Futura',
  valueFutureSecure: 'Preparamos defesas contra ameaças emergentes, incluindo computação quântica',
  termsTitle: 'Termos e Condições de Utilização',
  termsSubtitle: 'Data: 05.01.2025',
  termsSection1Title: '1. Definições e Aceitação',
  termsSection1Content: [
    '"AntiFraud", "Nós" ou "Aplicação" referem-se ao projeto e ao seu criador.',
    '"Utilizador" ou "Você" refere-se a qualquer pessoa que aceda ou utilize a aplicação ou os seus serviços associados.',
    'Ao utilizar a AntiFraud, o Utilizador declara ter lido, compreendido e aceitado integralmente estes Termos.',
    'A plataforma é destinada exclusivamente a maiores de 18 anos ou utilizadores legalmente autorizados.',
  ],
  termsSection2Title: '2. Natureza do Serviço',
  termsSection2Content: [
    'A AntiFraud não é autoridade policial, financeira, judicial, governamental ou regulatória.',
    'Todas as análises, classificações, indicadores e avisos são estimativas automáticas sujeitas a erro ou imprecisão.',
    'Não existe garantia de que um contacto, email, número, mensagem ou endereço seja fraudulento ou legítimo.',
    'Os resultados servem apenas para informação e educação do Utilizador.',
  ],
  termsSection3Title: '3. Base de Dados e Contributos da Comunidade',
  termsSection3Content: [
    'A AntiFraud permite denunciar emails, números de telefone, mensagens e endereços de criptomoedas.',
    'As denúncias não são inspeções oficiais nem validações formais.',
    'A plataforma pode agregar dados colaborativos, listas públicas, APIs externas e algoritmos próprios para gerar um score de risco.',
    'Não garantimos a exatidão, integralidade ou atualidade dessas informações.',
    'O Utilizador assume inteiro risco e responsabilidade por qualquer denúncia submetida.',
  ],
  termsSection4Title: '4. Uso Aceitável',
  termsSection4Content: [
    'O Utilizador compromete-se a não utilizar a AntiFraud para:',
    '• Atividades ilegais ou fraudulentas',
    '• Assédio, difamação ou perseguição',
    '• Recolha abusiva de dados pessoais',
    '• Execução de testes maliciosos, engenharia social ou ataques reais',
    'O uso indevido pode resultar em suspensão imediata de acesso.',
  ],
  termsSection5Title: '5. Isenção de Garantias',
  termsSection5Content: [
    'A AntiFraud é fornecida "tal como está" e "conforme disponível".',
    'Não garantimos:',
    '• Precisão ou veracidade absoluta das análises',
    '• Atualização contínua das bases de dados',
    '• Disponibilidade ininterrupta',
    '• Compatibilidade com todos os dispositivos',
    'O Utilizador utiliza a plataforma por sua conta e risco.',
  ],
  termsSection6Title: '6. Limitação Máxima de Responsabilidade',
  termsSection6Content: [
    'Em nenhuma circunstância o criador da AntiFraud será responsável por:',
    '• Perdas financeiras',
    '• Danos diretos, indiretos, incidentais ou consequenciais',
    '• Fraudes ocorridas apesar do uso da aplicação',
    '• Decisões tomadas com base nas análises geradas',
    'A prevenção de fraudes depende também do julgamento e prudência pessoal do Utilizador.',
  ],
  languageLabel: 'Idioma',
};

const enTranslations: Translations = {
  appTitle: 'AntiFraud',
  appSubtitle: 'by HCoragem',
  navHome: 'Home',
  navInstitutional: 'How It Works',
  navMission: 'Mission',
  navTerms: 'Terms',
  login: 'Login',
  logout: 'Logout',
  loggingIn: 'Logging in...',
  profile: 'Profile',
  loggedInAs: 'Logged in as:',
  history: 'History',
  clearHistory: 'Clear',
  noHistory: 'No history yet',
  checkScamReports: 'Check Scam Reports',
  searchDescription: 'Search our database to see if a phone number, crypto address, email or message has been reported',
  quickActionCheckRisk: 'Check Risk',
  quickActionCheckRiskShort: 'Check',
  quickActionSearch: 'Search Database',
  quickActionSearchShort: 'Search',
  quickActionReport: 'Report',
  quickActionReportShort: 'Report',
  installApp: 'Install App',
  installAppTitle: 'Install AntiFraud',
  installAppNote: 'Install AntiFraud on your device for quick and offline access.',
  tabPhone: 'Phone Number',
  tabPhoneShort: 'Phone',
  tabCrypto: 'Crypto Address',
  tabCryptoShort: 'Crypto',
  tabMessage: 'Message',
  tabMessageShort: 'Message',
  tabEmail: 'Email',
  tabEmailShort: 'Email',
  phoneLabel: 'Phone Number',
  phonePlaceholder: 'Enter phone number',
  phoneDescription: 'Check if a phone number has been reported for fraud',
  checkPhoneButton: 'Check Number',
  checkingPhone: 'Checking...',
  phoneNotReported: 'This phone number has not been reported yet.',
  phoneReported: 'This phone number has been reported {count} time(s).',
  cryptoLabel: 'Crypto Address',
  cryptoPlaceholder: 'Enter crypto address',
  cryptoDescription: 'Check if a cryptocurrency address has been reported for fraud',
  checkCryptoButton: 'Check Address',
  checkingCrypto: 'Checking...',
  cryptoNotReported: 'This crypto address has not been reported yet.',
  cryptoReported: 'This crypto address has been reported {count} time(s).',
  messageLabel: 'Suspicious Message',
  messagePlaceholder: 'Paste the received message here',
  messageDescription: 'Analyze messages from SMS, WhatsApp, email or social media to detect fraud',
  analyzeButton: 'Analyze Message',
  analyzing: 'Analyzing...',
  originalResult: 'Original Result (Portuguese)',
  translatedResult: 'Automatic Translation',
  emailLabel: 'Email Address',
  emailPlaceholder: 'example@domain.com',
  emailDescription: 'Check if an email address looks suspicious',
  checkEmailButton: 'Check Email',
  checkingEmail: 'Checking...',
  emailSafe: 'Email Looks Safe',
  emailFlagged: 'Suspicious Email',
  emailReason_no_red_flags: 'No fraud indicators detected',
  emailReason_temporary_email: 'Temporary or disposable email detected',
  emailReason_suspicious_tld: 'Suspicious top-level domain',
  emailReason_typosquatting: 'Possible typosquatting of known domain',
  emailReason_random_characters: 'Random character pattern detected',
  emailReason_excessive_numbers: 'Excessive numbers in address',
  emailReason_suspicious_format: 'Suspicious format detected',
  collaborativeTitle: 'Collaborative Database',
  collaborativeDescription: 'Aggregated information from community reports',
  collaborativeRiskScore: 'Risk Score',
  collaborativeReportCount: 'Reports',
  collaborativeCategories: 'Categories',
  collaborativeDisclaimer: 'This information is collaborative and does not constitute an official decision. Use as educational reference.',
  collaborativeNoData: 'No reports found in collaborative database.',
  categoryPhishing: 'Phishing',
  categoryScam: 'Scam',
  categorySpam: 'Spam',
  categoryFraud: 'Fraud',
  categoryImpersonation: 'Impersonation',
  categoryOther: 'Other',
  reportTitle: 'Report Fraud',
  reportDescription: 'Help the community by reporting suspicious emails, numbers, messages or addresses',
  reportTypeLabel: 'Type',
  reportTypePlaceholder: 'Select type',
  reportTypeEmail: 'Email',
  reportTypePhone: 'Phone',
  reportTypeMessage: 'Message',
  reportTypeCrypto: 'Crypto Address',
  reportValueLabel: 'Value',
  reportValuePlaceholder: 'Enter email, number, message or address',
  reportCategoryLabel: 'Category',
  reportCategoryPlaceholder: 'Select category',
  reportCountryLabel: 'Country',
  reportCountryPlaceholder: 'E.g.: Portugal, Brazil',
  reportDescriptionLabel: 'Description (Optional)',
  reportDescriptionPlaceholder: 'Describe the fraud context...',
  reportSubmitButton: 'Submit Report',
  reportSubmitting: 'Submitting...',
  reportSuccess: 'Report submitted successfully!',
  errorPhoneEmpty: 'Please enter a phone number',
  errorCryptoEmpty: 'Please enter a crypto address',
  errorMessageEmpty: 'Please enter a message to analyze',
  errorEmailEmpty: 'Please enter an email address',
  errorEmailInvalid: 'Please enter a valid email address',
  errorBackendNotReady: 'System is not ready. Please try again.',
  errorCheckPhone: 'Error checking number. Service temporarily unavailable.',
  errorCheckCrypto: 'Error checking address. Service temporarily unavailable.',
  errorAnalyzeMessage: 'Error analyzing message. Service temporarily unavailable.',
  errorCollaborativeLookup: 'Error querying collaborative database.',
  errorReportTypeEmpty: 'Please select type',
  errorReportValueEmpty: 'Please enter value',
  errorReportCategoryEmpty: 'Please select category',
  errorReportCountryEmpty: 'Please enter country',
  errorReportCooldown: 'Wait {seconds} seconds before submitting another report.',
  errorReportSubmission: 'Error submitting report. Try again.',
  howItWorksTitle: 'How It Works',
  howItWorksSubtitle: 'Protect yourself from digital fraud with advanced technology and collaborative intelligence',
  featureVerificationTitle: 'Instant Verification',
  featureVerificationDesc: 'Analyze messages, emails, phone numbers and cryptocurrency addresses in seconds',
  featureDatabaseTitle: 'Global Database',
  featureDatabaseDesc: 'Access millions of collaborative reports and public fraud lists',
  featureReportsTitle: 'Community Reports',
  featureReportsDesc: 'Contribute to everyone\'s safety by reporting fraud you encounter',
  featureScoringTitle: 'Risk Score',
  featureScoringDesc: 'Advanced algorithms calculate risk level from 0 to 100',
  howItWorksDetailTitle: 'Detailed Features',
  howItWorksDetailSubtitle: 'Understand how each component protects you',
  howCheckTitle: 'Message and Contact Verification',
  howCheckDesc: 'Paste any suspicious message or enter an email, phone number or cryptocurrency address. Our AI analyzes fraud patterns, artificial urgency, financial requests and other risk indicators.',
  howDatabaseTitle: 'Collaborative Database',
  howDatabaseDesc: 'We aggregate user reports, public fraud lists and external APIs to create a global database. Each query checks millions of records in real time.',
  howReportTitle: 'Reporting System',
  howReportDesc: 'Found fraud? Report it to help the community. Each report is validated and contributes to the risk score. More reports mean greater collective protection.',
  howScoringTitle: 'Scoring Algorithm',
  howScoringDesc: 'We calculate a risk score from 0 to 100 based on: number of reports, reported categories, known fraud patterns and behavior analysis. Scores above 75 indicate high risk.',
  howAiTitle: 'Artificial Intelligence',
  howAiDesc: 'We use advanced text analysis algorithms, pattern detection and machine learning to identify emerging fraud before it becomes epidemic.',
  howFutureTitle: 'Preparation for Future Threats',
  howFutureDesc: 'We are prepared for emerging threats, including quantum computing risks. Our decentralized architecture on the Internet Computer ensures long-term security.',
  institutionalTitle: 'Mission, Vision and Values',
  institutionalSubtitle: 'Learn about our mission, vision and values',
  visionTitle: 'Vision',
  visionContent: 'To be the global reference platform in preventing and combating digital fraud, protecting millions of people through advanced technology, education and community collaboration.',
  missionTitle: 'Mission',
  missionContent: 'Empower individuals and communities with advanced technological tools to identify, prevent and combat digital fraud, promoting a safer digital environment through:',
  missionPoint1: 'Intelligent analysis of messages, emails, phone numbers and cryptocurrency addresses',
  missionPoint2: 'Community-powered collaborative database',
  missionPoint3: 'Continuous education about emerging digital threats',
  missionPoint4: 'Preparation for future threats, including quantum risks',
  valuesTitle: 'Values',
  valueProtectionTitle: 'Protection',
  valueProtection: 'We put user security first',
  valueTransparencyTitle: 'Transparency',
  valueTransparency: 'We operate with clarity about our capabilities and limitations',
  valueAccessibilityTitle: 'Accessibility',
  valueAccessibility: 'Protection technology available to everyone',
  valueEducationTitle: 'Education',
  valueEducation: 'We empower users with preventive knowledge',
  valueInnovationTitle: 'Innovation',
  valueInnovation: 'We constantly evolve to face new threats',
  valueFutureSecureTitle: 'Future Security',
  valueFutureSecure: 'We prepare defenses against emerging threats, including quantum computing',
  termsTitle: 'Terms and Conditions of Use',
  termsSubtitle: 'Date: 05.01.2025',
  termsSection1Title: '1. Definitions and Acceptance',
  termsSection1Content: [
    '"AntiFraud", "We" or "Application" refer to the project and its creator.',
    '"User" or "You" refers to any person who accesses or uses the application or its associated services.',
    'By using AntiFraud, the User declares to have read, understood and fully accepted these Terms.',
    'The platform is intended exclusively for people over 18 years of age or legally authorized users.',
  ],
  termsSection2Title: '2. Nature of Service',
  termsSection2Content: [
    'AntiFraud is not a police, financial, judicial, governmental or regulatory authority.',
    'All analyses, classifications, indicators and warnings are automatic estimates subject to error or inaccuracy.',
    'There is no guarantee that a contact, email, number, message or address is fraudulent or legitimate.',
    'The results are for information and education purposes only.',
  ],
  termsSection3Title: '3. Database and Community Contributions',
  termsSection3Content: [
    'AntiFraud allows reporting of emails, phone numbers, messages and cryptocurrency addresses.',
    'Reports are not official inspections or formal validations.',
    'The platform may aggregate collaborative data, public lists, external APIs and proprietary algorithms to generate a risk score.',
    'We do not guarantee the accuracy, completeness or timeliness of this information.',
    'The User assumes full risk and responsibility for any report submitted.',
  ],
  termsSection4Title: '4. Acceptable Use',
  termsSection4Content: [
    'The User agrees not to use AntiFraud for:',
    '• Illegal or fraudulent activities',
    '• Harassment, defamation or persecution',
    '• Abusive collection of personal data',
    '• Execution of malicious tests, social engineering or real attacks',
    'Misuse may result in immediate suspension of access.',
  ],
  termsSection5Title: '5. Disclaimer of Warranties',
  termsSection5Content: [
    'AntiFraud is provided "as is" and "as available".',
    'We do not guarantee:',
    '• Absolute accuracy or truthfulness of analyses',
    '• Continuous database updates',
    '• Uninterrupted availability',
    '• Compatibility with all devices',
    'The User uses the platform at their own risk.',
  ],
  termsSection6Title: '6. Maximum Limitation of Liability',
  termsSection6Content: [
    'Under no circumstances will the creator of AntiFraud be liable for:',
    '• Financial losses',
    '• Direct, indirect, incidental or consequential damages',
    '• Fraud occurring despite use of the application',
    '• Decisions made based on generated analyses',
    'Fraud prevention also depends on the User\'s personal judgment and prudence.',
  ],
  languageLabel: 'Language',
};

export const translations: Record<Language, Translations> = {
  pt: ptTranslations,
  en: enTranslations,
  es: { ...enTranslations, languageLabel: 'Idioma' },
  fr: { ...enTranslations, languageLabel: 'Langue' },
  zh: { ...enTranslations, languageLabel: '语言' },
  ar: { ...enTranslations, languageLabel: 'اللغة' },
  ru: { ...enTranslations, languageLabel: 'Язык' },
};
