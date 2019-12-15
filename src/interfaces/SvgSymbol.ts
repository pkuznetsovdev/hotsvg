import { svgTypes } from './index';

export default class SvgSymbol {
  id: string;
  title: string;
  viewBox: string;

  constructor(id: string, title: string, viewBox: string) {
    this.id = id;
    this.title = title;
    this.viewBox = viewBox;
  }
}