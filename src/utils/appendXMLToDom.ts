export default function appendXMLToDom(container: HTMLElement, text: string, className?: string) {
  const parser = new DOMParser();
  const el = parser.parseFromString(text, "text/xml").documentElement;
  if (className) el.setAttribute('class', className);
  container.appendChild(el);
}