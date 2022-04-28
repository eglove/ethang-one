interface IImage {
  altText: string;
  height: number;
  width: number;
  url: string;
}

export class Image implements IImage {
  altText: string;
  height: number;
  width: number;
  url: string;

  constructor(parameters: IImage) {
    this.altText = parameters.altText;
    this.height = parameters.height;
    this.width = parameters.width;
    this.url = parameters.url;
  }
}
