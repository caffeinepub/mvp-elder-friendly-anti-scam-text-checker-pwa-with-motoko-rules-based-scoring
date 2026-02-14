export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';

export type Translations = typeof translations.pt;

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
    navInternationalSearch: 'Pesquisa Internacional',
    
    // International Contact Search Page
    internationalSearchPageTitle: 'Pesquisa Internacional de Contactos',
    internationalSearchPageDescription: 'Pesquise informações detalhadas sobre contactos internacionais com análise de risco e fontes públicas',
    internationalSearchCardTitle: 'Pesquisar Contacto',
    internationalSearchCardDescription: 'Introduza um número de telefone ou email para obter análise detalhada',
    internationalSearchInputLabel: 'Contacto',
    internationalSearchInputPlaceholder: '+351 912 345 678 ou exemplo@email.com',
    internationalSearchSearchButton: 'Pesquisar',
    internationalSearchSearching: 'A pesquisar...',
    internationalSearchInvalidInput: 'Formato inválido. Introduza um número de telefone ou email válido.',
    internationalSearchError: 'Erro ao pesquisar. Tente novamente.',
    
    // International Search Results
    internationalSearchResultTitle: 'Resultado da Pesquisa',
    internationalSearchRiskScore: 'Pontuação de Risco',
    internationalSearchOriginCountry: 'País de Origem',
    internationalSearchTrustScore: 'Pontuação de Confiança',
    internationalSearchSource: 'Fonte',
    internationalSearchFindingsTitle: 'Detalhes',
    internationalSearchFindingsDescription: 'Informações detalhadas sobre o contacto',
    internationalSearchVerified: 'Verificado',
    internationalSearchVerifiedYes: 'Sim',
    internationalSearchVerifiedNo: 'Não',
    internationalSearchReports: 'Reportes',
    internationalSearchAdjustedRiskScore: 'Risco Ajustado',
    internationalSearchAddress: 'Endereço',
    internationalSearchLimitations: 'Os resultados são baseados em fontes públicas disponíveis. Alguns fornecedores podem estar indisponíveis.',
    
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
    consentVersionLabel: 'Versão dos Termos',
    consentEffectiveDateLabel: 'Data de Vigência',
    
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
    
    // Error messages
    errorMessageEmpty: 'Por favor, introduza uma mensagem para analisar',
    errorEmailEmpty: 'Por favor, introduza um endereço de email',
    errorPhoneEmpty: 'Por favor, introduza um número de telefone',
    errorCryptoEmpty: 'Por favor, introduza um endereço de criptomoeda',
    
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
    advancedLookupInvalidInput: 'Formato inválido. Introduza um número de telefone ou email válido.',
    advancedLookupSearchError: 'Erro ao pesquisar. Tente novamente.',
    advancedLookupOfflineNoCache: 'Sem ligação à internet e sem resultados em cache.',
    advancedLookupOfflineIndicator: 'Resultado em cache (offline)',
    advancedLookupPublicInfoTitle: 'Informação Pública',
    advancedLookupDisplayName: 'Nome',
    advancedLookupSummary: 'Resumo',
    advancedLookupDetails: 'Detalhes',
    advancedLookupAttribution: 'Atribuição',
    advancedLookupSource: 'Fonte',
    advancedLookupAsOf: 'Data',
    advancedLookupNoPublicInfo: 'Sem informação pública disponível para este contacto.',
    
    // Report Submission Dialog
    reportDialogTitle: 'Reportar Contacto Suspeito',
    reportDialogDescription: 'Ajude a comunidade reportando contactos suspeitos ou fraudulentos',
    reportAnonymityNotice: 'Este reporte é anónimo. Inclua apenas informação pública e não sensível.',
    reportContactLabel: 'Contacto a reportar',
    reportCategoryLabel: 'Categoria (opcional)',
    reportCategoryPlaceholder: 'Selecione uma categoria',
    reportCategoryOptionalNote: 'Se não selecionar, será classificado como "Outro"',
    reportCategorySpam: 'Spam',
    reportCategoryPhishing: 'Phishing',
    reportCategoryScam: 'Golpe',
    reportCategoryOther: 'Outro',
    reportDescriptionLabel: 'Descrição (opcional)',
    reportDescriptionPlaceholder: 'Descreva o motivo do reporte...',
    reportDescriptionNote: 'Forneça detalhes que possam ajudar outros utilizadores',
    reportCancelButton: 'Cancelar',
    reportSubmitButton: 'Enviar Reporte',
    reportSubmittingButton: 'A enviar...',
    reportSuccessMessage: 'Reporte enviado com sucesso. Obrigado pela sua contribuição!',
    reportSubmissionError: 'Erro ao enviar reporte. Tente novamente.',
    reportSuspiciousContactButton: 'Reportar Contacto Suspeito',
    
    // Collaborative Database Results
    collaborativeResultTitle: 'Base de Dados Colaborativa',
    collaborativeTitle: 'Base de Dados Colaborativa',
    collaborativeDescription: 'Consulte reportes da comunidade',
    collaborativeEmptyState: 'Sem registos conhecidos — base colaborativa em crescimento',
    collaborativeNoRecords: 'Sem registos conhecidos — base colaborativa em crescimento',
    collaborativeRecordsFound: 'registos encontrados',
    collaborativeReportCount: 'Número de reportes',
    collaborativeRiskScore: 'Pontuação de Risco',
    collaborativeCategories: 'Categorias',
    collaborativeLastReported: 'Último reporte',
    collaborativeError: 'Erro ao consultar base de dados',
    collaborativeDisclaimer: 'Base colaborativa alimentada pela comunidade',
    categoryPhishing: 'Phishing',
    categoryScam: 'Golpe',
    categorySpam: 'Spam',
    categoryFraud: 'Fraude',
    categoryImpersonation: 'Personificação',
    categoryOther: 'Outro',
    
    // Authentication
    authLogin: 'Entrar',
    authLogout: 'Sair',
    authLoggingIn: 'A entrar...',
    authProfile: 'Perfil',
    authHistory: 'Histórico',
    authClearHistory: 'Limpar Histórico',
    authChecksPerformed: 'verificações realizadas',
    login: 'Entrar',
    logout: 'Sair',
    loggingIn: 'A entrar...',
    profile: 'Perfil',
    history: 'Histórico',
    clearHistory: 'Limpar Histórico',
    loggedInAs: 'Autenticado como',
    noHistory: 'Sem histórico de verificações',
    
    // PWA Install
    pwaInstallButton: 'Baixar Aplicação AntiFraud gratuitamente',
    pwaInstallNotAvailable: 'Instalação não disponível neste momento',
    installPrimaryButton: 'Baixar Aplicação AntiFraud gratuitamente',
    installNotEligibleMessage: 'Instalação não disponível neste momento',
    
    // Footer
    footerBuiltWith: 'Construído com',
    footerLove: 'amor',
    footerUsing: 'usando',
    footerIcpSecurity: 'Segurança ICP Blockchain',
    footerPublicSources: 'Fontes Públicas',
    footerPortugueseEntities: 'Entidades Portuguesas',
    footerBancoPortugal: 'Banco de Portugal',
    footerCNCS: 'CNCS',
    footerReferencesPrefix: 'Referências de avisos públicos de cibersegurança:',
    footerSealsDisclaimer: 'Os selos são apenas informativos e não garantem precisão ou implicam responsabilidade do criador.',
    footerManageCookies: 'Gerir Cookies',
    footerViewTermsModal: 'Ver Termos',
    
    // Cookie/Storage Settings
    cookieSettingsTitle: 'Gestão de Cookies e Armazenamento Local',
    cookieSettingsDescription: 'Gerencie os dados armazenados localmente pela aplicação',
    cookieSettingsWhatWeStore: 'O que armazenamos:',
    cookieSettingsLanguagePreference: 'Preferência de idioma',
    cookieSettingsLocalHistory: 'Histórico local de consultas',
    cookieSettingsAnonymousStats: 'Estatísticas anónimas de uso (opcional)',
    cookieSettingsClearHistoryButton: 'Limpar Histórico Local',
    cookieSettingsClearingHistory: 'A limpar...',
    cookieSettingsHistoryCleared: 'Histórico limpo com sucesso',
    cookieSettingsCloseButton: 'Fechar',
    cookieSettingsNote: 'Nenhum dado pessoal identificável é armazenado ou partilhado.',
    
    // Public Entity Seals
    sealsTitle: 'Entidades Públicas de Referência',
    sealPortugalLabel: 'Portugal',
    sealPortugalCNCS: 'CNCS - Centro Nacional de Cibersegurança',
    sealPortugalBanco: 'Banco de Portugal',
    sealPortugalGov: 'Portal do Governo',
    sealUSALabel: 'EUA',
    sealUSACISA: 'CISA/US-CERT',
    sealUSAFTC: 'FTC - Federal Trade Commission',
    sealEULabel: 'União Europeia',
    sealEUENISA: 'ENISA - Agência da UE para a Cibersegurança',
    sealEUEuropol: 'Europol',
    
    // Mission Page
    missionPageTitle: 'Missão',
    missionPageHeading: 'Nossa Missão',
    missionPageSubheading: 'Protegendo pessoas contra fraudes digitais',
    missionPageDescription: 'Conheça a missão, visão e valores do AntiFraud',
    missionVisionTitle: 'Visão',
    missionVisionParagraph1: 'Criar um ecossistema digital onde todos possam navegar com confiança, protegidos contra fraudes e esquemas maliciosos.',
    missionVisionParagraph2: 'Democratizar o acesso a ferramentas de segurança digital, tornando a proteção contra fraudes acessível a todos, independentemente do conhecimento técnico.',
    missionVisionParagraphs: ['Criar um ecossistema digital onde todos possam navegar com confiança, protegidos contra fraudes e esquemas maliciosos.', 'Democratizar o acesso a ferramentas de segurança digital, tornando a proteção contra fraudes acessível a todos, independentemente do conhecimento técnico.'],
    missionCoreTitle: 'Missão Central',
    missionCoreParagraph1: 'Fornecer análise instantânea e gratuita de mensagens, emails, números de telefone e endereços de criptomoedas para identificar potenciais fraudes.',
    missionCoreParagraph2: 'Educar os utilizadores sobre padrões comuns de fraude e técnicas de engenharia social.',
    missionCoreParagraph3: 'Construir uma base de dados colaborativa alimentada pela comunidade para proteção coletiva.',
    missionCoreParagraphs: ['Fornecer análise instantânea e gratuita de mensagens, emails, números de telefone e endereços de criptomoedas para identificar potenciais fraudes.', 'Educar os utilizadores sobre padrões comuns de fraude e técnicas de engenharia social.', 'Construir uma base de dados colaborativa alimentada pela comunidade para proteção coletiva.'],
    missionSocialImpactTitle: 'Impacto Social',
    missionSocialImpactParagraph1: 'Proteger grupos vulneráveis, incluindo idosos e pessoas com menor literacia digital.',
    missionSocialImpactParagraph2: 'Reduzir perdas financeiras causadas por fraudes digitais.',
    missionSocialImpactParagraph3: 'Promover uma internet mais segura através da educação e consciencialização.',
    missionSocialImpactParagraphs: ['Proteger grupos vulneráveis, incluindo idosos e pessoas com menor literacia digital.', 'Reduzir perdas financeiras causadas por fraudes digitais.', 'Promover uma internet mais segura através da educação e consciencialização.'],
    missionValuesTitle: 'Valores',
    missionValuesTransparencyTitle: 'Transparência',
    missionValuesTransparencyDesc: 'Todas as análises são explicadas de forma clara e compreensível.',
    missionValuesPrivacyTitle: 'Privacidade',
    missionValuesPrivacyDesc: 'Não armazenamos dados pessoais ou sensíveis dos utilizadores.',
    missionValuesAccessibilityTitle: 'Acessibilidade',
    missionValuesAccessibilityDesc: 'Interface otimizada para todos, incluindo utilizadores com necessidades especiais.',
    missionValuesCommunityTitle: 'Comunidade',
    missionValuesCommunityDesc: 'Proteção coletiva através da partilha responsável de informação.',
    missionLimitationsTitle: 'Limitações do Sistema',
    missionLimitationsParagraph1: 'O AntiFraud é uma ferramenta de apoio à decisão, não um sistema de segurança absoluto.',
    missionLimitationsParagraph2: 'As análises são baseadas em padrões conhecidos e podem não detetar fraudes novas ou sofisticadas.',
    missionLimitationsParagraph3: 'Recomendamos sempre cautela adicional em transações financeiras ou partilha de dados sensíveis.',
    missionLimitationsParagraphs: ['O AntiFraud é uma ferramenta de apoio à decisão, não um sistema de segurança absoluto.', 'As análises são baseadas em padrões conhecidos e podem não detetar fraudes novas ou sofisticadas.', 'Recomendamos sempre cautela adicional em transações financeiras ou partilha de dados sensíveis.'],
    missionResponsibleUseTitle: 'Uso Responsável',
    missionResponsibleUseParagraph1: 'Utilize o AntiFraud como uma camada adicional de proteção, não como única fonte de decisão.',
    missionResponsibleUseParagraph2: 'Reporte apenas informação verdadeira e verificável na base colaborativa.',
    missionResponsibleUseParagraph3: 'Em caso de dúvida, consulte sempre as autoridades competentes ou especialistas em segurança.',
    missionResponsibleUseParagraphs: ['Utilize o AntiFraud como uma camada adicional de proteção, não como única fonte de decisão.', 'Reporte apenas informação verdadeira e verificável na base colaborativa.', 'Em caso de dúvida, consulte sempre as autoridades competentes ou especialistas em segurança.'],
    
    // How It Works Page
    howItWorksPageTitle: 'Como Funciona',
    howItWorksPageHeading: 'Como Funciona o AntiFraud',
    howItWorksPageSubheading: 'Entenda como protegemos você contra fraudes digitais',
    howItWorksPageDescription: 'Saiba como o AntiFraud analisa e protege contra fraudes',
    howItWorksVerificationTitle: 'Tipos de Verificação',
    howItWorksMessageTitle: 'Verificação de Mensagens',
    howItWorksMessageDesc: 'Analisa mensagens de texto, WhatsApp, SMS e outras plataformas em busca de indicadores de fraude como urgência artificial, pedidos de dinheiro, links suspeitos e técnicas de engenharia social.',
    howItWorksEmailTitle: 'Verificação de Emails',
    howItWorksEmailDesc: 'Verifica endereços de email contra bases de dados públicas de phishing e spam, identifica domínios suspeitos e padrões de emails fraudulentos.',
    howItWorksPhoneTitle: 'Verificação de Telefones',
    howItWorksPhoneDesc: 'Consulta números de telefone na base colaborativa de reportes da comunidade, identifica padrões de chamadas fraudulentas e números associados a esquemas conhecidos.',
    howItWorksCryptoTitle: 'Verificação de Criptomoedas',
    howItWorksCryptoDesc: 'Analisa endereços de carteiras de criptomoedas contra bases de dados de endereços fraudulentos conhecidos e esquemas de investimento suspeitos.',
    howItWorksScoringTitle: 'Sistema de Pontuação',
    howItWorksScoringDesc: 'Utilizamos um sistema de pontuação de 0-100 baseado em múltiplos fatores:',
    howItWorksScoringFactor1: 'Palavras-chave de alto risco (+40 pontos) e médio risco (+20 pontos)',
    howItWorksScoringFactor2: 'Reportes da comunidade (até +30 pontos baseado em frequência)',
    howItWorksScoringFactor3: 'Presença em bases de dados públicas de fraude (+25 pontos)',
    howItWorksScoringFactor4: 'Padrões de comportamento suspeito e técnicas de engenharia social',
    howItWorksLimitationsTitle: 'Limitações',
    howItWorksLimitationsParagraph1: 'Nenhum sistema é 100% preciso. Fraudes novas e sofisticadas podem não ser detectadas.',
    howItWorksLimitationsParagraph2: 'A base colaborativa depende de reportes da comunidade e pode ter falsos positivos.',
    howItWorksLimitationsParagraph3: 'Utilize sempre o bom senso e cautela adicional em transações financeiras.',
    howItWorksLimitationsParagraphs: ['Nenhum sistema é 100% preciso. Fraudes novas e sofisticadas podem não ser detectadas.', 'A base colaborativa depende de reportes da comunidade e pode ter falsos positivos.', 'Utilize sempre o bom senso e cautela adicional em transações financeiras.'],
    howItWorksResponsibleUseTitle: 'Uso Responsável',
    howItWorksResponsibleUseParagraph1: 'Use o AntiFraud como ferramenta de apoio, não como decisão final.',
    howItWorksResponsibleUseParagraph2: 'Reporte apenas informação verdadeira e verificável.',
    howItWorksResponsibleUseParagraph3: 'Em caso de dúvida, consulte autoridades ou especialistas.',
    howItWorksResponsibleUseParagraphs: ['Use o AntiFraud como ferramenta de apoio, não como decisão final.', 'Reporte apenas informação verdadeira e verificável.', 'Em caso de dúvida, consulte autoridades ou especialistas.'],
    
    // Terms Page
    termsPageTitle: 'Termos de Uso e Política de Privacidade',
    termsPageHeading: 'Termos de Uso e Política de Privacidade',
    termsPageSubheading: 'Vigente desde 1 de Janeiro de 2025',
    termsPageDescription: 'Termos de uso e política de privacidade do AntiFraud',
    termsEffectiveDate: 'Vigente desde 1 de Janeiro de 2025',
    termsContactEmail: 'quantumflux2025@gmail.com',
    
    // Terms Sections
    termsSection1Title: '1. Aceitação dos Termos',
    termsSection1Paragraphs: [
      'Ao utilizar o AntiFraud, você concorda com estes Termos e Condições e Política de Privacidade.',
      'Se não concordar com qualquer parte destes termos, não utilize o serviço.',
      'O uso do AntiFraud é voluntário e sob total responsabilidade do usuário.'
    ],
    
    termsSection2Title: '2. Finalidade e Escopo do Serviço',
    termsSection2Paragraphs: [
      'AntiFraud é uma ferramenta estritamente informativa para análise de contatos, números de telefone e endereços criptográficos.',
      'Baseia-se apenas em dados públicos e denúncias oficiais.',
      'A aplicação não substitui decisões humanas, judiciais, de segurança ou financeiras.',
      'Toda ação baseada nas informações fornecidas é exclusivamente responsabilidade do usuário.'
    ],
    
    termsSection3Title: '3. Limitação Total de Responsabilidade',
    termsSection3Paragraphs: [
      'O criador (HCoragem) não será responsabilizado por qualquer dano, perda financeira, prejuízo, ação judicial ou indireta resultante do uso da aplicação.',
      'Inclui: Decisões do usuário ou terceiros baseadas nas informações fornecidas; Uso fraudulento ou alteração não autorizada da aplicação; Erros, falsos positivos ou falsos negativos nos dados; Consequências legais ou financeiras do uso da aplicação.',
      'Aviso legal: Qualquer tentativa de responsabilizar o criador é inválida e sem efeito legal.'
    ],
    
    termsSection4Title: '4. Uso Aceitável',
    termsSection4Paragraphs: [
      'Usuário deve usar AntiFraud apenas para fins legítimos e éticos de proteção pessoal e segurança cibernética.',
      'É proibido utilizar o serviço para: Atividades ilegais ou fraudulentas; Difamação, assédio, invasão de privacidade ou abuso; Reportes falsos ou maliciosos.',
      'Violação destas regras pode resultar em bloqueio imediato de acesso, sem aviso prévio.'
    ],
    
    termsSection5Title: '5. Base Colaborativa e Anonimato',
    termsSection5Paragraphs: [
      'Todos os reportes da comunidade são anônimos.',
      'O criador não valida individualmente cada reporte e não se responsabiliza por informações incorretas fornecidas por outros usuários.',
      'O sistema pode remover ou bloquear reportes que violem estes termos.'
    ],
    
    termsSection6Title: '6. Privacidade e Dados',
    termsSection6Paragraphs: [
      'Nenhuma mensagem, email, número de telefone ou endereço é armazenado de forma identificável.',
      'Cookies e armazenamento local são utilizados somente para funcionalidades essenciais, como preferências de idioma e histórico local.',
      'Usuário pode apagar seu histórico local a qualquer momento.',
      'Autenticação via Internet Identity mantém anonimato completo; apenas um identificador anônimo (Principal) é usado.',
      'Nenhum dado é vendido, compartilhado ou utilizado para publicidade.'
    ],
    
    termsSection7Title: '7. Cookies',
    termsSection7Paragraphs: [
      'Cookies são utilizados para: Preferências de idioma; Histórico local de consultas; Estatísticas anônimas de uso (opcional).',
      'Usuário pode gerenciar ou apagar cookies através das configurações do navegador ou do app.',
      'Não coletamos dados pessoais identificáveis através de cookies.'
    ],
    
    termsSection8Title: '8. Rodapé, Selos e Fontes Externas',
    termsSection8Paragraphs: [
      'Rodapé contém selos de entidades públicas e legais: Portugal (CNCS, Banco de Portugal, Portal do Governo), EUA (CISA/US-CERT, FTC), UE (ENISA, Europol).',
      'Todos os selos possuem links clicáveis para as fontes oficiais.',
      'Selos são apenas informativos, não garantem precisão, e não implicam responsabilidade do criador.'
    ],
    
    termsSection9Title: '9. Modificações e Atualizações',
    termsSection9Paragraphs: [
      'O criador pode alterar, suspender ou encerrar o serviço a qualquer momento, sem aviso prévio.',
      'Uso continuado após alterações indica aceitação automática dos novos termos.',
      'Versão atualizada será exibida ao usuário, preferencialmente com confirmação de leitura/aceitação.'
    ],
    
    termsSection10Title: '10. Propriedade Intelectual',
    termsSection10Paragraphs: [
      'Todo conteúdo, código, layout e branding são propriedade de HCoragem, exceto logos e selos de terceiros usados apenas para fins informativos.',
      'Nenhum usuário pode modificar ou redistribuir a aplicação para fins ilegais ou comerciais sem autorização.'
    ],
    
    termsSection11Title: '11. Aviso Legal Complementar',
    termsSection11Paragraphs: [
      'Todas as informações fornecidas são exclusivamente informativas.',
      'Usuário concorda que toda ação baseada nas informações é de sua total responsabilidade.',
      'Qualquer uso fraudulento ou alteração do software que resulte em dano ou violação legal não recai sobre o criador.',
      'Linguagem reforçada para não permitir responsabilização civil ou criminal do criador em nenhum cenário.'
    ],
    
    termsSection12Title: '12. Contato',
    termsSection12Paragraphs: [
      'Para dúvidas, suporte ou questões legais: quantumflux2025@gmail.com'
    ],
    
    termsSection13Title: '13. Idiomas e Tradução',
    termsSection13Paragraphs: [
      'Aplicação suporta Português, Inglês e idiomas futuros.',
      'Traduções possuem fallback automático para PT ou EN se algum texto não estiver disponível.'
    ],
    
    // Privacy Page
    privacyPageTitle: 'Política de Privacidade',
    privacyPageHeading: 'Política de Privacidade',
    privacyPageSubheading: 'Como protegemos seus dados',
    privacyPageDescription: 'Política de privacidade do AntiFraud',
    privacySection1Title: 'Coleta de Dados',
    privacySection1Paragraphs: ['Não coletamos dados pessoais identificáveis.', 'Utilizamos apenas identificadores anônimos para autenticação via Internet Identity.', 'Nenhuma mensagem, email ou número de telefone é armazenado de forma permanente.'],
    privacySection2Title: 'Uso de Cookies',
    privacySection2Paragraphs: ['Utilizamos cookies apenas para funcionalidades essenciais.', 'Preferências de idioma são armazenadas localmente.', 'Histórico de verificações é armazenado apenas no seu dispositivo.'],
    privacySection3Title: 'Compartilhamento de Dados',
    privacySection3Paragraphs: ['Não vendemos, alugamos ou compartilhamos seus dados com terceiros.', 'Reportes à base colaborativa são completamente anônimos.', 'Nenhum dado é utilizado para publicidade ou marketing.'],
    privacySection4Title: 'Segurança',
    privacySection4Paragraphs: ['Utilizamos a blockchain ICP para segurança e descentralização.', 'Autenticação via Internet Identity garante anonimato.', 'Dados são processados localmente sempre que possível.'],
    privacySection5Title: 'Seus Direitos',
    privacySection5Paragraphs: ['Pode apagar seu histórico local a qualquer momento.', 'Pode desativar cookies através das configurações do navegador.', 'Pode parar de usar o serviço a qualquer momento sem consequências.'],
    privacySection6Title: 'Alterações à Política',
    privacySection6Paragraphs: ['Podemos atualizar esta política periodicamente.', 'Alterações significativas serão comunicadas na aplicação.', 'Uso continuado após alterações indica aceitação.'],
    privacySection7Title: 'Contato',
    privacySection7Paragraphs: ['Para questões sobre privacidade: quantumflux2025@gmail.com'],
    privacySection8Title: 'Conformidade',
    privacySection8Paragraphs: ['Esta política está em conformidade com as melhores práticas de privacidade.', 'Respeitamos os princípios de minimização de dados e privacidade por design.'],
    
    // Admin Terms Editor
    adminTermsPageTitle: 'Editor de Termos (Admin)',
    adminTermsPageHeading: 'Atualizar Termos e Política de Privacidade',
    adminTermsPageDescription: 'Atualize os termos de uso e política de privacidade',
    adminTermsVersionLabel: 'Versão',
    adminTermsEffectiveDateLabel: 'Data de Vigência',
    adminTermsContentLabel: 'Conteúdo (JSON multilíngue)',
    adminTermsContentPlaceholder: '{"pt": "...", "en": "..."}',
    adminTermsSaveButton: 'Publicar Nova Versão',
    adminTermsSaving: 'A publicar...',
    adminTermsSuccess: 'Termos atualizados com sucesso',
    adminTermsError: 'Erro ao atualizar termos',
    adminTermsLoadError: 'Erro ao carregar termos atuais',
    adminTermsUnauthorized: 'Acesso não autorizado',
    adminTermsCurrentVersion: 'Versão Atual',
    adminTermsPreviewLabel: 'Pré-visualização',
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
    navInternationalSearch: 'International Search',
    
    // International Contact Search Page
    internationalSearchPageTitle: 'International Contact Search',
    internationalSearchPageDescription: 'Search detailed information about international contacts with risk analysis and public sources',
    internationalSearchCardTitle: 'Search Contact',
    internationalSearchCardDescription: 'Enter a phone number or email to get detailed analysis',
    internationalSearchInputLabel: 'Contact',
    internationalSearchInputPlaceholder: '+351 912 345 678 or example@email.com',
    internationalSearchSearchButton: 'Search',
    internationalSearchSearching: 'Searching...',
    internationalSearchInvalidInput: 'Invalid format. Enter a valid phone number or email.',
    internationalSearchError: 'Search error. Please try again.',
    
    // International Search Results
    internationalSearchResultTitle: 'Search Result',
    internationalSearchRiskScore: 'Risk Score',
    internationalSearchOriginCountry: 'Origin Country',
    internationalSearchTrustScore: 'Trust Score',
    internationalSearchSource: 'Source',
    internationalSearchFindingsTitle: 'Details',
    internationalSearchFindingsDescription: 'Detailed contact information',
    internationalSearchVerified: 'Verified',
    internationalSearchVerifiedYes: 'Yes',
    internationalSearchVerifiedNo: 'No',
    internationalSearchReports: 'Reports',
    internationalSearchAdjustedRiskScore: 'Adjusted Risk',
    internationalSearchAddress: 'Address',
    internationalSearchLimitations: 'Results are based on available public sources. Some providers may be unavailable.',
    
    // Documentation Page
    documentationPageTitle: 'Technical Documentation',
    documentationPageDescription: 'Complete AntiFraud / by HCoragem documentation',
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
    consentFooterNote: 'By accepting, you agree to the AntiFraud terms of use.',
    consentVersionLabel: 'Terms Version',
    consentEffectiveDateLabel: 'Effective Date',
    
    // Home page
    homeTitle: 'Protect yourself against digital fraud',
    homeSubtitle: 'Verify messages, emails, phone numbers and cryptocurrency addresses before trusting',
    
    // Quick actions
    quickActionsTitle: 'Quick Actions',
    quickActionCheckRisk: 'Check Risk',
    quickActionCheckRiskDesc: 'Analyze suspicious messages and contacts',
    quickActionSearchDatabase: 'Search Database',
    quickActionSearchDatabaseDesc: 'Search the collaborative database',
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
    tabAdvancedLookup: 'Search',
    
    // Form labels
    labelMessage: 'Message to analyze',
    labelEmail: 'Email address',
    labelPhone: 'Phone number',
    labelCrypto: 'Cryptocurrency address',
    
    // Placeholders
    placeholderMessage: 'Paste the received message here',
    placeholderEmail: 'example@email.com',
    placeholderPhone: '+351 912 345 678',
    placeholderCrypto: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    
    // Buttons
    buttonAnalyze: 'Analyze Message',
    buttonAnalyzing: 'Analyzing...',
    buttonCheck: 'Check',
    buttonChecking: 'Checking...',
    
    // Error messages
    errorMessageEmpty: 'Please enter a message to analyze',
    errorEmailEmpty: 'Please enter an email address',
    errorPhoneEmpty: 'Please enter a phone number',
    errorCryptoEmpty: 'Please enter a cryptocurrency address',
    
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
    transparencyCollaborativeBasisLabel: 'Collaborative Database',
    
    // Advanced Contact Lookup
    advancedLookupTitle: 'Advanced Contact Search',
    advancedLookupDescription: 'Search public information about phone numbers or email addresses',
    advancedLookupInputLabel: 'Phone or Email',
    advancedLookupInputPlaceholder: '+351 912 345 678 or example@email.com',
    advancedLookupSearchButton: 'Search',
    advancedLookupSearching: 'Searching...',
    advancedLookupInvalidInput: 'Invalid format. Enter a valid phone number or email.',
    advancedLookupSearchError: 'Search error. Please try again.',
    advancedLookupOfflineNoCache: 'No internet connection and no cached results.',
    advancedLookupOfflineIndicator: 'Cached result (offline)',
    advancedLookupPublicInfoTitle: 'Public Information',
    advancedLookupDisplayName: 'Name',
    advancedLookupSummary: 'Summary',
    advancedLookupDetails: 'Details',
    advancedLookupAttribution: 'Attribution',
    advancedLookupSource: 'Source',
    advancedLookupAsOf: 'Date',
    advancedLookupNoPublicInfo: 'No public information available for this contact.',
    
    // Report Submission Dialog
    reportDialogTitle: 'Report Suspicious Contact',
    reportDialogDescription: 'Help the community by reporting suspicious or fraudulent contacts',
    reportAnonymityNotice: 'This report is anonymous. Include only public and non-sensitive information.',
    reportContactLabel: 'Contact to report',
    reportCategoryLabel: 'Category (optional)',
    reportCategoryPlaceholder: 'Select a category',
    reportCategoryOptionalNote: 'If not selected, will be classified as "Other"',
    reportCategorySpam: 'Spam',
    reportCategoryPhishing: 'Phishing',
    reportCategoryScam: 'Scam',
    reportCategoryOther: 'Other',
    reportDescriptionLabel: 'Description (optional)',
    reportDescriptionPlaceholder: 'Describe the reason for the report...',
    reportDescriptionNote: 'Provide details that may help other users',
    reportCancelButton: 'Cancel',
    reportSubmitButton: 'Submit Report',
    reportSubmittingButton: 'Submitting...',
    reportSuccessMessage: 'Report submitted successfully. Thank you for your contribution!',
    reportSubmissionError: 'Error submitting report. Please try again.',
    reportSuspiciousContactButton: 'Report Suspicious Contact',
    
    // Collaborative Database Results
    collaborativeResultTitle: 'Collaborative Database',
    collaborativeTitle: 'Collaborative Database',
    collaborativeDescription: 'Check community reports',
    collaborativeEmptyState: 'No known records — collaborative database growing',
    collaborativeNoRecords: 'No known records — collaborative database growing',
    collaborativeRecordsFound: 'records found',
    collaborativeReportCount: 'Number of reports',
    collaborativeRiskScore: 'Risk Score',
    collaborativeCategories: 'Categories',
    collaborativeLastReported: 'Last reported',
    collaborativeError: 'Error querying database',
    collaborativeDisclaimer: 'Collaborative database powered by the community',
    categoryPhishing: 'Phishing',
    categoryScam: 'Scam',
    categorySpam: 'Spam',
    categoryFraud: 'Fraud',
    categoryImpersonation: 'Impersonation',
    categoryOther: 'Other',
    
    // Authentication
    authLogin: 'Login',
    authLogout: 'Logout',
    authLoggingIn: 'Logging in...',
    authProfile: 'Profile',
    authHistory: 'History',
    authClearHistory: 'Clear History',
    authChecksPerformed: 'checks performed',
    login: 'Login',
    logout: 'Logout',
    loggingIn: 'Logging in...',
    profile: 'Profile',
    history: 'History',
    clearHistory: 'Clear History',
    loggedInAs: 'Logged in as',
    noHistory: 'No verification history',
    
    // PWA Install
    pwaInstallButton: 'Download AntiFraud App for free',
    pwaInstallNotAvailable: 'Installation not available at this time',
    installPrimaryButton: 'Download AntiFraud App for free',
    installNotEligibleMessage: 'Installation not available at this time',
    
    // Footer
    footerBuiltWith: 'Built with',
    footerLove: 'love',
    footerUsing: 'using',
    footerIcpSecurity: 'ICP Blockchain Security',
    footerPublicSources: 'Public Sources',
    footerPortugueseEntities: 'Portuguese Entities',
    footerBancoPortugal: 'Bank of Portugal',
    footerCNCS: 'CNCS',
    footerReferencesPrefix: 'Cybersecurity public warning references:',
    footerSealsDisclaimer: 'Seals are informational only and do not guarantee accuracy or imply creator responsibility.',
    footerManageCookies: 'Manage Cookies',
    footerViewTermsModal: 'View Terms',
    
    // Cookie/Storage Settings
    cookieSettingsTitle: 'Cookie and Local Storage Management',
    cookieSettingsDescription: 'Manage data stored locally by the application',
    cookieSettingsWhatWeStore: 'What we store:',
    cookieSettingsLanguagePreference: 'Language preference',
    cookieSettingsLocalHistory: 'Local query history',
    cookieSettingsAnonymousStats: 'Anonymous usage statistics (optional)',
    cookieSettingsClearHistoryButton: 'Clear Local History',
    cookieSettingsClearingHistory: 'Clearing...',
    cookieSettingsHistoryCleared: 'History cleared successfully',
    cookieSettingsCloseButton: 'Close',
    cookieSettingsNote: 'No personally identifiable data is stored or shared.',
    
    // Public Entity Seals
    sealsTitle: 'Reference Public Entities',
    sealPortugalLabel: 'Portugal',
    sealPortugalCNCS: 'CNCS - National Cybersecurity Center',
    sealPortugalBanco: 'Bank of Portugal',
    sealPortugalGov: 'Government Portal',
    sealUSALabel: 'USA',
    sealUSACISA: 'CISA/US-CERT',
    sealUSAFTC: 'FTC - Federal Trade Commission',
    sealEULabel: 'European Union',
    sealEUENISA: 'ENISA - EU Cybersecurity Agency',
    sealEUEuropol: 'Europol',
    
    // Mission Page
    missionPageTitle: 'Mission',
    missionPageHeading: 'Our Mission',
    missionPageSubheading: 'Protecting people against digital fraud',
    missionPageDescription: 'Learn about AntiFraud\'s mission, vision and values',
    missionVisionTitle: 'Vision',
    missionVisionParagraph1: 'Create a digital ecosystem where everyone can navigate with confidence, protected against fraud and malicious schemes.',
    missionVisionParagraph2: 'Democratize access to digital security tools, making fraud protection accessible to all, regardless of technical knowledge.',
    missionVisionParagraphs: ['Create a digital ecosystem where everyone can navigate with confidence, protected against fraud and malicious schemes.', 'Democratize access to digital security tools, making fraud protection accessible to all, regardless of technical knowledge.'],
    missionCoreTitle: 'Core Mission',
    missionCoreParagraph1: 'Provide instant and free analysis of messages, emails, phone numbers and cryptocurrency addresses to identify potential fraud.',
    missionCoreParagraph2: 'Educate users about common fraud patterns and social engineering techniques.',
    missionCoreParagraph3: 'Build a community-powered collaborative database for collective protection.',
    missionCoreParagraphs: ['Provide instant and free analysis of messages, emails, phone numbers and cryptocurrency addresses to identify potential fraud.', 'Educate users about common fraud patterns and social engineering techniques.', 'Build a community-powered collaborative database for collective protection.'],
    missionSocialImpactTitle: 'Social Impact',
    missionSocialImpactParagraph1: 'Protect vulnerable groups, including elderly and people with lower digital literacy.',
    missionSocialImpactParagraph2: 'Reduce financial losses caused by digital fraud.',
    missionSocialImpactParagraph3: 'Promote a safer internet through education and awareness.',
    missionSocialImpactParagraphs: ['Protect vulnerable groups, including elderly and people with lower digital literacy.', 'Reduce financial losses caused by digital fraud.', 'Promote a safer internet through education and awareness.'],
    missionValuesTitle: 'Values',
    missionValuesTransparencyTitle: 'Transparency',
    missionValuesTransparencyDesc: 'All analyses are explained clearly and understandably.',
    missionValuesPrivacyTitle: 'Privacy',
    missionValuesPrivacyDesc: 'We do not store personal or sensitive user data.',
    missionValuesAccessibilityTitle: 'Accessibility',
    missionValuesAccessibilityDesc: 'Interface optimized for everyone, including users with special needs.',
    missionValuesCommunityTitle: 'Community',
    missionValuesCommunityDesc: 'Collective protection through responsible information sharing.',
    missionLimitationsTitle: 'System Limitations',
    missionLimitationsParagraph1: 'AntiFraud is a decision support tool, not an absolute security system.',
    missionLimitationsParagraph2: 'Analyses are based on known patterns and may not detect new or sophisticated fraud.',
    missionLimitationsParagraph3: 'We always recommend additional caution in financial transactions or sharing sensitive data.',
    missionLimitationsParagraphs: ['AntiFraud is a decision support tool, not an absolute security system.', 'Analyses are based on known patterns and may not detect new or sophisticated fraud.', 'We always recommend additional caution in financial transactions or sharing sensitive data.'],
    missionResponsibleUseTitle: 'Responsible Use',
    missionResponsibleUseParagraph1: 'Use AntiFraud as an additional layer of protection, not as the sole decision source.',
    missionResponsibleUseParagraph2: 'Report only true and verifiable information to the collaborative database.',
    missionResponsibleUseParagraph3: 'When in doubt, always consult competent authorities or security experts.',
    missionResponsibleUseParagraphs: ['Use AntiFraud as an additional layer of protection, not as the sole decision source.', 'Report only true and verifiable information to the collaborative database.', 'When in doubt, always consult competent authorities or security experts.'],
    
    // How It Works Page
    howItWorksPageTitle: 'How It Works',
    howItWorksPageHeading: 'How AntiFraud Works',
    howItWorksPageSubheading: 'Understand how we protect you against digital fraud',
    howItWorksPageDescription: 'Learn how AntiFraud analyzes and protects against fraud',
    howItWorksVerificationTitle: 'Verification Types',
    howItWorksMessageTitle: 'Message Verification',
    howItWorksMessageDesc: 'Analyzes text messages, WhatsApp, SMS and other platforms for fraud indicators such as artificial urgency, money requests, suspicious links and social engineering techniques.',
    howItWorksEmailTitle: 'Email Verification',
    howItWorksEmailDesc: 'Checks email addresses against public phishing and spam databases, identifies suspicious domains and fraudulent email patterns.',
    howItWorksPhoneTitle: 'Phone Verification',
    howItWorksPhoneDesc: 'Queries phone numbers in the collaborative community reports database, identifies fraudulent call patterns and numbers associated with known schemes.',
    howItWorksCryptoTitle: 'Cryptocurrency Verification',
    howItWorksCryptoDesc: 'Analyzes cryptocurrency wallet addresses against databases of known fraudulent addresses and suspicious investment schemes.',
    howItWorksScoringTitle: 'Scoring System',
    howItWorksScoringDesc: 'We use a 0-100 scoring system based on multiple factors:',
    howItWorksScoringFactor1: 'High-risk keywords (+40 points) and medium-risk (+20 points)',
    howItWorksScoringFactor2: 'Community reports (up to +30 points based on frequency)',
    howItWorksScoringFactor3: 'Presence in public fraud databases (+25 points)',
    howItWorksScoringFactor4: 'Suspicious behavior patterns and social engineering techniques',
    howItWorksLimitationsTitle: 'Limitations',
    howItWorksLimitationsParagraph1: 'No system is 100% accurate. New and sophisticated fraud may not be detected.',
    howItWorksLimitationsParagraph2: 'The collaborative database depends on community reports and may have false positives.',
    howItWorksLimitationsParagraph3: 'Always use common sense and additional caution in financial transactions.',
    howItWorksLimitationsParagraphs: ['No system is 100% accurate. New and sophisticated fraud may not be detected.', 'The collaborative database depends on community reports and may have false positives.', 'Always use common sense and additional caution in financial transactions.'],
    howItWorksResponsibleUseTitle: 'Responsible Use',
    howItWorksResponsibleUseParagraph1: 'Use AntiFraud as a support tool, not as a final decision.',
    howItWorksResponsibleUseParagraph2: 'Report only true and verifiable information.',
    howItWorksResponsibleUseParagraph3: 'When in doubt, consult authorities or experts.',
    howItWorksResponsibleUseParagraphs: ['Use AntiFraud as a support tool, not as a final decision.', 'Report only true and verifiable information.', 'When in doubt, consult authorities or experts.'],
    
    // Terms Page
    termsPageTitle: 'Terms of Use and Privacy Policy',
    termsPageHeading: 'Terms of Use and Privacy Policy',
    termsPageSubheading: 'Effective from January 1, 2025',
    termsPageDescription: 'AntiFraud terms of use and privacy policy',
    termsEffectiveDate: 'Effective from January 1, 2025',
    termsContactEmail: 'quantumflux2025@gmail.com',
    
    // Terms Sections
    termsSection1Title: '1. Acceptance of Terms',
    termsSection1Paragraphs: [
      'By using AntiFraud, you agree to these Terms and Conditions and Privacy Policy.',
      'If you do not agree with any part of these terms, do not use the service.',
      'Use of AntiFraud is voluntary and at the user\'s sole responsibility.'
    ],
    
    termsSection2Title: '2. Purpose and Scope of Service',
    termsSection2Paragraphs: [
      'AntiFraud is a strictly informational tool for analyzing contacts, phone numbers and cryptographic addresses.',
      'It is based only on public data and official reports.',
      'The application does not replace human, judicial, security or financial decisions.',
      'Any action based on the information provided is solely the user\'s responsibility.'
    ],
    
    termsSection3Title: '3. Total Limitation of Liability',
    termsSection3Paragraphs: [
      'The creator (HCoragem) will not be held responsible for any damage, financial loss, harm, legal action or indirect consequences resulting from use of the application.',
      'Includes: User or third-party decisions based on provided information; Fraudulent use or unauthorized alteration of the application; Errors, false positives or false negatives in data; Legal or financial consequences of application use.',
      'Legal notice: Any attempt to hold the creator responsible is invalid and without legal effect.'
    ],
    
    termsSection4Title: '4. Acceptable Use',
    termsSection4Paragraphs: [
      'User must use AntiFraud only for legitimate and ethical purposes of personal protection and cybersecurity.',
      'It is prohibited to use the service for: Illegal or fraudulent activities; Defamation, harassment, privacy invasion or abuse; False or malicious reports.',
      'Violation of these rules may result in immediate access blocking, without prior notice.'
    ],
    
    termsSection5Title: '5. Collaborative Database and Anonymity',
    termsSection5Paragraphs: [
      'All community reports are anonymous.',
      'The creator does not individually validate each report and is not responsible for incorrect information provided by other users.',
      'The system may remove or block reports that violate these terms.'
    ],
    
    termsSection6Title: '6. Privacy and Data',
    termsSection6Paragraphs: [
      'No message, email, phone number or address is stored in an identifiable manner.',
      'Cookies and local storage are used only for essential functionalities, such as language preferences and local history.',
      'User can delete their local history at any time.',
      'Authentication via Internet Identity maintains complete anonymity; only an anonymous identifier (Principal) is used.',
      'No data is sold, shared or used for advertising.'
    ],
    
    termsSection7Title: '7. Cookies',
    termsSection7Paragraphs: [
      'Cookies are used for: Language preferences; Local query history; Anonymous usage statistics (optional).',
      'User can manage or delete cookies through browser or app settings.',
      'We do not collect personally identifiable data through cookies.'
    ],
    
    termsSection8Title: '8. Footer, Seals and External Sources',
    termsSection8Paragraphs: [
      'Footer contains seals from public and legal entities: Portugal (CNCS, Bank of Portugal, Government Portal), USA (CISA/US-CERT, FTC), EU (ENISA, Europol).',
      'All seals have clickable links to official sources.',
      'Seals are informational only, do not guarantee accuracy, and do not imply creator responsibility.'
    ],
    
    termsSection9Title: '9. Modifications and Updates',
    termsSection9Paragraphs: [
      'The creator may change, suspend or terminate the service at any time, without prior notice.',
      'Continued use after changes indicates automatic acceptance of new terms.',
      'Updated version will be displayed to the user, preferably with read/acceptance confirmation.'
    ],
    
    termsSection10Title: '10. Intellectual Property',
    termsSection10Paragraphs: [
      'All content, code, layout and branding are property of HCoragem, except third-party logos and seals used for informational purposes only.',
      'No user may modify or redistribute the application for illegal or commercial purposes without authorization.'
    ],
    
    termsSection11Title: '11. Supplementary Legal Notice',
    termsSection11Paragraphs: [
      'All information provided is strictly informational.',
      'User agrees that any action based on the information is their sole responsibility.',
      'Any fraudulent use or alteration of the software resulting in damage or legal violation does not fall on the creator.',
      'Reinforced language to not allow civil or criminal liability of the creator in any scenario.'
    ],
    
    termsSection12Title: '12. Contact',
    termsSection12Paragraphs: [
      'For questions, support or legal matters: quantumflux2025@gmail.com'
    ],
    
    termsSection13Title: '13. Languages and Translation',
    termsSection13Paragraphs: [
      'Application supports Portuguese, English and future languages.',
      'Translations have automatic fallback to PT or EN if any text is unavailable.'
    ],
    
    // Privacy Page
    privacyPageTitle: 'Privacy Policy',
    privacyPageHeading: 'Privacy Policy',
    privacyPageSubheading: 'How we protect your data',
    privacyPageDescription: 'AntiFraud privacy policy',
    privacySection1Title: 'Data Collection',
    privacySection1Paragraphs: ['We do not collect personally identifiable data.', 'We use only anonymous identifiers for authentication via Internet Identity.', 'No message, email or phone number is stored permanently.'],
    privacySection2Title: 'Use of Cookies',
    privacySection2Paragraphs: ['We use cookies only for essential functionalities.', 'Language preferences are stored locally.', 'Verification history is stored only on your device.'],
    privacySection3Title: 'Data Sharing',
    privacySection3Paragraphs: ['We do not sell, rent or share your data with third parties.', 'Reports to the collaborative database are completely anonymous.', 'No data is used for advertising or marketing.'],
    privacySection4Title: 'Security',
    privacySection4Paragraphs: ['We use ICP blockchain for security and decentralization.', 'Authentication via Internet Identity ensures anonymity.', 'Data is processed locally whenever possible.'],
    privacySection5Title: 'Your Rights',
    privacySection5Paragraphs: ['You can delete your local history at any time.', 'You can disable cookies through browser settings.', 'You can stop using the service at any time without consequences.'],
    privacySection6Title: 'Policy Changes',
    privacySection6Paragraphs: ['We may update this policy periodically.', 'Significant changes will be communicated in the application.', 'Continued use after changes indicates acceptance.'],
    privacySection7Title: 'Contact',
    privacySection7Paragraphs: ['For privacy questions: quantumflux2025@gmail.com'],
    privacySection8Title: 'Compliance',
    privacySection8Paragraphs: ['This policy complies with privacy best practices.', 'We respect the principles of data minimization and privacy by design.'],
    
    // Admin Terms Editor
    adminTermsPageTitle: 'Terms Editor (Admin)',
    adminTermsPageHeading: 'Update Terms and Privacy Policy',
    adminTermsPageDescription: 'Update terms of use and privacy policy',
    adminTermsVersionLabel: 'Version',
    adminTermsEffectiveDateLabel: 'Effective Date',
    adminTermsContentLabel: 'Content (multilingual JSON)',
    adminTermsContentPlaceholder: '{"pt": "...", "en": "..."}',
    adminTermsSaveButton: 'Publish New Version',
    adminTermsSaving: 'Publishing...',
    adminTermsSuccess: 'Terms updated successfully',
    adminTermsError: 'Error updating terms',
    adminTermsLoadError: 'Error loading current terms',
    adminTermsUnauthorized: 'Unauthorized access',
    adminTermsCurrentVersion: 'Current Version',
    adminTermsPreviewLabel: 'Preview',
  },
  es: {},
  fr: {},
  de: {},
};
