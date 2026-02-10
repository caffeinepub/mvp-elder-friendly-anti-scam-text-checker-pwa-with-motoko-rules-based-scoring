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
    errorBackendNotReady: 'Sistema não está pronto. Por favor, aguarde.',
    errorAnalyzeMessage: 'Erro ao analisar mensagem. Por favor, tente novamente.',
    errorAnalyzeSpecific: 'Não foi possível analisar a mensagem. Por favor, tente novamente.',
    errorAnalyzeFailed: 'Falha na análise. Por favor, tente novamente.',
    errorCheckEmail: 'Erro ao verificar email. Por favor, tente novamente.',
    errorCheckPhone: 'Erro ao verificar telefone. Por favor, tente novamente.',
    errorCheckCrypto: 'Erro ao verificar endereço. Por favor, tente novamente.',
    errorCollaborativeLookup: 'Base colaborativa temporariamente indisponível',
    errorCollaborativeLookupSpecific: 'Consulta à base colaborativa falhou',
    errorReportSubmission: 'Erro ao submeter reporte. Por favor, tente novamente.',
    errorReportTypeEmpty: 'Por favor, selecione um tipo.',
    errorReportValueEmpty: 'Por favor, insira um valor.',
    errorReportCategoryEmpty: 'Por favor, selecione uma categoria.',
    errorReportCountryEmpty: 'Por favor, insira um código de país.',
    errorReportCooldown: 'Por favor, aguarde {seconds} segundos antes de reportar novamente.',
    
    // Collaborative database
    collaborativeTitle: 'Base de Dados Colaborativa',
    collaborativeDescription: 'Consulte reportes da comunidade e contribua com suas experiências',
    collaborativeInstructions: 'Use as abas acima para verificar itens. Resultados da base colaborativa aparecerão automaticamente quando disponíveis.',
    collaborativeResultTitle: 'Resultado da Base Colaborativa',
    collaborativeNoData: 'Sem dados na base colaborativa',
    collaborativeEmptyState: 'Sem registos conhecidos — base colaborativa em crescimento.',
    collaborativeReports: '{count} reporte(s)',
    collaborativeCategory: 'Categoria: {category}',
    collaborativeCountry: 'País: {country}',
    collaborativeRiskScore: 'Pontuação de Risco',
    collaborativeReportCount: 'Número de Reportes',
    collaborativeCategories: 'Categorias',
    collaborativeDisclaimer: 'Dados fornecidos pela comunidade',
    
    // Report submission
    reportDialogTitle: 'Reportar Fraude',
    reportDialogDescription: 'Ajude a comunidade reportando fraudes e golpes',
    reportTitle: 'Reportar Fraude',
    reportDescription: 'Ajude a comunidade reportando fraudes e golpes',
    reportTypeLabel: 'Tipo',
    reportTypePlaceholder: 'Selecione o tipo',
    reportTypePhone: 'Telefone',
    reportTypeCrypto: 'Criptomoeda',
    reportTypeEmail: 'Email',
    reportTypeMessage: 'Mensagem',
    reportValueLabel: 'Valor',
    reportValuePlaceholder: 'Insira o telefone, email, endereço ou mensagem',
    reportCategoryLabel: 'Categoria',
    reportCategoryPlaceholder: 'Selecione a categoria',
    reportCategoryPhishing: 'Phishing',
    reportCategoryScam: 'Golpe',
    reportCategorySpam: 'Spam',
    reportCategoryFraud: 'Fraude',
    reportCategoryOther: 'Outro',
    reportCountryLabel: 'País',
    reportCountryPlaceholder: 'Código do país (ex: PT, BR)',
    reportDescriptionLabel: 'Descrição (opcional)',
    reportDescriptionPlaceholder: 'Descreva o incidente...',
    reportSubmitButton: 'Submeter Reporte',
    reportSubmitting: 'A submeter...',
    reportCancelButton: 'Cancelar',
    reportSuccessTitle: 'Reporte Submetido',
    reportSuccessDescription: 'Obrigado por ajudar a comunidade!',
    reportSuccess: 'Obrigado por ajudar a comunidade!',
    reportErrorTitle: 'Erro ao Submeter',
    
    // Categories
    categoryPhishing: 'Phishing',
    categoryScam: 'Golpe',
    categorySpam: 'Spam',
    categoryFraud: 'Fraude',
    categoryImpersonation: 'Personificação',
    categoryOther: 'Outro',
    
    // PWA Install
    pwaInstallTitle: 'Instalar AntiFraud',
    pwaInstallButton: 'Baixe a Aplicação AntiFraud gratuitamente',
    installPrimaryButton: 'Baixe a Aplicação AntiFraud gratuitamente',
    installAppTitle: 'Instalar AntiFraud',
    installAppNote: 'Instale para acesso rápido e offline',
    pwaInstallDescription: 'Instale a aplicação AntiFraud no seu dispositivo para acesso rápido e offline.',
    pwaInstallInstructions: 'Para instalar a aplicação AntiFraud:',
    installInstructionsIos: 'No Safari, toque no ícone de partilha e selecione "Adicionar ao Ecrã Principal".',
    installInstructionsAndroid: 'No Chrome, toque no menu (três pontos) e selecione "Instalar aplicação" ou "Adicionar ao ecrã inicial".',
    installInstructionsDesktop: 'No seu navegador, procure o ícone de instalação na barra de endereço ou no menu e clique em "Instalar".',
    installInstructionsDefault: 'Procure a opção de instalação no menu do seu navegador.',
    pwaInstallStep1: 'No seu navegador, procure o ícone de instalação (geralmente no menu ou barra de endereço)',
    pwaInstallStep2: 'Clique em "Instalar" ou "Adicionar ao ecrã inicial"',
    pwaInstallStep3: 'Siga as instruções do seu navegador para completar a instalação',
    pwaInstallClose: 'Fechar',
    pwaAlreadyInstalled: 'Aplicação já instalada',
    
    // Authentication
    authLogin: 'Entrar',
    authLogout: 'Sair',
    authLoggingIn: 'A entrar...',
    login: 'Entrar',
    logout: 'Sair',
    loggingIn: 'A entrar...',
    authWelcome: 'Bem-vindo',
    authProfile: 'Perfil',
    profile: 'Perfil',
    authHistory: 'Histórico',
    history: 'Histórico',
    authSettings: 'Definições',
    
    // User Profile
    profileSetupTitle: 'Configure o seu perfil',
    profileSetupDescription: 'Por favor, insira o seu nome para continuar',
    profileNameLabel: 'Nome',
    profileNamePlaceholder: 'O seu nome',
    profileSaveButton: 'Guardar',
    profileSaving: 'A guardar...',
    profileHistory: 'Histórico de Verificações',
    profileHistoryEmpty: 'Ainda não realizou verificações',
    profileClearHistory: 'Limpar Histórico',
    clearHistory: 'Limpar',
    profileClearHistoryConfirm: 'Tem a certeza que deseja limpar o histórico?',
    loggedInAs: 'Autenticado como',
    noHistory: 'Sem histórico',
    
    // Mission Page - Official AntiFraud / by HCoragem Content
    missionPageTitle: 'Missão',
    missionPageDescription: 'Plataforma Global de Prevenção e Análise de Fraudes Digitais',
    missionPageHeading: 'AntiFraud / by HCoragem',
    missionPageSubheading: 'Plataforma Global de Prevenção e Análise de Fraudes Digitais',
    
    missionVisionTitle: 'Visão',
    missionVisionParagraphs: [
      'A nossa visão é um ecossistema digital global onde:',
      'As pessoas comunicam com mais confiança',
      'As transações digitais são feitas com maior segurança',
      'A fraude é identificada antes de causar danos',
      'O conhecimento coletivo reduz o poder de esquemas fraudulentos',
      'Imaginamos um futuro onde a prevenção é a norma, não a exceção.'
    ],
    
    missionCoreTitle: 'Missão',
    missionCoreParagraphs: [
      'A missão do AntiFraud é democratizar o acesso à proteção contra fraudes digitais, oferecendo ferramentas de análise claras, compreensíveis e eficazes, independentemente do nível técnico, idade ou condição económica do utilizador.',
      'Acreditamos que ninguém deveria perder dinheiro, dados ou tranquilidade por falta de informação. A nossa missão é transformar informação dispersa e complexa em respostas objetivas, responsáveis e acionáveis.'
    ],
    
    missionImpactTitle: 'Impacto Social',
    missionImpactParagraphs: [
      'A fraude digital afeta desproporcionalmente:',
      '• idosos',
      '• pessoas com menor literacia digital',
      '• populações vulneráveis',
      'O AntiFraud existe para reduzir desigualdades, proteger pessoas reais e salvar tempo, dinheiro e tranquilidade.'
    ],
    
    missionValuesTitle: 'Valores Fundamentais',
    missionValuesParagraphs: [
      '• Proteção das pessoas em primeiro lugar',
      '• Transparência total nos critérios de análise',
      '• Responsabilidade na comunicação de riscos',
      '• Acessibilidade universal',
      '• Independência tecnológica e ética',
      'O AntiFraud não promove alarmismo nem falsas promessas. Promove consciência, análise e prevenção.'
    ],
    
    missionLimitationsTitle: 'Limitações e Responsabilidade',
    missionLimitationsParagraphs: [
      'O AntiFraud é uma ferramenta de prevenção e apoio à decisão.',
      'Não garante deteção absoluta de fraude e não deve ser usado como única base para decisões financeiras ou legais.',
      'Recomendamos sempre:',
      '• verificação independente',
      '• contacto direto com entidades oficiais',
      '• reporte de tentativas de fraude às autoridades competentes'
    ],
    
    missionResponsibleUseTitle: 'Uso Responsável',
    missionResponsibleUseParagraphs: [
      'Ao utilizar o AntiFraud, o utilizador concorda que:',
      '• compreende que a ferramenta é informativa',
      '• aceita que os resultados são indicativos de risco',
      '• assume a responsabilidade pelas decisões tomadas',
      '• não utilizará a plataforma para fins ilegais ou abusivos',
      'O AntiFraud reserva-se o direito de evoluir os seus critérios de análise para melhorar a proteção dos utilizadores.'
    ],
    
    // How It Works Page - Official AntiFraud / by HCoragem Content
    howItWorksPageTitle: 'Como Funciona',
    howItWorksPageDescription: 'Motor de análise antifraude baseado em heurísticas e padrões reconhecidos',
    howItWorksPageHeading: 'Como Funciona o AntiFraud',
    howItWorksPageSubheading: 'Motor de análise baseado em heurísticas, regras de risco e padrões amplamente reconhecidos',
    
    howItWorksVerificationTitle: 'Tipos de Análise',
    howItWorksVerificationContent: 'O AntiFraud permite analisar quatro tipos principais de conteúdos frequentemente usados em esquemas fraudulentos',
    
    howItWorksMessageTitle: '1. Mensagens (SMS, WhatsApp, redes sociais, email informal)',
    howItWorksMessageParagraphs: [
      'Mensagens são analisadas com base em indicadores de risco conhecidos, tais como:',
      '• pedidos de dinheiro ou transferências urgentes',
      '• promessas de ganhos fáceis ou rápidos',
      '• linguagem emocional ou de pressão',
      '• ofertas "gratuitas", prémios ou promoções irreais',
      '• referências a oportunidades exclusivas ou secretas',
      'Sempre que estes padrões estão presentes, o nível de risco é classificado como Elevado.'
    ],
    
    howItWorksEmailTitle: '2. Emails',
    howItWorksEmailParagraphs: [
      'A análise de emails considera:',
      '• estrutura do conteúdo',
      '• intenção da mensagem',
      '• padrões comuns de phishing',
      '• pedidos de dados sensíveis',
      '• ligações implícitas ou instruções suspeitas',
      'Emails com pedidos financeiros, dados pessoais ou ações urgentes são considerados altamente suspeitos.'
    ],
    
    howItWorksPhoneTitle: '3. Telefones e Números de Telemóvel',
    howItWorksPhoneParagraphs: [
      'Números de telefone são avaliados com base em:',
      '• formatos usados em fraudes internacionais',
      '• padrões típicos de chamadas fraudulentas',
      '• associação frequente a esquemas de suporte falso, bancos ou investimentos',
      'O AntiFraud não valida identidades, mas alerta para riscos conhecidos e comportamentos suspeitos.'
    ],
    
    howItWorksCryptoTitle: '4. Criptomoedas e Endereços Digitais',
    howItWorksCryptoParagraphs: [
      'Endereços de criptomoedas são analisados considerando:',
      '• contexto do pedido',
      '• promessas de lucro',
      '• investimentos garantidos',
      '• pedidos de envio imediato',
      'Qualquer pedido de envio de criptomoedas associado a promessas, urgência ou benefícios irreais é classificado como Risco Elevado.'
    ],
    
    howItWorksScoringTitle: 'Importante sobre as Respostas',
    howItWorksScoringParagraphs: [
      'O AntiFraud não acusa, não confirma crimes e não substitui autoridades.',
      'Cada análise devolve sempre:',
      '• Nível de Risco (Baixo, Médio ou Elevado)',
      '• Explicação clara, em linguagem acessível',
      '• Recomendação prática, focada na proteção do utilizador',
      'As respostas são sempre apresentadas no idioma selecionado, de forma consistente e profissional.'
    ],
    
    howItWorksLimitationsTitle: 'Limitações',
    howItWorksLimitationsParagraphs: [
      'O AntiFraud é uma ferramenta de prevenção e apoio à decisão.',
      'Não garante deteção absoluta de fraude e não deve ser usado como única base para decisões financeiras ou legais.',
      'Recomendamos sempre:',
      '• verificação independente',
      '• contacto direto com entidades oficiais',
      '• reporte de tentativas de fraude às autoridades competentes'
    ],
    
    howItWorksResponsibleUseTitle: 'Uso Responsável',
    howItWorksResponsibleUseParagraphs: [
      'Ao utilizar o AntiFraud, o utilizador concorda que:',
      '• compreende que a ferramenta é informativa',
      '• aceita que os resultados são indicativos de risco',
      '• assume a responsabilidade pelas decisões tomadas',
      '• não utilizará a plataforma para fins ilegais ou abusivos'
    ],
    
    // Terms Page
    termsPageTitle: 'Termos e Condições',
    termsPageDescription: 'Termos e condições de uso do AntiFraud',
    termsEffectiveDate: 'Data de Vigência: 10 de fevereiro de 2026',
    termsSection1Title: '1. Aceitação dos Termos',
    termsSection1Paragraphs: [
      'Ao utilizar o AntiFraud, você concorda com estes termos e condições. Se não concordar, não utilize a plataforma.'
    ],
    termsSection2Title: '2. Descrição do Serviço',
    termsSection2Paragraphs: [
      'O AntiFraud é uma ferramenta de análise heurística para identificação de potenciais fraudes digitais. Os resultados são indicativos e não constituem garantia absoluta.'
    ],
    termsSection3Title: '3. Uso Responsável',
    termsSection3Paragraphs: [
      'Você concorda em usar a plataforma apenas para fins legítimos de proteção pessoal. É proibido usar o serviço para assédio, difamação ou qualquer atividade ilegal.'
    ],
    termsSection4Title: '4. Limitação de Responsabilidade',
    termsSection4Paragraphs: [
      'O AntiFraud não se responsabiliza por decisões tomadas com base nas análises fornecidas. A ferramenta é um auxílio, não uma garantia.'
    ],
    termsSection5Title: '5. Privacidade',
    termsSection5Paragraphs: [
      'Não coletamos dados pessoais identificáveis. As análises são realizadas localmente sempre que possível. Consulte nossa Política de Privacidade para mais detalhes.'
    ],
    termsSection6Title: '6. Modificações',
    termsSection6Paragraphs: [
      'Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas através da plataforma.'
    ],
    termsSection7Title: '7. Lei Aplicável',
    termsSection7Paragraphs: [
      'Estes termos são regidos pelas leis aplicáveis no país de operação da plataforma.'
    ],
    termsSection8Title: '8. Contacto',
    termsSection8Paragraphs: [
      'Para questões sobre estes termos, entre em contacto através dos canais oficiais do AntiFraud.'
    ],
    
    // Privacy Page
    privacyPageTitle: 'Política de Privacidade',
    privacyPageDescription: 'Como protegemos sua privacidade no AntiFraud',
    privacyEffectiveDate: 'Data de Vigência: 10 de fevereiro de 2026',
    privacySection1Title: '1. Compromisso com a Privacidade',
    privacySection1Paragraphs: [
      'O AntiFraud respeita rigorosamente a privacidade dos utilizadores. A privacidade é um pilar essencial da confiança digital.'
    ],
    privacySection2Title: '2. Dados Não Coletados',
    privacySection2Paragraphs: [
      'Não recolhemos dados pessoais identificáveis.',
      'Não armazenamos conteúdos analisados.',
      'As análises são realizadas localmente sempre que possível.',
      'Não vendemos, partilhamos ou comercializamos informação.'
    ],
    privacySection3Title: '3. Análises Locais',
    privacySection3Paragraphs: [
      'A maioria das análises (mensagens, emails, telefones, criptomoedas) é realizada inteiramente no seu dispositivo, sem envio de dados para servidores externos.'
    ],
    privacySection4Title: '4. Base de Dados Colaborativa',
    privacySection4Paragraphs: [
      'Quando você consulta a base colaborativa, apenas o hash ou identificador do item é enviado, nunca o conteúdo completo.',
      'Reportes submetidos são anónimos e não contêm informação pessoal identificável.'
    ],
    privacySection5Title: '5. Cookies e Armazenamento Local',
    privacySection5Paragraphs: [
      'Utilizamos armazenamento local do navegador apenas para preferências de idioma e histórico de verificações (se autenticado).',
      'Não utilizamos cookies de rastreamento ou publicidade.'
    ],
    privacySection6Title: '6. Autenticação',
    privacySection6Paragraphs: [
      'A autenticação é realizada através do Internet Identity, um sistema descentralizado que não revela sua identidade real ao AntiFraud.',
      'Apenas um identificador criptográfico (Principal) é utilizado para associar seu perfil.'
    ],
    privacySection7Title: '7. Segurança',
    privacySection7Paragraphs: [
      'Implementamos medidas de segurança técnicas e organizacionais para proteger os dados processados pela plataforma.'
    ],
    privacySection8Title: '8. Seus Direitos',
    privacySection8Paragraphs: [
      'Você pode limpar seu histórico local a qualquer momento através do menu de perfil.',
      'Você pode desinstalar a aplicação e todos os dados locais serão removidos.'
    ],
    
    // Footer
    footerBuiltWith: 'Construído com',
    footerLove: 'amor',
    footerUsing: 'usando',
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
    errorBackendNotReady: 'System is not ready. Please wait.',
    errorAnalyzeMessage: 'Error analyzing message. Please try again.',
    errorAnalyzeSpecific: 'Could not analyze the message. Please try again.',
    errorAnalyzeFailed: 'Analysis failed. Please try again.',
    errorCheckEmail: 'Error checking email. Please try again.',
    errorCheckPhone: 'Error checking phone. Please try again.',
    errorCheckCrypto: 'Error checking address. Please try again.',
    errorCollaborativeLookup: 'Collaborative database temporarily unavailable',
    errorCollaborativeLookupSpecific: 'Collaborative database query failed',
    errorReportSubmission: 'Error submitting report. Please try again.',
    errorReportTypeEmpty: 'Please select a type.',
    errorReportValueEmpty: 'Please enter a value.',
    errorReportCategoryEmpty: 'Please select a category.',
    errorReportCountryEmpty: 'Please enter a country code.',
    errorReportCooldown: 'Please wait {seconds} seconds before reporting again.',
    
    // Collaborative database
    collaborativeTitle: 'Collaborative Database',
    collaborativeDescription: 'Check community reports and contribute with your experiences',
    collaborativeInstructions: 'Use the tabs above to verify items. Collaborative database results will appear automatically when available.',
    collaborativeResultTitle: 'Collaborative Database Result',
    collaborativeNoData: 'No data in collaborative database',
    collaborativeEmptyState: 'No known records — collaborative database growing.',
    collaborativeReports: '{count} report(s)',
    collaborativeCategory: 'Category: {category}',
    collaborativeCountry: 'Country: {country}',
    collaborativeRiskScore: 'Risk Score',
    collaborativeReportCount: 'Report Count',
    collaborativeCategories: 'Categories',
    collaborativeDisclaimer: 'Data provided by the community',
    
    // Report submission
    reportDialogTitle: 'Report Fraud',
    reportDialogDescription: 'Help the community by reporting fraud and scams',
    reportTitle: 'Report Fraud',
    reportDescription: 'Help the community by reporting fraud and scams',
    reportTypeLabel: 'Type',
    reportTypePlaceholder: 'Select type',
    reportTypePhone: 'Phone',
    reportTypeCrypto: 'Cryptocurrency',
    reportTypeEmail: 'Email',
    reportTypeMessage: 'Message',
    reportValueLabel: 'Value',
    reportValuePlaceholder: 'Enter phone, email, address or message',
    reportCategoryLabel: 'Category',
    reportCategoryPlaceholder: 'Select category',
    reportCategoryPhishing: 'Phishing',
    reportCategoryScam: 'Scam',
    reportCategorySpam: 'Spam',
    reportCategoryFraud: 'Fraud',
    reportCategoryOther: 'Other',
    reportCountryLabel: 'Country',
    reportCountryPlaceholder: 'Country code (e.g., US, UK)',
    reportDescriptionLabel: 'Description (optional)',
    reportDescriptionPlaceholder: 'Describe the incident...',
    reportSubmitButton: 'Submit Report',
    reportSubmitting: 'Submitting...',
    reportCancelButton: 'Cancel',
    reportSuccessTitle: 'Report Submitted',
    reportSuccessDescription: 'Thank you for helping the community!',
    reportSuccess: 'Thank you for helping the community!',
    reportErrorTitle: 'Submission Error',
    
    // Categories
    categoryPhishing: 'Phishing',
    categoryScam: 'Scam',
    categorySpam: 'Spam',
    categoryFraud: 'Fraud',
    categoryImpersonation: 'Impersonation',
    categoryOther: 'Other',
    
    // PWA Install
    pwaInstallTitle: 'Install AntiFraud',
    pwaInstallButton: 'Download AntiFraud App for free',
    installPrimaryButton: 'Download AntiFraud App for free',
    installAppTitle: 'Install AntiFraud',
    installAppNote: 'Install for quick and offline access',
    pwaInstallDescription: 'Install the AntiFraud app on your device for quick and offline access.',
    pwaInstallInstructions: 'To install the AntiFraud app:',
    installInstructionsIos: 'In Safari, tap the share icon and select "Add to Home Screen".',
    installInstructionsAndroid: 'In Chrome, tap the menu (three dots) and select "Install app" or "Add to home screen".',
    installInstructionsDesktop: 'In your browser, look for the install icon in the address bar or menu and click "Install".',
    installInstructionsDefault: 'Look for the install option in your browser menu.',
    pwaInstallStep1: 'In your browser, look for the install icon (usually in the menu or address bar)',
    pwaInstallStep2: 'Click "Install" or "Add to home screen"',
    pwaInstallStep3: 'Follow your browser instructions to complete installation',
    pwaInstallClose: 'Close',
    pwaAlreadyInstalled: 'App already installed',
    
    // Authentication
    authLogin: 'Login',
    authLogout: 'Logout',
    authLoggingIn: 'Logging in...',
    login: 'Login',
    logout: 'Logout',
    loggingIn: 'Logging in...',
    authWelcome: 'Welcome',
    authProfile: 'Profile',
    profile: 'Profile',
    authHistory: 'History',
    history: 'History',
    authSettings: 'Settings',
    
    // User Profile
    profileSetupTitle: 'Set up your profile',
    profileSetupDescription: 'Please enter your name to continue',
    profileNameLabel: 'Name',
    profileNamePlaceholder: 'Your name',
    profileSaveButton: 'Save',
    profileSaving: 'Saving...',
    profileHistory: 'Verification History',
    profileHistoryEmpty: 'No verifications yet',
    profileClearHistory: 'Clear History',
    clearHistory: 'Clear',
    profileClearHistoryConfirm: 'Are you sure you want to clear your history?',
    loggedInAs: 'Logged in as',
    noHistory: 'No history',
    
    // Mission Page
    missionPageTitle: 'Mission',
    missionPageDescription: 'Global Platform for Prevention and Analysis of Digital Fraud',
    missionPageHeading: 'AntiFraud / by HCoragem',
    missionPageSubheading: 'Global Platform for Prevention and Analysis of Digital Fraud',
    
    missionVisionTitle: 'Vision',
    missionVisionParagraphs: [
      'Our vision is a global digital ecosystem where:',
      'People communicate with more confidence',
      'Digital transactions are made with greater security',
      'Fraud is identified before causing damage',
      'Collective knowledge reduces the power of fraudulent schemes',
      'We imagine a future where prevention is the norm, not the exception.'
    ],
    
    missionCoreTitle: 'Mission',
    missionCoreParagraphs: [
      'AntiFraud\'s mission is to democratize access to protection against digital fraud, offering clear, understandable and effective analysis tools, regardless of technical level, age or economic condition.',
      'We believe that no one should lose money, data or peace of mind due to lack of information. Our mission is to transform scattered and complex information into objective, responsible and actionable answers.'
    ],
    
    missionImpactTitle: 'Social Impact',
    missionImpactParagraphs: [
      'Digital fraud disproportionately affects:',
      '• elderly people',
      '• people with lower digital literacy',
      '• vulnerable populations',
      'AntiFraud exists to reduce inequalities, protect real people and save time, money and peace of mind.'
    ],
    
    missionValuesTitle: 'Core Values',
    missionValuesParagraphs: [
      '• Protection of people first',
      '• Total transparency in analysis criteria',
      '• Responsibility in risk communication',
      '• Universal accessibility',
      '• Technological and ethical independence',
      'AntiFraud does not promote alarmism or false promises. It promotes awareness, analysis and prevention.'
    ],
    
    missionLimitationsTitle: 'Limitations and Responsibility',
    missionLimitationsParagraphs: [
      'AntiFraud is a prevention and decision support tool.',
      'It does not guarantee absolute fraud detection and should not be used as the sole basis for financial or legal decisions.',
      'We always recommend:',
      '• independent verification',
      '• direct contact with official entities',
      '• reporting fraud attempts to competent authorities'
    ],
    
    missionResponsibleUseTitle: 'Responsible Use',
    missionResponsibleUseParagraphs: [
      'By using AntiFraud, you agree that:',
      '• you understand that the tool is informative',
      '• you accept that results are risk indicators',
      '• you assume responsibility for decisions made',
      '• you will not use the platform for illegal or abusive purposes',
      'AntiFraud reserves the right to evolve its analysis criteria to improve user protection.'
    ],
    
    // How It Works Page
    howItWorksPageTitle: 'How It Works',
    howItWorksPageDescription: 'Anti-fraud analysis engine based on heuristics and recognized patterns',
    howItWorksPageHeading: 'How AntiFraud Works',
    howItWorksPageSubheading: 'Analysis engine based on heuristics, risk rules and widely recognized patterns',
    
    howItWorksVerificationTitle: 'Types of Analysis',
    howItWorksVerificationContent: 'AntiFraud allows you to analyze four main types of content frequently used in fraudulent schemes',
    
    howItWorksMessageTitle: '1. Messages (SMS, WhatsApp, social networks, informal email)',
    howItWorksMessageParagraphs: [
      'Messages are analyzed based on known risk indicators, such as:',
      '• requests for money or urgent transfers',
      '• promises of easy or quick gains',
      '• emotional or pressure language',
      '• "free" offers, prizes or unrealistic promotions',
      '• references to exclusive or secret opportunities',
      'Whenever these patterns are present, the risk level is classified as High.'
    ],
    
    howItWorksEmailTitle: '2. Emails',
    howItWorksEmailParagraphs: [
      'Email analysis considers:',
      '• content structure',
      '• message intent',
      '• common phishing patterns',
      '• requests for sensitive data',
      '• implicit links or suspicious instructions',
      'Emails with financial requests, personal data or urgent actions are considered highly suspicious.'
    ],
    
    howItWorksPhoneTitle: '3. Phones and Mobile Numbers',
    howItWorksPhoneParagraphs: [
      'Phone numbers are evaluated based on:',
      '• formats used in international fraud',
      '• typical patterns of fraudulent calls',
      '• frequent association with fake support, banks or investment schemes',
      'AntiFraud does not validate identities, but alerts to known risks and suspicious behaviors.'
    ],
    
    howItWorksCryptoTitle: '4. Cryptocurrencies and Digital Addresses',
    howItWorksCryptoParagraphs: [
      'Cryptocurrency addresses are analyzed considering:',
      '• request context',
      '• profit promises',
      '• guaranteed investments',
      '• immediate sending requests',
      'Any request to send cryptocurrencies associated with promises, urgency or unrealistic benefits is classified as High Risk.'
    ],
    
    howItWorksScoringTitle: 'Important About Responses',
    howItWorksScoringParagraphs: [
      'AntiFraud does not accuse, does not confirm crimes and does not replace authorities.',
      'Each analysis always returns:',
      '• Risk Level (Low, Medium or High)',
      '• Clear explanation in accessible language',
      '• Practical recommendation focused on user protection',
      'Responses are always presented in the selected language, consistently and professionally.'
    ],
    
    howItWorksLimitationsTitle: 'Limitations',
    howItWorksLimitationsParagraphs: [
      'AntiFraud is a prevention and decision support tool.',
      'It does not guarantee absolute fraud detection and should not be used as the sole basis for financial or legal decisions.',
      'We always recommend:',
      '• independent verification',
      '• direct contact with official entities',
      '• reporting fraud attempts to competent authorities'
    ],
    
    howItWorksResponsibleUseTitle: 'Responsible Use',
    howItWorksResponsibleUseParagraphs: [
      'By using AntiFraud, you agree that:',
      '• you understand that the tool is informative',
      '• you accept that results are risk indicators',
      '• you assume responsibility for decisions made',
      '• you will not use the platform for illegal or abusive purposes'
    ],
    
    // Terms Page
    termsPageTitle: 'Terms and Conditions',
    termsPageDescription: 'AntiFraud terms and conditions of use',
    termsEffectiveDate: 'Effective Date: February 10, 2026',
    termsSection1Title: '1. Acceptance of Terms',
    termsSection1Paragraphs: [
      'By using AntiFraud, you agree to these terms and conditions. If you do not agree, do not use the platform.'
    ],
    termsSection2Title: '2. Service Description',
    termsSection2Paragraphs: [
      'AntiFraud is a heuristic analysis tool for identifying potential digital fraud. Results are indicative and do not constitute absolute guarantee.'
    ],
    termsSection3Title: '3. Responsible Use',
    termsSection3Paragraphs: [
      'You agree to use the platform only for legitimate personal protection purposes. It is prohibited to use the service for harassment, defamation or any illegal activity.'
    ],
    termsSection4Title: '4. Limitation of Liability',
    termsSection4Paragraphs: [
      'AntiFraud is not responsible for decisions made based on the analyses provided. The tool is an aid, not a guarantee.'
    ],
    termsSection5Title: '5. Privacy',
    termsSection5Paragraphs: [
      'We do not collect identifiable personal data. Analyses are performed locally whenever possible. See our Privacy Policy for more details.'
    ],
    termsSection6Title: '6. Modifications',
    termsSection6Paragraphs: [
      'We reserve the right to modify these terms at any time. Significant changes will be communicated through the platform.'
    ],
    termsSection7Title: '7. Applicable Law',
    termsSection7Paragraphs: [
      'These terms are governed by the applicable laws in the country of operation of the platform.'
    ],
    termsSection8Title: '8. Contact',
    termsSection8Paragraphs: [
      'For questions about these terms, contact us through AntiFraud official channels.'
    ],
    
    // Privacy Page
    privacyPageTitle: 'Privacy Policy',
    privacyPageDescription: 'How we protect your privacy at AntiFraud',
    privacyEffectiveDate: 'Effective Date: February 10, 2026',
    privacySection1Title: '1. Commitment to Privacy',
    privacySection1Paragraphs: [
      'AntiFraud strictly respects user privacy. Privacy is an essential pillar of digital trust.'
    ],
    privacySection2Title: '2. Data Not Collected',
    privacySection2Paragraphs: [
      'We do not collect identifiable personal data.',
      'We do not store analyzed content.',
      'Analyses are performed locally whenever possible.',
      'We do not sell, share or commercialize information.'
    ],
    privacySection3Title: '3. Local Analyses',
    privacySection3Paragraphs: [
      'Most analyses (messages, emails, phones, cryptocurrencies) are performed entirely on your device, without sending data to external servers.'
    ],
    privacySection4Title: '4. Collaborative Database',
    privacySection4Paragraphs: [
      'When you query the collaborative database, only the hash or identifier of the item is sent, never the complete content.',
      'Submitted reports are anonymous and do not contain identifiable personal information.'
    ],
    privacySection5Title: '5. Cookies and Local Storage',
    privacySection5Paragraphs: [
      'We use browser local storage only for language preferences and verification history (if authenticated).',
      'We do not use tracking or advertising cookies.'
    ],
    privacySection6Title: '6. Authentication',
    privacySection6Paragraphs: [
      'Authentication is performed through Internet Identity, a decentralized system that does not reveal your real identity to AntiFraud.',
      'Only a cryptographic identifier (Principal) is used to associate your profile.'
    ],
    privacySection7Title: '7. Security',
    privacySection7Paragraphs: [
      'We implement technical and organizational security measures to protect data processed by the platform.'
    ],
    privacySection8Title: '8. Your Rights',
    privacySection8Paragraphs: [
      'You can clear your local history at any time through the profile menu.',
      'You can uninstall the app and all local data will be removed.'
    ],
    
    // Footer
    footerBuiltWith: 'Built with',
    footerLove: 'love',
    footerUsing: 'using',
  },
  
  // Spanish translations
  es: {
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    navHome: 'Inicio',
    navInstitutional: 'Institucional',
    navMission: 'Misión',
    navHowItWorks: 'Cómo Funciona',
    navTerms: 'Términos',
    navPrivacy: 'Privacidad',
    homeTitle: 'Protégete contra el fraude digital',
    homeSubtitle: 'Verifica mensajes, correos, números de teléfono y direcciones de criptomonedas antes de confiar',
    quickActionsTitle: 'Acciones Rápidas',
    quickActionCheckRisk: 'Verificar Riesgo',
    quickActionCheckRiskDesc: 'Analiza mensajes y contactos sospechosos',
    quickActionSearchDatabase: 'Consultar Base',
    quickActionSearchDatabaseDesc: 'Busca en la base colaborativa',
    quickActionReportScam: 'Reportar Fraude',
    quickActionReportScamDesc: 'Ayuda a la comunidad reportando',
    verificationTitle: 'Verificación de Seguridad',
    verificationDescription: 'Elige el tipo de verificación que deseas realizar',
    tabMessage: 'Mensaje',
    tabEmail: 'Email',
    tabPhone: 'Teléfono',
    tabCrypto: 'Cripto',
    labelMessage: 'Mensaje para analizar',
    labelEmail: 'Dirección de email',
    labelPhone: 'Número de teléfono',
    labelCrypto: 'Dirección de criptomoneda',
    placeholderMessage: 'Pega aquí el mensaje recibido',
    placeholderEmail: 'ejemplo@email.com',
    placeholderPhone: '+34 612 345 678',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    buttonAnalyze: 'Analizar Mensaje',
    buttonAnalyzing: 'Analizando...',
    buttonCheck: 'Verificar',
    buttonChecking: 'Verificando...',
    structuredResultTitle: 'Resultado del Análisis',
    structuredRiskLabel: 'Nivel de Riesgo',
    structuredRiskLow: 'Bajo',
    structuredRiskMedium: 'Medio',
    structuredRiskHigh: 'Alto',
    structuredExplanationLabel: 'Explicación',
    structuredRecommendationLabel: 'Recomendación',
    resultTitle: 'Resultado del Análisis',
    resultSafe: 'Seguro',
    resultSuspicious: 'Sospechoso',
    resultNoReports: 'Sin Reportes',
    resultNoReportsDescription: 'Este elemento no tiene reportes en nuestra base de datos.',
    resultHasReports: 'Reportes Encontrados',
    resultHasReportsDescription: 'Este elemento tiene {count} reporte(s) en nuestra base de datos.',
    errorTitle: 'Error',
    errorMessageEmpty: 'Por favor, ingresa un mensaje para analizar.',
    errorEmailEmpty: 'Por favor, ingresa una dirección de email.',
    errorEmailInvalid: 'Por favor, ingresa una dirección de email válida.',
    errorPhoneEmpty: 'Por favor, ingresa un número de teléfono.',
    errorCryptoEmpty: 'Por favor, ingresa una dirección de criptomoneda.',
    errorBackendNotReady: 'El sistema no está listo. Por favor, espera.',
    errorAnalyzeMessage: 'Error al analizar mensaje. Por favor, intenta de nuevo.',
    errorAnalyzeSpecific: 'No se pudo analizar el mensaje. Por favor, intenta de nuevo.',
    errorAnalyzeFailed: 'Análisis fallido. Por favor, intenta de nuevo.',
    errorCheckEmail: 'Error al verificar email. Por favor, intenta de nuevo.',
    errorCheckPhone: 'Error al verificar teléfono. Por favor, intenta de nuevo.',
    errorCheckCrypto: 'Error al verificar dirección. Por favor, intenta de nuevo.',
    errorCollaborativeLookup: 'Base colaborativa temporalmente no disponible',
    errorCollaborativeLookupSpecific: 'Consulta a la base colaborativa falló',
    errorReportSubmission: 'Error al enviar reporte. Por favor, intenta de nuevo.',
    errorReportTypeEmpty: 'Por favor, selecciona un tipo.',
    errorReportValueEmpty: 'Por favor, ingresa un valor.',
    errorReportCategoryEmpty: 'Por favor, selecciona una categoría.',
    errorReportCountryEmpty: 'Por favor, ingresa un código de país.',
    errorReportCooldown: 'Por favor, espera {seconds} segundos antes de reportar de nuevo.',
    collaborativeTitle: 'Base de Datos Colaborativa',
    collaborativeDescription: 'Consulta reportes de la comunidad y contribuye con tus experiencias',
    collaborativeInstructions: 'Usa las pestañas arriba para verificar elementos. Los resultados de la base colaborativa aparecerán automáticamente cuando estén disponibles.',
    collaborativeResultTitle: 'Resultado de la Base Colaborativa',
    collaborativeNoData: 'Sin datos en la base colaborativa',
    collaborativeEmptyState: 'Sin registros conocidos — base colaborativa en crecimiento.',
    collaborativeReports: '{count} reporte(s)',
    collaborativeCategory: 'Categoría: {category}',
    collaborativeCountry: 'País: {country}',
    collaborativeRiskScore: 'Puntuación de Riesgo',
    collaborativeReportCount: 'Número de Reportes',
    collaborativeCategories: 'Categorías',
    collaborativeDisclaimer: 'Datos proporcionados por la comunidad',
    reportDialogTitle: 'Reportar Fraude',
    reportDialogDescription: 'Ayuda a la comunidad reportando fraudes y estafas',
    reportTitle: 'Reportar Fraude',
    reportDescription: 'Ayuda a la comunidad reportando fraudes y estafas',
    reportTypeLabel: 'Tipo',
    reportTypePlaceholder: 'Selecciona tipo',
    reportTypePhone: 'Teléfono',
    reportTypeCrypto: 'Criptomoneda',
    reportTypeEmail: 'Email',
    reportTypeMessage: 'Mensaje',
    reportValueLabel: 'Valor',
    reportValuePlaceholder: 'Ingresa teléfono, email, dirección o mensaje',
    reportCategoryLabel: 'Categoría',
    reportCategoryPlaceholder: 'Selecciona categoría',
    reportCategoryPhishing: 'Phishing',
    reportCategoryScam: 'Estafa',
    reportCategorySpam: 'Spam',
    reportCategoryFraud: 'Fraude',
    reportCategoryOther: 'Otro',
    reportCountryLabel: 'País',
    reportCountryPlaceholder: 'Código de país (ej: ES, MX)',
    reportDescriptionLabel: 'Descripción (opcional)',
    reportDescriptionPlaceholder: 'Describe el incidente...',
    reportSubmitButton: 'Enviar Reporte',
    reportSubmitting: 'Enviando...',
    reportCancelButton: 'Cancelar',
    reportSuccessTitle: 'Reporte Enviado',
    reportSuccessDescription: '¡Gracias por ayudar a la comunidad!',
    reportSuccess: '¡Gracias por ayudar a la comunidad!',
    reportErrorTitle: 'Error al Enviar',
    categoryPhishing: 'Phishing',
    categoryScam: 'Estafa',
    categorySpam: 'Spam',
    categoryFraud: 'Fraude',
    categoryImpersonation: 'Suplantación',
    categoryOther: 'Otro',
    pwaInstallTitle: 'Instalar AntiFraud',
    pwaInstallButton: 'Descarga la App AntiFraud gratis',
    installPrimaryButton: 'Descarga la App AntiFraud gratis',
    installAppTitle: 'Instalar AntiFraud',
    installAppNote: 'Instala para acceso rápido y sin conexión',
    pwaInstallDescription: 'Instala la aplicación AntiFraud en tu dispositivo para acceso rápido y sin conexión.',
    pwaInstallInstructions: 'Para instalar la aplicación AntiFraud:',
    installInstructionsIos: 'En Safari, toca el ícono de compartir y selecciona "Añadir a pantalla de inicio".',
    installInstructionsAndroid: 'En Chrome, toca el menú (tres puntos) y selecciona "Instalar app" o "Añadir a pantalla de inicio".',
    installInstructionsDesktop: 'En tu navegador, busca el ícono de instalación en la barra de direcciones o menú y haz clic en "Instalar".',
    installInstructionsDefault: 'Busca la opción de instalación en el menú de tu navegador.',
    pwaInstallStep1: 'En tu navegador, busca el ícono de instalación (generalmente en el menú o barra de direcciones)',
    pwaInstallStep2: 'Haz clic en "Instalar" o "Añadir a pantalla de inicio"',
    pwaInstallStep3: 'Sigue las instrucciones de tu navegador para completar la instalación',
    pwaInstallClose: 'Cerrar',
    pwaAlreadyInstalled: 'App ya instalada',
    authLogin: 'Iniciar sesión',
    authLogout: 'Cerrar sesión',
    authLoggingIn: 'Iniciando sesión...',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    loggingIn: 'Iniciando sesión...',
    authWelcome: 'Bienvenido',
    authProfile: 'Perfil',
    profile: 'Perfil',
    authHistory: 'Historial',
    history: 'Historial',
    authSettings: 'Configuración',
    profileSetupTitle: 'Configura tu perfil',
    profileSetupDescription: 'Por favor, ingresa tu nombre para continuar',
    profileNameLabel: 'Nombre',
    profileNamePlaceholder: 'Tu nombre',
    profileSaveButton: 'Guardar',
    profileSaving: 'Guardando...',
    profileHistory: 'Historial de Verificaciones',
    profileHistoryEmpty: 'Aún no has realizado verificaciones',
    profileClearHistory: 'Limpiar Historial',
    clearHistory: 'Limpiar',
    profileClearHistoryConfirm: '¿Estás seguro de que deseas limpiar tu historial?',
    loggedInAs: 'Conectado como',
    noHistory: 'Sin historial',
    missionPageTitle: 'Misión',
    missionPageDescription: 'Plataforma Global de Prevención y Análisis de Fraudes Digitales',
    missionPageHeading: 'AntiFraud / by HCoragem',
    missionPageSubheading: 'Plataforma Global de Prevención y Análisis de Fraudes Digitales',
    missionVisionTitle: 'Visión',
    missionVisionParagraphs: ['Nuestra visión es un ecosistema digital global donde las personas se comunican con más confianza, las transacciones digitales se realizan con mayor seguridad, el fraude se identifica antes de causar daños y el conocimiento colectivo reduce el poder de los esquemas fraudulentos.'],
    missionCoreTitle: 'Misión',
    missionCoreParagraphs: ['La misión de AntiFraud es democratizar el acceso a la protección contra el fraude digital, ofreciendo herramientas de análisis claras, comprensibles y efectivas, independientemente del nivel técnico, edad o condición económica.'],
    missionImpactTitle: 'Impacto Social',
    missionImpactParagraphs: ['El fraude digital afecta desproporcionadamente a personas mayores, personas con menor alfabetización digital y poblaciones vulnerables. AntiFraud existe para reducir desigualdades, proteger personas reales y ahorrar tiempo, dinero y tranquilidad.'],
    missionValuesTitle: 'Valores Fundamentales',
    missionValuesParagraphs: ['Protección de las personas primero, transparencia total en los criterios de análisis, responsabilidad en la comunicación de riesgos, accesibilidad universal e independencia tecnológica y ética.'],
    missionLimitationsTitle: 'Limitaciones y Responsabilidad',
    missionLimitationsParagraphs: ['AntiFraud es una herramienta de prevención y apoyo a la decisión. No garantiza detección absoluta de fraude y no debe usarse como única base para decisiones financieras o legales.'],
    missionResponsibleUseTitle: 'Uso Responsable',
    missionResponsibleUseParagraphs: ['Al utilizar AntiFraud, aceptas que comprendes que la herramienta es informativa, aceptas que los resultados son indicadores de riesgo, asumes la responsabilidad por las decisiones tomadas y no utilizarás la plataforma para fines ilegales o abusivos.'],
    howItWorksPageTitle: 'Cómo Funciona',
    howItWorksPageDescription: 'Motor de análisis antifraude basado en heurísticas y patrones reconocidos',
    howItWorksPageHeading: 'Cómo Funciona AntiFraud',
    howItWorksPageSubheading: 'Motor de análisis basado en heurísticas, reglas de riesgo y patrones ampliamente reconocidos',
    howItWorksVerificationTitle: 'Tipos de Análisis',
    howItWorksVerificationContent: 'AntiFraud permite analizar cuatro tipos principales de contenido frecuentemente utilizados en esquemas fraudulentos',
    howItWorksMessageTitle: '1. Mensajes (SMS, WhatsApp, redes sociales, email informal)',
    howItWorksMessageParagraphs: ['Los mensajes se analizan en base a indicadores de riesgo conocidos, como solicitudes de dinero o transferencias urgentes, promesas de ganancias fáciles o rápidas, lenguaje emocional o de presión, ofertas "gratuitas", premios o promociones irreales.'],
    howItWorksEmailTitle: '2. Emails',
    howItWorksEmailParagraphs: ['El análisis de emails considera estructura del contenido, intención del mensaje, patrones comunes de phishing, solicitudes de datos sensibles y enlaces implícitos o instrucciones sospechosas.'],
    howItWorksPhoneTitle: '3. Teléfonos y Números Móviles',
    howItWorksPhoneParagraphs: ['Los números de teléfono se evalúan en base a formatos utilizados en fraudes internacionales, patrones típicos de llamadas fraudulentas y asociación frecuente con esquemas de soporte falso, bancos o inversiones.'],
    howItWorksCryptoTitle: '4. Criptomonedas y Direcciones Digitales',
    howItWorksCryptoParagraphs: ['Las direcciones de criptomonedas se analizan considerando contexto de la solicitud, promesas de lucro, inversiones garantizadas y solicitudes de envío inmediato.'],
    howItWorksScoringTitle: 'Importante Sobre las Respuestas',
    howItWorksScoringParagraphs: ['AntiFraud no acusa, no confirma crímenes y no reemplaza a las autoridades. Cada análisis siempre devuelve: Nivel de Riesgo (Bajo, Medio o Alto), explicación clara en lenguaje accesible y recomendación práctica enfocada en la protección del usuario.'],
    howItWorksLimitationsTitle: 'Limitaciones',
    howItWorksLimitationsParagraphs: ['AntiFraud es una herramienta de prevención y apoyo a la decisión. No garantiza detección absoluta de fraude y no debe usarse como única base para decisiones financieras o legales.'],
    howItWorksResponsibleUseTitle: 'Uso Responsable',
    howItWorksResponsibleUseParagraphs: ['Al utilizar AntiFraud, aceptas que comprendes que la herramienta es informativa, aceptas que los resultados son indicadores de riesgo, asumes la responsabilidad por las decisiones tomadas y no utilizarás la plataforma para fines ilegales o abusivos.'],
    termsPageTitle: 'Términos y Condiciones',
    termsPageDescription: 'Términos y condiciones de uso de AntiFraud',
    termsEffectiveDate: 'Fecha de Vigencia: 10 de febrero de 2026',
    termsSection1Title: '1. Aceptación de Términos',
    termsSection1Paragraphs: ['Al utilizar AntiFraud, aceptas estos términos y condiciones. Si no estás de acuerdo, no utilices la plataforma.'],
    termsSection2Title: '2. Descripción del Servicio',
    termsSection2Paragraphs: ['AntiFraud es una herramienta de análisis heurístico para identificar posibles fraudes digitales. Los resultados son indicativos y no constituyen garantía absoluta.'],
    termsSection3Title: '3. Uso Responsable',
    termsSection3Paragraphs: ['Aceptas usar la plataforma solo para fines legítimos de protección personal. Está prohibido usar el servicio para acoso, difamación o cualquier actividad ilegal.'],
    termsSection4Title: '4. Limitación de Responsabilidad',
    termsSection4Paragraphs: ['AntiFraud no se responsabiliza por decisiones tomadas en base a los análisis proporcionados. La herramienta es una ayuda, no una garantía.'],
    termsSection5Title: '5. Privacidad',
    termsSection5Paragraphs: ['No recopilamos datos personales identificables. Los análisis se realizan localmente siempre que sea posible. Consulta nuestra Política de Privacidad para más detalles.'],
    termsSection6Title: '6. Modificaciones',
    termsSection6Paragraphs: ['Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos se comunicarán a través de la plataforma.'],
    termsSection7Title: '7. Ley Aplicable',
    termsSection7Paragraphs: ['Estos términos se rigen por las leyes aplicables en el país de operación de la plataforma.'],
    termsSection8Title: '8. Contacto',
    termsSection8Paragraphs: ['Para preguntas sobre estos términos, contáctanos a través de los canales oficiales de AntiFraud.'],
    privacyPageTitle: 'Política de Privacidad',
    privacyPageDescription: 'Cómo protegemos tu privacidad en AntiFraud',
    privacyEffectiveDate: 'Fecha de Vigencia: 10 de febrero de 2026',
    privacySection1Title: '1. Compromiso con la Privacidad',
    privacySection1Paragraphs: ['AntiFraud respeta estrictamente la privacidad de los usuarios. La privacidad es un pilar esencial de la confianza digital.'],
    privacySection2Title: '2. Datos No Recopilados',
    privacySection2Paragraphs: ['No recopilamos datos personales identificables. No almacenamos contenido analizado. Los análisis se realizan localmente siempre que sea posible. No vendemos, compartimos ni comercializamos información.'],
    privacySection3Title: '3. Análisis Locales',
    privacySection3Paragraphs: ['La mayoría de los análisis (mensajes, emails, teléfonos, criptomonedas) se realizan completamente en tu dispositivo, sin enviar datos a servidores externos.'],
    privacySection4Title: '4. Base de Datos Colaborativa',
    privacySection4Paragraphs: ['Cuando consultas la base colaborativa, solo se envía el hash o identificador del elemento, nunca el contenido completo. Los reportes enviados son anónimos y no contienen información personal identificable.'],
    privacySection5Title: '5. Cookies y Almacenamiento Local',
    privacySection5Paragraphs: ['Utilizamos almacenamiento local del navegador solo para preferencias de idioma e historial de verificaciones (si estás autenticado). No utilizamos cookies de seguimiento o publicidad.'],
    privacySection6Title: '6. Autenticación',
    privacySection6Paragraphs: ['La autenticación se realiza a través de Internet Identity, un sistema descentralizado que no revela tu identidad real a AntiFraud. Solo se utiliza un identificador criptográfico (Principal) para asociar tu perfil.'],
    privacySection7Title: '7. Seguridad',
    privacySection7Paragraphs: ['Implementamos medidas de seguridad técnicas y organizativas para proteger los datos procesados por la plataforma.'],
    privacySection8Title: '8. Tus Derechos',
    privacySection8Paragraphs: ['Puedes limpiar tu historial local en cualquier momento a través del menú de perfil. Puedes desinstalar la app y todos los datos locales serán eliminados.'],
    footerBuiltWith: 'Construido con',
    footerLove: 'amor',
    footerUsing: 'usando',
  },
  
  // French, Chinese, Arabic, Russian - stub translations (basic keys only)
  fr: {
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    navHome: 'Accueil',
    navMission: 'Mission',
    navHowItWorks: 'Comment ça marche',
    navTerms: 'Conditions',
    navPrivacy: 'Confidentialité',
    placeholderMessage: 'Collez le message reçu ici',
    placeholderEmail: 'exemple@email.com',
    placeholderPhone: '+33 6 12 34 56 78',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    structuredRiskLow: 'Faible',
    structuredRiskMedium: 'Moyen',
    structuredRiskHigh: 'Élevé',
    footerBuiltWith: 'Construit avec',
    footerLove: 'amour',
    footerUsing: 'en utilisant',
  },
  
  zh: {
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    navHome: '首页',
    navMission: '使命',
    navHowItWorks: '工作原理',
    navTerms: '条款',
    navPrivacy: '隐私',
    placeholderMessage: '在此粘贴收到的消息',
    placeholderEmail: 'example@email.com',
    placeholderPhone: '+86 138 0000 0000',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    structuredRiskLow: '低',
    structuredRiskMedium: '中',
    structuredRiskHigh: '高',
    footerBuiltWith: '构建于',
    footerLove: '爱',
    footerUsing: '使用',
  },
  
  ar: {
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    navHome: 'الرئيسية',
    navMission: 'المهمة',
    navHowItWorks: 'كيف يعمل',
    navTerms: 'الشروط',
    navPrivacy: 'الخصوصية',
    placeholderMessage: 'الصق الرسالة المستلمة هنا',
    placeholderEmail: 'example@email.com',
    placeholderPhone: '+966 50 000 0000',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    structuredRiskLow: 'منخفض',
    structuredRiskMedium: 'متوسط',
    structuredRiskHigh: 'عالي',
    footerBuiltWith: 'بني مع',
    footerLove: 'حب',
    footerUsing: 'باستخدام',
  },
  
  ru: {
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    navHome: 'Главная',
    navMission: 'Миссия',
    navHowItWorks: 'Как это работает',
    navTerms: 'Условия',
    navPrivacy: 'Конфиденциальность',
    placeholderMessage: 'Вставьте полученное сообщение здесь',
    placeholderEmail: 'example@email.com',
    placeholderPhone: '+7 900 000 00 00',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    structuredRiskLow: 'Низкий',
    structuredRiskMedium: 'Средний',
    structuredRiskHigh: 'Высокий',
    footerBuiltWith: 'Создано с',
    footerLove: 'любовью',
    footerUsing: 'используя',
  },
};

export type Translations = typeof translations.pt;
export type Language = keyof typeof translations;
