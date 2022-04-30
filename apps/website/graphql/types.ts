export interface Query {
  data: Data;
}

export interface Data {
  blogsList: List<Blog>;
  coursesList: List<Course>;
  imagesList: List<Image>;
  technologyLogosList: List<TechnologyLogo>;
}

export interface List<Type> {
  items?: Type[];
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

export interface Course {
  id: string;
  rating: number;
  ratingUrl?: string;
  school: School;
  title: string;
  courseUrls: List<CourseUrl>;
  instructors: List<Person>;
  duration?: number;
  yearUpdated: number;
}

export interface CourseUrl {
  url: string;
  school: School;
}

export interface Person {
  birthday: string;
  heightIn: number;
  firstName: string;
  lastName: string;
  weightLbs: number;
}

export interface School {
  name: string;
  url: string;
  image: Image;
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
