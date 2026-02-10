import { getDocumentationContent } from './documentationContent';

/**
 * Generate and download the AntiFraud documentation as a text file
 * (PDF generation requires external library that may not be available)
 */
export async function generateDocumentationPdf(): Promise<void> {
  const content = getDocumentationContent();
  
  // Build text content
  let textContent = '';
  
  // Cover
  textContent += `${content.title}\n`;
  textContent += `${content.subtitle}\n\n`;
  textContent += `Documentação Técnica\n`;
  textContent += `Gerado em: ${new Date().toLocaleDateString('pt-PT')}\n\n`;
  textContent += '='.repeat(80) + '\n\n';
  
  // Table of Contents
  textContent += 'ÍNDICE\n\n';
  content.sections.forEach((section) => {
    textContent += `${section.title}\n`;
  });
  textContent += `${content.appendix.title}\n\n`;
  textContent += '='.repeat(80) + '\n\n';
  
  // Sections
  for (const section of content.sections) {
    textContent += `${section.title}\n`;
    textContent += '-'.repeat(section.title.length) + '\n\n';
    
    for (const line of section.content) {
      if (line === '') {
        textContent += '\n';
      } else if (line.startsWith('===')) {
        const cleanTitle = line.replace(/===/g, '').trim();
        textContent += `\n${cleanTitle}\n`;
        textContent += '~'.repeat(cleanTitle.length) + '\n\n';
      } else {
        textContent += `${line}\n`;
      }
    }
    
    textContent += '\n' + '='.repeat(80) + '\n\n';
  }
  
  // Appendix
  textContent += `${content.appendix.title}\n`;
  textContent += '-'.repeat(content.appendix.title.length) + '\n\n';
  
  for (const line of content.appendix.content) {
    if (line === '') {
      textContent += '\n';
    } else {
      textContent += `${line}\n`;
    }
  }
  
  textContent += '\n' + '='.repeat(80) + '\n';
  textContent += `\nAntiFraud / by HCoragem - Documentação Técnica\n`;
  
  // Create blob and download
  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `AntiFraud_Documentacao_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
