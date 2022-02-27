type ImageConstructor = {
  altText: string;
  height: number;
  url: string;
  width: number;
};

export const blogImage = (fileName: string): string => {
  return `/images/blog-images/${fileName}`;
};

export class Image {
  static EthanAvatar = new Image({
    altText: 'Ethan Glover Avatar',
    height: 449,
    url: 'https://avatars.githubusercontent.com/u/3924176?v=4',
    width: 449,
  });

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
