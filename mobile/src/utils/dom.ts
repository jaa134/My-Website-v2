export function htmlToElement(htmlStr: string) {
  const template = document.createElement('template');
  template.innerHTML = htmlStr.trim();
  return template.content.firstElementChild as HTMLElement | null;
}

export function htmlToElements(htmlStr: string) {
  const template = document.createElement('template');
  template.innerHTML = htmlStr.trim();
  return Array.from(template.content.children) as HTMLElement[];
}
