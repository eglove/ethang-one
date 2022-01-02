export interface Blog {
  authors?: BlogAuthor[];
  content: string;
  createdAt: Date;
  featuredImage: Image;
  id: string;
  imageId: string;
  slug: string;
  title: string;
  updatedAt: Date;
}

export interface BlogAuthor {
  author: Person;
  blog: Blog;
  blogId: string;
  createdAt: Date;
  id: string;
  personId: string;
  updatedAt: Date;
}

export interface Project {
  contributors?: ProjectContributor[];
  createdAt: Date;
  featuredImage: Image;
  githubUrl?: string;
  id: string;
  imageId: string;
  name: string;
  projectUrl?: string;
  slug: string;
  summary: string;
  updatedAt: Date;
}

export interface ProjectContributor {
  contributor: Person;
  contributorId: string;
  createdAt: Date;
  id: string;
  project: Project;
  projectId: string;
  updatedAt: Date;
}

export interface Person {
  User?: User[];
  blogs?: BlogAuthor[];
  courses?: CourseInstructor[];
  createdAt: Date;
  firstName: string;
  githubUrl?: string;
  id: string;
  image?: Image;
  imageId?: string;
  lastName: string;
  linkedinUrl?: string;
  projects?: ProjectContributor[];
  summary?: string;
  updatedAt: Date;
  websiteUrl?: string;
}

export interface Course {
  complete: boolean;
  courseUrls?: string[];
  createdAt: Date;
  duration: number;
  id: string;
  instructors?: CourseInstructor[];
  order: number;
  recommended: boolean;
  school: School;
  schoolId: string;
  title: string;
  updatedAt: Date;
  yearUpdated: number;
}

export interface CourseInstructor {
  course: Course;
  courseId: string;
  createdAt: Date;
  id: string;
  instructor: Person;
  instructorId: string;
  updatedAt: Date;
}

export interface School {
  courses?: Course[];
  createdAt: Date;
  description: string;
  id: string;
  imageId: string;
  logo: Image;
  name: string;
  updatedAt: Date;
  url: string;
}

export interface TechnologyLogo {
  createdAt: Date;
  id: string;
  imageId: string;
  isOnHomepage: boolean;
  logo: Image;
  name: string;
  updatedAt: Date;
}

export interface Image {
  TechnologyLogos?: TechnologyLogo[];
  altText: string;
  blogs?: Blog[];
  createdAt: Date;
  height: string;
  id: string;
  persons?: Person[];
  projects?: Project[];
  schools?: School[];
  updatedAt: Date;
  url: string;
  width: string;
}

export interface User {
  createdAt: Date;
  id: string;
  password: string;
  person: Person;
  personId: string;
  role: Role;
  updatedAt: Date;
  username: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
