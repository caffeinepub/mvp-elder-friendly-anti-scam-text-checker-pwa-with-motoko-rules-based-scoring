import { translations } from '@/i18n/translations';

export interface DocumentationSection {
  title: string;
  content: string[];
}

export interface DocumentationStructure {
  title: string;
  subtitle: string;
  sections: DocumentationSection[];
  appendix: {
    title: string;
    content: string[];
  };
}

/**
 * Get the complete documentation structure with Portuguese institutional content
 */
export function getDocumentationContent(): DocumentationStructure {
  const pt = translations.pt;

  return {
    title: 'AntiFraud',
    subtitle: 'by HCoragem',
    sections: [
      {
        title: '1. Branding',
        content: [
          'Nome do Produto: AntiFraud',
          'Subtítulo: by HCoragem',
          '',
          'Todos os referenciais e ligações no sistema devem exibir exclusivamente a nomenclatura oficial "AntiFraud".',
          'O subtítulo "by HCoragem" deve aparecer consistentemente em rodapés e áreas de branding secundário.',
          'Esta nomenclatura assegura consistência total no branding e reforça a identidade do produto.',
        ],
      },
      {
        title: '2. Páginas Institucionais',
        content: [
          '=== MISSÃO ===',
          '',
          pt.missionPageHeading,
          pt.missionPageSubheading,
          '',
          pt.missionVisionTitle,
          ...pt.missionVisionParagraphs,
          '',
          pt.missionCoreTitle,
          ...pt.missionCoreParagraphs,
          '',
          pt.missionSocialImpactTitle,
          ...pt.missionSocialImpactParagraphs,
          '',
          pt.missionValuesTitle,
          `${pt.missionValuesTransparencyTitle}: ${pt.missionValuesTransparencyDesc}`,
          `${pt.missionValuesPrivacyTitle}: ${pt.missionValuesPrivacyDesc}`,
          `${pt.missionValuesAccessibilityTitle}: ${pt.missionValuesAccessibilityDesc}`,
          `${pt.missionValuesCommunityTitle}: ${pt.missionValuesCommunityDesc}`,
          '',
          '=== COMO FUNCIONA ===',
          '',
          pt.howItWorksPageHeading,
          pt.howItWorksPageSubheading,
          '',
          pt.howItWorksVerificationTitle,
          `${pt.howItWorksEmailTitle}: ${pt.howItWorksEmailDesc}`,
          `${pt.howItWorksPhoneTitle}: ${pt.howItWorksPhoneDesc}`,
          `${pt.howItWorksMessageTitle}: ${pt.howItWorksMessageDesc}`,
          `${pt.howItWorksCryptoTitle}: ${pt.howItWorksCryptoDesc}`,
          '',
          pt.howItWorksScoringTitle,
          pt.howItWorksScoringDesc,
          ...pt.howItWorksLimitationsParagraphs,
          '',
          '=== TERMOS E CONDIÇÕES ===',
          '',
          pt.termsPageHeading,
          pt.termsPageSubheading,
          '',
          ...pt.termsSection1Paragraphs,
          ...pt.termsSection2Paragraphs,
          ...pt.termsSection3Paragraphs,
          ...pt.termsSection4Paragraphs,
          ...pt.termsSection5Paragraphs,
          ...pt.termsSection6Paragraphs,
          ...pt.termsSection7Paragraphs,
          ...pt.termsSection8Paragraphs,
          '',
          '=== POLÍTICA DE PRIVACIDADE ===',
          '',
          pt.privacyPageHeading,
          pt.privacyPageSubheading,
          '',
          ...pt.privacySection1Paragraphs,
          ...pt.privacySection2Paragraphs,
          ...pt.privacySection3Paragraphs,
          ...pt.privacySection4Paragraphs,
          ...pt.privacySection5Paragraphs,
          ...pt.privacySection6Paragraphs,
          ...pt.privacySection7Paragraphs,
          ...pt.privacySection8Paragraphs,
        ],
      },
      {
        title: '3. Motor Antifraude (100% Frontend)',
        content: [
          'O AntiFraud implementa um motor de análise heurística completamente no frontend.',
          'Não há dependência de serviços externos para análise básica.',
          '',
          'Características:',
          '- Detecção de palavras-chave de alto risco',
          '- Análise de padrões de urgência e ameaças',
          '- Identificação de pedidos financeiros suspeitos',
          '- Verificação de URLs e endereços de criptomoedas',
          '- Sistema de pontuação 0-100',
          '- Explicações detalhadas em português',
        ],
      },
      {
        title: '4. PWA e Instalação',
        content: [
          'O AntiFraud é uma Progressive Web App (PWA) instalável.',
          '',
          'Funcionalidades PWA:',
          '- Instalação em dispositivos móveis e desktop',
          '- Funcionamento offline para análises básicas',
          '- Ícones e manifest configurados',
          '- Service Worker para cache',
          '',
          'Botão de instalação disponível no cabeçalho da aplicação.',
        ],
      },
      {
        title: '5. Modal de Cookies e Termos (Obrigatória)',
        content: [
          'Ao aceder à aplicação pela primeira vez, o utilizador é apresentado com uma modal de consentimento.',
          '',
          'Requisitos:',
          '- Aceitar uso de cookies',
          '- Aceitar Termos e Condições e Política de Privacidade',
          '- Links diretos para ler os documentos',
          '- Botão de aceitação só ativo após marcar ambas as checkboxes',
          '',
          'A aplicação fica bloqueada até o utilizador aceitar os termos.',
        ],
      },
      {
        title: '6. Navegação e Aliases',
        content: [
          'Rotas principais:',
          '- / (Home)',
          '- /mission (Missão)',
          '- /how-it-works (Como Funciona)',
          '- /terms (Termos)',
          '- /privacy (Privacidade)',
          '- /documentation (Documentação)',
          '- /international-contact-search (Pesquisa Internacional)',
          '',
          'Aliases legados:',
          '- /institucional → /mission',
          '- /institucional/mission → /mission',
        ],
      },
      {
        title: '7. Checklist de Verificação Final',
        content: [
          '✓ Branding "AntiFraud / by HCoragem" consistente',
          '✓ Modal de consentimento funcional',
          '✓ Todas as páginas institucionais acessíveis',
          '✓ Motor antifraude operacional',
          '✓ PWA instalável',
          '✓ Navegação sem rotas quebradas',
          '✓ Responsivo em mobile e desktop',
          '✓ Suporte a modo claro e escuro',
          '✓ Idiomas português e inglês',
        ],
      },
    ],
    appendix: {
      title: 'Apêndice: Idiomas Suportados',
      content: [
        'A interface do AntiFraud suporta os seguintes idiomas:',
        '',
        '1. Português (pt) - Idioma principal',
        '2. English (en) - Inglês',
        '',
        'O utilizador pode alternar entre idiomas através do seletor no cabeçalho.',
        'As preferências de idioma são guardadas localmente no navegador.',
      ],
    },
  };
}
