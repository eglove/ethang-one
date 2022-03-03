type ImageConstructor = {
  altText: string;
  height: number;
  url: string;
  width: number;
};

export const blogImage = (fileName: string): string => {
  return `/images/blog-images/${fileName}`;
};

export const schoolLogoImage = (fileName: string): string => {
  return `/images/school-logos/${fileName}`;
};

export const technologyLogoImage = (fileName: string): string => {
  return `/images/technology-logos/${fileName}`;
};

export class Image {
  public altText: string;
  public height: number;
  public url: string;
  public width: number;

  constructor(parameters: ImageConstructor) {
    this.altText = parameters.altText;
    this.height = parameters.height;
    this.url = parameters.url;
    this.width = parameters.width;
  }
}
