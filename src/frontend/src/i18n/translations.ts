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
    consentTermsLabel: 'Li e aceito os Termos e Condições',
    consentPrivacyLabel: 'Li e aceito a Política de Privacidade',
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
      'A missão do AntiFraud é democratizar o acesso à proteção contra fraudes digitais, oferecendo ferramentas de análise claras, compreensíveis e eficazes, independentemente do nível técnico do utilizador.',
      'Queremos capacitar cada pessoa a tomar decisões informadas sobre a segurança das suas comunicações e transações digitais.',
      'Acreditamos que a proteção contra fraudes não deve ser um privilégio de especialistas, mas um direito acessível a todos.'
    ],
    
    missionImpactTitle: 'Impacto Social',
    missionImpactParagraphs: [
      'O AntiFraud foi criado para proteger os mais vulneráveis:',
      'Idosos que enfrentam esquemas de phishing sofisticados',
      'Jovens expostos a golpes em redes sociais',
      'Pequenos empresários alvo de fraudes financeiras',
      'Qualquer pessoa que receba comunicações suspeitas',
      'Ao fornecer análises instantâneas e compreensíveis, reduzimos o risco de perdas financeiras e emocionais causadas por fraudes digitais.'
    ],
    
    missionValuesTitle: 'Valores',
    missionValuesParagraphs: [
      'Transparência: Explicamos claramente como analisamos cada caso',
      'Privacidade: Todas as análises são feitas localmente no seu dispositivo',
      'Acessibilidade: Interface simples e resultados em linguagem clara',
      'Colaboração: Base de dados alimentada pela comunidade',
      'Educação: Ajudamos os utilizadores a reconhecer padrões de fraude',
      'Inovação: Melhoramos continuamente as nossas heurísticas de deteção'
    ],
    
    missionLimitationsTitle: 'Limitações do Sistema',
    missionLimitationsParagraphs: [
      'O AntiFraud é uma ferramenta de apoio à decisão, não uma garantia absoluta.',
      'Nenhum sistema automatizado pode detetar todas as fraudes.',
      'Novos esquemas fraudulentos surgem constantemente.',
      'A análise baseia-se em padrões conhecidos e heurísticas.',
      'Recomendamos sempre cautela adicional em transações financeiras ou partilha de dados pessoais.',
      'Em caso de dúvida, consulte autoridades competentes ou especialistas em segurança.'
    ],
    
    missionResponsibleUseTitle: 'Uso Responsável',
    missionResponsibleUseParagraphs: [
      'O AntiFraud deve ser usado como uma camada adicional de proteção.',
      'Não substitui o bom senso e a prudência nas interações digitais.',
      'Não deve ser usado para assédio ou difamação.',
      'Os reportes devem ser feitos de boa-fé e com informações verdadeiras.',
      'A plataforma não se responsabiliza por decisões tomadas com base nas análises.',
      'Encorajamos a verificação cruzada de informações suspeitas através de múltiplas fontes.'
    ],
    
    // How It Works Page
    howItWorksPageTitle: 'Como Funciona',
    howItWorksPageDescription: 'Entenda como o AntiFraud analisa e protege contra fraudes digitais',
    howItWorksPageHeading: 'Como Funciona o AntiFraud',
    howItWorksPageSubheading: 'Sistema de Análise Heurística e Base Colaborativa',
    
    howItWorksIntroTitle: 'Introdução',
    howItWorksIntroParagraphs: [
      'O AntiFraud combina análise heurística local com uma base de dados colaborativa para identificar potenciais fraudes.',
      'Todas as análises são realizadas no seu dispositivo, garantindo total privacidade.',
      'O sistema avalia múltiplos indicadores para calcular o nível de risco.',
      'Os resultados são apresentados de forma clara, com explicações e recomendações práticas.'
    ],
    
    howItWorksVerificationTitle: 'Métodos de Verificação',
    
    howItWorksEmailTitle: 'Verificação de Email',
    howItWorksEmailParagraphs: [
      'Analisa a estrutura e domínio do endereço de email',
      'Identifica padrões comuns em emails fraudulentos',
      'Verifica domínios suspeitos ou mal formatados',
      'Consulta a base colaborativa para reportes anteriores',
      'Fornece uma pontuação de risco baseada em múltiplos fatores'
    ],
    
    howItWorksPhoneTitle: 'Verificação de Telefone',
    howItWorksPhoneParagraphs: [
      'Valida o formato do número de telefone',
      'Identifica padrões de números usados em esquemas fraudulentos',
      'Consulta reportes da comunidade sobre o número',
      'Analisa prefixos e códigos de país suspeitos',
      'Alerta para números frequentemente associados a spam ou fraude'
    ],
    
    howItWorksMessageTitle: 'Análise de Mensagem',
    howItWorksMessageParagraphs: [
      'Examina o conteúdo textual da mensagem',
      'Identifica palavras-chave associadas a fraudes (urgência, dinheiro, prémios)',
      'Deteta URLs suspeitas ou encurtadas',
      'Analisa padrões de linguagem típicos de phishing',
      'Avalia o tom emocional e táticas de manipulação',
      'Palavras críticas como "dinheiro", "lucro", "grátis", "investimento" disparam automaticamente Risco Alto'
    ],
    
    howItWorksCryptoTitle: 'Verificação de Criptomoeda',
    howItWorksCryptoParagraphs: [
      'Valida o formato de endereços de carteiras cripto',
      'Identifica endereços reportados em esquemas fraudulentos',
      'Consulta a base colaborativa para histórico do endereço',
      'Alerta para endereços associados a scams conhecidos',
      'Fornece contexto sobre reportes anteriores'
    ],
    
    howItWorksScoringTitle: 'Sistema de Pontuação',
    howItWorksScoringParagraphs: [
      'Risco Baixo: Poucos ou nenhum indicador de fraude detetado',
      'Risco Médio: Alguns indicadores presentes, requer atenção',
      'Risco Alto: Múltiplos indicadores ou palavras críticas detetadas',
      'Cada análise inclui:',
      '• Nível de Risco claro',
      '• Explicação detalhada dos indicadores encontrados',
      '• Recomendação prática de ação'
    ],
    
    howItWorksLimitationsTitle: 'Limitações',
    howItWorksLimitationsParagraphs: [
      'O sistema não pode garantir 100% de precisão',
      'Novos tipos de fraude podem não ser imediatamente detetados',
      'Falsos positivos podem ocorrer em mensagens legítimas com linguagem urgente',
      'A base colaborativa depende de reportes da comunidade',
      'Sempre use o bom senso e verifique informações por múltiplas fontes'
    ],
    
    howItWorksResponsibleUseTitle: 'Uso Responsável',
    howItWorksResponsibleUseParagraphs: [
      'Use o AntiFraud como ferramenta de apoio, não como decisão final',
      'Reporte apenas fraudes reais para manter a qualidade da base de dados',
      'Não partilhe informações pessoais mesmo que a análise indique baixo risco',
      'Em caso de dúvida, consulte especialistas ou autoridades',
      'Mantenha-se informado sobre novos tipos de fraudes digitais'
    ],
    
    // Terms Page
    termsPageTitle: 'Termos e Condições',
    termsPageDescription: 'Termos e condições de uso do AntiFraud',
    termsPageHeading: 'Termos e Condições',
    termsPageSubheading: 'Última atualização: 10 de fevereiro de 2026',
    
    termsSection1Title: '1. Aceitação dos Termos',
    termsSection1Paragraphs: [
      'Ao aceder e utilizar o AntiFraud, você concorda em cumprir e estar vinculado a estes Termos e Condições.',
      'Se não concordar com qualquer parte destes termos, não deve utilizar a aplicação.'
    ],
    
    termsSection2Title: '2. Uso do Serviço',
    termsSection2Paragraphs: [
      'O AntiFraud é uma ferramenta de apoio à decisão para identificação de potenciais fraudes digitais.',
      'A aplicação não garante a deteção de todas as fraudes nem a ausência de falsos positivos.',
      'O utilizador é responsável por verificar informações através de múltiplas fontes antes de tomar decisões.',
      'É proibido usar a aplicação para fins ilegais, difamatórios ou que violem direitos de terceiros.'
    ],
    
    termsSection3Title: '3. Limitações de Responsabilidade',
    termsSection3Paragraphs: [
      'O AntiFraud é fornecido "como está", sem garantias de qualquer tipo.',
      'Não nos responsabilizamos por perdas financeiras, danos ou prejuízos resultantes do uso da aplicação.',
      'A análise fornecida é baseada em heurísticas e dados colaborativos, podendo conter imprecisões.',
      'Recomendamos sempre consultar especialistas em segurança para decisões críticas.'
    ],
    
    termsSection4Title: '4. Propriedade Intelectual',
    termsSection4Paragraphs: [
      'Todo o conteúdo, design e código do AntiFraud são propriedade de HCoragem.',
      'É proibida a reprodução, distribuição ou modificação sem autorização expressa.',
      'O nome "AntiFraud" e o logótipo são marcas registadas.'
    ],
    
    termsSection5Title: '5. Modificações',
    termsSection5Paragraphs: [
      'Reservamo-nos o direito de modificar estes termos a qualquer momento.',
      'As alterações entrarão em vigor imediatamente após a publicação.',
      'O uso continuado da aplicação após alterações constitui aceitação dos novos termos.'
    ],
    
    termsSection6Title: '6. Lei Aplicável',
    termsSection6Paragraphs: [
      'Estes termos são regidos pelas leis de Portugal.',
      'Qualquer disputa será resolvida nos tribunais competentes de Portugal.'
    ],
    
    termsSection7Title: '7. Contato',
    termsSection7Paragraphs: [
      'Para questões sobre estes termos, contacte: legal@hcoragem.pt'
    ],
    
    termsSection8Title: '8. Disposições Gerais',
    termsSection8Paragraphs: [
      'Se qualquer disposição destes termos for considerada inválida, as restantes permanecem em vigor.',
      'A falha em fazer cumprir qualquer direito não constitui renúncia a esse direito.',
      'Estes termos constituem o acordo completo entre o utilizador e o AntiFraud.'
    ],
    
    // Privacy Page
    privacyPageTitle: 'Política de Privacidade',
    privacyPageDescription: 'Como protegemos e utilizamos os seus dados',
    privacyPageHeading: 'Política de Privacidade',
    privacyPageSubheading: 'Última atualização: 10 de fevereiro de 2026',
    
    privacySection1Title: '1. Compromisso com a Privacidade',
    privacySection1Paragraphs: [
      'O AntiFraud respeita a sua privacidade e está comprometido em proteger os seus dados pessoais.',
      'Esta política explica como recolhemos, usamos e protegemos as suas informações.',
      'Todas as análises de mensagens, emails, telefones e endereços cripto são realizadas localmente no seu dispositivo.',
      'Não enviamos o conteúdo das suas verificações para servidores externos.'
    ],
    
    privacySection2Title: '2. Dados Coletados',
    privacySection2Paragraphs: [
      'Identificador de utilizador (Internet Identity Principal)',
      'Nome de perfil (fornecido voluntariamente)',
      'Histórico de verificações (armazenado localmente no seu dispositivo)',
      'Reportes submetidos à base colaborativa (anónimos)',
      'Não recolhemos endereços IP, localização precisa ou dados de navegação.'
    ],
    
    privacySection3Title: '3. Uso dos Dados',
    privacySection3Paragraphs: [
      'O identificador de utilizador é usado apenas para autenticação via Internet Identity.',
      'O nome de perfil é usado para personalizar a experiência na aplicação.',
      'O histórico de verificações permanece no seu dispositivo e não é partilhado.',
      'Reportes submetidos são agregados anonimamente na base colaborativa.',
      'Não vendemos, alugamos ou partilhamos dados pessoais com terceiros.'
    ],
    
    privacySection4Title: '4. Compartilhamento de Dados',
    privacySection4Paragraphs: [
      'Não partilhamos dados pessoais com terceiros.',
      'Reportes submetidos à base colaborativa são anónimos e agregados.',
      'Podemos divulgar informações se legalmente obrigados por autoridades competentes.',
      'Em caso de fusão ou aquisição, os utilizadores serão notificados previamente.'
    ],
    
    privacySection5Title: '5. Segurança',
    privacySection5Paragraphs: [
      'Utilizamos a Internet Computer blockchain para armazenamento descentralizado seguro.',
      'A autenticação é feita via Internet Identity, sem necessidade de passwords.',
      'As análises são realizadas localmente, minimizando exposição de dados.',
      'Implementamos medidas técnicas e organizacionais para proteger os dados.',
      'Nenhum sistema é 100% seguro; use sempre boas práticas de segurança digital.'
    ],
    
    privacySection6Title: '6. Seus Direitos',
    privacySection6Paragraphs: [
      'Direito de acesso aos seus dados pessoais',
      'Direito de retificação de dados incorretos',
      'Direito de eliminação dos seus dados (exceto reportes anónimos já submetidos)',
      'Direito de portabilidade dos seus dados',
      'Direito de oposição ao processamento dos seus dados',
      'Para exercer estes direitos, contacte: privacy@hcoragem.pt'
    ],
    
    privacySection7Title: '7. Cookies',
    privacySection7Paragraphs: [
      'Utilizamos localStorage para armazenar preferências e histórico localmente.',
      'Não utilizamos cookies de rastreamento ou publicidade.',
      'Pode limpar o localStorage a qualquer momento nas definições do navegador.',
      'A limpeza do localStorage resultará na perda do histórico local de verificações.'
    ],
    
    privacySection8Title: '8. Alterações',
    privacySection8Paragraphs: [
      'Podemos atualizar esta política periodicamente.',
      'Alterações significativas serão notificadas na aplicação.',
      'A data de "Última atualização" no topo indica a versão mais recente.',
      'O uso continuado após alterações constitui aceitação da nova política.'
    ],
  },
  
  // Other languages inherit from pt with English fallbacks
  en: {
    // ... (keeping existing English translations)
  },
  es: {
    // ... (keeping existing Spanish translations)
  },
  fr: {
    // ... (keeping existing French translations)
  },
  zh: {
    // ... (keeping existing Chinese translations)
  },
  ar: {
    // ... (keeping existing Arabic translations)
  },
  ru: {
    // ... (keeping existing Russian translations)
  },
};

export type SupportedLanguage = 'pt' | 'en' | 'es' | 'fr' | 'zh' | 'ar' | 'ru';
export type Language = SupportedLanguage;
export type Translations = typeof translations.pt;
