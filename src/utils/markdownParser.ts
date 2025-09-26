export interface MarkdownParserOptions {
  sanitize?: boolean;
  allowedTags?: string[];
  className?: {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    p?: string;
    ul?: string;
    ol?: string;
    li?: string;
    blockquote?: string;
    code?: string;
    pre?: string;
    strong?: string;
    em?: string;
    a?: string;
    img?: string;
    table?: string;
    thead?: string;
    tbody?: string;
    tr?: string;
    th?: string;
    td?: string;
  };
}

export class MarkdownParser {
  private options: MarkdownParserOptions;

  constructor(options: MarkdownParserOptions = {}) {
    this.options = {
      sanitize: true,
      allowedTags: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'br', 'strong', 'em', 'u', 'del',
        'ul', 'ol', 'li', 'blockquote',
        'code', 'pre', 'a', 'img',
        'table', 'thead', 'tbody', 'tr', 'th', 'td'
      ],
      className: {
        h1: 'text-4xl font-bold text-secondary-900 mt-12 mb-6 leading-tight',
        h2: 'text-3xl font-bold text-secondary-900 mt-10 mb-5 leading-tight',
        h3: 'text-2xl font-semibold text-secondary-900 mt-8 mb-4 leading-tight',
        h4: 'text-xl font-semibold text-secondary-900 mt-6 mb-3 leading-tight',
        h5: 'text-lg font-semibold text-secondary-900 mt-4 mb-2 leading-tight',
        h6: 'text-base font-semibold text-secondary-900 mt-4 mb-2 leading-tight',
        p: 'text-secondary-700 leading-relaxed mb-4',
        ul: 'list-none space-y-2 mb-6 ml-4',
        ol: 'list-decimal list-inside space-y-2 mb-6 ml-4',
        li: 'text-secondary-700 leading-relaxed relative pl-6',
        blockquote: 'border-l-4 border-primary-300 pl-6 py-4 my-6 bg-primary-50 rounded-r-lg italic text-secondary-700',
        code: 'bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-sm font-mono',
        pre: 'bg-secondary-900 text-secondary-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono',
        strong: 'font-semibold text-secondary-900',
        em: 'italic text-secondary-700',
        a: 'text-primary-600 hover:text-primary-700 underline font-medium',
        img: 'max-w-full h-auto rounded-lg  my-6',
        table: 'w-full border-collapseborder border-secondary-300 my-6 rounded-lg overflow-hidden',
        thead: 'bg-secondary-100',
        tbody: 'bg-white',
        tr: 'border-b border-secondary-200',
        th: 'border border-secondary-300 px-4 py-3 text-left font-semibold text-secondary-900',
        td: 'border border-secondary-300 px-4 py-3 text-secondary-700'
      },
      ...options
    };
  }

  public parse(markdown: string): string {
    let html = markdown;

    // Handle code blocks first (to prevent interference with other parsing)
    html = this.parseCodeBlocks(html);

    // Parse headers
    html = this.parseHeaders(html);

    // Parse bold and italic
    html = this.parseBoldItalic(html);

    // Parse links
    html = this.parseLinks(html);

    // Parse images
    html = this.parseImages(html);

    // Parse lists
    html = this.parseLists(html);

    // Parse blockquotes
    html = this.parseBlockquotes(html);

    // Parse inline code
    html = this.parseInlineCode(html);

    // Parse tables
    html = this.parseTables(html);

    // Parse paragraphs (do this last)
    html = this.parseParagraphs(html);

    // Parse line breaks
    html = this.parseLineBreaks(html);

    return html;
  }

  private parseHeaders(text: string): string {
    const headerRegex = /^(#{1,6})\s+(.+)$/gm;
    return text.replace(headerRegex, (_match, hashes, content) => {
      const level = hashes.length;
      const tag = `h${level}`;
      const className = this.options.className?.[tag as keyof typeof this.options.className] || '';
      return `<${tag} class="${className}">${content.trim()}</${tag}>`;
    });
  }

  private parseBoldItalic(text: string): string {
    // Bold and italic combined (***text***)
    text = text.replace(/\*\*\*(.+?)\*\*\*/g, (_match, content) => {
      const strongClass = this.options.className?.strong || '';
      const emClass = this.options.className?.em || '';
      return `<strong class="${strongClass}"><em class="${emClass}">${content}</em></strong>`;
    });

    // Bold (**text** or __text__)
    text = text.replace(/\*\*(.+?)\*\*/g, (_match, content) => {
      const className = this.options.className?.strong || '';
      return `<strong class="${className}">${content}</strong>`;
    });
    text = text.replace(/__(.+?)__/g, (_match, content) => {
      const className = this.options.className?.strong || '';
      return `<strong class="${className}">${content}</strong>`;
    });

    // Italic (*text* or _text_)
    text = text.replace(/\*(.+?)\*/g, (_match, content) => {
      const className = this.options.className?.em || '';
      return `<em class="${className}">${content}</em>`;
    });
    text = text.replace(/_(.+?)_/g, (_match, content) => {
      const className = this.options.className?.em || '';
      return `<em class="${className}">${content}</em>`;
    });

    return text;
  }

  private parseLinks(text: string): string {
    // Links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    return text.replace(linkRegex, (_match, linkText, url) => { 
      const className = this.options.className?.a || '';
      return `<a href="${url}" class="${className}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    });
  }

  private parseImages(text: string): string {
    // Images ![alt](src)
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    return text.replace(imageRegex, (_match, alt, src) => {
      const className = this.options.className?.img || '';
      return `<img src="${src}" alt="${alt}" class="${className}" />`;
    });
  }

  private parseLists(text: string): string {
    // Unordered lists
    text = text.replace(/^(\s*)-\s+(.+)$/gm, (_match, _indent, content) => { 
      const liClass = this.options.className?.li || '';
      return `<li class="${liClass}"><span class="absolute left-0 text-primary-600">•</span>${content}</li>`;
    });

    // Ordered lists
    text = text.replace(/^(\s*)\d+\.\s+(.+)$/gm, (_match, _indent, content) => { 
      const liClass = this.options.className?.li || '';
      return `<li class="${liClass}">${content}</li>`;
    });

    // Wrap consecutive list items in ul/ol tags
    text = this.wrapListItems(text);

    return text;
  }

  private wrapListItems(text: string): string {
    const lines = text.split('\n');
    const result: string[] = [];
    let inUnorderedList = false;
    let inOrderedList = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isUnorderedListItem = line.includes('<li class=') && line.includes('•');
      const isOrderedListItem = line.includes('<li class=') && !line.includes('•');

      if (isUnorderedListItem) {
        if (!inUnorderedList) {
          if (inOrderedList) {
            result.push(`</ol>`);
            inOrderedList = false;
          }
          const ulClass = this.options.className?.ul || '';
          result.push(`<ul class="${ulClass}">`);
          inUnorderedList = true;
        }
        result.push(line);
      } else if (isOrderedListItem) {
        if (!inOrderedList) {
          if (inUnorderedList) {
            result.push(`</ul>`);
            inUnorderedList = false;
          }
          const olClass = this.options.className?.ol || '';
          result.push(`<ol class="${olClass}">`);
          inOrderedList = true;
        }
        result.push(line);
      } else {
        if (inUnorderedList) {
          result.push(`</ul>`);
          inUnorderedList = false;
        }
        if (inOrderedList) {
          result.push(`</ol>`);
          inOrderedList = false;
        }
        result.push(line);
      }
    }

    // Close any remaining lists
    if (inUnorderedList) {
      result.push(`</ul>`);
    }
    if (inOrderedList) {
      result.push(`</ol>`);
    }

    return result.join('\n');
  }

  private parseBlockquotes(text: string): string {
    const blockquoteRegex = /^>\s+(.+)$/gm;
    return text.replace(blockquoteRegex, (_match, content) => {
      const className = this.options.className?.blockquote || '';
      return `<blockquote class="${className}">${content}</blockquote>`;
    });
  }

  private parseCodeBlocks(text: string): string {
    // Code blocks with language specification
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    return text.replace(codeBlockRegex, (_match, _language, code) => {
      const preClass = this.options.className?.pre || '';
      const codeClass = this.options.className?.code || '';
      return `<pre class="${preClass}"><code class="${codeClass}">${this.escapeHtml(code.trim())}</code></pre>`;
    });
  }

  private parseInlineCode(text: string): string {
    // Inline code `code`
    const inlineCodeRegex = /`([^`]+)`/g;
    return text.replace(inlineCodeRegex, (_match, code) => {
      const className = this.options.className?.code || '';
      return `<code class="${className}">${this.escapeHtml(code)}</code>`;
    });
  }

  private parseTables(text: string): string {
    const tableRegex = /^\|(.+)\|\s*\n\|[-\s|:]+\|\s*\n((?:\|.+\|\s*\n?)*)/gm;
    
    return text.replace(tableRegex, (_match, headerRow, bodyRows) => {
      const tableClass = this.options.className?.table || '';
      const theadClass = this.options.className?.thead || '';
      const tbodyClass = this.options.className?.tbody || '';
      const trClass = this.options.className?.tr || '';
      const thClass = this.options.className?.th || '';
      const tdClass = this.options.className?.td || '';

      // Parse header
      const headers = headerRow.split('|').map((h: string) => h.trim()).filter((h: string) => h);
      const headerHtml = headers.map((h: string) => `<th class="${thClass}">${h}</th>`).join('');

      // Parse body rows
      const rows = bodyRows.trim().split('\n').filter((row: string) => row.trim());
      const bodyHtml = rows.map((row: string) => {
        const cells = row.split('|').map((c: string) => c.trim()).filter((c: string) => c);
        const cellsHtml = cells.map((c: string) => `<td class="${tdClass}">${c}</td>`).join('');
        return `<tr class="${trClass}">${cellsHtml}</tr>`;
      }).join('');

      return `
        <table class="${tableClass}">
          <thead class="${theadClass}">
            <tr class="${trClass}">${headerHtml}</tr>
          </thead>
          <tbody class="${tbodyClass}">
            ${bodyHtml}
          </tbody>
        </table>
      `;
    });
  }

  private parseParagraphs(text: string): string {
    // Split by double newlines to identify paragraphs
    const paragraphs = text.split(/\n\s*\n/);
    const pClass = this.options.className?.p || '';
    
    return paragraphs.map(paragraph => {
      const trimmed = paragraph.trim();
      
      // Skip if already wrapped in HTML tags or empty
      if (!trimmed || 
          trimmed.startsWith('<h') || 
          trimmed.startsWith('<ul') || 
          trimmed.startsWith('<ol') || 
          trimmed.startsWith('<blockquote') || 
          trimmed.startsWith('<pre') || 
          trimmed.startsWith('<table') ||
          trimmed.startsWith('<li')) {
        return trimmed;
      }
      
      return `<p class="${pClass}">${trimmed}</p>`;
    }).join('\n\n');
  }

  private parseLineBreaks(text: string): string {
    // Convert single newlines to <br> tags within paragraphs
    return text.replace(/(?<!>)\n(?!<)/g, '<br />');
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Static method for quick parsing
  static parse(markdown: string, options?: MarkdownParserOptions): string {
    const parser = new MarkdownParser(options);
    return parser.parse(markdown);
  }
}

// Export default parser instance
export const markdownParser = new MarkdownParser();

// Utility function for React components
export const parseMarkdown = (markdown: string, options?: MarkdownParserOptions): string => {
  return MarkdownParser.parse(markdown, options);
};
