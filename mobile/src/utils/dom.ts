export function htmlToElement(html: string) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstElementChild as HTMLElement | null;
}

export function htmlToElements(html: string) {
  var template = document.createElement('template');
  template.innerHTML = html;
  return Array.from(template.content.children) as HTMLElement[];
}
