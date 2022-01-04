export interface Blog {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  slug: string;
  content: string;
  imageId: string;
  featuredImage: Image;
  authors?: BlogAuthor[];
}

export interface BlogAuthor {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  blogId: string;
  personId: string;
  blog: Blog;
  author: Person;
}

export interface Project {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  githubUrl?: string;
  projectUrl?: string;
  summary: string;
  imageId: string;
  featuredImage: Image;
  contributors?: ProjectContributor[];
}

export interface ProjectContributor {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contributorId: string;
  projectId: string;
  contributor: Person;
  project: Project;
}

export interface Person {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  websiteUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  summary?: string;
  imageId?: string;
  firstName: string;
  lastName: string;
  image?: Image;
  blogs?: BlogAuthor[];
  courses?: CourseInstructor[];
  projects?: ProjectContributor[];
  User?: User[];
}

export interface Course {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  yearUpdated: number;
  recommended: boolean;
  duration: number;
  schoolId: string;
  courseUrls?: string[];
  complete: boolean;
  order: number;
  rating?: Rating;
  ratingUrl?: string;
  school: School;
  instructors?: CourseInstructor[];
}

export interface CourseInstructor {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  instructorId: string;
  courseId: string;
  course: Course;
  instructor: Person;
}

export interface School {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  url: string;
  description: string;
  imageId: string;
  logo: Image;
  courses?: Course[];
}

export interface TechnologyLogo {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  isOnHomepage: boolean;
  imageId: string;
  logo: Image;
}

export interface Image {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
  altText: string;
  height: string;
  width: string;
  blogs?: Blog[];
  persons?: Person[];
  projects?: Project[];
  schools?: School[];
  TechnologyLogos?: TechnologyLogo;
}

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  password: string;
  personId: string;
  role: Role;
  person: Person;
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum Rating {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
}
