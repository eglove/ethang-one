type ImageType = {
  altText: string;
  height: number;
  url: string;
  width: number;
};

export class Image implements ImageType {
  altText: string;
  height: number;
  width: number;
  url: string;

  constructor(parameters: ImageType) {
    this.altText = parameters.altText;
    this.height = parameters.height;
    this.width = parameters.width;
    this.url = parameters.url;
  }
}
