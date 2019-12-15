export default class SvgFile {
  src: string;
  id: number;
  title: string;
  data: {
    name: string,
    lastModified: number
  };

  constructor(src: string, title: string, id: number, name: string, lastModified: number) {
    this.src = src;
    this.title = title;
    this.id = id;
    this.data = {
      name,
      lastModified,
    };
  }
}

