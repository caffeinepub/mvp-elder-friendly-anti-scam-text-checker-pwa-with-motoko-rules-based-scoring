# WebAPK Android Chrome Test Checklist

## Objetivo
Validar se o Chrome Android gera um WebAPK real (não apenas atalho) para a aplicação AntiFraud.

## Pré-requisitos
- Dispositivo Android físico
- Chrome Android atualizado
- Conexão à internet

## Passos de Teste

### 1. Desinstalar instalação anterior
- Abrir **Android → Definições → Apps**
- Procurar **AntiFraud**
- Se existir, clicar em **Desinstalar**
- Confirmar desinstalação

### 2. Remover atalhos do ecrã inicial
- Verificar ecrã inicial do Android
- Se existir atalho **AntiFraud**, remover (pressionar e arrastar para lixo)

### 3. Limpar dados do Chrome
- Abrir **Chrome → Definições → Privacidade**
- Clicar em **Limpar dados de navegação**
- Selecionar pelo menos **Cache** (ideal: todos os dados)
- Confirmar limpeza

### 4. Aceder ao site no Chrome
- Abrir **Chrome** (não WebView, não app embutida)
- Navegar para o URL da aplicação AntiFraud
- Aguardar carregamento completo

### 5. Interagir com o site
- Navegar entre 1-2 páginas diferentes
- Interagir com conteúdo (scroll, cliques)
- **Nota:** Chrome exige interação mínima antes de permitir instalação

### 6. Clicar no botão de instalação
- Localizar botão **"Baixar Aplicação AntiFraud gratuitamente"**
- Clicar no botão

### 7. Verificar popup nativo
**✅ Esperado:** Aparece popup nativo do Android com texto "Instalar aplicação"
**❌ Se não aparecer:** Instalação não está disponível (problema técnico)

### 8. Instalar aplicação
- No popup nativo, clicar em **Instalar** ou **Adicionar**
- Aguardar conclusão da instalação

### 9. Verificação final (CRÍTICA)
- Abrir **Android → Definições → Apps**
- Procurar **AntiFraud** na lista de aplicações
- Verificar se aparece como **aplicação instalada** (não apenas atalho)
- Verificar se aparece no **drawer de aplicações** do Android

## Resultados Possíveis

Após completar todos os passos, o resultado deve ser **exatamente uma** das seguintes frases:

**Apareceu como app em Definições > Apps**

ou

**Ainda é só atalho**

## Notas Técnicas
- WebAPK real: aparece em Definições > Apps como aplicação nativa
- Atalho simples: não aparece em Definições > Apps, apenas no ecrã inicial
- Se o popup nativo não aparecer no passo 7, o problema é técnico (manifest/SW/HTTPS)
