export default class SvgSymbol {
  type: string;
  id: string;
  title: string;
  viewBox: string;

  constructor(id: string, title: string, viewBox: string) {
    this.type = 'symbol';
    this.id = id;
    this.title = title;
    this.viewBox = viewBox;
  }
}