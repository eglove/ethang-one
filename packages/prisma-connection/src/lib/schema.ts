export enum Rating {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
  FOUR = 'FOUR',
  FIVE = 'FIVE',
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface Blog {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  slug: string;
  content: string;
  imageId: string;
  Image: Image;
  BlogAuthor?: BlogAuthor[];
}

export interface BlogAuthor {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  blogId: string;
  personId: string;
  Blog: Blog;
  Person: Person;
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
  complete: boolean;
  order: number;
  rating?: Rating;
  ratingUrl?: string;
  School: School;
  CourseInstructor?: CourseInstructor[];
  CourseUrl?: CourseUrl[];
}

export interface CourseUrl {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  courseId: string;
  url: string;
  schoolId: string;
  Course: Course;
  School: School;
}

export interface CourseInstructor {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  instructorId: string;
  courseId: string;
  Course: Course;
  Person: Person;
}

export interface Image {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string;
  altText: string;
  height: string;
  width: string;
  Blog?: Blog[];
  Person?: Person[];
  Project?: Project[];
  School?: School[];
  TechnologyLogo?: TechnologyLogo;
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
  Image?: Image;
  BlogAuthor?: BlogAuthor[];
  CourseInstructor?: CourseInstructor[];
  ProjectContributor?: ProjectContributor[];
  User?: User[];
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
  Image: Image;
  ProjectContributor?: ProjectContributor[];
}

export interface ProjectContributor {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contributorId: string;
  projectId: string;
  Person: Person;
  Project: Project;
}

export interface School {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  url: string;
  description: string;
  imageId: string;
  Image: Image;
  Course?: Course[];
  CourseUrl?: CourseUrl[];
}

export interface TechnologyLogo {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  isOnHomepage: boolean;
  imageId: string;
  Image: Image;
}

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  password: string;
  personId: string;
  role: Role;
  Person: Person;
}

export type UserWhereUniqueInput = {
  id?: string;
  username?: string;
  username_password?: UserUsernamePasswordCompoundUniqueInput;
};

export type UserUsernamePasswordCompoundUniqueInput = {
  username: string;
  password: string;
};
