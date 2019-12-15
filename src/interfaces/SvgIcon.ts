import { svgTypes } from './index';


export default class SvgIcon {
  type: svgTypes.icon;
  icon: string;
  id: number;
  title: string;
  data: {
    name: string,
    lastModified: number,
  };

  constructor(icon: string, id: number, title: string, data: { name: string, lastModified: number}) {
      this.type = svgTypes.icon;
      this.icon = icon;
      this.id = id;
      this.title = title;
      this.data = {
        name: data.name,
        lastModified: data.lastModified,
      };
  }
}