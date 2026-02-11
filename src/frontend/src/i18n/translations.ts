export const translations = {
  pt: {
    // App branding
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    
    // Navigation
    navHome: 'Início',
    navInstitutional: 'Institucional',
    navMission: 'Missão',
    navHowItWorks: 'Como Funciona',
    navTerms: 'Termos',
    navPrivacy: 'Privacidade',
    navDocumentation: 'Documentação',
    
    // Documentation Page
    documentationPageTitle: 'Documentação Técnica',
    documentationPageDescription: 'Documentação completa do AntiFraud / by HCoragem',
    documentationCardTitle: 'Gerar Documentação PDF',
    documentationCardDescription: 'Descarregue a documentação técnica completa em formato PDF',
    documentationContentTitle: 'Conteúdo incluído:',
    documentationSection1: 'Branding e identidade visual',
    documentationSection2: 'Páginas institucionais completas (Missão, Como Funciona, Termos, Privacidade)',
    documentationSection3: 'Motor antifraude 100% frontend com heurísticas',
    documentationSection4: 'PWA e instalação em dispositivos',
    documentationSection5: 'Modal de cookies e termos obrigatória',
    documentationSection6: 'Navegação e aliases de rotas',
    documentationSection7: 'Checklist de verificação final',
    documentationLanguageNote: 'O documento é gerado em Português e inclui um apêndice com os idiomas suportados pela interface.',
    documentationGenerateButton: 'Gerar e Descarregar PDF',
    documentationGenerating: 'A gerar PDF...',
    
    // Consent Modal
    consentModalTitle: 'AntiFraud / by HCoragem',
    consentModalDescription: 'Antes de continuar, precisamos do seu consentimento para utilizar a aplicação.',
    consentCookiesLabel: 'Aceito o uso de cookies para melhorar a experiência de utilização',
    consentTermsLabel: 'Li e aceito os Termos e Condições e a Política de Privacidade',
    consentReadBeforeAccepting: 'Leia os documentos antes de aceitar:',
    consentViewTermsButton: 'Ver Termos',
    consentViewPrivacyButton: 'Ver Privacidade',
    consentAcceptButton: 'Aceitar e Continuar',
    consentFooterNote: 'Ao aceitar, concorda com os termos de utilização do AntiFraud.',
    
    // Home page
    homeTitle: 'Proteja-se contra fraudes digitais',
    homeSubtitle: 'Verifique mensagens, emails, números de telefone e endereços de criptomoedas antes de confiar',
    
    // Quick actions
    quickActionsTitle: 'Ações Rápidas',
    quickActionCheckRisk: 'Verificar Risco',
    quickActionCheckRiskDesc: 'Analise mensagens e contatos suspeitos',
    quickActionSearchDatabase: 'Consultar Base',
    quickActionSearchDatabaseDesc: 'Pesquise na base colaborativa',
    quickActionReportScam: 'Reportar Fraude',
    quickActionReportScamDesc: 'Ajude a comunidade reportando',
    
    // Verification section
    verificationTitle: 'Verificação de Segurança',
    verificationDescription: 'Escolha o tipo de verificação que deseja realizar',
    
    // Tabs
    tabMessage: 'Mensagem',
    tabEmail: 'Email',
    tabPhone: 'Telefone',
    tabCrypto: 'Cripto',
    tabAdvancedLookup: 'Pesquisa',
    
    // Form labels
    labelMessage: 'Mensagem para analisar',
    labelEmail: 'Endereço de email',
    labelPhone: 'Número de telefone',
    labelCrypto: 'Endereço de criptomoeda',
    
    // Placeholders
    placeholderMessage: 'Cole aqui a mensagem recebida',
    placeholderEmail: 'exemplo@email.com',
    placeholderPhone: '+351 912 345 678',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    
    // Buttons
    buttonAnalyze: 'Analisar Mensagem',
    buttonAnalyzing: 'A analisar...',
    buttonCheck: 'Verificar',
    buttonChecking: 'A verificar...',
    
    // Structured Analysis Results
    structuredResultTitle: 'Resultado da Análise',
    structuredRiskLabel: 'Nível de Risco',
    structuredRiskLow: 'Baixo',
    structuredRiskMedium: 'Médio',
    structuredRiskHigh: 'Elevado',
    structuredExplanationLabel: 'Explicação',
    structuredRecommendationLabel: 'Recomendação',
    
    // Transparency sections
    transparencySourcesLabel: 'Fontes Públicas',
    transparencyCollaborativeBasisLabel: 'Base Colaborativa',
    
    // Advanced Contact Lookup
    advancedLookupTitle: 'Pesquisa Avançada de Contactos',
    advancedLookupDescription: 'Pesquise informações públicas sobre números de telefone ou endereços de email',
    advancedLookupInputLabel: 'Telefone ou Email',
    advancedLookupInputPlaceholder: '+351 912 345 678 ou exemplo@email.com',
    advancedLookupSearchButton: 'Pesquisar',
    advancedLookupSearching: 'A pesquisar...',
    advancedLookupInvalidInput: 'Por favor, insira um número de telefone ou email válido.',
    advancedLookupSearchError: 'Erro ao realizar pesquisa. Tente novamente.',
    advancedLookupOfflineIndicator: 'Modo offline: A mostrar resultado em cache. Não é possível atualizar informações públicas.',
    advancedLookupOfflineNoCache: 'Sem conexão e sem resultados em cache para esta pesquisa.',
    advancedLookupPublicInfoTitle: 'Informação Pública',
    advancedLookupDisplayName: 'Nome',
    advancedLookupSummary: 'Resumo',
    advancedLookupDetails: 'Detalhes',
    advancedLookupAttribution: 'Atribuição',
    advancedLookupSource: 'Fonte',
    advancedLookupAsOf: 'Data',
    advancedLookupNoPublicInfo: 'Nenhuma informação pública encontrada para este contacto.',
    
    // Results
    resultTitle: 'Resultado da Análise',
    resultSafe: 'Seguro',
    resultSuspicious: 'Suspeito',
    resultNoReports: 'Sem Reportes',
    resultNoReportsDescription: 'Este item não possui reportes na nossa base de dados.',
    resultHasReports: 'Reportes Encontrados',
    resultHasReportsDescription: 'Este item possui {count} reporte(s) na nossa base de dados.',
    
    // Errors
    errorTitle: 'Erro',
    errorMessageEmpty: 'Por favor, insira uma mensagem para analisar.',
    errorEmailEmpty: 'Por favor, insira um endereço de email.',
    errorEmailInvalid: 'Por favor, insira um endereço de email válido.',
    errorPhoneEmpty: 'Por favor, insira um número de telefone.',
    errorCryptoEmpty: 'Por favor, insira um endereço de criptomoeda.',
    errorAnalysisFailed: 'Erro ao analisar. Por favor, tente novamente.',
    errorLoadingReports: 'Erro ao carregar reportes.',
    errorReportTypeEmpty: 'Por favor, selecione o tipo de reporte.',
    errorReportValueEmpty: 'Por favor, insira o valor a reportar.',
    errorReportCategoryEmpty: 'Por favor, selecione uma categoria.',
    errorReportCountryEmpty: 'Por favor, insira o país.',
    errorReportCooldown: 'Aguarde {seconds} segundos antes de enviar outro reporte.',
    errorReportSubmission: 'Erro ao enviar reporte. Tente novamente.',
    
    // Authentication
    authLogin: 'Entrar',
    authLogout: 'Sair',
    authLoggingIn: 'A entrar...',
    authWelcome: 'Bem-vindo',
    authMyProfile: 'Meu Perfil',
    authMyHistory: 'Meu Histórico',
    authClearHistory: 'Limpar Histórico',
    authHistoryEmpty: 'Sem histórico de verificações',
    login: 'Entrar',
    loggingIn: 'A entrar...',
    logout: 'Sair',
    profile: 'Perfil',
    loggedInAs: 'Autenticado como',
    history: 'Histórico',
    clearHistory: 'Limpar Histórico',
    noHistory: 'Sem histórico',
    
    // PWA Install
    installPrimaryButton: 'Baixe a Aplicação AntiFraud gratuitamente',
    installNotEligibleMessage: 'A aplicação ainda não está elegível para instalação ou já está instalada.',
    installAppTitle: 'Instalar AntiFraud',
    installAppNote: 'A aplicação AntiFraud é gratuita e não ocupa espaço significativo no seu dispositivo.',
    installAutoPromptMessage: 'Instale o AntiFraud no seu dispositivo para acesso rápido e offline.',
    installNowButton: 'Instalar Agora',
    installNotNowButton: 'Agora Não',
    installCloseButton: 'Fechar',
    installPwaExplanation: 'Esta é uma Progressive Web App (PWA) instalada através do navegador. Não é uma aplicação nativa da Google Play Store ou Apple App Store.',
    installInstructionsIos: 'Para instalar no iOS: Toque no ícone de partilha (quadrado com seta) e selecione "Adicionar ao Ecrã Principal".',
    installInstructionsAndroid: 'Para instalar no Android: Toque no menu (três pontos) e selecione "Adicionar ao ecrã principal" ou "Instalar aplicação".',
    installInstructionsDesktop: 'Para instalar no computador: Clique no ícone de instalação na barra de endereço ou no menu do navegador.',
    installInstructionsDefault: 'Para instalar: Procure a opção "Adicionar ao ecrã principal" ou "Instalar" no menu do seu navegador.',
    
    // Footer
    footerBuiltWith: 'Construído com',
    footerBy: 'por',
    
    // Collaborative Database
    collaborativeTitle: 'Base de Dados Colaborativa',
    collaborativeDescription: 'Consulte reportes da comunidade',
    collaborativeNoRecords: 'Sem registos conhecidos — base colaborativa em crescimento',
    collaborativeEmptyState: 'Sem registos conhecidos — base colaborativa em crescimento',
    collaborativeError: 'Erro ao consultar base de dados',
    collaborativeReportCount: '{count} reporte(s)',
    collaborativeRiskScore: 'Pontuação de risco',
    collaborativeCategories: 'Categorias',
    collaborativeDisclaimer: 'Os dados são fornecidos pela comunidade e podem não estar completos.',
    
    // Report Categories
    categoryPhishing: 'Phishing',
    categoryScam: 'Burla',
    categorySpam: 'Spam',
    categoryFraud: 'Fraude',
    categoryImpersonation: 'Personificação',
    categoryOther: 'Outro',
    
    // Report Submission
    reportTitle: 'Reportar Fraude',
    reportDescription: 'Ajude a comunidade reportando fraudes',
    reportTypeLabel: 'Tipo',
    reportTypePlaceholder: 'Selecione o tipo',
    reportTypeEmail: 'Email',
    reportTypePhone: 'Telefone',
    reportTypeMessage: 'Mensagem',
    reportTypeCrypto: 'Cripto',
    reportValueLabel: 'Valor',
    reportValuePlaceholder: 'Insira o valor a reportar',
    reportCategoryLabel: 'Categoria',
    reportCategoryPlaceholder: 'Selecione a categoria',
    reportCountryLabel: 'País',
    reportCountryPlaceholder: 'Insira o país',
    reportDescriptionLabel: 'Descrição (opcional)',
    reportDescriptionPlaceholder: 'Descreva o incidente',
    reportSubmitButton: 'Enviar Reporte',
    reportSubmitting: 'A enviar...',
    reportSuccess: 'Reporte enviado com sucesso!',
    
    // Mission Page
    missionPageTitle: 'Nossa Missão',
    missionPageHeading: 'Nossa Missão',
    missionPageDescription: 'Proteger utilizadores contra fraudes digitais através de tecnologia acessível',
    missionPageSubheading: 'Proteger utilizadores contra fraudes digitais através de tecnologia acessível',
    missionVisionTitle: 'Visão',
    missionVisionContent: 'Um mundo digital mais seguro onde todos possam identificar e evitar fraudes antes de se tornarem vítimas.',
    missionVisionParagraphs: ['Um mundo digital mais seguro onde todos possam identificar e evitar fraudes antes de se tornarem vítimas.'],
    missionCoreTitle: 'Missão Central',
    missionCoreContent: 'Fornecer ferramentas gratuitas e acessíveis de verificação antifraude que capacitam utilizadores de todas as idades e níveis técnicos.',
    missionCoreParagraphs: ['Fornecer ferramentas gratuitas e acessíveis de verificação antifraude que capacitam utilizadores de todas as idades e níveis técnicos.'],
    missionImpactTitle: 'Impacto Social',
    missionImpactContent: 'Proteger os mais vulneráveis através de educação digital e ferramentas de verificação simples e eficazes.',
    missionImpactParagraphs: ['Proteger os mais vulneráveis através de educação digital e ferramentas de verificação simples e eficazes.'],
    missionValuesTitle: 'Valores',
    missionValuesParagraphs: [
      'Transparência: Todas as análises mostram as fontes e métodos utilizados.',
      'Privacidade: Análises realizadas localmente no dispositivo do utilizador.',
      'Acessibilidade: Interface simples e gratuita para todos.',
      'Colaboração: Base de dados alimentada pela comunidade.'
    ],
    missionValue1Title: 'Transparência',
    missionValue1Content: 'Todas as análises mostram as fontes e métodos utilizados.',
    missionValue2Title: 'Privacidade',
    missionValue2Content: 'Análises realizadas localmente no dispositivo do utilizador.',
    missionValue3Title: 'Acessibilidade',
    missionValue3Content: 'Interface simples e gratuita para todos.',
    missionValue4Title: 'Colaboração',
    missionValue4Content: 'Base de dados alimentada pela comunidade.',
    missionLimitationsTitle: 'Limitações do Sistema',
    missionLimitationsParagraphs: [
      'O AntiFraud utiliza heurísticas determinísticas e não garante 100% de precisão.',
      'A base colaborativa depende de reportes da comunidade e pode não estar completa.',
      'Sempre verifique informações críticas através de canais oficiais.'
    ],
    missionResponsibleUseTitle: 'Uso Responsável',
    missionResponsibleUseParagraphs: [
      'Use o AntiFraud como uma ferramenta de apoio à decisão, não como única fonte de verdade.',
      'Verifique sempre a identidade de remetentes através de canais oficiais para transações importantes.',
      'Reporte fraudes de forma responsável e precisa para ajudar a comunidade.'
    ],
    
    // How It Works Page
    howItWorksPageTitle: 'Como Funciona',
    howItWorksPageHeading: 'Como Funciona o AntiFraud',
    howItWorksPageDescription: 'Entenda como o sistema de verificação antifraude protege você',
    howItWorksPageSubheading: 'Sistema de verificação em múltiplas camadas',
    howItWorksIntro: 'O AntiFraud utiliza análise heurística avançada para identificar padrões de fraude em tempo real.',
    howItWorksVerificationTitle: 'Tipos de Verificação',
    howItWorksMessageTitle: 'Verificação de Mensagens',
    howItWorksMessageContent: 'Analisa o conteúdo de mensagens suspeitas procurando padrões comuns de phishing e fraude.',
    howItWorksMessageParagraphs: ['Analisa o conteúdo de mensagens suspeitas procurando padrões comuns de phishing e fraude, incluindo linguagem de urgência, pedidos financeiros, e links suspeitos.'],
    howItWorksEmailTitle: 'Verificação de Email',
    howItWorksEmailContent: 'Verifica endereços de email quanto a domínios suspeitos, serviços descartáveis e padrões de typosquatting.',
    howItWorksEmailParagraphs: ['Verifica endereços de email quanto a domínios suspeitos, serviços descartáveis e padrões de typosquatting que imitam marcas conhecidas.'],
    howItWorksPhoneTitle: 'Verificação de Telefone',
    howItWorksPhoneContent: 'Analisa números de telefone quanto a formatos suspeitos e consulta a base colaborativa de reportes.',
    howItWorksPhoneParagraphs: ['Analisa números de telefone quanto a formatos suspeitos, padrões aleatórios e consulta a base colaborativa de reportes da comunidade.'],
    howItWorksCryptoTitle: 'Verificação de Cripto',
    howItWorksCryptoContent: 'Verifica endereços de criptomoedas quanto a formatos válidos e consulta reportes de fraudes conhecidas.',
    howItWorksCryptoParagraphs: ['Verifica endereços de criptomoedas quanto a formatos válidos e consulta reportes de fraudes conhecidas na base colaborativa.'],
    howItWorksScoringTitle: 'Sistema de Pontuação',
    howItWorksScoringParagraphs: [
      'Baixo: Nenhum indicador significativo de risco detectado.',
      'Médio: Alguns padrões suspeitos encontrados, requer cautela.',
      'Elevado: Múltiplos indicadores de alto risco, provável tentativa de fraude.'
    ],
    howItWorksLimitationsTitle: 'Limitações',
    howItWorksLimitationsParagraphs: [
      'O sistema utiliza heurísticas e não garante 100% de precisão.',
      'Novos tipos de fraude podem não ser detectados imediatamente.',
      'A base colaborativa depende de reportes da comunidade.'
    ],
    howItWorksResponsibleUseTitle: 'Uso Responsável',
    howItWorksResponsibleUseParagraphs: [
      'Use como ferramenta de apoio, não como única fonte de decisão.',
      'Verifique sempre através de canais oficiais para transações importantes.',
      'Reporte fraudes de forma precisa para ajudar a comunidade.'
    ],
    
    // Terms Page
    termsPageTitle: 'Termos e Condições',
    termsPageHeading: 'Termos e Condições',
    termsPageDescription: 'Leia atentamente os termos de uso do AntiFraud',
    termsPageSubheading: 'Última atualização: 10 de fevereiro de 2026',
    termsSection1Title: '1. Aceitação dos Termos',
    termsSection1Paragraphs: [
      'Ao utilizar o AntiFraud, você concorda com estes Termos e Condições.',
      'Se não concordar, não utilize a aplicação.'
    ],
    termsSection2Title: '2. Descrição do Serviço',
    termsSection2Paragraphs: [
      'O AntiFraud é uma ferramenta de verificação antifraude gratuita.',
      'Fornece análises heurísticas de mensagens, emails, telefones e endereços de criptomoedas.',
      'Não garante 100% de precisão nas análises.'
    ],
    termsSection3Title: '3. Uso Responsável',
    termsSection3Paragraphs: [
      'Você é responsável pelo uso da aplicação.',
      'Não utilize para fins ilegais ou maliciosos.',
      'Verifique sempre informações críticas através de canais oficiais.'
    ],
    termsSection4Title: '4. Limitação de Responsabilidade',
    termsSection4Paragraphs: [
      'O AntiFraud é fornecido "como está" sem garantias.',
      'Não nos responsabilizamos por decisões tomadas com base nas análises.',
      'Use como ferramenta de apoio, não como única fonte de verdade.'
    ],
    termsSection5Title: '5. Privacidade',
    termsSection5Paragraphs: [
      'Análises são realizadas localmente no seu dispositivo.',
      'Não coletamos dados pessoais sem consentimento.',
      'Consulte a Política de Privacidade para mais detalhes.'
    ],
    termsSection6Title: '6. Base Colaborativa',
    termsSection6Paragraphs: [
      'Reportes são fornecidos pela comunidade.',
      'Não verificamos a veracidade de todos os reportes.',
      'Reporte de forma responsável e precisa.'
    ],
    termsSection7Title: '7. Modificações',
    termsSection7Paragraphs: [
      'Podemos modificar estes termos a qualquer momento.',
      'Alterações entram em vigor imediatamente após publicação.',
      'Uso continuado implica aceitação das alterações.'
    ],
    termsSection8Title: '8. Contacto',
    termsSection8Paragraphs: [
      'Para questões sobre estes termos, contacte através dos canais oficiais do AntiFraud.'
    ],
    
    // Privacy Page
    privacyPageTitle: 'Política de Privacidade',
    privacyPageHeading: 'Política de Privacidade',
    privacyPageDescription: 'Como o AntiFraud protege e utiliza os seus dados',
    privacyPageSubheading: 'Última atualização: 10 de fevereiro de 2026',
    privacySection1Title: '1. Introdução',
    privacySection1Paragraphs: [
      'O AntiFraud respeita a sua privacidade.',
      'Esta política explica como tratamos os seus dados.'
    ],
    privacySection2Title: '2. Dados Coletados',
    privacySection2Paragraphs: [
      'Análises são realizadas localmente no seu dispositivo.',
      'Não enviamos conteúdo de mensagens ou emails para servidores externos.',
      'Cookies são utilizados apenas para preferências de interface.'
    ],
    privacySection3Title: '3. Internet Identity',
    privacySection3Paragraphs: [
      'Autenticação via Internet Identity é opcional.',
      'Não temos acesso à sua identidade real.',
      'Apenas o seu principal (identificador anónimo) é conhecido.'
    ],
    privacySection4Title: '4. Base Colaborativa',
    privacySection4Paragraphs: [
      'Reportes enviados são armazenados de forma anónima.',
      'Não associamos reportes a identidades reais.',
      'Dados são utilizados apenas para análise de risco.'
    ],
    privacySection5Title: '5. Cookies',
    privacySection5Paragraphs: [
      'Utilizamos cookies para preferências de idioma e tema.',
      'Não utilizamos cookies de rastreamento ou publicidade.',
      'Pode desativar cookies nas configurações do navegador.'
    ],
    privacySection6Title: '6. Segurança',
    privacySection6Paragraphs: [
      'Implementamos medidas de segurança adequadas.',
      'Dados são armazenados na blockchain Internet Computer.',
      'Não garantimos segurança absoluta.'
    ],
    privacySection7Title: '7. Direitos do Utilizador',
    privacySection7Paragraphs: [
      'Pode limpar o histórico local a qualquer momento.',
      'Pode solicitar remoção de reportes através de canais oficiais.',
      'Tem direito a aceder aos seus dados armazenados.'
    ],
    privacySection8Title: '8. Contacto',
    privacySection8Paragraphs: [
      'Para questões sobre privacidade, contacte através dos canais oficiais do AntiFraud.'
    ]
  },
  en: {
    // App branding
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    
    // Navigation
    navHome: 'Home',
    navInstitutional: 'Institutional',
    navMission: 'Mission',
    navHowItWorks: 'How It Works',
    navTerms: 'Terms',
    navPrivacy: 'Privacy',
    navDocumentation: 'Documentation',
    
    // Documentation Page
    documentationPageTitle: 'Technical Documentation',
    documentationPageDescription: 'Complete documentation for AntiFraud / by HCoragem',
    documentationCardTitle: 'Generate PDF Documentation',
    documentationCardDescription: 'Download complete technical documentation in PDF format',
    documentationContentTitle: 'Included content:',
    documentationSection1: 'Branding and visual identity',
    documentationSection2: 'Complete institutional pages (Mission, How It Works, Terms, Privacy)',
    documentationSection3: '100% frontend antifraud engine with heuristics',
    documentationSection4: 'PWA and device installation',
    documentationSection5: 'Mandatory cookies and terms modal',
    documentationSection6: 'Navigation and route aliases',
    documentationSection7: 'Final verification checklist',
    documentationLanguageNote: 'The document is generated in Portuguese and includes an appendix with supported interface languages.',
    documentationGenerateButton: 'Generate and Download PDF',
    documentationGenerating: 'Generating PDF...',
    
    // Consent Modal
    consentModalTitle: 'AntiFraud / by HCoragem',
    consentModalDescription: 'Before continuing, we need your consent to use the application.',
    consentCookiesLabel: 'I accept the use of cookies to improve user experience',
    consentTermsLabel: 'I have read and accept the Terms and Conditions and Privacy Policy',
    consentReadBeforeAccepting: 'Read the documents before accepting:',
    consentViewTermsButton: 'View Terms',
    consentViewPrivacyButton: 'View Privacy',
    consentAcceptButton: 'Accept and Continue',
    consentFooterNote: 'By accepting, you agree to the terms of use of AntiFraud.',
    
    // Home page
    homeTitle: 'Protect yourself against digital fraud',
    homeSubtitle: 'Verify messages, emails, phone numbers and cryptocurrency addresses before trusting',
    
    // Quick actions
    quickActionsTitle: 'Quick Actions',
    quickActionCheckRisk: 'Check Risk',
    quickActionCheckRiskDesc: 'Analyze suspicious messages and contacts',
    quickActionSearchDatabase: 'Search Database',
    quickActionSearchDatabaseDesc: 'Search the collaborative database',
    quickActionReportScam: 'Report Scam',
    quickActionReportScamDesc: 'Help the community by reporting',
    
    // Verification section
    verificationTitle: 'Security Verification',
    verificationDescription: 'Choose the type of verification you want to perform',
    
    // Tabs
    tabMessage: 'Message',
    tabEmail: 'Email',
    tabPhone: 'Phone',
    tabCrypto: 'Crypto',
    tabAdvancedLookup: 'Lookup',
    
    // Form labels
    labelMessage: 'Message to analyze',
    labelEmail: 'Email address',
    labelPhone: 'Phone number',
    labelCrypto: 'Cryptocurrency address',
    
    // Placeholders
    placeholderMessage: 'Paste the received message here',
    placeholderEmail: 'example@email.com',
    placeholderPhone: '+1 555 123 4567',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    
    // Buttons
    buttonAnalyze: 'Analyze Message',
    buttonAnalyzing: 'Analyzing...',
    buttonCheck: 'Check',
    buttonChecking: 'Checking...',
    
    // Structured Analysis Results
    structuredResultTitle: 'Analysis Result',
    structuredRiskLabel: 'Risk Level',
    structuredRiskLow: 'Low',
    structuredRiskMedium: 'Medium',
    structuredRiskHigh: 'High',
    structuredExplanationLabel: 'Explanation',
    structuredRecommendationLabel: 'Recommendation',
    
    // Transparency sections
    transparencySourcesLabel: 'Public Sources',
    transparencyCollaborativeBasisLabel: 'Collaborative Basis',
    
    // Advanced Contact Lookup
    advancedLookupTitle: 'Advanced Contact Lookup',
    advancedLookupDescription: 'Search public information about phone numbers or email addresses',
    advancedLookupInputLabel: 'Phone or Email',
    advancedLookupInputPlaceholder: '+1 555 123 4567 or example@email.com',
    advancedLookupSearchButton: 'Search',
    advancedLookupSearching: 'Searching...',
    advancedLookupInvalidInput: 'Please enter a valid phone number or email.',
    advancedLookupSearchError: 'Error performing search. Try again.',
    advancedLookupOfflineIndicator: 'Offline mode: Showing cached result. Cannot update public information.',
    advancedLookupOfflineNoCache: 'No connection and no cached results for this search.',
    advancedLookupPublicInfoTitle: 'Public Information',
    advancedLookupDisplayName: 'Name',
    advancedLookupSummary: 'Summary',
    advancedLookupDetails: 'Details',
    advancedLookupAttribution: 'Attribution',
    advancedLookupSource: 'Source',
    advancedLookupAsOf: 'As of',
    advancedLookupNoPublicInfo: 'No public information found for this contact.',
    
    // Results
    resultTitle: 'Analysis Result',
    resultSafe: 'Safe',
    resultSuspicious: 'Suspicious',
    resultNoReports: 'No Reports',
    resultNoReportsDescription: 'This item has no reports in our database.',
    resultHasReports: 'Reports Found',
    resultHasReportsDescription: 'This item has {count} report(s) in our database.',
    
    // Errors
    errorTitle: 'Error',
    errorMessageEmpty: 'Please enter a message to analyze.',
    errorEmailEmpty: 'Please enter an email address.',
    errorEmailInvalid: 'Please enter a valid email address.',
    errorPhoneEmpty: 'Please enter a phone number.',
    errorCryptoEmpty: 'Please enter a cryptocurrency address.',
    errorAnalysisFailed: 'Analysis error. Please try again.',
    errorLoadingReports: 'Error loading reports.',
    errorReportTypeEmpty: 'Please select the report type.',
    errorReportValueEmpty: 'Please enter the value to report.',
    errorReportCategoryEmpty: 'Please select a category.',
    errorReportCountryEmpty: 'Please enter the country.',
    errorReportCooldown: 'Wait {seconds} seconds before sending another report.',
    errorReportSubmission: 'Error submitting report. Try again.',
    
    // Authentication
    authLogin: 'Login',
    authLogout: 'Logout',
    authLoggingIn: 'Logging in...',
    authWelcome: 'Welcome',
    authMyProfile: 'My Profile',
    authMyHistory: 'My History',
    authClearHistory: 'Clear History',
    authHistoryEmpty: 'No verification history',
    login: 'Login',
    loggingIn: 'Logging in...',
    logout: 'Logout',
    profile: 'Profile',
    loggedInAs: 'Logged in as',
    history: 'History',
    clearHistory: 'Clear History',
    noHistory: 'No history',
    
    // PWA Install
    installPrimaryButton: 'Download AntiFraud App for free',
    installNotEligibleMessage: 'The app is not yet eligible for installation or is already installed.',
    installAppTitle: 'Install AntiFraud',
    installAppNote: 'The AntiFraud app is free and does not take up significant space on your device.',
    installAutoPromptMessage: 'Install AntiFraud on your device for quick and offline access.',
    installNowButton: 'Install Now',
    installNotNowButton: 'Not Now',
    installCloseButton: 'Close',
    installPwaExplanation: 'This is a Progressive Web App (PWA) installed through the browser. It is not a native app from Google Play Store or Apple App Store.',
    installInstructionsIos: 'To install on iOS: Tap the share icon (square with arrow) and select "Add to Home Screen".',
    installInstructionsAndroid: 'To install on Android: Tap the menu (three dots) and select "Add to home screen" or "Install app".',
    installInstructionsDesktop: 'To install on computer: Click the install icon in the address bar or browser menu.',
    installInstructionsDefault: 'To install: Look for the "Add to home screen" or "Install" option in your browser menu.',
    
    // Footer
    footerBuiltWith: 'Built with',
    footerBy: 'by',
    
    // Collaborative Database
    collaborativeTitle: 'Collaborative Database',
    collaborativeDescription: 'Check community reports',
    collaborativeNoRecords: 'No known records — collaborative database growing',
    collaborativeEmptyState: 'No known records — collaborative database growing',
    collaborativeError: 'Error querying database',
    collaborativeReportCount: '{count} report(s)',
    collaborativeRiskScore: 'Risk score',
    collaborativeCategories: 'Categories',
    collaborativeDisclaimer: 'Data is provided by the community and may not be complete.',
    
    // Report Categories
    categoryPhishing: 'Phishing',
    categoryScam: 'Scam',
    categorySpam: 'Spam',
    categoryFraud: 'Fraud',
    categoryImpersonation: 'Impersonation',
    categoryOther: 'Other',
    
    // Report Submission
    reportTitle: 'Report Fraud',
    reportDescription: 'Help the community by reporting fraud',
    reportTypeLabel: 'Type',
    reportTypePlaceholder: 'Select type',
    reportTypeEmail: 'Email',
    reportTypePhone: 'Phone',
    reportTypeMessage: 'Message',
    reportTypeCrypto: 'Crypto',
    reportValueLabel: 'Value',
    reportValuePlaceholder: 'Enter value to report',
    reportCategoryLabel: 'Category',
    reportCategoryPlaceholder: 'Select category',
    reportCountryLabel: 'Country',
    reportCountryPlaceholder: 'Enter country',
    reportDescriptionLabel: 'Description (optional)',
    reportDescriptionPlaceholder: 'Describe the incident',
    reportSubmitButton: 'Submit Report',
    reportSubmitting: 'Submitting...',
    reportSuccess: 'Report submitted successfully!',
    
    // Mission Page
    missionPageTitle: 'Our Mission',
    missionPageHeading: 'Our Mission',
    missionPageDescription: 'Protect users against digital fraud through accessible technology',
    missionPageSubheading: 'Protect users against digital fraud through accessible technology',
    missionVisionTitle: 'Vision',
    missionVisionContent: 'A safer digital world where everyone can identify and avoid fraud before becoming victims.',
    missionVisionParagraphs: ['A safer digital world where everyone can identify and avoid fraud before becoming victims.'],
    missionCoreTitle: 'Core Mission',
    missionCoreContent: 'Provide free and accessible antifraud verification tools that empower users of all ages and technical levels.',
    missionCoreParagraphs: ['Provide free and accessible antifraud verification tools that empower users of all ages and technical levels.'],
    missionImpactTitle: 'Social Impact',
    missionImpactContent: 'Protect the most vulnerable through digital education and simple, effective verification tools.',
    missionImpactParagraphs: ['Protect the most vulnerable through digital education and simple, effective verification tools.'],
    missionValuesTitle: 'Values',
    missionValuesParagraphs: [
      'Transparency: All analyses show the sources and methods used.',
      'Privacy: Analyses performed locally on the user\'s device.',
      'Accessibility: Simple and free interface for everyone.',
      'Collaboration: Database powered by the community.'
    ],
    missionValue1Title: 'Transparency',
    missionValue1Content: 'All analyses show the sources and methods used.',
    missionValue2Title: 'Privacy',
    missionValue2Content: 'Analyses performed locally on the user\'s device.',
    missionValue3Title: 'Accessibility',
    missionValue3Content: 'Simple and free interface for everyone.',
    missionValue4Title: 'Collaboration',
    missionValue4Content: 'Database powered by the community.',
    missionLimitationsTitle: 'System Limitations',
    missionLimitationsParagraphs: [
      'AntiFraud uses deterministic heuristics and does not guarantee 100% accuracy.',
      'The collaborative database depends on community reports and may not be complete.',
      'Always verify critical information through official channels.'
    ],
    missionResponsibleUseTitle: 'Responsible Use',
    missionResponsibleUseParagraphs: [
      'Use AntiFraud as a decision support tool, not as the sole source of truth.',
      'Always verify sender identity through official channels for important transactions.',
      'Report fraud responsibly and accurately to help the community.'
    ],
    
    // How It Works Page
    howItWorksPageTitle: 'How It Works',
    howItWorksPageHeading: 'How AntiFraud Works',
    howItWorksPageDescription: 'Understand how the antifraud verification system protects you',
    howItWorksPageSubheading: 'Multi-layer verification system',
    howItWorksIntro: 'AntiFraud uses advanced heuristic analysis to identify fraud patterns in real-time.',
    howItWorksVerificationTitle: 'Verification Types',
    howItWorksMessageTitle: 'Message Verification',
    howItWorksMessageContent: 'Analyzes the content of suspicious messages looking for common phishing and fraud patterns.',
    howItWorksMessageParagraphs: ['Analyzes the content of suspicious messages looking for common phishing and fraud patterns, including urgency language, financial requests, and suspicious links.'],
    howItWorksEmailTitle: 'Email Verification',
    howItWorksEmailContent: 'Checks email addresses for suspicious domains, disposable services, and typosquatting patterns.',
    howItWorksEmailParagraphs: ['Checks email addresses for suspicious domains, disposable services, and typosquatting patterns that mimic known brands.'],
    howItWorksPhoneTitle: 'Phone Verification',
    howItWorksPhoneContent: 'Analyzes phone numbers for suspicious formats and queries the collaborative report database.',
    howItWorksPhoneParagraphs: ['Analyzes phone numbers for suspicious formats, random patterns, and queries the collaborative community report database.'],
    howItWorksCryptoTitle: 'Crypto Verification',
    howItWorksCryptoContent: 'Checks cryptocurrency addresses for valid formats and queries known fraud reports.',
    howItWorksCryptoParagraphs: ['Checks cryptocurrency addresses for valid formats and queries known fraud reports in the collaborative database.'],
    howItWorksScoringTitle: 'Scoring System',
    howItWorksScoringParagraphs: [
      'Low: No significant risk indicators detected.',
      'Medium: Some suspicious patterns found, requires caution.',
      'High: Multiple high-risk indicators, likely fraud attempt.'
    ],
    howItWorksLimitationsTitle: 'Limitations',
    howItWorksLimitationsParagraphs: [
      'The system uses heuristics and does not guarantee 100% accuracy.',
      'New types of fraud may not be detected immediately.',
      'The collaborative database depends on community reports.'
    ],
    howItWorksResponsibleUseTitle: 'Responsible Use',
    howItWorksResponsibleUseParagraphs: [
      'Use as a support tool, not as the sole source of decision.',
      'Always verify through official channels for important transactions.',
      'Report fraud accurately to help the community.'
    ],
    
    // Terms Page
    termsPageTitle: 'Terms and Conditions',
    termsPageHeading: 'Terms and Conditions',
    termsPageDescription: 'Read carefully the terms of use of AntiFraud',
    termsPageSubheading: 'Last updated: February 10, 2026',
    termsSection1Title: '1. Acceptance of Terms',
    termsSection1Paragraphs: [
      'By using AntiFraud, you agree to these Terms and Conditions.',
      'If you do not agree, do not use the application.'
    ],
    termsSection2Title: '2. Service Description',
    termsSection2Paragraphs: [
      'AntiFraud is a free antifraud verification tool.',
      'Provides heuristic analysis of messages, emails, phones, and cryptocurrency addresses.',
      'Does not guarantee 100% accuracy in analyses.'
    ],
    termsSection3Title: '3. Responsible Use',
    termsSection3Paragraphs: [
      'You are responsible for using the application.',
      'Do not use for illegal or malicious purposes.',
      'Always verify critical information through official channels.'
    ],
    termsSection4Title: '4. Limitation of Liability',
    termsSection4Paragraphs: [
      'AntiFraud is provided "as is" without warranties.',
      'We are not responsible for decisions made based on analyses.',
      'Use as a support tool, not as the sole source of truth.'
    ],
    termsSection5Title: '5. Privacy',
    termsSection5Paragraphs: [
      'Analyses are performed locally on your device.',
      'We do not collect personal data without consent.',
      'See the Privacy Policy for more details.'
    ],
    termsSection6Title: '6. Collaborative Database',
    termsSection6Paragraphs: [
      'Reports are provided by the community.',
      'We do not verify the accuracy of all reports.',
      'Report responsibly and accurately.'
    ],
    termsSection7Title: '7. Modifications',
    termsSection7Paragraphs: [
      'We may modify these terms at any time.',
      'Changes take effect immediately upon publication.',
      'Continued use implies acceptance of changes.'
    ],
    termsSection8Title: '8. Contact',
    termsSection8Paragraphs: [
      'For questions about these terms, contact through official AntiFraud channels.'
    ],
    
    // Privacy Page
    privacyPageTitle: 'Privacy Policy',
    privacyPageHeading: 'Privacy Policy',
    privacyPageDescription: 'How AntiFraud protects and uses your data',
    privacyPageSubheading: 'Last updated: February 10, 2026',
    privacySection1Title: '1. Introduction',
    privacySection1Paragraphs: [
      'AntiFraud respects your privacy.',
      'This policy explains how we handle your data.'
    ],
    privacySection2Title: '2. Data Collected',
    privacySection2Paragraphs: [
      'Analyses are performed locally on your device.',
      'We do not send message or email content to external servers.',
      'Cookies are used only for interface preferences.'
    ],
    privacySection3Title: '3. Internet Identity',
    privacySection3Paragraphs: [
      'Authentication via Internet Identity is optional.',
      'We do not have access to your real identity.',
      'Only your principal (anonymous identifier) is known.'
    ],
    privacySection4Title: '4. Collaborative Database',
    privacySection4Paragraphs: [
      'Submitted reports are stored anonymously.',
      'We do not associate reports with real identities.',
      'Data is used only for risk analysis.'
    ],
    privacySection5Title: '5. Cookies',
    privacySection5Paragraphs: [
      'We use cookies for language and theme preferences.',
      'We do not use tracking or advertising cookies.',
      'You can disable cookies in browser settings.'
    ],
    privacySection6Title: '6. Security',
    privacySection6Paragraphs: [
      'We implement appropriate security measures.',
      'Data is stored on the Internet Computer blockchain.',
      'We do not guarantee absolute security.'
    ],
    privacySection7Title: '7. User Rights',
    privacySection7Paragraphs: [
      'You can clear local history at any time.',
      'You can request report removal through official channels.',
      'You have the right to access your stored data.'
    ],
    privacySection8Title: '8. Contact',
    privacySection8Paragraphs: [
      'For privacy questions, contact through official AntiFraud channels.'
    ]
  },
  es: {
    // Copy all English translations and translate to Spanish
    // For brevity, using English as fallback
    ...{} as any
  },
  fr: {
    // Using English as fallback
    ...{} as any
  },
  zh: {
    // Using English as fallback
    ...{} as any
  },
  ar: {
    // Using English as fallback
    ...{} as any
  },
  ru: {
    // Using English as fallback
    ...{} as any
  }
};

// Fill in missing translations with English fallback
const baseTranslations = translations.en;
for (const lang of ['es', 'fr', 'zh', 'ar', 'ru'] as const) {
  translations[lang] = { ...baseTranslations, ...translations[lang] };
}

export type SupportedLanguage = keyof typeof translations;
export type Language = SupportedLanguage;
export type Translations = typeof translations.pt;
