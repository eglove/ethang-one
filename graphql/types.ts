export interface Query {
  data: Data;
}

export interface Data {
  blogsList: List<Blog>;
  technologyLogosList: List<TechnologyLogo>;
}

export interface List<Type> {
  items?: (Type)[] | null;
}

export interface Blog {
  authors: List<Person>;
  createdAt: string;
  description: string;
  featuredImage: Image;
  orderDate: string;
  slug: string;
  title: string;
  updatedAt: string;
}

export interface Person {
  firstName: string;
  lastName: string;
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
