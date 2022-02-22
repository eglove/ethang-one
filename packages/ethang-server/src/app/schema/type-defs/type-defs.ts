import { gql } from '@apollo/client';

import { TypeDefinition } from './type-defnition';

const query = new TypeDefinition().queries;

export const typeDefs = gql`
  scalar BigInt
  scalar Blob
  scalar Date
  scalar DateTime
  scalar JSON
  scalar Time

  enum Rating {
    ONE
    TWO
    THREE
    FOUR
    FIVE
  }

  enum Role {
    USER
    ADMIN
  }

  ${query}

  type Blog {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    title: String!
    slug: String!
    content: String!
    imageId: String!
    Image: Image!
    BlogAuthor: [BlogAuthor!]
  }

  type BlogAuthor {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    blogId: String!
    personId: String!
    Blog: Blog!
    Person: Person!
  }

  type Course {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    title: String!
    yearUpdated: Float!
    recommended: Boolean!
    duration: Float!
    schoolId: String!
    complete: Boolean!
    order: Float!
    rating: Rating
    ratingUrl: String
    School: School!
    CourseInstructor: [CourseInstructor!]
    CourseUrl: [CourseUrl!]
  }

  type CourseUrl {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    courseId: String!
    url: String!
    schoolId: String!
    Course: Course!
    School: School!
  }

  type CourseInstructor {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    instructorId: String!
    courseId: String!
    Course: Course!
    Person: Person!
  }

  type Image {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    url: String!
    altText: String!
    height: String!
    width: String!
    Blog: [Blog!]
    Person: [Person!]
    Project: [Project!]
    School: [School!]
    TechnologyLogo: TechnologyLogo
  }

  type Person {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    websiteUrl: String
    githubUrl: String
    linkedinUrl: String
    summary: String
    imageId: String
    firstName: String!
    lastName: String!
    Image: Image
    BlogAuthor: [BlogAuthor!]
    CourseInstructor: [CourseInstructor!]
    ProjectContributor: [ProjectContributor!]
    User: [User!]
  }

  type Project {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    name: String!
    slug: String!
    githubUrl: String
    projectUrl: String
    summary: String!
    imageId: String!
    Image: Image!
    ProjectContributor: [ProjectContributor!]
  }

  type ProjectContributor {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    contributorId: String!
    projectId: String!
    Person: Person!
    Project: Project!
  }

  type School {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    name: String!
    url: String!
    description: String!
    imageId: String!
    Image: Image!
    Course: [Course!]
    CourseUrl: [CourseUrl!]
  }

  type TechnologyLogo {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    name: String!
    isOnHomepage: Boolean!
    imageId: String!
    Image: Image!
  }
`;
