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
    placeholderMessage: 'Cole aqui a mensagem suspeita...',
    placeholderEmail: 'exemplo@email.com',
    placeholderPhone: '+351 912 345 678',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    
    // Buttons
    buttonAnalyze: 'Analisar Mensagem',
    buttonAnalyzing: 'A analisar...',
    buttonCheck: 'Verificar',
    buttonChecking: 'A verificar...',
    
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
    
    // Auth
    authLogin: 'Entrar',
    authLogout: 'Sair',
    authProfile: 'Perfil',
    authHistory: 'Histórico',
    authClearHistory: 'Limpar Histórico',
    authNoHistory: 'Sem histórico de verificações',
    login: 'Entrar',
    loggingIn: 'A entrar...',
    logout: 'Sair',
    profile: 'Perfil',
    loggedInAs: 'Autenticado como',
    history: 'Histórico',
    clearHistory: 'Limpar Histórico',
    noHistory: 'Sem histórico',
    
    // PWA Install
    installTitle: 'Instalar AntiFraud',
    installButton: 'Instalar App',
    installApp: 'Instalar',
    installPrimaryButton: 'Baixe a Aplicação AntiFraud gratuitamente',
    installAppTitle: 'Instalar AntiFraud',
    installAppNote: 'Instale para acesso rápido',
    installInstructionsTitle: 'Como Instalar',
    installInstructionsIos: 'No Safari, toque no ícone de partilha e selecione "Adicionar ao Ecrã Principal".',
    installInstructionsAndroid: 'No Chrome, toque no menu (⋮) e selecione "Instalar app" ou "Adicionar ao ecrã principal".',
    installInstructionsDesktop: 'No seu navegador, procure o ícone de instalação na barra de endereços ou no menu.',
    installInstructionsDefault: 'Use o menu do seu navegador para instalar esta aplicação.',
    
    // Mission page
    missionTitle: 'Nossa Missão',
    missionSubtitle: 'Proteger a comunidade digital',
    missionPageTitle: 'Missão',
    missionPageDescription: 'Conheça a missão, visão e valores do AntiFraud',
    missionPageHeading: 'Nossa Missão',
    missionPageSubheading: 'Proteger a comunidade digital através de tecnologia colaborativa',
    missionVisionTitle: 'Visão Global',
    missionVisionParagraphs: [
      'Criar um ecossistema digital onde todos possam verificar a autenticidade de comunicações e transações, protegendo-se contra fraudes através de tecnologia descentralizada e colaboração comunitária.',
      'Aspiramos a um futuro onde a verificação de fraudes seja acessível universalmente, independentemente de conhecimento técnico ou recursos financeiros, capacitando cada indivíduo a tomar decisões informadas e seguras no ambiente digital.'
    ],
    missionCoreTitle: 'Missão Central',
    missionCoreParagraphs: [
      'Democratizar a proteção contra fraudes digitais através de tecnologia blockchain descentralizada, permitindo que qualquer pessoa verifique a legitimidade de comunicações e transações antes de confiar.',
      'Fornecer ferramentas gratuitas e acessíveis para verificação de mensagens, emails, números de telefone e endereços de criptomoedas, capacitando utilizadores a identificar e reportar tentativas de fraude de forma colaborativa.'
    ],
    missionImpactTitle: 'Impacto Social',
    missionImpactParagraphs: [
      'O AntiFraud visa reduzir o impacto devastador das fraudes digitais, que afetam milhões de pessoas globalmente, causando perdas financeiras e emocionais significativas.',
      'Através da colaboração comunitária, construímos uma base de conhecimento coletivo que protege não apenas indivíduos, mas comunidades inteiras, criando um efeito de rede que fortalece a segurança digital para todos.',
      'Priorizamos a proteção de populações vulneráveis, incluindo idosos e pessoas com menor literacia digital, oferecendo interfaces intuitivas e orientação clara.'
    ],
    missionValuesTitle: 'Valores Fundamentais',
    missionValuesParagraphs: [
      'Privacidade por design: Processamos dados de forma anónima e respeitamos a privacidade de cada utilizador.',
      'Transparência total: Operamos com código aberto e processos claros, sem algoritmos ocultos.',
      'Colaboração comunitária: A força da nossa plataforma vem da participação ativa da comunidade.',
      'Acessibilidade universal: Ferramentas gratuitas e interfaces intuitivas para todos.',
      'Segurança pós-quântica: Preparados para ameaças futuras através da Internet Computer blockchain.'
    ],
    missionLimitationsTitle: 'Limitações do Sistema',
    missionLimitationsParagraphs: [
      'O AntiFraud é uma ferramenta de apoio à decisão, não uma garantia absoluta. A base de dados colaborativa está em crescimento contínuo e pode não conter todos os casos de fraude existentes.',
      'Resultados devem ser interpretados como indicadores de risco, não como verdades absolutas. Falsos positivos e negativos podem ocorrer.',
      'A eficácia do sistema depende da participação ativa da comunidade. Quanto mais utilizadores reportarem fraudes, mais robusta se torna a proteção coletiva.',
      'Não substituímos o julgamento pessoal, investigação adicional ou aconselhamento profissional em situações complexas.'
    ],
    missionResponsibleUseTitle: 'Uso Responsável',
    missionResponsibleUseParagraphs: [
      'Utilize o AntiFraud como uma camada adicional de proteção, não como única fonte de decisão.',
      'Reporte apenas fraudes reais e verificadas. Reportes falsos prejudicam a comunidade e podem ter consequências legais.',
      'Respeite a privacidade de terceiros. Não utilize a plataforma para assédio, difamação ou outros fins ilegítimos.',
      'Mantenha-se informado sobre novas técnicas de fraude e partilhe conhecimento com a comunidade de forma construtiva.'
    ],
    missionCoreContent: 'Democratizar a proteção contra fraudes digitais através de tecnologia blockchain descentralizada.',
    missionContent: 'Democratizar a proteção contra fraudes digitais através de tecnologia blockchain descentralizada.',
    missionPoint1: 'Verificação gratuita e acessível para todos',
    missionPoint2: 'Base de dados colaborativa mantida pela comunidade',
    missionPoint3: 'Privacidade e segurança em primeiro lugar',
    missionPoint4: 'Preparação para ameaças futuras',
    missionVisionContent: 'Criar um mundo digital mais seguro onde todos tenham acesso a ferramentas de verificação de fraudes.',
    missionValuesContent: 'Privacidade por design, transparência total, colaboração comunitária, acessibilidade universal, e compromisso com a segurança pós-quântica.',
    visionTitle: 'Visão',
    visionContent: 'Criar um mundo digital mais seguro onde todos tenham acesso a ferramentas de verificação de fraudes, independentemente de conhecimento técnico ou recursos financeiros.',
    valuesTitle: 'Valores',
    valueProtectionTitle: 'Proteção',
    valueProtection: 'Segurança e privacidade em primeiro lugar',
    valueTransparencyTitle: 'Transparência',
    valueTransparency: 'Código aberto e processos claros',
    valueAccessibilityTitle: 'Acessibilidade',
    valueAccessibility: 'Ferramentas gratuitas para todos',
    valueEducationTitle: 'Educação',
    valueEducation: 'Capacitar usuários com conhecimento',
    valueInnovationTitle: 'Inovação',
    valueInnovation: 'Tecnologia de ponta para proteção',
    valueFutureSecureTitle: 'Segurança Futura',
    valueFutureSecure: 'Preparado para ameaças quânticas',
    
    // How It Works page
    howItWorksTitle: 'Como Funciona',
    howItWorksSubtitle: 'Entenda como o AntiFraud protege você',
    howItWorksPageTitle: 'Como Funciona',
    howItWorksPageDescription: 'Entenda como funciona a verificação de emails, telefones, mensagens e carteiras',
    howItWorksPageHeading: 'Como Funciona',
    howItWorksPageSubheading: 'Sistema de verificação colaborativa para proteção contra fraudes',
    howItWorksOverviewTitle: 'Visão Geral',
    howItWorksOverviewParagraphs: [
      'O AntiFraud combina análise automatizada com uma base de dados colaborativa mantida pela comunidade para fornecer verificações abrangentes de segurança.',
      'Cada verificação consulta múltiplas fontes de dados e aplica algoritmos de detecção de padrões para identificar potenciais ameaças.',
      'O sistema é projetado para ser rápido, preciso e fácil de usar, fornecendo resultados claros e acionáveis em segundos.'
    ],
    howItWorksVerificationTitle: 'Tipos de Verificação',
    howItWorksEmailTitle: 'Verificação de Email',
    howItWorksEmailParagraphs: [
      'Analisa endereços de email contra a base de dados colaborativa de fraudes reportadas.',
      'Verifica padrões suspeitos no formato do endereço, domínios conhecidos por phishing e histórico de reportes da comunidade.',
      'Fornece uma pontuação de risco baseada no número de reportes, categorias de fraude associadas e análise de padrões.'
    ],
    howItWorksPhoneTitle: 'Verificação de Telefone',
    howItWorksPhoneParagraphs: [
      'Consulta números de telefone na base de dados colaborativa para identificar chamadas e mensagens fraudulentas.',
      'Detecta padrões de spam, golpes telefónicos, phishing por SMS e outras ameaças reportadas pela comunidade.',
      'Apresenta estatísticas de reportes, incluindo frequência, categorias de fraude e países de origem quando disponível.'
    ],
    howItWorksMessageTitle: 'Análise de Mensagens',
    howItWorksMessageParagraphs: [
      'Analisa o conteúdo de mensagens de texto, emails ou comunicações suspeitas usando algoritmos de detecção de padrões.',
      'Identifica indicadores de fraude como urgência artificial, pedidos de informações sensíveis, links suspeitos e técnicas de engenharia social.',
      'Fornece uma análise detalhada em português explicando os riscos identificados e recomendações de ação.',
      'A análise é realizada localmente e no backend, garantindo privacidade enquanto aproveita inteligência coletiva.'
    ],
    howItWorksCryptoTitle: 'Verificação de Carteiras Cripto',
    howItWorksCryptoParagraphs: [
      'Verifica endereços de criptomoedas contra reportes de fraudes, esquemas Ponzi, carteiras de ransomware e outras ameaças.',
      'Consulta a base de dados colaborativa para identificar endereços associados a atividades fraudulentas reportadas pela comunidade.',
      'Essencial antes de realizar transações, especialmente em contextos de investimento, doações ou comércio peer-to-peer.'
    ],
    howItWorksScoringTitle: 'Sistema de Pontuação',
    howItWorksScoringParagraphs: [
      'Cada verificação gera uma pontuação de risco de 0 a 100, onde valores mais altos indicam maior probabilidade de fraude.',
      'A pontuação é calculada com base em múltiplos fatores: número de reportes, categorias de fraude, padrões detectados e análise contextual.',
      'Pontuações são acompanhadas de explicações claras e recomendações de ação, ajudando utilizadores a tomar decisões informadas.',
      'O sistema aprende continuamente com novos reportes, melhorando a precisão ao longo do tempo.'
    ],
    howItWorksLimitationsTitle: 'Limitações Importantes',
    howItWorksLimitationsParagraphs: [
      'A base de dados colaborativa está em crescimento contínuo. Ausência de reportes não garante segurança absoluta.',
      'Novos esquemas de fraude podem não estar ainda na base de dados. Mantenha sempre cautela e senso crítico.',
      'Falsos positivos podem ocorrer. Utilize os resultados como indicadores, não como verdades absolutas.',
      'A eficácia do sistema depende da participação ativa da comunidade. Reporte fraudes para fortalecer a proteção coletiva.'
    ],
    howItWorksResponsibleUseTitle: 'Uso Responsável',
    howItWorksResponsibleUseParagraphs: [
      'Utilize o AntiFraud como uma camada adicional de proteção, complementando seu próprio julgamento e outras medidas de segurança.',
      'Não tome decisões financeiras ou legais importantes baseando-se exclusivamente nos resultados do sistema.',
      'Reporte apenas fraudes reais e verificadas. Reportes falsos prejudicam a comunidade e podem ter consequências legais.',
      'Respeite a privacidade de terceiros. Não utilize a plataforma para assédio, difamação ou outros fins ilegítimos.',
      'Em caso de dúvida, procure aconselhamento profissional ou contacte autoridades competentes.'
    ],
    howItWorksDetailTitle: 'Detalhes do Sistema',
    howItWorksDetailSubtitle: 'Como funciona cada componente',
    featureVerificationTitle: 'Verificação Inteligente',
    featureVerificationDesc: 'Análise automática de mensagens, emails, telefones e criptomoedas',
    featureDatabaseTitle: 'Base Colaborativa',
    featureDatabaseDesc: 'Dados compartilhados pela comunidade para proteção coletiva',
    featureReportsTitle: 'Sistema de Reportes',
    featureReportsDesc: 'Reporte fraudes e ajude outros usuários',
    featureScoringTitle: 'Pontuação de Risco',
    featureScoringDesc: 'Avaliação baseada em múltiplos indicadores',
    howCheckTitle: 'Verificação',
    howCheckDesc: 'Cole ou digite o conteúdo suspeito para análise imediata',
    howDatabaseTitle: 'Consulta',
    howDatabaseDesc: 'Busque na base de dados colaborativa',
    howReportTitle: 'Reporte',
    howReportDesc: 'Contribua reportando fraudes identificadas',
    howScoringTitle: 'Pontuação',
    howScoringDesc: 'Receba uma avaliação de risco detalhada',
    howAiTitle: 'Análise Inteligente',
    howAiDesc: 'Algoritmos detectam padrões de fraude',
    howFutureTitle: 'Segurança Futura',
    howFutureDesc: 'Preparado para ameaças quânticas',
    
    // Terms page
    termsTitle: 'Termos e Condições',
    termsSubtitle: 'Leia nossos termos de uso',
    termsPageTitle: 'Termos e Condições',
    termsPageDescription: 'Termos de uso do AntiFraud',
    termsEffectiveDate: 'Última atualização: 9 de fevereiro de 2026',
    termsSection1Title: '1. Aceitação dos Termos',
    termsSection1Paragraphs: [
      'Bem-vindo ao AntiFraud / by HCoragem. Ao acessar e utilizar esta plataforma, você concorda em cumprir e estar vinculado a estes Termos e Condições.',
      'Se não concordar com qualquer parte destes termos, não utilize o serviço. O uso continuado da plataforma constitui aceitação de quaisquer alterações aos termos.'
    ],
    termsSection2Title: '2. Descrição do Serviço',
    termsSection2Paragraphs: [
      'O AntiFraud é uma plataforma de verificação e prevenção de fraudes digitais que opera na Internet Computer blockchain.',
      'Fornecemos ferramentas para verificar mensagens, emails, números de telefone e endereços de criptomoedas contra bases de dados de fraudes conhecidas.',
      'O serviço inclui análise automatizada de conteúdo e uma base de dados colaborativa mantida pela comunidade de utilizadores.',
      'Todos os serviços são fornecidos "como estão" sem garantias de qualquer tipo, expressas ou implícitas.'
    ],
    termsSection3Title: '3. Responsabilidades do Utilizador',
    termsSection3Paragraphs: [
      'Você é responsável por: (a) fornecer informações precisas e verdadeiras ao reportar fraudes; (b) não abusar do sistema com reportes falsos ou maliciosos; (c) usar o serviço apenas para fins legítimos de proteção contra fraudes; (d) manter a confidencialidade das suas credenciais de acesso.',
      'Você concorda em não utilizar o serviço para: (a) assédio, difamação ou violação de privacidade de terceiros; (b) atividades ilegais ou não autorizadas; (c) tentativas de comprometer a segurança ou integridade da plataforma.',
      'Reportes falsos ou maliciosos podem resultar na suspensão ou encerramento da sua conta e podem ter consequências legais.'
    ],
    termsSection4Title: '4. Privacidade e Proteção de Dados',
    termsSection4Paragraphs: [
      'O AntiFraud respeita a sua privacidade. Dados de verificação são processados de forma anónima sempre que possível.',
      'Reportes submetidos à base colaborativa são armazenados na blockchain e tornam-se públicos por design, para benefício da comunidade.',
      'Não coletamos dados pessoais identificáveis sem consentimento explícito. Utilizamos Internet Identity para autenticação descentralizada.',
      'Para mais informações sobre como tratamos seus dados, consulte nossa Política de Privacidade.'
    ],
    termsSection5Title: '5. Limitação de Responsabilidade',
    termsSection5Paragraphs: [
      'O AntiFraud fornece informações e ferramentas de apoio à decisão, não garantias absolutas de segurança.',
      'Não somos responsáveis por: (a) decisões tomadas com base nas verificações fornecidas; (b) falsos positivos ou negativos nas análises; (c) perdas financeiras, danos ou prejuízos resultantes do uso ou incapacidade de usar o serviço.',
      'Os utilizadores devem sempre exercer o seu próprio julgamento crítico e, quando apropriado, procurar aconselhamento profissional adicional.',
      'A eficácia do serviço depende da participação da comunidade. Não garantimos que a base de dados contenha todos os casos de fraude existentes.'
    ],
    termsSection6Title: '6. Propriedade Intelectual',
    termsSection6Paragraphs: [
      'O AntiFraud e todo o seu conteúdo, características e funcionalidades são propriedade de HCoragem e estão protegidos por leis de direitos autorais e propriedade intelectual.',
      'Você recebe uma licença limitada, não exclusiva e revogável para usar o serviço para fins pessoais e não comerciais.',
      'Não é permitido copiar, modificar, distribuir ou criar obras derivadas sem autorização expressa.'
    ],
    termsSection7Title: '7. Alterações aos Termos',
    termsSection7Paragraphs: [
      'Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas através da plataforma.',
      'O uso continuado do serviço após alterações constitui aceitação dos novos termos.',
      'Recomendamos que reveja periodicamente estes termos para se manter informado sobre quaisquer atualizações.'
    ],
    termsSection8Title: '8. Lei Aplicável e Jurisdição',
    termsSection8Paragraphs: [
      'Estes termos são regidos pelas leis aplicáveis, sem prejuízo de conflitos de disposições legais.',
      'Qualquer disputa relacionada a estes termos ou ao uso do serviço será resolvida através de arbitragem ou nos tribunais competentes.',
      'Se qualquer disposição destes termos for considerada inválida, as restantes disposições permanecerão em pleno vigor e efeito.'
    ],
    termsIntroTitle: '1. Introdução',
    termsIntroContent: 'Bem-vindo ao AntiFraud. Ao utilizar esta plataforma, você concorda com estes termos e condições. O AntiFraud é uma ferramenta de verificação de fraudes que opera na Internet Computer blockchain.',
    termsServiceTitle: '2. Descrição do Serviço',
    termsServiceContent: 'O AntiFraud fornece ferramentas para verificar mensagens, emails, números de telefone e endereços de criptomoedas contra bases de dados de fraudes conhecidas. O serviço inclui análise automatizada e uma base de dados colaborativa mantida pela comunidade.',
    termsUserTitle: '3. Responsabilidades do Utilizador',
    termsUserContent: 'Os utilizadores são responsáveis por: (a) fornecer informações precisas ao reportar fraudes; (b) não abusar do sistema com reportes falsos; (c) usar o serviço apenas para fins legítimos de proteção contra fraudes; (d) manter a confidencialidade das suas credenciais de acesso.',
    termsPrivacyTitle: '4. Privacidade e Dados',
    termsPrivacyContent: 'O AntiFraud respeita a sua privacidade. Dados de verificação são processados de forma anónima. Reportes submetidos à base colaborativa são armazenados na blockchain e tornam-se públicos. Não coletamos dados pessoais identificáveis sem consentimento explícito.',
    termsLiabilityTitle: '5. Limitação de Responsabilidade',
    termsLiabilityContent: 'O AntiFraud fornece informações "como está" sem garantias. Não somos responsáveis por: (a) decisões tomadas com base nas nossas verificações; (b) falsos positivos ou negativos; (c) perdas financeiras resultantes do uso do serviço. Os utilizadores devem sempre exercer o seu próprio julgamento.',
    termsChangesTitle: '6. Alterações aos Termos',
    termsChangesContent: 'Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas através da plataforma. O uso continuado após alterações constitui aceitação dos novos termos.',
    termsSection1Content: 'Bem-vindo ao AntiFraud. Ao utilizar esta plataforma, você concorda com estes termos e condições.',
    termsSection2Content: 'O AntiFraud fornece ferramentas para verificar mensagens, emails, números de telefone e endereços de criptomoedas.',
    termsSection3Content: 'Os utilizadores são responsáveis por fornecer informações precisas e usar o serviço de forma legítima.',
    termsSection4Content: 'O AntiFraud respeita a sua privacidade e processa dados de forma anónima.',
    termsSection5Content: 'O AntiFraud fornece informações "como está" sem garantias.',
    termsSection6Content: 'Reservamo-nos o direito de modificar estes termos a qualquer momento.',
    
    // Privacy page
    privacyTitle: 'Política de Privacidade',
    privacySubtitle: 'Como protegemos seus dados',
    privacyPageTitle: 'Política de Privacidade',
    privacyPageDescription: 'Como o AntiFraud protege e utiliza seus dados',
    privacyEffectiveDate: 'Última atualização: 9 de fevereiro de 2026',
    privacySection1Title: '1. Introdução e Compromisso',
    privacySection1Paragraphs: [
      'Esta Política de Privacidade descreve como o AntiFraud / by HCoragem coleta, usa, armazena e protege suas informações ao usar nossa plataforma de verificação de fraudes na Internet Computer blockchain.',
      'Estamos comprometidos com a proteção da sua privacidade e transparência total sobre nossas práticas de dados.',
      'Ao utilizar o AntiFraud, você concorda com as práticas descritas nesta política.'
    ],
    privacySection2Title: '2. Informações que Coletamos',
    privacySection2Paragraphs: [
      'Dados de verificação: Mensagens, emails, números de telefone e endereços de criptomoedas que você submete para análise. Estes dados são processados de forma anónima e não são armazenados permanentemente, exceto quando você escolhe reportá-los.',
      'Reportes colaborativos: Informações que você voluntariamente submete à base de dados colaborativa, incluindo tipo de fraude, categoria, país e descrição opcional. Estes dados tornam-se públicos por design.',
      'Dados técnicos: Endereço IP, tipo de navegador, sistema operacional e timestamps de acesso, coletados apenas para segurança, diagnóstico e prevenção de abuso.',
      'Internet Identity: Utilizamos Internet Identity para autenticação descentralizada. Este identificador não está vinculado à sua identidade real e garante privacidade.',
      'Não coletamos nome, email pessoal, número de telefone pessoal ou outros dados pessoais identificáveis, exceto quando você escolhe fornecê-los voluntariamente.'
    ],
    privacySection3Title: '3. Como Usamos suas Informações',
    privacySection3Paragraphs: [
      'Fornecer serviços de verificação: Analisar conteúdo submetido para identificar potenciais fraudes e fornecer pontuações de risco.',
      'Manter a base colaborativa: Armazenar e disponibilizar reportes da comunidade para proteção coletiva.',
      'Melhorar o serviço: Analisar padrões agregados e anônimos para aprimorar algoritmos de detecção.',
      'Prevenir abuso: Monitorar uso da plataforma para identificar e prevenir atividades maliciosas, spam ou reportes falsos.',
      'Cumprir obrigações legais: Quando exigido por lei ou ordem judicial aplicável.',
      'Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais ou publicitários.'
    ],
    privacySection4Title: '4. Armazenamento e Segurança',
    privacySection4Paragraphs: [
      'Dados são armazenados na Internet Computer blockchain, uma plataforma descentralizada com segurança de nível empresarial.',
      'Implementamos criptografia em trânsito (HTTPS) e em repouso para proteger dados sensíveis.',
      'Acesso aos dados é controlado através de Internet Identity, garantindo autenticação segura e descentralizada.',
      'A arquitetura blockchain fornece replicação distribuída para resiliência e disponibilidade.',
      'Estamos preparados para segurança pós-quântica, protegendo dados contra ameaças computacionais futuras.',
      'Dados de verificação temporários são retidos apenas pelo tempo necessário para processar a análise e são descartados após conclusão.',
      'Reportes colaborativos são permanentes por design, pois residem na blockchain pública.'
    ],
    privacySection5Title: '5. Compartilhamento de Dados',
    privacySection5Paragraphs: [
      'Base colaborativa pública: Reportes submetidos são públicos por design e acessíveis a todos os utilizadores para benefício comunitário.',
      'Requisitos legais: Podemos divulgar informações quando obrigados por lei, ordem judicial ou processo legal aplicável.',
      'Provedores de infraestrutura: Internet Computer Protocol (ICP) fornece a infraestrutura blockchain. Consulte a política de privacidade da DFINITY Foundation para detalhes.',
      'Não compartilhamos dados com: Anunciantes, corretores de dados, redes sociais ou outras plataformas de terceiros para fins comerciais.',
      'Não vendemos seus dados em nenhuma circunstância.'
    ],
    privacySection6Title: '6. Seus Direitos e Controles',
    privacySection6Paragraphs: [
      'Acesso: Você pode acessar os reportes que submeteu através da sua conta.',
      'Correção: Pode solicitar correção de informações incorretas nos seus reportes.',
      'Exclusão limitada: Dados de verificação temporários são automaticamente descartados. Reportes na blockchain são permanentes e não podem ser excluídos devido à natureza imutável da tecnologia.',
      'Opt-out: Você pode parar de usar o serviço a qualquer momento.',
      'Portabilidade: Pode exportar seus dados de reporte em formato estruturado.',
      'Explicações: Tem direito a receber explicações sobre decisões automatizadas e pontuações de risco.',
      'Para exercer estes direitos ou fazer perguntas sobre privacidade, contacte-nos através dos canais disponíveis na plataforma.'
    ],
    privacySection7Title: '7. Cookies e Tecnologias de Rastreamento',
    privacySection7Paragraphs: [
      'Utilizamos armazenamento local do navegador (localStorage) para manter preferências de idioma e estado de sessão.',
      'Não utilizamos cookies de rastreamento de terceiros ou tecnologias de publicidade comportamental.',
      'Service Workers são utilizados para funcionalidade PWA (Progressive Web App) e cache offline.',
      'Você pode limpar dados locais a qualquer momento através das configurações do seu navegador.'
    ],
    privacySection8Title: '8. Alterações a Esta Política',
    privacySection8Paragraphs: [
      'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças nas nossas práticas ou requisitos legais.',
      'Alterações significativas serão comunicadas através da plataforma com antecedência razoável.',
      'A data de "Última atualização" no topo desta política indica quando foi revisada pela última vez.',
      'Recomendamos que reveja esta política periodicamente para se manter informado sobre como protegemos seus dados.',
      'O uso continuado do serviço após alterações constitui aceitação da política atualizada.'
    ],
    privacyIntroTitle: '1. Introdução',
    privacyIntroContent: 'Esta Política de Privacidade descreve como o AntiFraud coleta, usa e protege suas informações ao usar nossa plataforma de verificação de fraudes na Internet Computer blockchain.',
    privacyCollectionTitle: '2. Informações Coletadas',
    privacyCollectionContent: 'Coletamos: (a) Dados de verificação: mensagens, emails, telefones e endereços cripto que você verifica (processados anonimamente); (b) Reportes: informações que você submete voluntariamente à base colaborativa; (c) Dados técnicos: endereço IP, tipo de navegador, timestamps (apenas para segurança e diagnóstico); (d) Internet Identity: identificador descentralizado para autenticação (não vinculado a identidade real).',
    privacyUseTitle: '3. Uso das Informações',
    privacyUseContent: 'Usamos suas informações para: (a) Fornecer serviços de verificação de fraudes; (b) Manter e melhorar a base de dados colaborativa; (c) Prevenir abuso e garantir segurança da plataforma; (d) Gerar estatísticas agregadas e anônimas; (e) Cumprir obrigações legais quando aplicável.',
    privacyStorageTitle: '4. Armazenamento e Segurança',
    privacyStorageContent: 'Dados são armazenados na Internet Computer blockchain com: (a) Criptografia em trânsito e em repouso; (b) Acesso controlado através de Internet Identity; (c) Replicação distribuída para resiliência; (d) Preparação para segurança pós-quântica; (e) Retenção apenas pelo tempo necessário para fornecer o serviço.',
    privacySharingTitle: '5. Compartilhamento de Dados',
    privacySharingContent: 'Não vendemos seus dados. Compartilhamento limitado a: (a) Base colaborativa: reportes são públicos por design para benefício comunitário; (b) Requisitos legais: quando obrigados por lei; (c) Provedores de serviço: apenas o necessário para operação da plataforma (Internet Computer Protocol).',
    privacyRightsTitle: '6. Seus Direitos',
    privacyRightsContent: 'Você tem direito a: (a) Acessar seus dados pessoais; (b) Corrigir informações incorretas; (c) Solicitar exclusão de dados (exceto reportes públicos na blockchain); (d) Optar por não usar o serviço a qualquer momento; (e) Receber explicações sobre decisões automatizadas. Contate-nos para exercer estes direitos.',
    privacySection1Content: 'Esta Política de Privacidade descreve como o AntiFraud coleta, usa e protege suas informações.',
    privacySection2Content: 'Coletamos dados de verificação, reportes, dados técnicos e Internet Identity.',
    privacySection3Content: 'Usamos suas informações para fornecer serviços de verificação de fraudes.',
    privacySection4Content: 'Dados são armazenados na Internet Computer blockchain com criptografia.',
    privacySection5Content: 'Não vendemos seus dados. Compartilhamento limitado conforme necessário.',
    privacySection6Content: 'Você tem direito a acessar, corrigir e solicitar exclusão de seus dados.',
    
    // Institutional
    institutionalTitle: 'Institucional',
    institutionalSubtitle: 'Conheça nossa missão e valores',
    institutionalVisionTitle: 'Visão',
    institutionalVisionContent: 'Criar um ecossistema digital onde todos possam verificar a autenticidade de comunicações e transações, protegendo-se contra fraudes através de tecnologia descentralizada e colaboração comunitária.',
    institutionalMissionTitle: 'Missão',
    institutionalMissionContent: 'Fornecer ferramentas gratuitas e acessíveis para verificação de mensagens, emails, números de telefone e endereços de criptomoedas, capacitando utilizadores a identificar e reportar tentativas de fraude.',
    institutionalValuesTitle: 'Valores',
    institutionalValuesContent: 'Transparência, Privacidade, Colaboração Comunitária, Acessibilidade Universal, e Inovação Tecnológica.',
    institutionalQuantumTitle: 'Preparação Quântica',
    institutionalQuantumContent: 'Construído na Internet Computer, o AntiFraud está preparado para a era pós-quântica, garantindo segurança a longo prazo contra ameaças computacionais futuras.',
  },
  en: {
    // App branding
    appTitle: 'AntiFraud',
    appSubtitle: 'by HCoragem',
    
    // Navigation
    navHome: 'Home',
    navInstitutional: 'About',
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
    quickActionSearchDatabaseDesc: 'Query the collaborative database',
    quickActionReportScam: 'Report Fraud',
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
    placeholderMessage: 'Paste the suspicious message here...',
    placeholderEmail: 'example@email.com',
    placeholderPhone: '+1 555 123 4567',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    
    // Buttons
    buttonAnalyze: 'Analyze Message',
    buttonAnalyzing: 'Analyzing...',
    buttonCheck: 'Check',
    buttonChecking: 'Checking...',
    
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
    collaborativeDescription: 'Query community reports and contribute with your experiences',
    collaborativeInstructions: 'Use the tabs above to verify items. Collaborative database results will appear automatically when available.',
    collaborativeResultTitle: 'Collaborative Database Result',
    collaborativeNoData: 'No data in collaborative database',
    collaborativeEmptyState: 'No known records — collaborative database growing.',
    collaborativeReports: '{count} report(s)',
    collaborativeCategory: 'Category: {category}',
    collaborativeCountry: 'Country: {country}',
    collaborativeRiskScore: 'Risk Score',
    collaborativeReportCount: 'Number of Reports',
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
    
    // Auth
    authLogin: 'Login',
    authLogout: 'Logout',
    authProfile: 'Profile',
    authHistory: 'History',
    authClearHistory: 'Clear History',
    authNoHistory: 'No verification history',
    login: 'Login',
    loggingIn: 'Logging in...',
    logout: 'Logout',
    profile: 'Profile',
    loggedInAs: 'Authenticated as',
    history: 'History',
    clearHistory: 'Clear History',
    noHistory: 'No history',
    
    // PWA Install
    installTitle: 'Install AntiFraud',
    installButton: 'Install App',
    installApp: 'Install',
    installPrimaryButton: 'Download AntiFraud App for free',
    installAppTitle: 'Install AntiFraud',
    installAppNote: 'Install for quick access',
    installInstructionsTitle: 'How to Install',
    installInstructionsIos: 'In Safari, tap the share icon and select "Add to Home Screen".',
    installInstructionsAndroid: 'In Chrome, tap the menu (⋮) and select "Install app" or "Add to home screen".',
    installInstructionsDesktop: 'In your browser, look for the install icon in the address bar or menu.',
    installInstructionsDefault: 'Use your browser menu to install this application.',
    
    // Mission page
    missionTitle: 'Our Mission',
    missionSubtitle: 'Protecting the digital community',
    missionPageTitle: 'Mission',
    missionPageDescription: 'Learn about AntiFraud\'s mission, vision and values',
    missionPageHeading: 'Our Mission',
    missionPageSubheading: 'Protecting the digital community through collaborative technology',
    missionVisionTitle: 'Global Vision',
    missionVisionParagraphs: [
      'Create a digital ecosystem where everyone can verify the authenticity of communications and transactions, protecting themselves against fraud through decentralized technology and community collaboration.',
      'We aspire to a future where fraud verification is universally accessible, regardless of technical knowledge or financial resources, empowering each individual to make informed and secure decisions in the digital environment.'
    ],
    missionCoreTitle: 'Core Mission',
    missionCoreParagraphs: [
      'Democratize protection against digital fraud through decentralized blockchain technology, allowing anyone to verify the legitimacy of communications and transactions before trusting.',
      'Provide free and accessible tools for verifying messages, emails, phone numbers and cryptocurrency addresses, empowering users to identify and report fraud attempts collaboratively.'
    ],
    missionImpactTitle: 'Social Impact',
    missionImpactParagraphs: [
      'AntiFraud aims to reduce the devastating impact of digital fraud, which affects millions of people globally, causing significant financial and emotional losses.',
      'Through community collaboration, we build a collective knowledge base that protects not only individuals but entire communities, creating a network effect that strengthens digital security for everyone.',
      'We prioritize the protection of vulnerable populations, including the elderly and people with lower digital literacy, offering intuitive interfaces and clear guidance.'
    ],
    missionValuesTitle: 'Core Values',
    missionValuesParagraphs: [
      'Privacy by design: We process data anonymously and respect each user\'s privacy.',
      'Total transparency: We operate with open source code and clear processes, without hidden algorithms.',
      'Community collaboration: The strength of our platform comes from active community participation.',
      'Universal accessibility: Free tools and intuitive interfaces for everyone.',
      'Post-quantum security: Prepared for future threats through Internet Computer blockchain.'
    ],
    missionLimitationsTitle: 'System Limitations',
    missionLimitationsParagraphs: [
      'AntiFraud is a decision support tool, not an absolute guarantee. The collaborative database is continuously growing and may not contain all existing fraud cases.',
      'Results should be interpreted as risk indicators, not absolute truths. False positives and negatives may occur.',
      'The system\'s effectiveness depends on active community participation. The more users report fraud, the more robust collective protection becomes.',
      'We do not replace personal judgment, additional investigation or professional advice in complex situations.'
    ],
    missionResponsibleUseTitle: 'Responsible Use',
    missionResponsibleUseParagraphs: [
      'Use AntiFraud as an additional layer of protection, not as the sole source of decision.',
      'Report only real and verified fraud. False reports harm the community and may have legal consequences.',
      'Respect the privacy of third parties. Do not use the platform for harassment, defamation or other illegitimate purposes.',
      'Stay informed about new fraud techniques and share knowledge with the community constructively.'
    ],
    missionCoreContent: 'Democratize protection against digital fraud through decentralized blockchain technology.',
    missionContent: 'Democratize protection against digital fraud through decentralized blockchain technology.',
    missionPoint1: 'Free and accessible verification for everyone',
    missionPoint2: 'Collaborative database maintained by the community',
    missionPoint3: 'Privacy and security first',
    missionPoint4: 'Preparation for future threats',
    missionVisionContent: 'Create a safer digital world where everyone has access to fraud verification tools.',
    missionValuesContent: 'Privacy by design, total transparency, community collaboration, universal accessibility, and commitment to post-quantum security.',
    visionTitle: 'Vision',
    visionContent: 'Create a safer digital world where everyone has access to fraud verification tools, regardless of technical knowledge or financial resources.',
    valuesTitle: 'Values',
    valueProtectionTitle: 'Protection',
    valueProtection: 'Security and privacy first',
    valueTransparencyTitle: 'Transparency',
    valueTransparency: 'Open source code and clear processes',
    valueAccessibilityTitle: 'Accessibility',
    valueAccessibility: 'Free tools for everyone',
    valueEducationTitle: 'Education',
    valueEducation: 'Empower users with knowledge',
    valueInnovationTitle: 'Innovation',
    valueInnovation: 'Cutting-edge technology for protection',
    valueFutureSecureTitle: 'Future Security',
    valueFutureSecure: 'Prepared for quantum threats',
    
    // How It Works page
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Understand how AntiFraud protects you',
    howItWorksPageTitle: 'How It Works',
    howItWorksPageDescription: 'Understand how email, phone, message and wallet verification works',
    howItWorksPageHeading: 'How It Works',
    howItWorksPageSubheading: 'Collaborative verification system for fraud protection',
    howItWorksOverviewTitle: 'Overview',
    howItWorksOverviewParagraphs: [
      'AntiFraud combines automated analysis with a community-maintained collaborative database to provide comprehensive security checks.',
      'Each verification queries multiple data sources and applies pattern detection algorithms to identify potential threats.',
      'The system is designed to be fast, accurate and easy to use, providing clear and actionable results in seconds.'
    ],
    howItWorksVerificationTitle: 'Verification Types',
    howItWorksEmailTitle: 'Email Verification',
    howItWorksEmailParagraphs: [
      'Analyzes email addresses against the collaborative database of reported fraud.',
      'Checks suspicious patterns in address format, domains known for phishing and community report history.',
      'Provides a risk score based on number of reports, associated fraud categories and pattern analysis.'
    ],
    howItWorksPhoneTitle: 'Phone Verification',
    howItWorksPhoneParagraphs: [
      'Queries phone numbers in the collaborative database to identify fraudulent calls and messages.',
      'Detects spam patterns, phone scams, SMS phishing and other threats reported by the community.',
      'Presents report statistics, including frequency, fraud categories and countries of origin when available.'
    ],
    howItWorksMessageTitle: 'Message Analysis',
    howItWorksMessageParagraphs: [
      'Analyzes the content of text messages, emails or suspicious communications using pattern detection algorithms.',
      'Identifies fraud indicators such as artificial urgency, requests for sensitive information, suspicious links and social engineering techniques.',
      'Provides a detailed analysis in Portuguese explaining identified risks and action recommendations.',
      'Analysis is performed locally and on the backend, ensuring privacy while leveraging collective intelligence.'
    ],
    howItWorksCryptoTitle: 'Crypto Wallet Verification',
    howItWorksCryptoParagraphs: [
      'Verifies cryptocurrency addresses against reports of fraud, Ponzi schemes, ransomware wallets and other threats.',
      'Queries the collaborative database to identify addresses associated with fraudulent activities reported by the community.',
      'Essential before making transactions, especially in investment, donation or peer-to-peer trading contexts.'
    ],
    howItWorksScoringTitle: 'Scoring System',
    howItWorksScoringParagraphs: [
      'Each verification generates a risk score from 0 to 100, where higher values indicate greater likelihood of fraud.',
      'The score is calculated based on multiple factors: number of reports, fraud categories, detected patterns and contextual analysis.',
      'Scores are accompanied by clear explanations and action recommendations, helping users make informed decisions.',
      'The system continuously learns from new reports, improving accuracy over time.'
    ],
    howItWorksLimitationsTitle: 'Important Limitations',
    howItWorksLimitationsParagraphs: [
      'The collaborative database is continuously growing. Absence of reports does not guarantee absolute security.',
      'New fraud schemes may not yet be in the database. Always maintain caution and critical thinking.',
      'False positives may occur. Use results as indicators, not absolute truths.',
      'The system\'s effectiveness depends on active community participation. Report fraud to strengthen collective protection.'
    ],
    howItWorksResponsibleUseTitle: 'Responsible Use',
    howItWorksResponsibleUseParagraphs: [
      'Use AntiFraud as an additional layer of protection, complementing your own judgment and other security measures.',
      'Do not make important financial or legal decisions based solely on system results.',
      'Report only real and verified fraud. False reports harm the community and may have legal consequences.',
      'Respect the privacy of third parties. Do not use the platform for harassment, defamation or other illegitimate purposes.',
      'When in doubt, seek professional advice or contact competent authorities.'
    ],
    howItWorksDetailTitle: 'System Details',
    howItWorksDetailSubtitle: 'How each component works',
    featureVerificationTitle: 'Smart Verification',
    featureVerificationDesc: 'Automatic analysis of messages, emails, phones and cryptocurrencies',
    featureDatabaseTitle: 'Collaborative Database',
    featureDatabaseDesc: 'Data shared by the community for collective protection',
    featureReportsTitle: 'Reporting System',
    featureReportsDesc: 'Report fraud and help other users',
    featureScoringTitle: 'Risk Scoring',
    featureScoringDesc: 'Assessment based on multiple indicators',
    howCheckTitle: 'Verification',
    howCheckDesc: 'Paste or type suspicious content for immediate analysis',
    howDatabaseTitle: 'Query',
    howDatabaseDesc: 'Search the collaborative database',
    howReportTitle: 'Report',
    howReportDesc: 'Contribute by reporting identified fraud',
    howScoringTitle: 'Scoring',
    howScoringDesc: 'Receive a detailed risk assessment',
    howAiTitle: 'Smart Analysis',
    howAiDesc: 'Algorithms detect fraud patterns',
    howFutureTitle: 'Future Security',
    howFutureDesc: 'Prepared for quantum threats',
    
    // Terms page
    termsTitle: 'Terms and Conditions',
    termsSubtitle: 'Read our terms of use',
    termsPageTitle: 'Terms and Conditions',
    termsPageDescription: 'AntiFraud terms of use',
    termsEffectiveDate: 'Last updated: February 9, 2026',
    termsSection1Title: '1. Acceptance of Terms',
    termsSection1Paragraphs: [
      'Welcome to AntiFraud / by HCoragem. By accessing and using this platform, you agree to comply with and be bound by these Terms and Conditions.',
      'If you do not agree with any part of these terms, do not use the service. Continued use of the platform constitutes acceptance of any changes to the terms.'
    ],
    termsSection2Title: '2. Service Description',
    termsSection2Paragraphs: [
      'AntiFraud is a digital fraud verification and prevention platform operating on the Internet Computer blockchain.',
      'We provide tools to verify messages, emails, phone numbers and cryptocurrency addresses against known fraud databases.',
      'The service includes automated content analysis and a collaborative database maintained by the user community.',
      'All services are provided "as is" without warranties of any kind, express or implied.'
    ],
    termsSection3Title: '3. User Responsibilities',
    termsSection3Paragraphs: [
      'You are responsible for: (a) providing accurate and truthful information when reporting fraud; (b) not abusing the system with false or malicious reports; (c) using the service only for legitimate fraud protection purposes; (d) maintaining the confidentiality of your access credentials.',
      'You agree not to use the service for: (a) harassment, defamation or privacy violation of third parties; (b) illegal or unauthorized activities; (c) attempts to compromise the security or integrity of the platform.',
      'False or malicious reports may result in suspension or termination of your account and may have legal consequences.'
    ],
    termsSection4Title: '4. Privacy and Data Protection',
    termsSection4Paragraphs: [
      'AntiFraud respects your privacy. Verification data is processed anonymously whenever possible.',
      'Reports submitted to the collaborative database are stored on the blockchain and become public by design, for the benefit of the community.',
      'We do not collect personally identifiable data without explicit consent. We use Internet Identity for decentralized authentication.',
      'For more information on how we handle your data, see our Privacy Policy.'
    ],
    termsSection5Title: '5. Limitation of Liability',
    termsSection5Paragraphs: [
      'AntiFraud provides information and decision support tools, not absolute security guarantees.',
      'We are not responsible for: (a) decisions made based on the verifications provided; (b) false positives or negatives in analyses; (c) financial losses, damages or harm resulting from use or inability to use the service.',
      'Users should always exercise their own critical judgment and, when appropriate, seek additional professional advice.',
      'The service\'s effectiveness depends on community participation. We do not guarantee that the database contains all existing fraud cases.'
    ],
    termsSection6Title: '6. Intellectual Property',
    termsSection6Paragraphs: [
      'AntiFraud and all its content, features and functionality are owned by HCoragem and are protected by copyright and intellectual property laws.',
      'You receive a limited, non-exclusive and revocable license to use the service for personal and non-commercial purposes.',
      'Copying, modifying, distributing or creating derivative works is not permitted without express authorization.'
    ],
    termsSection7Title: '7. Changes to Terms',
    termsSection7Paragraphs: [
      'We reserve the right to modify these terms at any time. Significant changes will be communicated through the platform.',
      'Continued use of the service after changes constitutes acceptance of the new terms.',
      'We recommend that you periodically review these terms to stay informed of any updates.'
    ],
    termsSection8Title: '8. Applicable Law and Jurisdiction',
    termsSection8Paragraphs: [
      'These terms are governed by applicable laws, without prejudice to conflicts of legal provisions.',
      'Any dispute related to these terms or use of the service will be resolved through arbitration or in competent courts.',
      'If any provision of these terms is deemed invalid, the remaining provisions will remain in full force and effect.'
    ],
    termsIntroTitle: '1. Introduction',
    termsIntroContent: 'Welcome to AntiFraud. By using this platform, you agree to these terms and conditions. AntiFraud is a fraud verification tool operating on the Internet Computer blockchain.',
    termsServiceTitle: '2. Service Description',
    termsServiceContent: 'AntiFraud provides tools to verify messages, emails, phone numbers and cryptocurrency addresses against known fraud databases. The service includes automated analysis and a community-maintained collaborative database.',
    termsUserTitle: '3. User Responsibilities',
    termsUserContent: 'Users are responsible for: (a) providing accurate information when reporting fraud; (b) not abusing the system with false reports; (c) using the service only for legitimate fraud protection purposes; (d) maintaining the confidentiality of their access credentials.',
    termsPrivacyTitle: '4. Privacy and Data',
    termsPrivacyContent: 'AntiFraud respects your privacy. Verification data is processed anonymously. Reports submitted to the collaborative database are stored on the blockchain and become public. We do not collect personally identifiable data without explicit consent.',
    termsLiabilityTitle: '5. Limitation of Liability',
    termsLiabilityContent: 'AntiFraud provides information "as is" without warranties. We are not responsible for: (a) decisions made based on our verifications; (b) false positives or negatives; (c) financial losses resulting from use of the service. Users should always exercise their own judgment.',
    termsChangesTitle: '6. Changes to Terms',
    termsChangesContent: 'We reserve the right to modify these terms at any time. Significant changes will be communicated through the platform. Continued use after changes constitutes acceptance of the new terms.',
    termsSection1Content: 'Welcome to AntiFraud. By using this platform, you agree to these terms and conditions.',
    termsSection2Content: 'AntiFraud provides tools to verify messages, emails, phone numbers and cryptocurrency addresses.',
    termsSection3Content: 'Users are responsible for providing accurate information and using the service legitimately.',
    termsSection4Content: 'AntiFraud respects your privacy and processes data anonymously.',
    termsSection5Content: 'AntiFraud provides information "as is" without warranties.',
    termsSection6Content: 'We reserve the right to modify these terms at any time.',
    
    // Privacy page
    privacyTitle: 'Privacy Policy',
    privacySubtitle: 'How we protect your data',
    privacyPageTitle: 'Privacy Policy',
    privacyPageDescription: 'How AntiFraud protects and uses your data',
    privacyEffectiveDate: 'Last updated: February 9, 2026',
    privacySection1Title: '1. Introduction and Commitment',
    privacySection1Paragraphs: [
      'This Privacy Policy describes how AntiFraud / by HCoragem collects, uses, stores and protects your information when using our fraud verification platform on the Internet Computer blockchain.',
      'We are committed to protecting your privacy and total transparency about our data practices.',
      'By using AntiFraud, you agree to the practices described in this policy.'
    ],
    privacySection2Title: '2. Information We Collect',
    privacySection2Paragraphs: [
      'Verification data: Messages, emails, phone numbers and cryptocurrency addresses you submit for analysis. This data is processed anonymously and not permanently stored, except when you choose to report it.',
      'Collaborative reports: Information you voluntarily submit to the collaborative database, including fraud type, category, country and optional description. This data becomes public by design.',
      'Technical data: IP address, browser type, operating system and access timestamps, collected only for security, diagnostics and abuse prevention.',
      'Internet Identity: We use Internet Identity for decentralized authentication. This identifier is not linked to your real identity and ensures privacy.',
      'We do not collect name, personal email, personal phone number or other personally identifiable data, except when you choose to provide it voluntarily.'
    ],
    privacySection3Title: '3. How We Use Your Information',
    privacySection3Paragraphs: [
      'Provide verification services: Analyze submitted content to identify potential fraud and provide risk scores.',
      'Maintain the collaborative database: Store and make community reports available for collective protection.',
      'Improve the service: Analyze aggregated and anonymous patterns to enhance detection algorithms.',
      'Prevent abuse: Monitor platform use to identify and prevent malicious activities, spam or false reports.',
      'Comply with legal obligations: When required by applicable law or court order.',
      'We do not sell, rent or share your data with third parties for commercial or advertising purposes.'
    ],
    privacySection4Title: '4. Storage and Security',
    privacySection4Paragraphs: [
      'Data is stored on the Internet Computer blockchain, a decentralized platform with enterprise-level security.',
      'We implement encryption in transit (HTTPS) and at rest to protect sensitive data.',
      'Data access is controlled through Internet Identity, ensuring secure and decentralized authentication.',
      'Blockchain architecture provides distributed replication for resilience and availability.',
      'We are prepared for post-quantum security, protecting data against future computational threats.',
      'Temporary verification data is retained only as long as necessary to process the analysis and is discarded after completion.',
      'Collaborative reports are permanent by design, as they reside on the public blockchain.'
    ],
    privacySection5Title: '5. Data Sharing',
    privacySection5Paragraphs: [
      'Public collaborative database: Submitted reports are public by design and accessible to all users for community benefit.',
      'Legal requirements: We may disclose information when required by applicable law, court order or legal process.',
      'Infrastructure providers: Internet Computer Protocol (ICP) provides the blockchain infrastructure. See DFINITY Foundation\'s privacy policy for details.',
      'We do not share data with: Advertisers, data brokers, social networks or other third-party platforms for commercial purposes.',
      'We do not sell your data under any circumstances.'
    ],
    privacySection6Title: '6. Your Rights and Controls',
    privacySection6Paragraphs: [
      'Access: You can access the reports you submitted through your account.',
      'Correction: You can request correction of incorrect information in your reports.',
      'Limited deletion: Temporary verification data is automatically discarded. Blockchain reports are permanent and cannot be deleted due to the immutable nature of the technology.',
      'Opt-out: You can stop using the service at any time.',
      'Portability: You can export your report data in structured format.',
      'Explanations: You have the right to receive explanations about automated decisions and risk scores.',
      'To exercise these rights or ask privacy questions, contact us through the channels available on the platform.'
    ],
    privacySection7Title: '7. Cookies and Tracking Technologies',
    privacySection7Paragraphs: [
      'We use browser local storage (localStorage) to maintain language preferences and session state.',
      'We do not use third-party tracking cookies or behavioral advertising technologies.',
      'Service Workers are used for PWA (Progressive Web App) functionality and offline caching.',
      'You can clear local data at any time through your browser settings.'
    ],
    privacySection8Title: '8. Changes to This Policy',
    privacySection8Paragraphs: [
      'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.',
      'Significant changes will be communicated through the platform with reasonable advance notice.',
      'The "Last updated" date at the top of this policy indicates when it was last revised.',
      'We recommend that you periodically review this policy to stay informed about how we protect your data.',
      'Continued use of the service after changes constitutes acceptance of the updated policy.'
    ],
    privacyIntroTitle: '1. Introduction',
    privacyIntroContent: 'This Privacy Policy describes how AntiFraud collects, uses and protects your information when using our fraud verification platform on the Internet Computer blockchain.',
    privacyCollectionTitle: '2. Information Collected',
    privacyCollectionContent: 'We collect: (a) Verification data: messages, emails, phones and crypto addresses you verify (processed anonymously); (b) Reports: information you voluntarily submit to the collaborative database; (c) Technical data: IP address, browser type, timestamps (for security and diagnostics only); (d) Internet Identity: decentralized identifier for authentication (not linked to real identity).',
    privacyUseTitle: '3. Use of Information',
    privacyUseContent: 'We use your information to: (a) Provide fraud verification services; (b) Maintain and improve the collaborative database; (c) Prevent abuse and ensure platform security; (d) Generate aggregated and anonymous statistics; (e) Comply with legal obligations when applicable.',
    privacyStorageTitle: '4. Storage and Security',
    privacyStorageContent: 'Data is stored on the Internet Computer blockchain with: (a) Encryption in transit and at rest; (b) Access controlled through Internet Identity; (c) Distributed replication for resilience; (d) Post-quantum security preparation; (e) Retention only as long as necessary to provide the service.',
    privacySharingTitle: '5. Data Sharing',
    privacySharingContent: 'We do not sell your data. Limited sharing to: (a) Collaborative database: reports are public by design for community benefit; (b) Legal requirements: when required by law; (c) Service providers: only what is necessary for platform operation (Internet Computer Protocol).',
    privacyRightsTitle: '6. Your Rights',
    privacyRightsContent: 'You have the right to: (a) Access your personal data; (b) Correct incorrect information; (c) Request deletion of data (except public blockchain reports); (d) Opt out of using the service at any time; (e) Receive explanations about automated decisions. Contact us to exercise these rights.',
    privacySection1Content: 'This Privacy Policy describes how AntiFraud collects, uses and protects your information.',
    privacySection2Content: 'We collect verification data, reports, technical data and Internet Identity.',
    privacySection3Content: 'We use your information to provide fraud verification services.',
    privacySection4Content: 'Data is stored on the Internet Computer blockchain with encryption.',
    privacySection5Content: 'We do not sell your data. Limited sharing as necessary.',
    privacySection6Content: 'You have the right to access, correct and request deletion of your data.',
    
    // Institutional
    institutionalTitle: 'About',
    institutionalSubtitle: 'Learn about our mission and values',
    institutionalVisionTitle: 'Vision',
    institutionalVisionContent: 'Create a digital ecosystem where everyone can verify the authenticity of communications and transactions, protecting themselves against fraud through decentralized technology and community collaboration.',
    institutionalMissionTitle: 'Mission',
    institutionalMissionContent: 'Provide free and accessible tools for verifying messages, emails, phone numbers and cryptocurrency addresses, empowering users to identify and report fraud attempts.',
    institutionalValuesTitle: 'Values',
    institutionalValuesContent: 'Transparency, Privacy, Community Collaboration, Universal Accessibility, and Technological Innovation.',
    institutionalQuantumTitle: 'Quantum Preparation',
    institutionalQuantumContent: 'Built on the Internet Computer, AntiFraud is prepared for the post-quantum era, ensuring long-term security against future computational threats.',
  },
  // Stub entries for other languages
  es: {} as any,
  fr: {} as any,
  zh: {} as any,
  ar: {} as any,
  ru: {} as any,
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.pt;
export type Translations = typeof translations.pt;
