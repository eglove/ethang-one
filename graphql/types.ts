export interface Query {
  data: Data;
}

export interface Data {
  technologyLogosList: TechnologyLogosList;
}

export interface TechnologyLogosList {
  items?: (TechnologyLogo)[] | null;
}

export interface TechnologyLogo {
  id: string;
  image: Image;
}

export interface Image {
  id: string;
  altText: string;
  height: number;
  width: number;
  image: ImageMetadata;
}

export interface ImageMetadata {
  downloadUrl: string;
}
