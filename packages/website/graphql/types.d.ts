export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBlog = {
  __typename?: 'AggregateBlog';
  _count?: Maybe<BlogCountAggregate>;
  _max?: Maybe<BlogMaxAggregate>;
  _min?: Maybe<BlogMinAggregate>;
};

export type AggregateBlogAuthor = {
  __typename?: 'AggregateBlogAuthor';
  _count?: Maybe<BlogAuthorCountAggregate>;
  _max?: Maybe<BlogAuthorMaxAggregate>;
  _min?: Maybe<BlogAuthorMinAggregate>;
};

export type AggregateCourse = {
  __typename?: 'AggregateCourse';
  _avg?: Maybe<CourseAvgAggregate>;
  _count?: Maybe<CourseCountAggregate>;
  _max?: Maybe<CourseMaxAggregate>;
  _min?: Maybe<CourseMinAggregate>;
  _sum?: Maybe<CourseSumAggregate>;
};

export type AggregateCourseInstructor = {
  __typename?: 'AggregateCourseInstructor';
  _count?: Maybe<CourseInstructorCountAggregate>;
  _max?: Maybe<CourseInstructorMaxAggregate>;
  _min?: Maybe<CourseInstructorMinAggregate>;
};

export type AggregateImage = {
  __typename?: 'AggregateImage';
  _count?: Maybe<ImageCountAggregate>;
  _max?: Maybe<ImageMaxAggregate>;
  _min?: Maybe<ImageMinAggregate>;
};

export type AggregatePerson = {
  __typename?: 'AggregatePerson';
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
};

export type AggregateProjectContributor = {
  __typename?: 'AggregateProjectContributor';
  _count?: Maybe<ProjectContributorCountAggregate>;
  _max?: Maybe<ProjectContributorMaxAggregate>;
  _min?: Maybe<ProjectContributorMinAggregate>;
};

export type AggregateSchool = {
  __typename?: 'AggregateSchool';
  _count?: Maybe<SchoolCountAggregate>;
  _max?: Maybe<SchoolMaxAggregate>;
  _min?: Maybe<SchoolMinAggregate>;
};

export type AggregateTechnologyLogo = {
  __typename?: 'AggregateTechnologyLogo';
  _count?: Maybe<TechnologyLogoCountAggregate>;
  _max?: Maybe<TechnologyLogoMaxAggregate>;
  _min?: Maybe<TechnologyLogoMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Blog = {
  __typename?: 'Blog';
  _count: BlogCount;
  authors: Array<BlogAuthor>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  featuredImage: Image;
  id: Scalars['String'];
  imageId: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type BlogAuthorsArgs = {
  cursor?: InputMaybe<BlogAuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogAuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};

export type BlogAuthor = {
  __typename?: 'BlogAuthor';
  author: Person;
  blog: Blog;
  blogId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  personId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogAuthorCountAggregate = {
  __typename?: 'BlogAuthorCountAggregate';
  _all: Scalars['Int'];
  blogId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  personId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type BlogAuthorCountOrderByAggregateInput = {
  blogId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogAuthorCreateInput = {
  author: PersonCreateNestedOneWithoutBlogsInput;
  blog: BlogCreateNestedOneWithoutAuthorsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogAuthorCreateManyAuthorInput = {
  blogId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogAuthorCreateManyAuthorInputEnvelope = {
  data: Array<BlogAuthorCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BlogAuthorCreateManyBlogInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  personId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogAuthorCreateManyBlogInputEnvelope = {
  data: Array<BlogAuthorCreateManyBlogInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BlogAuthorCreateManyInput = {
  blogId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  personId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogAuthorCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogAuthorCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<BlogAuthorCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<BlogAuthorCreateManyAuthorInputEnvelope>;
};

export type BlogAuthorCreateNestedManyWithoutBlogInput = {
  connect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogAuthorCreateOrConnectWithoutBlogInput>>;
  create?: InputMaybe<Array<BlogAuthorCreateWithoutBlogInput>>;
  createMany?: InputMaybe<BlogAuthorCreateManyBlogInputEnvelope>;
};

export type BlogAuthorCreateOrConnectWithoutAuthorInput = {
  create: BlogAuthorCreateWithoutAuthorInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorCreateOrConnectWithoutBlogInput = {
  create: BlogAuthorCreateWithoutBlogInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorCreateWithoutAuthorInput = {
  blog: BlogCreateNestedOneWithoutAuthorsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogAuthorCreateWithoutBlogInput = {
  author: PersonCreateNestedOneWithoutBlogsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogAuthorGroupBy = {
  __typename?: 'BlogAuthorGroupBy';
  _count?: Maybe<BlogAuthorCountAggregate>;
  _max?: Maybe<BlogAuthorMaxAggregate>;
  _min?: Maybe<BlogAuthorMinAggregate>;
  blogId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  personId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogAuthorListRelationFilter = {
  every?: InputMaybe<BlogAuthorWhereInput>;
  none?: InputMaybe<BlogAuthorWhereInput>;
  some?: InputMaybe<BlogAuthorWhereInput>;
};

export type BlogAuthorMaxAggregate = {
  __typename?: 'BlogAuthorMaxAggregate';
  blogId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogAuthorMaxOrderByAggregateInput = {
  blogId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogAuthorMinAggregate = {
  __typename?: 'BlogAuthorMinAggregate';
  blogId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogAuthorMinOrderByAggregateInput = {
  blogId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogAuthorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BlogAuthorOrderByWithAggregationInput = {
  _count?: InputMaybe<BlogAuthorCountOrderByAggregateInput>;
  _max?: InputMaybe<BlogAuthorMaxOrderByAggregateInput>;
  _min?: InputMaybe<BlogAuthorMinOrderByAggregateInput>;
  blogId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogAuthorOrderByWithRelationInput = {
  author?: InputMaybe<PersonOrderByWithRelationInput>;
  blog?: InputMaybe<BlogOrderByWithRelationInput>;
  blogId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum BlogAuthorScalarFieldEnum {
  BlogId = 'blogId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PersonId = 'personId',
  UpdatedAt = 'updatedAt'
}

export type BlogAuthorScalarWhereInput = {
  AND?: InputMaybe<Array<BlogAuthorScalarWhereInput>>;
  NOT?: InputMaybe<Array<BlogAuthorScalarWhereInput>>;
  OR?: InputMaybe<Array<BlogAuthorScalarWhereInput>>;
  blogId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  personId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogAuthorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BlogAuthorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BlogAuthorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BlogAuthorScalarWhereWithAggregatesInput>>;
  blogId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  personId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type BlogAuthorUpdateInput = {
  author?: InputMaybe<PersonUpdateOneRequiredWithoutBlogsInput>;
  blog?: InputMaybe<BlogUpdateOneRequiredWithoutAuthorsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpdateManyWithWhereWithoutAuthorInput = {
  data: BlogAuthorUpdateManyMutationInput;
  where: BlogAuthorScalarWhereInput;
};

export type BlogAuthorUpdateManyWithWhereWithoutBlogInput = {
  data: BlogAuthorUpdateManyMutationInput;
  where: BlogAuthorScalarWhereInput;
};

export type BlogAuthorUpdateManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogAuthorCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<BlogAuthorCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<BlogAuthorCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogAuthorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogAuthorUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<BlogAuthorUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<BlogAuthorUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type BlogAuthorUpdateManyWithoutBlogInput = {
  connect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogAuthorCreateOrConnectWithoutBlogInput>>;
  create?: InputMaybe<Array<BlogAuthorCreateWithoutBlogInput>>;
  createMany?: InputMaybe<BlogAuthorCreateManyBlogInputEnvelope>;
  delete?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogAuthorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogAuthorUpdateWithWhereUniqueWithoutBlogInput>>;
  updateMany?: InputMaybe<Array<BlogAuthorUpdateManyWithWhereWithoutBlogInput>>;
  upsert?: InputMaybe<Array<BlogAuthorUpsertWithWhereUniqueWithoutBlogInput>>;
};

export type BlogAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
  data: BlogAuthorUpdateWithoutAuthorInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorUpdateWithWhereUniqueWithoutBlogInput = {
  data: BlogAuthorUpdateWithoutBlogInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorUpdateWithoutAuthorInput = {
  blog?: InputMaybe<BlogUpdateOneRequiredWithoutAuthorsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpdateWithoutBlogInput = {
  author?: InputMaybe<PersonUpdateOneRequiredWithoutBlogsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
  create: BlogAuthorCreateWithoutAuthorInput;
  update: BlogAuthorUpdateWithoutAuthorInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorUpsertWithWhereUniqueWithoutBlogInput = {
  create: BlogAuthorCreateWithoutBlogInput;
  update: BlogAuthorUpdateWithoutBlogInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorWhereInput = {
  AND?: InputMaybe<Array<BlogAuthorWhereInput>>;
  NOT?: InputMaybe<Array<BlogAuthorWhereInput>>;
  OR?: InputMaybe<Array<BlogAuthorWhereInput>>;
  author?: InputMaybe<PersonRelationFilter>;
  blog?: InputMaybe<BlogRelationFilter>;
  blogId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  personId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogAuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type BlogCount = {
  __typename?: 'BlogCount';
  authors: Scalars['Int'];
};

export type BlogCountAggregate = {
  __typename?: 'BlogCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  slug: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type BlogCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogCreateInput = {
  authors?: InputMaybe<BlogAuthorCreateNestedManyWithoutBlogInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  featuredImage: ImageCreateNestedOneWithoutBlogsInput;
  id?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateManyFeaturedImageInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateManyFeaturedImageInputEnvelope = {
  data: Array<BlogCreateManyFeaturedImageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BlogCreateManyInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  imageId: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateNestedManyWithoutFeaturedImageInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutFeaturedImageInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutFeaturedImageInput>>;
  createMany?: InputMaybe<BlogCreateManyFeaturedImageInputEnvelope>;
};

export type BlogCreateNestedOneWithoutAuthorsInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutAuthorsInput>;
  create?: InputMaybe<BlogCreateWithoutAuthorsInput>;
};

export type BlogCreateOrConnectWithoutAuthorsInput = {
  create: BlogCreateWithoutAuthorsInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateOrConnectWithoutFeaturedImageInput = {
  create: BlogCreateWithoutFeaturedImageInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateWithoutAuthorsInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  featuredImage: ImageCreateNestedOneWithoutBlogsInput;
  id?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateWithoutFeaturedImageInput = {
  authors?: InputMaybe<BlogAuthorCreateNestedManyWithoutBlogInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogGroupBy = {
  __typename?: 'BlogGroupBy';
  _count?: Maybe<BlogCountAggregate>;
  _max?: Maybe<BlogMaxAggregate>;
  _min?: Maybe<BlogMinAggregate>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogListRelationFilter = {
  every?: InputMaybe<BlogWhereInput>;
  none?: InputMaybe<BlogWhereInput>;
  some?: InputMaybe<BlogWhereInput>;
};

export type BlogMaxAggregate = {
  __typename?: 'BlogMaxAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogMinAggregate = {
  __typename?: 'BlogMinAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BlogOrderByWithAggregationInput = {
  _count?: InputMaybe<BlogCountOrderByAggregateInput>;
  _max?: InputMaybe<BlogMaxOrderByAggregateInput>;
  _min?: InputMaybe<BlogMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogOrderByWithRelationInput = {
  authors?: InputMaybe<BlogAuthorOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  featuredImage?: InputMaybe<ImageOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogRelationFilter = {
  is?: InputMaybe<BlogWhereInput>;
  isNot?: InputMaybe<BlogWhereInput>;
};

export enum BlogScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageId = 'imageId',
  Slug = 'slug',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type BlogScalarWhereInput = {
  AND?: InputMaybe<Array<BlogScalarWhereInput>>;
  NOT?: InputMaybe<Array<BlogScalarWhereInput>>;
  OR?: InputMaybe<Array<BlogScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BlogScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imageId?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type BlogUpdateInput = {
  authors?: InputMaybe<BlogAuthorUpdateManyWithoutBlogInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<ImageUpdateOneRequiredWithoutBlogsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateManyWithWhereWithoutFeaturedImageInput = {
  data: BlogUpdateManyMutationInput;
  where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithoutFeaturedImageInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutFeaturedImageInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutFeaturedImageInput>>;
  createMany?: InputMaybe<BlogCreateManyFeaturedImageInputEnvelope>;
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutFeaturedImageInput>>;
  updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutFeaturedImageInput>>;
  upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutFeaturedImageInput>>;
};

export type BlogUpdateOneRequiredWithoutAuthorsInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutAuthorsInput>;
  create?: InputMaybe<BlogCreateWithoutAuthorsInput>;
  update?: InputMaybe<BlogUpdateWithoutAuthorsInput>;
  upsert?: InputMaybe<BlogUpsertWithoutAuthorsInput>;
};

export type BlogUpdateWithWhereUniqueWithoutFeaturedImageInput = {
  data: BlogUpdateWithoutFeaturedImageInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpdateWithoutAuthorsInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<ImageUpdateOneRequiredWithoutBlogsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateWithoutFeaturedImageInput = {
  authors?: InputMaybe<BlogAuthorUpdateManyWithoutBlogInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpsertWithWhereUniqueWithoutFeaturedImageInput = {
  create: BlogCreateWithoutFeaturedImageInput;
  update: BlogUpdateWithoutFeaturedImageInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpsertWithoutAuthorsInput = {
  create: BlogCreateWithoutAuthorsInput;
  update: BlogUpdateWithoutAuthorsInput;
};

export type BlogWhereInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  authors?: InputMaybe<BlogAuthorListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featuredImage?: InputMaybe<ImageRelationFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BlogWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Course = {
  __typename?: 'Course';
  _count: CourseCount;
  complete: Scalars['Boolean'];
  courseUrls: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  duration: Scalars['Float'];
  id: Scalars['String'];
  instructors: Array<CourseInstructor>;
  order: Scalars['Int'];
  rating?: Maybe<Rating>;
  ratingUrl?: Maybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  school: School;
  schoolId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  yearUpdated: Scalars['Int'];
};


export type CourseInstructorsArgs = {
  cursor?: InputMaybe<CourseInstructorWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseInstructorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseInstructorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseInstructorWhereInput>;
};

export type CourseAvgAggregate = {
  __typename?: 'CourseAvgAggregate';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

export type CourseAvgOrderByAggregateInput = {
  duration?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  yearUpdated?: InputMaybe<SortOrder>;
};

export type CourseCount = {
  __typename?: 'CourseCount';
  instructors: Scalars['Int'];
};

export type CourseCountAggregate = {
  __typename?: 'CourseCountAggregate';
  _all: Scalars['Int'];
  complete: Scalars['Int'];
  courseUrls: Scalars['Int'];
  createdAt: Scalars['Int'];
  duration: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  rating: Scalars['Int'];
  ratingUrl: Scalars['Int'];
  recommended: Scalars['Int'];
  schoolId: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  yearUpdated: Scalars['Int'];
};

export type CourseCountOrderByAggregateInput = {
  complete?: InputMaybe<SortOrder>;
  courseUrls?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  ratingUrl?: InputMaybe<SortOrder>;
  recommended?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  yearUpdated?: InputMaybe<SortOrder>;
};

export type CourseCreateInput = {
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreatecourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id?: InputMaybe<Scalars['String']>;
  instructors?: InputMaybe<CourseInstructorCreateNestedManyWithoutCourseInput>;
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  school: SchoolCreateNestedOneWithoutCoursesInput;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  yearUpdated: Scalars['Int'];
};

export type CourseCreateManyInput = {
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreateManycourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  schoolId: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  yearUpdated: Scalars['Int'];
};

export type CourseCreateManySchoolInput = {
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreateManycourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  yearUpdated: Scalars['Int'];
};

export type CourseCreateManySchoolInputEnvelope = {
  data: Array<CourseCreateManySchoolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseCreateManycourseUrlsInput = {
  set: Array<Scalars['String']>;
};

export type CourseCreateNestedManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<CourseCreateManySchoolInputEnvelope>;
};

export type CourseCreateNestedOneWithoutInstructorsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutInstructorsInput>;
  create?: InputMaybe<CourseCreateWithoutInstructorsInput>;
};

export type CourseCreateOrConnectWithoutInstructorsInput = {
  create: CourseCreateWithoutInstructorsInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutSchoolInput = {
  create: CourseCreateWithoutSchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateWithoutInstructorsInput = {
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreatecourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  school: SchoolCreateNestedOneWithoutCoursesInput;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  yearUpdated: Scalars['Int'];
};

export type CourseCreateWithoutSchoolInput = {
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreatecourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id?: InputMaybe<Scalars['String']>;
  instructors?: InputMaybe<CourseInstructorCreateNestedManyWithoutCourseInput>;
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  yearUpdated: Scalars['Int'];
};

export type CourseCreatecourseUrlsInput = {
  set: Array<Scalars['String']>;
};

export type CourseGroupBy = {
  __typename?: 'CourseGroupBy';
  _avg?: Maybe<CourseAvgAggregate>;
  _count?: Maybe<CourseCountAggregate>;
  _max?: Maybe<CourseMaxAggregate>;
  _min?: Maybe<CourseMinAggregate>;
  _sum?: Maybe<CourseSumAggregate>;
  complete: Scalars['Boolean'];
  courseUrls?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  duration: Scalars['Float'];
  id: Scalars['String'];
  order: Scalars['Int'];
  rating?: Maybe<Rating>;
  ratingUrl?: Maybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  schoolId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  yearUpdated: Scalars['Int'];
};

export type CourseInstructor = {
  __typename?: 'CourseInstructor';
  course: Course;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  instructor: Person;
  instructorId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourseInstructorCountAggregate = {
  __typename?: 'CourseInstructorCountAggregate';
  _all: Scalars['Int'];
  courseId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  instructorId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CourseInstructorCountOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instructorId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseInstructorCreateInput = {
  course: CourseCreateNestedOneWithoutInstructorsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  instructor: PersonCreateNestedOneWithoutCoursesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseInstructorCreateManyCourseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  instructorId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseInstructorCreateManyCourseInputEnvelope = {
  data: Array<CourseInstructorCreateManyCourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseInstructorCreateManyInput = {
  courseId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  instructorId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseInstructorCreateManyInstructorInput = {
  courseId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseInstructorCreateManyInstructorInputEnvelope = {
  data: Array<CourseInstructorCreateManyInstructorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseInstructorCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseInstructorCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<CourseInstructorCreateWithoutCourseInput>>;
  createMany?: InputMaybe<CourseInstructorCreateManyCourseInputEnvelope>;
};

export type CourseInstructorCreateNestedManyWithoutInstructorInput = {
  connect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseInstructorCreateOrConnectWithoutInstructorInput>>;
  create?: InputMaybe<Array<CourseInstructorCreateWithoutInstructorInput>>;
  createMany?: InputMaybe<CourseInstructorCreateManyInstructorInputEnvelope>;
};

export type CourseInstructorCreateOrConnectWithoutCourseInput = {
  create: CourseInstructorCreateWithoutCourseInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorCreateOrConnectWithoutInstructorInput = {
  create: CourseInstructorCreateWithoutInstructorInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorCreateWithoutCourseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  instructor: PersonCreateNestedOneWithoutCoursesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseInstructorCreateWithoutInstructorInput = {
  course: CourseCreateNestedOneWithoutInstructorsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseInstructorGroupBy = {
  __typename?: 'CourseInstructorGroupBy';
  _count?: Maybe<CourseInstructorCountAggregate>;
  _max?: Maybe<CourseInstructorMaxAggregate>;
  _min?: Maybe<CourseInstructorMinAggregate>;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  instructorId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourseInstructorListRelationFilter = {
  every?: InputMaybe<CourseInstructorWhereInput>;
  none?: InputMaybe<CourseInstructorWhereInput>;
  some?: InputMaybe<CourseInstructorWhereInput>;
};

export type CourseInstructorMaxAggregate = {
  __typename?: 'CourseInstructorMaxAggregate';
  courseId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  instructorId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CourseInstructorMaxOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instructorId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseInstructorMinAggregate = {
  __typename?: 'CourseInstructorMinAggregate';
  courseId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  instructorId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CourseInstructorMinOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instructorId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseInstructorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CourseInstructorOrderByWithAggregationInput = {
  _count?: InputMaybe<CourseInstructorCountOrderByAggregateInput>;
  _max?: InputMaybe<CourseInstructorMaxOrderByAggregateInput>;
  _min?: InputMaybe<CourseInstructorMinOrderByAggregateInput>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instructorId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseInstructorOrderByWithRelationInput = {
  course?: InputMaybe<CourseOrderByWithRelationInput>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instructor?: InputMaybe<PersonOrderByWithRelationInput>;
  instructorId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CourseInstructorScalarFieldEnum {
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Id = 'id',
  InstructorId = 'instructorId',
  UpdatedAt = 'updatedAt'
}

export type CourseInstructorScalarWhereInput = {
  AND?: InputMaybe<Array<CourseInstructorScalarWhereInput>>;
  NOT?: InputMaybe<Array<CourseInstructorScalarWhereInput>>;
  OR?: InputMaybe<Array<CourseInstructorScalarWhereInput>>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  instructorId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CourseInstructorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CourseInstructorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CourseInstructorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CourseInstructorScalarWhereWithAggregatesInput>>;
  courseId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  instructorId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CourseInstructorUpdateInput = {
  course?: InputMaybe<CourseUpdateOneRequiredWithoutInstructorsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instructor?: InputMaybe<PersonUpdateOneRequiredWithoutCoursesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseInstructorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseInstructorUpdateManyWithWhereWithoutCourseInput = {
  data: CourseInstructorUpdateManyMutationInput;
  where: CourseInstructorScalarWhereInput;
};

export type CourseInstructorUpdateManyWithWhereWithoutInstructorInput = {
  data: CourseInstructorUpdateManyMutationInput;
  where: CourseInstructorScalarWhereInput;
};

export type CourseInstructorUpdateManyWithoutCourseInput = {
  connect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseInstructorCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<CourseInstructorCreateWithoutCourseInput>>;
  createMany?: InputMaybe<CourseInstructorCreateManyCourseInputEnvelope>;
  delete?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseInstructorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseInstructorUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<CourseInstructorUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<CourseInstructorUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type CourseInstructorUpdateManyWithoutInstructorInput = {
  connect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseInstructorCreateOrConnectWithoutInstructorInput>>;
  create?: InputMaybe<Array<CourseInstructorCreateWithoutInstructorInput>>;
  createMany?: InputMaybe<CourseInstructorCreateManyInstructorInputEnvelope>;
  delete?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseInstructorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseInstructorUpdateWithWhereUniqueWithoutInstructorInput>>;
  updateMany?: InputMaybe<Array<CourseInstructorUpdateManyWithWhereWithoutInstructorInput>>;
  upsert?: InputMaybe<Array<CourseInstructorUpsertWithWhereUniqueWithoutInstructorInput>>;
};

export type CourseInstructorUpdateWithWhereUniqueWithoutCourseInput = {
  data: CourseInstructorUpdateWithoutCourseInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorUpdateWithWhereUniqueWithoutInstructorInput = {
  data: CourseInstructorUpdateWithoutInstructorInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorUpdateWithoutCourseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instructor?: InputMaybe<PersonUpdateOneRequiredWithoutCoursesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseInstructorUpdateWithoutInstructorInput = {
  course?: InputMaybe<CourseUpdateOneRequiredWithoutInstructorsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseInstructorUpsertWithWhereUniqueWithoutCourseInput = {
  create: CourseInstructorCreateWithoutCourseInput;
  update: CourseInstructorUpdateWithoutCourseInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorUpsertWithWhereUniqueWithoutInstructorInput = {
  create: CourseInstructorCreateWithoutInstructorInput;
  update: CourseInstructorUpdateWithoutInstructorInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorWhereInput = {
  AND?: InputMaybe<Array<CourseInstructorWhereInput>>;
  NOT?: InputMaybe<Array<CourseInstructorWhereInput>>;
  OR?: InputMaybe<Array<CourseInstructorWhereInput>>;
  course?: InputMaybe<CourseRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  instructor?: InputMaybe<PersonRelationFilter>;
  instructorId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CourseInstructorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CourseListRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseMaxAggregate = {
  __typename?: 'CourseMaxAggregate';
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  rating?: Maybe<Rating>;
  ratingUrl?: Maybe<Scalars['String']>;
  recommended?: Maybe<Scalars['Boolean']>;
  schoolId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  yearUpdated?: Maybe<Scalars['Int']>;
};

export type CourseMaxOrderByAggregateInput = {
  complete?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  ratingUrl?: InputMaybe<SortOrder>;
  recommended?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  yearUpdated?: InputMaybe<SortOrder>;
};

export type CourseMinAggregate = {
  __typename?: 'CourseMinAggregate';
  complete?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  rating?: Maybe<Rating>;
  ratingUrl?: Maybe<Scalars['String']>;
  recommended?: Maybe<Scalars['Boolean']>;
  schoolId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  yearUpdated?: Maybe<Scalars['Int']>;
};

export type CourseMinOrderByAggregateInput = {
  complete?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  ratingUrl?: InputMaybe<SortOrder>;
  recommended?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  yearUpdated?: InputMaybe<SortOrder>;
};

export type CourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CourseOrderByWithAggregationInput = {
  _avg?: InputMaybe<CourseAvgOrderByAggregateInput>;
  _count?: InputMaybe<CourseCountOrderByAggregateInput>;
  _max?: InputMaybe<CourseMaxOrderByAggregateInput>;
  _min?: InputMaybe<CourseMinOrderByAggregateInput>;
  _sum?: InputMaybe<CourseSumOrderByAggregateInput>;
  complete?: InputMaybe<SortOrder>;
  courseUrls?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  ratingUrl?: InputMaybe<SortOrder>;
  recommended?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  yearUpdated?: InputMaybe<SortOrder>;
};

export type CourseOrderByWithRelationInput = {
  complete?: InputMaybe<SortOrder>;
  courseUrls?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  instructors?: InputMaybe<CourseInstructorOrderByRelationAggregateInput>;
  order?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  ratingUrl?: InputMaybe<SortOrder>;
  recommended?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationInput>;
  schoolId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  yearUpdated?: InputMaybe<SortOrder>;
};

export type CourseRelationFilter = {
  is?: InputMaybe<CourseWhereInput>;
  isNot?: InputMaybe<CourseWhereInput>;
};

export enum CourseScalarFieldEnum {
  Complete = 'complete',
  CourseUrls = 'courseUrls',
  CreatedAt = 'createdAt',
  Duration = 'duration',
  Id = 'id',
  Order = 'order',
  Rating = 'rating',
  RatingUrl = 'ratingUrl',
  Recommended = 'recommended',
  SchoolId = 'schoolId',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  YearUpdated = 'yearUpdated'
}

export type CourseScalarWhereInput = {
  AND?: InputMaybe<Array<CourseScalarWhereInput>>;
  NOT?: InputMaybe<Array<CourseScalarWhereInput>>;
  OR?: InputMaybe<Array<CourseScalarWhereInput>>;
  complete?: InputMaybe<BoolFilter>;
  courseUrls?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<EnumRatingNullableFilter>;
  ratingUrl?: InputMaybe<StringNullableFilter>;
  recommended?: InputMaybe<BoolFilter>;
  schoolId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  yearUpdated?: InputMaybe<IntFilter>;
};

export type CourseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  complete?: InputMaybe<BoolWithAggregatesFilter>;
  courseUrls?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  duration?: InputMaybe<FloatWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  order?: InputMaybe<IntWithAggregatesFilter>;
  rating?: InputMaybe<EnumRatingNullableWithAggregatesFilter>;
  ratingUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  recommended?: InputMaybe<BoolWithAggregatesFilter>;
  schoolId?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  yearUpdated?: InputMaybe<IntWithAggregatesFilter>;
};

export type CourseSumAggregate = {
  __typename?: 'CourseSumAggregate';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Int']>;
  yearUpdated?: Maybe<Scalars['Int']>;
};

export type CourseSumOrderByAggregateInput = {
  duration?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  yearUpdated?: InputMaybe<SortOrder>;
};

export type CourseUpdateInput = {
  complete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  courseUrls?: InputMaybe<CourseUpdatecourseUrlsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instructors?: InputMaybe<CourseInstructorUpdateManyWithoutCourseInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumRatingFieldUpdateOperationsInput>;
  ratingUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recommended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutCoursesInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  yearUpdated?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CourseUpdateManyMutationInput = {
  complete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  courseUrls?: InputMaybe<CourseUpdatecourseUrlsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumRatingFieldUpdateOperationsInput>;
  ratingUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recommended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  yearUpdated?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CourseUpdateManyWithWhereWithoutSchoolInput = {
  data: CourseUpdateManyMutationInput;
  where: CourseScalarWhereInput;
};

export type CourseUpdateManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<CourseCreateManySchoolInputEnvelope>;
  delete?: InputMaybe<Array<CourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: InputMaybe<Array<CourseUpdateManyWithWhereWithoutSchoolInput>>;
  upsert?: InputMaybe<Array<CourseUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type CourseUpdateOneRequiredWithoutInstructorsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutInstructorsInput>;
  create?: InputMaybe<CourseCreateWithoutInstructorsInput>;
  update?: InputMaybe<CourseUpdateWithoutInstructorsInput>;
  upsert?: InputMaybe<CourseUpsertWithoutInstructorsInput>;
};

export type CourseUpdateWithWhereUniqueWithoutSchoolInput = {
  data: CourseUpdateWithoutSchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateWithoutInstructorsInput = {
  complete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  courseUrls?: InputMaybe<CourseUpdatecourseUrlsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumRatingFieldUpdateOperationsInput>;
  ratingUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recommended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutCoursesInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  yearUpdated?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutSchoolInput = {
  complete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  courseUrls?: InputMaybe<CourseUpdatecourseUrlsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  instructors?: InputMaybe<CourseInstructorUpdateManyWithoutCourseInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumRatingFieldUpdateOperationsInput>;
  ratingUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recommended?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  yearUpdated?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CourseUpdatecourseUrlsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type CourseUpsertWithWhereUniqueWithoutSchoolInput = {
  create: CourseCreateWithoutSchoolInput;
  update: CourseUpdateWithoutSchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpsertWithoutInstructorsInput = {
  create: CourseCreateWithoutInstructorsInput;
  update: CourseUpdateWithoutInstructorsInput;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  complete?: InputMaybe<BoolFilter>;
  courseUrls?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  instructors?: InputMaybe<CourseInstructorListRelationFilter>;
  order?: InputMaybe<IntFilter>;
  rating?: InputMaybe<EnumRatingNullableFilter>;
  ratingUrl?: InputMaybe<StringNullableFilter>;
  recommended?: InputMaybe<BoolFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  yearUpdated?: InputMaybe<IntFilter>;
};

export type CourseWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumRatingNullableFilter = {
  equals?: InputMaybe<Rating>;
  in?: InputMaybe<Array<Rating>>;
  not?: InputMaybe<NestedEnumRatingNullableFilter>;
  notIn?: InputMaybe<Array<Rating>>;
};

export type EnumRatingNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRatingNullableFilter>;
  _min?: InputMaybe<NestedEnumRatingNullableFilter>;
  equals?: InputMaybe<Rating>;
  in?: InputMaybe<Array<Rating>>;
  not?: InputMaybe<NestedEnumRatingNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Rating>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Image = {
  __typename?: 'Image';
  TechnologyLogos: Array<TechnologyLogo>;
  _count: ImageCount;
  altText: Scalars['String'];
  blogs: Array<Blog>;
  createdAt: Scalars['DateTime'];
  height: Scalars['String'];
  id: Scalars['String'];
  persons: Array<Person>;
  projects: Array<Project>;
  schools: Array<School>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};


export type ImageTechnologyLogosArgs = {
  cursor?: InputMaybe<TechnologyLogoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TechnologyLogoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TechnologyLogoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologyLogoWhereInput>;
};


export type ImageBlogsArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type ImagePersonsArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type ImageProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type ImageSchoolsArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};

export type ImageCount = {
  __typename?: 'ImageCount';
  TechnologyLogos: Scalars['Int'];
  blogs: Scalars['Int'];
  persons: Scalars['Int'];
  projects: Scalars['Int'];
  schools: Scalars['Int'];
};

export type ImageCountAggregate = {
  __typename?: 'ImageCountAggregate';
  _all: Scalars['Int'];
  altText: Scalars['Int'];
  createdAt: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
  width: Scalars['Int'];
};

export type ImageCountOrderByAggregateInput = {
  altText?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type ImageCreateInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoCreateNestedManyWithoutLogoInput>;
  altText: Scalars['String'];
  blogs?: InputMaybe<BlogCreateNestedManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolCreateNestedManyWithoutLogoInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateManyInput = {
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateNestedOneWithoutBlogsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<ImageCreateWithoutBlogsInput>;
};

export type ImageCreateNestedOneWithoutPersonsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutPersonsInput>;
  create?: InputMaybe<ImageCreateWithoutPersonsInput>;
};

export type ImageCreateNestedOneWithoutProjectsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<ImageCreateWithoutProjectsInput>;
};

export type ImageCreateNestedOneWithoutSchoolsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutSchoolsInput>;
  create?: InputMaybe<ImageCreateWithoutSchoolsInput>;
};

export type ImageCreateNestedOneWithoutTechnologyLogosInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutTechnologyLogosInput>;
  create?: InputMaybe<ImageCreateWithoutTechnologyLogosInput>;
};

export type ImageCreateOrConnectWithoutBlogsInput = {
  create: ImageCreateWithoutBlogsInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutPersonsInput = {
  create: ImageCreateWithoutPersonsInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutProjectsInput = {
  create: ImageCreateWithoutProjectsInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutSchoolsInput = {
  create: ImageCreateWithoutSchoolsInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutTechnologyLogosInput = {
  create: ImageCreateWithoutTechnologyLogosInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateWithoutBlogsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoCreateNestedManyWithoutLogoInput>;
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolCreateNestedManyWithoutLogoInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutPersonsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoCreateNestedManyWithoutLogoInput>;
  altText: Scalars['String'];
  blogs?: InputMaybe<BlogCreateNestedManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolCreateNestedManyWithoutLogoInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutProjectsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoCreateNestedManyWithoutLogoInput>;
  altText: Scalars['String'];
  blogs?: InputMaybe<BlogCreateNestedManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  schools?: InputMaybe<SchoolCreateNestedManyWithoutLogoInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutSchoolsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoCreateNestedManyWithoutLogoInput>;
  altText: Scalars['String'];
  blogs?: InputMaybe<BlogCreateNestedManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutFeaturedImageInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutTechnologyLogosInput = {
  altText: Scalars['String'];
  blogs?: InputMaybe<BlogCreateNestedManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  persons?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  projects?: InputMaybe<ProjectCreateNestedManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolCreateNestedManyWithoutLogoInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageGroupBy = {
  __typename?: 'ImageGroupBy';
  _count?: Maybe<ImageCountAggregate>;
  _max?: Maybe<ImageMaxAggregate>;
  _min?: Maybe<ImageMinAggregate>;
  altText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageMaxAggregate = {
  __typename?: 'ImageMaxAggregate';
  altText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type ImageMaxOrderByAggregateInput = {
  altText?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type ImageMinAggregate = {
  __typename?: 'ImageMinAggregate';
  altText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type ImageMinOrderByAggregateInput = {
  altText?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type ImageOrderByWithAggregationInput = {
  _count?: InputMaybe<ImageCountOrderByAggregateInput>;
  _max?: InputMaybe<ImageMaxOrderByAggregateInput>;
  _min?: InputMaybe<ImageMinOrderByAggregateInput>;
  altText?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type ImageOrderByWithRelationInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoOrderByRelationAggregateInput>;
  altText?: InputMaybe<SortOrder>;
  blogs?: InputMaybe<BlogOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  persons?: InputMaybe<PersonOrderByRelationAggregateInput>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  schools?: InputMaybe<SchoolOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type ImageRelationFilter = {
  is?: InputMaybe<ImageWhereInput>;
  isNot?: InputMaybe<ImageWhereInput>;
};

export enum ImageScalarFieldEnum {
  AltText = 'altText',
  CreatedAt = 'createdAt',
  Height = 'height',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  Width = 'width'
}

export type ImageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ImageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ImageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ImageScalarWhereWithAggregatesInput>>;
  altText?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  height?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
  width?: InputMaybe<StringWithAggregatesFilter>;
};

export type ImageUpdateInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoUpdateManyWithoutLogoInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  blogs?: InputMaybe<BlogUpdateManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  persons?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolUpdateManyWithoutLogoInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateManyMutationInput = {
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateOneRequiredWithoutBlogsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<ImageCreateWithoutBlogsInput>;
  update?: InputMaybe<ImageUpdateWithoutBlogsInput>;
  upsert?: InputMaybe<ImageUpsertWithoutBlogsInput>;
};

export type ImageUpdateOneRequiredWithoutProjectsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<ImageCreateWithoutProjectsInput>;
  update?: InputMaybe<ImageUpdateWithoutProjectsInput>;
  upsert?: InputMaybe<ImageUpsertWithoutProjectsInput>;
};

export type ImageUpdateOneRequiredWithoutSchoolsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutSchoolsInput>;
  create?: InputMaybe<ImageCreateWithoutSchoolsInput>;
  update?: InputMaybe<ImageUpdateWithoutSchoolsInput>;
  upsert?: InputMaybe<ImageUpsertWithoutSchoolsInput>;
};

export type ImageUpdateOneRequiredWithoutTechnologyLogosInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutTechnologyLogosInput>;
  create?: InputMaybe<ImageCreateWithoutTechnologyLogosInput>;
  update?: InputMaybe<ImageUpdateWithoutTechnologyLogosInput>;
  upsert?: InputMaybe<ImageUpsertWithoutTechnologyLogosInput>;
};

export type ImageUpdateOneWithoutPersonsInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutPersonsInput>;
  create?: InputMaybe<ImageCreateWithoutPersonsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ImageUpdateWithoutPersonsInput>;
  upsert?: InputMaybe<ImageUpsertWithoutPersonsInput>;
};

export type ImageUpdateWithoutBlogsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoUpdateManyWithoutLogoInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  persons?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolUpdateManyWithoutLogoInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutPersonsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoUpdateManyWithoutLogoInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  blogs?: InputMaybe<BlogUpdateManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolUpdateManyWithoutLogoInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutProjectsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoUpdateManyWithoutLogoInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  blogs?: InputMaybe<BlogUpdateManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  persons?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  schools?: InputMaybe<SchoolUpdateManyWithoutLogoInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutSchoolsInput = {
  TechnologyLogos?: InputMaybe<TechnologyLogoUpdateManyWithoutLogoInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  blogs?: InputMaybe<BlogUpdateManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  persons?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutFeaturedImageInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutTechnologyLogosInput = {
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  blogs?: InputMaybe<BlogUpdateManyWithoutFeaturedImageInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  persons?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutFeaturedImageInput>;
  schools?: InputMaybe<SchoolUpdateManyWithoutLogoInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpsertWithoutBlogsInput = {
  create: ImageCreateWithoutBlogsInput;
  update: ImageUpdateWithoutBlogsInput;
};

export type ImageUpsertWithoutPersonsInput = {
  create: ImageCreateWithoutPersonsInput;
  update: ImageUpdateWithoutPersonsInput;
};

export type ImageUpsertWithoutProjectsInput = {
  create: ImageCreateWithoutProjectsInput;
  update: ImageUpdateWithoutProjectsInput;
};

export type ImageUpsertWithoutSchoolsInput = {
  create: ImageCreateWithoutSchoolsInput;
  update: ImageUpdateWithoutSchoolsInput;
};

export type ImageUpsertWithoutTechnologyLogosInput = {
  create: ImageCreateWithoutTechnologyLogosInput;
  update: ImageUpdateWithoutTechnologyLogosInput;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  TechnologyLogos?: InputMaybe<TechnologyLogoListRelationFilter>;
  altText?: InputMaybe<StringFilter>;
  blogs?: InputMaybe<BlogListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  height?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  persons?: InputMaybe<PersonListRelationFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  schools?: InputMaybe<SchoolListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
  width?: InputMaybe<StringFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: Blog;
  createBlogAuthor: BlogAuthor;
  createCourse: Course;
  createCourseInstructor: CourseInstructor;
  createImage: Image;
  createManyBlog: AffectedRowsOutput;
  createManyBlogAuthor: AffectedRowsOutput;
  createManyCourse: AffectedRowsOutput;
  createManyCourseInstructor: AffectedRowsOutput;
  createManyImage: AffectedRowsOutput;
  createManyPerson: AffectedRowsOutput;
  createManyProject: AffectedRowsOutput;
  createManyProjectContributor: AffectedRowsOutput;
  createManySchool: AffectedRowsOutput;
  createManyTechnologyLogo: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createPerson: Person;
  createProject: Project;
  createProjectContributor: ProjectContributor;
  createSchool: School;
  createTechnologyLogo: TechnologyLogo;
  createUser: User;
  deleteBlog?: Maybe<Blog>;
  deleteBlogAuthor?: Maybe<BlogAuthor>;
  deleteCourse?: Maybe<Course>;
  deleteCourseInstructor?: Maybe<CourseInstructor>;
  deleteImage?: Maybe<Image>;
  deleteManyBlog: AffectedRowsOutput;
  deleteManyBlogAuthor: AffectedRowsOutput;
  deleteManyCourse: AffectedRowsOutput;
  deleteManyCourseInstructor: AffectedRowsOutput;
  deleteManyImage: AffectedRowsOutput;
  deleteManyPerson: AffectedRowsOutput;
  deleteManyProject: AffectedRowsOutput;
  deleteManyProjectContributor: AffectedRowsOutput;
  deleteManySchool: AffectedRowsOutput;
  deleteManyTechnologyLogo: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deletePerson?: Maybe<Person>;
  deleteProject?: Maybe<Project>;
  deleteProjectContributor?: Maybe<ProjectContributor>;
  deleteSchool?: Maybe<School>;
  deleteTechnologyLogo?: Maybe<TechnologyLogo>;
  deleteUser?: Maybe<User>;
  updateBlog?: Maybe<Blog>;
  updateBlogAuthor?: Maybe<BlogAuthor>;
  updateCourse?: Maybe<Course>;
  updateCourseInstructor?: Maybe<CourseInstructor>;
  updateImage?: Maybe<Image>;
  updateManyBlog: AffectedRowsOutput;
  updateManyBlogAuthor: AffectedRowsOutput;
  updateManyCourse: AffectedRowsOutput;
  updateManyCourseInstructor: AffectedRowsOutput;
  updateManyImage: AffectedRowsOutput;
  updateManyPerson: AffectedRowsOutput;
  updateManyProject: AffectedRowsOutput;
  updateManyProjectContributor: AffectedRowsOutput;
  updateManySchool: AffectedRowsOutput;
  updateManyTechnologyLogo: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updatePerson?: Maybe<Person>;
  updateProject?: Maybe<Project>;
  updateProjectContributor?: Maybe<ProjectContributor>;
  updateSchool?: Maybe<School>;
  updateTechnologyLogo?: Maybe<TechnologyLogo>;
  updateUser?: Maybe<User>;
  upsertBlog: Blog;
  upsertBlogAuthor: BlogAuthor;
  upsertCourse: Course;
  upsertCourseInstructor: CourseInstructor;
  upsertImage: Image;
  upsertPerson: Person;
  upsertProject: Project;
  upsertProjectContributor: ProjectContributor;
  upsertSchool: School;
  upsertTechnologyLogo: TechnologyLogo;
  upsertUser: User;
};


export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateBlogAuthorArgs = {
  data: BlogAuthorCreateInput;
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateCourseInstructorArgs = {
  data: CourseInstructorCreateInput;
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateManyBlogArgs = {
  data: Array<BlogCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyBlogAuthorArgs = {
  data: Array<BlogAuthorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCourseArgs = {
  data: Array<CourseCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCourseInstructorArgs = {
  data: Array<CourseInstructorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyImageArgs = {
  data: Array<ImageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPersonArgs = {
  data: Array<PersonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProjectArgs = {
  data: Array<ProjectCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProjectContributorArgs = {
  data: Array<ProjectContributorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySchoolArgs = {
  data: Array<SchoolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTechnologyLogoArgs = {
  data: Array<TechnologyLogoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProjectContributorArgs = {
  data: ProjectContributorCreateInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationCreateTechnologyLogoArgs = {
  data: TechnologyLogoCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationDeleteBlogAuthorArgs = {
  where: BlogAuthorWhereUniqueInput;
};


export type MutationDeleteCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type MutationDeleteCourseInstructorArgs = {
  where: CourseInstructorWhereUniqueInput;
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteManyBlogArgs = {
  where?: InputMaybe<BlogWhereInput>;
};


export type MutationDeleteManyBlogAuthorArgs = {
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type MutationDeleteManyCourseArgs = {
  where?: InputMaybe<CourseWhereInput>;
};


export type MutationDeleteManyCourseInstructorArgs = {
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type MutationDeleteManyImageArgs = {
  where?: InputMaybe<ImageWhereInput>;
};


export type MutationDeleteManyPersonArgs = {
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationDeleteManyProjectArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type MutationDeleteManyProjectContributorArgs = {
  where?: InputMaybe<ProjectContributorWhereInput>;
};


export type MutationDeleteManySchoolArgs = {
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationDeleteManyTechnologyLogoArgs = {
  where?: InputMaybe<TechnologyLogoWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteProjectContributorArgs = {
  where: ProjectContributorWhereUniqueInput;
};


export type MutationDeleteSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteTechnologyLogoArgs = {
  where: TechnologyLogoWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpdateBlogAuthorArgs = {
  data: BlogAuthorUpdateInput;
  where: BlogAuthorWhereUniqueInput;
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpdateCourseInstructorArgs = {
  data: CourseInstructorUpdateInput;
  where: CourseInstructorWhereUniqueInput;
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateManyBlogArgs = {
  data: BlogUpdateManyMutationInput;
  where?: InputMaybe<BlogWhereInput>;
};


export type MutationUpdateManyBlogAuthorArgs = {
  data: BlogAuthorUpdateManyMutationInput;
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type MutationUpdateManyCourseArgs = {
  data: CourseUpdateManyMutationInput;
  where?: InputMaybe<CourseWhereInput>;
};


export type MutationUpdateManyCourseInstructorArgs = {
  data: CourseInstructorUpdateManyMutationInput;
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type MutationUpdateManyImageArgs = {
  data: ImageUpdateManyMutationInput;
  where?: InputMaybe<ImageWhereInput>;
};


export type MutationUpdateManyPersonArgs = {
  data: PersonUpdateManyMutationInput;
  where?: InputMaybe<PersonWhereInput>;
};


export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput;
  where?: InputMaybe<ProjectWhereInput>;
};


export type MutationUpdateManyProjectContributorArgs = {
  data: ProjectContributorUpdateManyMutationInput;
  where?: InputMaybe<ProjectContributorWhereInput>;
};


export type MutationUpdateManySchoolArgs = {
  data: SchoolUpdateManyMutationInput;
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationUpdateManyTechnologyLogoArgs = {
  data: TechnologyLogoUpdateManyMutationInput;
  where?: InputMaybe<TechnologyLogoWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateProjectContributorArgs = {
  data: ProjectContributorUpdateInput;
  where: ProjectContributorWhereUniqueInput;
};


export type MutationUpdateSchoolArgs = {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpdateTechnologyLogoArgs = {
  data: TechnologyLogoUpdateInput;
  where: TechnologyLogoWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertBlogArgs = {
  create: BlogCreateInput;
  update: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpsertBlogAuthorArgs = {
  create: BlogAuthorCreateInput;
  update: BlogAuthorUpdateInput;
  where: BlogAuthorWhereUniqueInput;
};


export type MutationUpsertCourseArgs = {
  create: CourseCreateInput;
  update: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpsertCourseInstructorArgs = {
  create: CourseInstructorCreateInput;
  update: CourseInstructorUpdateInput;
  where: CourseInstructorWhereUniqueInput;
};


export type MutationUpsertImageArgs = {
  create: ImageCreateInput;
  update: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpsertPersonArgs = {
  create: PersonCreateInput;
  update: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};


export type MutationUpsertProjectArgs = {
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertProjectContributorArgs = {
  create: ProjectContributorCreateInput;
  update: ProjectContributorUpdateInput;
  where: ProjectContributorWhereUniqueInput;
};


export type MutationUpsertSchoolArgs = {
  create: SchoolCreateInput;
  update: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpsertTechnologyLogoArgs = {
  create: TechnologyLogoCreateInput;
  update: TechnologyLogoUpdateInput;
  where: TechnologyLogoWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRatingNullableFilter = {
  equals?: InputMaybe<Rating>;
  in?: InputMaybe<Array<Rating>>;
  not?: InputMaybe<NestedEnumRatingNullableFilter>;
  notIn?: InputMaybe<Array<Rating>>;
};

export type NestedEnumRatingNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRatingNullableFilter>;
  _min?: InputMaybe<NestedEnumRatingNullableFilter>;
  equals?: InputMaybe<Rating>;
  in?: InputMaybe<Array<Rating>>;
  not?: InputMaybe<NestedEnumRatingNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Rating>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableEnumRatingFieldUpdateOperationsInput = {
  set?: InputMaybe<Rating>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  User: Array<User>;
  _count: PersonCount;
  blogs: Array<BlogAuthor>;
  courses: Array<CourseInstructor>;
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Image>;
  imageId?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  projects: Array<ProjectContributor>;
  summary?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: Maybe<Scalars['String']>;
};


export type PersonUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type PersonBlogsArgs = {
  cursor?: InputMaybe<BlogAuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogAuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type PersonCoursesArgs = {
  cursor?: InputMaybe<CourseInstructorWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseInstructorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseInstructorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type PersonProjectsArgs = {
  cursor?: InputMaybe<ProjectContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};

export type PersonCount = {
  __typename?: 'PersonCount';
  User: Scalars['Int'];
  blogs: Scalars['Int'];
  courses: Scalars['Int'];
  projects: Scalars['Int'];
};

export type PersonCountAggregate = {
  __typename?: 'PersonCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  githubUrl: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  lastName: Scalars['Int'];
  linkedinUrl: Scalars['Int'];
  summary: Scalars['Int'];
  updatedAt: Scalars['Int'];
  websiteUrl: Scalars['Int'];
};

export type PersonCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  websiteUrl?: InputMaybe<SortOrder>;
};

export type PersonCreateInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorCreateNestedManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorCreateNestedManyWithoutInstructorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutPersonsInput>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectContributorCreateNestedManyWithoutContributorInput>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateManyImageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateManyImageInputEnvelope = {
  data: Array<PersonCreateManyImageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PersonCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  imageId?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateNestedManyWithoutImageInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutImageInput>>;
  createMany?: InputMaybe<PersonCreateManyImageInputEnvelope>;
};

export type PersonCreateNestedOneWithoutBlogsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<PersonCreateWithoutBlogsInput>;
};

export type PersonCreateNestedOneWithoutCoursesInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<PersonCreateWithoutCoursesInput>;
};

export type PersonCreateNestedOneWithoutProjectsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<PersonCreateWithoutProjectsInput>;
};

export type PersonCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PersonCreateWithoutUserInput>;
};

export type PersonCreateOrConnectWithoutBlogsInput = {
  create: PersonCreateWithoutBlogsInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutCoursesInput = {
  create: PersonCreateWithoutCoursesInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutImageInput = {
  create: PersonCreateWithoutImageInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutProjectsInput = {
  create: PersonCreateWithoutProjectsInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutUserInput = {
  create: PersonCreateWithoutUserInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutBlogsInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  courses?: InputMaybe<CourseInstructorCreateNestedManyWithoutInstructorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutPersonsInput>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectContributorCreateNestedManyWithoutContributorInput>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutCoursesInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorCreateNestedManyWithoutAuthorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutPersonsInput>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectContributorCreateNestedManyWithoutContributorInput>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutImageInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorCreateNestedManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorCreateNestedManyWithoutInstructorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectContributorCreateNestedManyWithoutContributorInput>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutProjectsInput = {
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorCreateNestedManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorCreateNestedManyWithoutInstructorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutPersonsInput>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutUserInput = {
  blogs?: InputMaybe<BlogAuthorCreateNestedManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorCreateNestedManyWithoutInstructorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutPersonsInput>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  projects?: InputMaybe<ProjectContributorCreateNestedManyWithoutContributorInput>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonGroupBy = {
  __typename?: 'PersonGroupBy';
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageId?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: Maybe<Scalars['String']>;
};

export type PersonListRelationFilter = {
  every?: InputMaybe<PersonWhereInput>;
  none?: InputMaybe<PersonWhereInput>;
  some?: InputMaybe<PersonWhereInput>;
};

export type PersonMaxAggregate = {
  __typename?: 'PersonMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type PersonMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  websiteUrl?: InputMaybe<SortOrder>;
};

export type PersonMinAggregate = {
  __typename?: 'PersonMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type PersonMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  websiteUrl?: InputMaybe<SortOrder>;
};

export type PersonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithAggregationInput = {
  _count?: InputMaybe<PersonCountOrderByAggregateInput>;
  _max?: InputMaybe<PersonMaxOrderByAggregateInput>;
  _min?: InputMaybe<PersonMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  websiteUrl?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByRelationAggregateInput>;
  blogs?: InputMaybe<BlogAuthorOrderByRelationAggregateInput>;
  courses?: InputMaybe<CourseInstructorOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageOrderByWithRelationInput>;
  imageId?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  linkedinUrl?: InputMaybe<SortOrder>;
  projects?: InputMaybe<ProjectContributorOrderByRelationAggregateInput>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  websiteUrl?: InputMaybe<SortOrder>;
};

export type PersonRelationFilter = {
  is?: InputMaybe<PersonWhereInput>;
  isNot?: InputMaybe<PersonWhereInput>;
};

export enum PersonScalarFieldEnum {
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  GithubUrl = 'githubUrl',
  Id = 'id',
  ImageId = 'imageId',
  LastName = 'lastName',
  LinkedinUrl = 'linkedinUrl',
  Summary = 'summary',
  UpdatedAt = 'updatedAt',
  WebsiteUrl = 'websiteUrl'
}

export type PersonScalarWhereInput = {
  AND?: InputMaybe<Array<PersonScalarWhereInput>>;
  NOT?: InputMaybe<Array<PersonScalarWhereInput>>;
  OR?: InputMaybe<Array<PersonScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  firstName?: InputMaybe<StringFilter>;
  githubUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  linkedinUrl?: InputMaybe<StringNullableFilter>;
  summary?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  websiteUrl?: InputMaybe<StringNullableFilter>;
};

export type PersonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PersonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PersonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PersonScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  githubUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imageId?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  linkedinUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  summary?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  websiteUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type PersonUpdateInput = {
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorUpdateManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorUpdateManyWithoutInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutPersonsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectContributorUpdateManyWithoutContributorInput>;
  summary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  websiteUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  summary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  websiteUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateManyWithWhereWithoutImageInput = {
  data: PersonUpdateManyMutationInput;
  where: PersonScalarWhereInput;
};

export type PersonUpdateManyWithoutImageInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutImageInput>>;
  createMany?: InputMaybe<PersonCreateManyImageInputEnvelope>;
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PersonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  update?: InputMaybe<Array<PersonUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: InputMaybe<Array<PersonUpdateManyWithWhereWithoutImageInput>>;
  upsert?: InputMaybe<Array<PersonUpsertWithWhereUniqueWithoutImageInput>>;
};

export type PersonUpdateOneRequiredWithoutBlogsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutBlogsInput>;
  create?: InputMaybe<PersonCreateWithoutBlogsInput>;
  update?: InputMaybe<PersonUpdateWithoutBlogsInput>;
  upsert?: InputMaybe<PersonUpsertWithoutBlogsInput>;
};

export type PersonUpdateOneRequiredWithoutCoursesInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<PersonCreateWithoutCoursesInput>;
  update?: InputMaybe<PersonUpdateWithoutCoursesInput>;
  upsert?: InputMaybe<PersonUpsertWithoutCoursesInput>;
};

export type PersonUpdateOneRequiredWithoutProjectsInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<PersonCreateWithoutProjectsInput>;
  update?: InputMaybe<PersonUpdateWithoutProjectsInput>;
  upsert?: InputMaybe<PersonUpsertWithoutProjectsInput>;
};

export type PersonUpdateOneRequiredWithoutUserInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PersonCreateWithoutUserInput>;
  update?: InputMaybe<PersonUpdateWithoutUserInput>;
  upsert?: InputMaybe<PersonUpsertWithoutUserInput>;
};

export type PersonUpdateWithWhereUniqueWithoutImageInput = {
  data: PersonUpdateWithoutImageInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithoutBlogsInput = {
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
  courses?: InputMaybe<CourseInstructorUpdateManyWithoutInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutPersonsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectContributorUpdateManyWithoutContributorInput>;
  summary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  websiteUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutCoursesInput = {
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorUpdateManyWithoutAuthorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutPersonsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectContributorUpdateManyWithoutContributorInput>;
  summary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  websiteUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutImageInput = {
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorUpdateManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorUpdateManyWithoutInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectContributorUpdateManyWithoutContributorInput>;
  summary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  websiteUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutProjectsInput = {
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
  blogs?: InputMaybe<BlogAuthorUpdateManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorUpdateManyWithoutInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutPersonsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  summary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  websiteUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutUserInput = {
  blogs?: InputMaybe<BlogAuthorUpdateManyWithoutAuthorInput>;
  courses?: InputMaybe<CourseInstructorUpdateManyWithoutInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutPersonsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  linkedinUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectContributorUpdateManyWithoutContributorInput>;
  summary?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  websiteUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PersonUpsertWithWhereUniqueWithoutImageInput = {
  create: PersonCreateWithoutImageInput;
  update: PersonUpdateWithoutImageInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpsertWithoutBlogsInput = {
  create: PersonCreateWithoutBlogsInput;
  update: PersonUpdateWithoutBlogsInput;
};

export type PersonUpsertWithoutCoursesInput = {
  create: PersonCreateWithoutCoursesInput;
  update: PersonUpdateWithoutCoursesInput;
};

export type PersonUpsertWithoutProjectsInput = {
  create: PersonCreateWithoutProjectsInput;
  update: PersonUpdateWithoutProjectsInput;
};

export type PersonUpsertWithoutUserInput = {
  create: PersonCreateWithoutUserInput;
  update: PersonUpdateWithoutUserInput;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  User?: InputMaybe<UserListRelationFilter>;
  blogs?: InputMaybe<BlogAuthorListRelationFilter>;
  courses?: InputMaybe<CourseInstructorListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  firstName?: InputMaybe<StringFilter>;
  githubUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageRelationFilter>;
  imageId?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  linkedinUrl?: InputMaybe<StringNullableFilter>;
  projects?: InputMaybe<ProjectContributorListRelationFilter>;
  summary?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  websiteUrl?: InputMaybe<StringNullableFilter>;
};

export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count: ProjectCount;
  contributors: Array<ProjectContributor>;
  createdAt: Scalars['DateTime'];
  featuredImage: Image;
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageId: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ProjectContributorsArgs = {
  cursor?: InputMaybe<ProjectContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};

export type ProjectContributor = {
  __typename?: 'ProjectContributor';
  contributor: Person;
  contributorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectContributorCountAggregate = {
  __typename?: 'ProjectContributorCountAggregate';
  _all: Scalars['Int'];
  contributorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  projectId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProjectContributorCountOrderByAggregateInput = {
  contributorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectContributorCreateInput = {
  contributor: PersonCreateNestedOneWithoutProjectsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutContributorsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectContributorCreateManyContributorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectContributorCreateManyContributorInputEnvelope = {
  data: Array<ProjectContributorCreateManyContributorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectContributorCreateManyInput = {
  contributorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectContributorCreateManyProjectInput = {
  contributorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectContributorCreateManyProjectInputEnvelope = {
  data: Array<ProjectContributorCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectContributorCreateNestedManyWithoutContributorInput = {
  connect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectContributorCreateOrConnectWithoutContributorInput>>;
  create?: InputMaybe<Array<ProjectContributorCreateWithoutContributorInput>>;
  createMany?: InputMaybe<ProjectContributorCreateManyContributorInputEnvelope>;
};

export type ProjectContributorCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectContributorCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ProjectContributorCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ProjectContributorCreateManyProjectInputEnvelope>;
};

export type ProjectContributorCreateOrConnectWithoutContributorInput = {
  create: ProjectContributorCreateWithoutContributorInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorCreateOrConnectWithoutProjectInput = {
  create: ProjectContributorCreateWithoutProjectInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorCreateWithoutContributorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutContributorsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectContributorCreateWithoutProjectInput = {
  contributor: PersonCreateNestedOneWithoutProjectsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectContributorGroupBy = {
  __typename?: 'ProjectContributorGroupBy';
  _count?: Maybe<ProjectContributorCountAggregate>;
  _max?: Maybe<ProjectContributorMaxAggregate>;
  _min?: Maybe<ProjectContributorMinAggregate>;
  contributorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  projectId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectContributorListRelationFilter = {
  every?: InputMaybe<ProjectContributorWhereInput>;
  none?: InputMaybe<ProjectContributorWhereInput>;
  some?: InputMaybe<ProjectContributorWhereInput>;
};

export type ProjectContributorMaxAggregate = {
  __typename?: 'ProjectContributorMaxAggregate';
  contributorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectContributorMaxOrderByAggregateInput = {
  contributorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectContributorMinAggregate = {
  __typename?: 'ProjectContributorMinAggregate';
  contributorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectContributorMinOrderByAggregateInput = {
  contributorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectContributorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectContributorOrderByWithAggregationInput = {
  _count?: InputMaybe<ProjectContributorCountOrderByAggregateInput>;
  _max?: InputMaybe<ProjectContributorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProjectContributorMinOrderByAggregateInput>;
  contributorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectContributorOrderByWithRelationInput = {
  contributor?: InputMaybe<PersonOrderByWithRelationInput>;
  contributorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ProjectContributorScalarFieldEnum {
  ContributorId = 'contributorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProjectId = 'projectId',
  UpdatedAt = 'updatedAt'
}

export type ProjectContributorScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectContributorScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectContributorScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectContributorScalarWhereInput>>;
  contributorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectContributorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProjectContributorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProjectContributorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProjectContributorScalarWhereWithAggregatesInput>>;
  contributorId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProjectContributorUpdateInput = {
  contributor?: InputMaybe<PersonUpdateOneRequiredWithoutProjectsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutContributorsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpdateManyWithWhereWithoutContributorInput = {
  data: ProjectContributorUpdateManyMutationInput;
  where: ProjectContributorScalarWhereInput;
};

export type ProjectContributorUpdateManyWithWhereWithoutProjectInput = {
  data: ProjectContributorUpdateManyMutationInput;
  where: ProjectContributorScalarWhereInput;
};

export type ProjectContributorUpdateManyWithoutContributorInput = {
  connect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectContributorCreateOrConnectWithoutContributorInput>>;
  create?: InputMaybe<Array<ProjectContributorCreateWithoutContributorInput>>;
  createMany?: InputMaybe<ProjectContributorCreateManyContributorInputEnvelope>;
  delete?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectContributorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectContributorUpdateWithWhereUniqueWithoutContributorInput>>;
  updateMany?: InputMaybe<Array<ProjectContributorUpdateManyWithWhereWithoutContributorInput>>;
  upsert?: InputMaybe<Array<ProjectContributorUpsertWithWhereUniqueWithoutContributorInput>>;
};

export type ProjectContributorUpdateManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectContributorCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ProjectContributorCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ProjectContributorCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectContributorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectContributorUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<ProjectContributorUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<ProjectContributorUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type ProjectContributorUpdateWithWhereUniqueWithoutContributorInput = {
  data: ProjectContributorUpdateWithoutContributorInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorUpdateWithWhereUniqueWithoutProjectInput = {
  data: ProjectContributorUpdateWithoutProjectInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorUpdateWithoutContributorInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutContributorsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpdateWithoutProjectInput = {
  contributor?: InputMaybe<PersonUpdateOneRequiredWithoutProjectsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpsertWithWhereUniqueWithoutContributorInput = {
  create: ProjectContributorCreateWithoutContributorInput;
  update: ProjectContributorUpdateWithoutContributorInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorUpsertWithWhereUniqueWithoutProjectInput = {
  create: ProjectContributorCreateWithoutProjectInput;
  update: ProjectContributorUpdateWithoutProjectInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorWhereInput = {
  AND?: InputMaybe<Array<ProjectContributorWhereInput>>;
  NOT?: InputMaybe<Array<ProjectContributorWhereInput>>;
  OR?: InputMaybe<Array<ProjectContributorWhereInput>>;
  contributor?: InputMaybe<PersonRelationFilter>;
  contributorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectContributorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  contributors: Scalars['Int'];
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  githubUrl: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  name: Scalars['Int'];
  projectUrl: Scalars['Int'];
  slug: Scalars['Int'];
  summary: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProjectCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  projectUrl?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectCreateInput = {
  contributors?: InputMaybe<ProjectContributorCreateNestedManyWithoutProjectInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  featuredImage: ImageCreateNestedOneWithoutProjectsInput;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyFeaturedImageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyFeaturedImageInputEnvelope = {
  data: Array<ProjectCreateManyFeaturedImageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  imageId: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateNestedManyWithoutFeaturedImageInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutFeaturedImageInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutFeaturedImageInput>>;
  createMany?: InputMaybe<ProjectCreateManyFeaturedImageInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutContributorsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutContributorsInput>;
  create?: InputMaybe<ProjectCreateWithoutContributorsInput>;
};

export type ProjectCreateOrConnectWithoutContributorsInput = {
  create: ProjectCreateWithoutContributorsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutFeaturedImageInput = {
  create: ProjectCreateWithoutFeaturedImageInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutContributorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  featuredImage: ImageCreateNestedOneWithoutProjectsInput;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutFeaturedImageInput = {
  contributors?: InputMaybe<ProjectContributorCreateNestedManyWithoutProjectInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
  createdAt: Scalars['DateTime'];
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageId: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectUrl?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  projectUrl?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectUrl?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  projectUrl?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithAggregationInput = {
  _count?: InputMaybe<ProjectCountOrderByAggregateInput>;
  _max?: InputMaybe<ProjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProjectMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  projectUrl?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  contributors?: InputMaybe<ProjectContributorOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  featuredImage?: InputMaybe<ImageOrderByWithRelationInput>;
  githubUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  projectUrl?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  CreatedAt = 'createdAt',
  GithubUrl = 'githubUrl',
  Id = 'id',
  ImageId = 'imageId',
  Name = 'name',
  ProjectUrl = 'projectUrl',
  Slug = 'slug',
  Summary = 'summary',
  UpdatedAt = 'updatedAt'
}

export type ProjectScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  githubUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  projectUrl?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  githubUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imageId?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  projectUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  summary?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProjectUpdateInput = {
  contributors?: InputMaybe<ProjectContributorUpdateManyWithoutProjectInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<ImageUpdateOneRequiredWithoutProjectsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutFeaturedImageInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutFeaturedImageInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutFeaturedImageInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutFeaturedImageInput>>;
  createMany?: InputMaybe<ProjectCreateManyFeaturedImageInputEnvelope>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutFeaturedImageInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutFeaturedImageInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutFeaturedImageInput>>;
};

export type ProjectUpdateOneRequiredWithoutContributorsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutContributorsInput>;
  create?: InputMaybe<ProjectCreateWithoutContributorsInput>;
  update?: InputMaybe<ProjectUpdateWithoutContributorsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutContributorsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutFeaturedImageInput = {
  data: ProjectUpdateWithoutFeaturedImageInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutContributorsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  featuredImage?: InputMaybe<ImageUpdateOneRequiredWithoutProjectsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutFeaturedImageInput = {
  contributors?: InputMaybe<ProjectContributorUpdateManyWithoutProjectInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutFeaturedImageInput = {
  create: ProjectCreateWithoutFeaturedImageInput;
  update: ProjectUpdateWithoutFeaturedImageInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutContributorsInput = {
  create: ProjectCreateWithoutContributorsInput;
  update: ProjectUpdateWithoutContributorsInput;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  contributors?: InputMaybe<ProjectContributorListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featuredImage?: InputMaybe<ImageRelationFilter>;
  githubUrl?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  projectUrl?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBlog: AggregateBlog;
  aggregateBlogAuthor: AggregateBlogAuthor;
  aggregateCourse: AggregateCourse;
  aggregateCourseInstructor: AggregateCourseInstructor;
  aggregateImage: AggregateImage;
  aggregatePerson: AggregatePerson;
  aggregateProject: AggregateProject;
  aggregateProjectContributor: AggregateProjectContributor;
  aggregateSchool: AggregateSchool;
  aggregateTechnologyLogo: AggregateTechnologyLogo;
  aggregateUser: AggregateUser;
  blog?: Maybe<Blog>;
  blogAuthor?: Maybe<BlogAuthor>;
  blogAuthors: Array<BlogAuthor>;
  blogs: Array<Blog>;
  course?: Maybe<Course>;
  courseInstructor?: Maybe<CourseInstructor>;
  courseInstructors: Array<CourseInstructor>;
  courses: Array<Course>;
  findFirstBlog?: Maybe<Blog>;
  findFirstBlogAuthor?: Maybe<BlogAuthor>;
  findFirstCourse?: Maybe<Course>;
  findFirstCourseInstructor?: Maybe<CourseInstructor>;
  findFirstImage?: Maybe<Image>;
  findFirstPerson?: Maybe<Person>;
  findFirstProject?: Maybe<Project>;
  findFirstProjectContributor?: Maybe<ProjectContributor>;
  findFirstSchool?: Maybe<School>;
  findFirstTechnologyLogo?: Maybe<TechnologyLogo>;
  findFirstUser?: Maybe<User>;
  groupByBlog: Array<BlogGroupBy>;
  groupByBlogAuthor: Array<BlogAuthorGroupBy>;
  groupByCourse: Array<CourseGroupBy>;
  groupByCourseInstructor: Array<CourseInstructorGroupBy>;
  groupByImage: Array<ImageGroupBy>;
  groupByPerson: Array<PersonGroupBy>;
  groupByProject: Array<ProjectGroupBy>;
  groupByProjectContributor: Array<ProjectContributorGroupBy>;
  groupBySchool: Array<SchoolGroupBy>;
  groupByTechnologyLogo: Array<TechnologyLogoGroupBy>;
  groupByUser: Array<UserGroupBy>;
  image?: Maybe<Image>;
  images: Array<Image>;
  people: Array<Person>;
  person?: Maybe<Person>;
  project?: Maybe<Project>;
  projectContributor?: Maybe<ProjectContributor>;
  projectContributors: Array<ProjectContributor>;
  projects: Array<Project>;
  school?: Maybe<School>;
  schools: Array<School>;
  technologyLogo?: Maybe<TechnologyLogo>;
  technologyLogos: Array<TechnologyLogo>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryAggregateBlogAuthorArgs = {
  cursor?: InputMaybe<BlogAuthorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type QueryAggregateCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryAggregateCourseInstructorArgs = {
  cursor?: InputMaybe<CourseInstructorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CourseInstructorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type QueryAggregateImageArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryAggregatePersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryAggregateProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryAggregateProjectContributorArgs = {
  cursor?: InputMaybe<ProjectContributorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};


export type QueryAggregateSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryAggregateTechnologyLogoArgs = {
  cursor?: InputMaybe<TechnologyLogoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TechnologyLogoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologyLogoWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type QueryBlogAuthorArgs = {
  where: BlogAuthorWhereUniqueInput;
};


export type QueryBlogAuthorsArgs = {
  cursor?: InputMaybe<BlogAuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogAuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type QueryBlogsArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type QueryCourseInstructorArgs = {
  where: CourseInstructorWhereUniqueInput;
};


export type QueryCourseInstructorsArgs = {
  cursor?: InputMaybe<CourseInstructorWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseInstructorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseInstructorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type QueryCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryFindFirstBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryFindFirstBlogAuthorArgs = {
  cursor?: InputMaybe<BlogAuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogAuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type QueryFindFirstCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryFindFirstCourseInstructorArgs = {
  cursor?: InputMaybe<CourseInstructorWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseInstructorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseInstructorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type QueryFindFirstImageArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ImageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryFindFirstPersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryFindFirstProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryFindFirstProjectContributorArgs = {
  cursor?: InputMaybe<ProjectContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};


export type QueryFindFirstSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryFindFirstTechnologyLogoArgs = {
  cursor?: InputMaybe<TechnologyLogoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TechnologyLogoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TechnologyLogoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologyLogoWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByBlogArgs = {
  by: Array<BlogScalarFieldEnum>;
  having?: InputMaybe<BlogScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BlogOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryGroupByBlogAuthorArgs = {
  by: Array<BlogAuthorScalarFieldEnum>;
  having?: InputMaybe<BlogAuthorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type QueryGroupByCourseArgs = {
  by: Array<CourseScalarFieldEnum>;
  having?: InputMaybe<CourseScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CourseOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryGroupByCourseInstructorArgs = {
  by: Array<CourseInstructorScalarFieldEnum>;
  having?: InputMaybe<CourseInstructorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CourseInstructorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type QueryGroupByImageArgs = {
  by: Array<ImageScalarFieldEnum>;
  having?: InputMaybe<ImageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ImageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryGroupByPersonArgs = {
  by: Array<PersonScalarFieldEnum>;
  having?: InputMaybe<PersonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PersonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryGroupByProjectArgs = {
  by: Array<ProjectScalarFieldEnum>;
  having?: InputMaybe<ProjectScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryGroupByProjectContributorArgs = {
  by: Array<ProjectContributorScalarFieldEnum>;
  having?: InputMaybe<ProjectContributorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};


export type QueryGroupBySchoolArgs = {
  by: Array<SchoolScalarFieldEnum>;
  having?: InputMaybe<SchoolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryGroupByTechnologyLogoArgs = {
  by: Array<TechnologyLogoScalarFieldEnum>;
  having?: InputMaybe<TechnologyLogoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TechnologyLogoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologyLogoWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ImageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryPeopleArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryPersonArgs = {
  where: PersonWhereUniqueInput;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectContributorArgs = {
  where: ProjectContributorWhereUniqueInput;
};


export type QueryProjectContributorsArgs = {
  cursor?: InputMaybe<ProjectContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};


export type QueryProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QuerySchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type QuerySchoolsArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryTechnologyLogoArgs = {
  where: TechnologyLogoWhereUniqueInput;
};


export type QueryTechnologyLogosArgs = {
  cursor?: InputMaybe<TechnologyLogoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TechnologyLogoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TechnologyLogoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TechnologyLogoWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Rating {
  Five = 'FIVE',
  Four = 'FOUR',
  One = 'ONE',
  Three = 'THREE',
  Two = 'TWO'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type School = {
  __typename?: 'School';
  _count: SchoolCount;
  courses: Array<Course>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  logo: Image;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


export type SchoolCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};

export type SchoolCount = {
  __typename?: 'SchoolCount';
  courses: Scalars['Int'];
};

export type SchoolCountAggregate = {
  __typename?: 'SchoolCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
};

export type SchoolCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SchoolCreateInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutSchoolInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logo: ImageCreateNestedOneWithoutSchoolsInput;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type SchoolCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  imageId: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type SchoolCreateManyLogoInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type SchoolCreateManyLogoInputEnvelope = {
  data: Array<SchoolCreateManyLogoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SchoolCreateNestedManyWithoutLogoInput = {
  connect?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SchoolCreateOrConnectWithoutLogoInput>>;
  create?: InputMaybe<Array<SchoolCreateWithoutLogoInput>>;
  createMany?: InputMaybe<SchoolCreateManyLogoInputEnvelope>;
};

export type SchoolCreateNestedOneWithoutCoursesInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<SchoolCreateWithoutCoursesInput>;
};

export type SchoolCreateOrConnectWithoutCoursesInput = {
  create: SchoolCreateWithoutCoursesInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateOrConnectWithoutLogoInput = {
  create: SchoolCreateWithoutLogoInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateWithoutCoursesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  logo: ImageCreateNestedOneWithoutSchoolsInput;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type SchoolCreateWithoutLogoInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutSchoolInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type SchoolGroupBy = {
  __typename?: 'SchoolGroupBy';
  _count?: Maybe<SchoolCountAggregate>;
  _max?: Maybe<SchoolMaxAggregate>;
  _min?: Maybe<SchoolMinAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type SchoolListRelationFilter = {
  every?: InputMaybe<SchoolWhereInput>;
  none?: InputMaybe<SchoolWhereInput>;
  some?: InputMaybe<SchoolWhereInput>;
};

export type SchoolMaxAggregate = {
  __typename?: 'SchoolMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type SchoolMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SchoolMinAggregate = {
  __typename?: 'SchoolMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type SchoolMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SchoolOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SchoolOrderByWithAggregationInput = {
  _count?: InputMaybe<SchoolCountOrderByAggregateInput>;
  _max?: InputMaybe<SchoolMaxOrderByAggregateInput>;
  _min?: InputMaybe<SchoolMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SchoolOrderByWithRelationInput = {
  courses?: InputMaybe<CourseOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  logo?: InputMaybe<ImageOrderByWithRelationInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SchoolRelationFilter = {
  is?: InputMaybe<SchoolWhereInput>;
  isNot?: InputMaybe<SchoolWhereInput>;
};

export enum SchoolScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  ImageId = 'imageId',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export type SchoolScalarWhereInput = {
  AND?: InputMaybe<Array<SchoolScalarWhereInput>>;
  NOT?: InputMaybe<Array<SchoolScalarWhereInput>>;
  OR?: InputMaybe<Array<SchoolScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SchoolScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imageId?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
};

export type SchoolUpdateInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutSchoolInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<ImageUpdateOneRequiredWithoutSchoolsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateManyWithWhereWithoutLogoInput = {
  data: SchoolUpdateManyMutationInput;
  where: SchoolScalarWhereInput;
};

export type SchoolUpdateManyWithoutLogoInput = {
  connect?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SchoolCreateOrConnectWithoutLogoInput>>;
  create?: InputMaybe<Array<SchoolCreateWithoutLogoInput>>;
  createMany?: InputMaybe<SchoolCreateManyLogoInputEnvelope>;
  delete?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SchoolScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  set?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  update?: InputMaybe<Array<SchoolUpdateWithWhereUniqueWithoutLogoInput>>;
  updateMany?: InputMaybe<Array<SchoolUpdateManyWithWhereWithoutLogoInput>>;
  upsert?: InputMaybe<Array<SchoolUpsertWithWhereUniqueWithoutLogoInput>>;
};

export type SchoolUpdateOneRequiredWithoutCoursesInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<SchoolCreateWithoutCoursesInput>;
  update?: InputMaybe<SchoolUpdateWithoutCoursesInput>;
  upsert?: InputMaybe<SchoolUpsertWithoutCoursesInput>;
};

export type SchoolUpdateWithWhereUniqueWithoutLogoInput = {
  data: SchoolUpdateWithoutLogoInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolUpdateWithoutCoursesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<ImageUpdateOneRequiredWithoutSchoolsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutLogoInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutSchoolInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpsertWithWhereUniqueWithoutLogoInput = {
  create: SchoolCreateWithoutLogoInput;
  update: SchoolUpdateWithoutLogoInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolUpsertWithoutCoursesInput = {
  create: SchoolCreateWithoutCoursesInput;
  update: SchoolUpdateWithoutCoursesInput;
};

export type SchoolWhereInput = {
  AND?: InputMaybe<Array<SchoolWhereInput>>;
  NOT?: InputMaybe<Array<SchoolWhereInput>>;
  OR?: InputMaybe<Array<SchoolWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  logo?: InputMaybe<ImageRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SchoolWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TechnologyLogo = {
  __typename?: 'TechnologyLogo';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  isOnHomepage: Scalars['Boolean'];
  logo: Image;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TechnologyLogoCountAggregate = {
  __typename?: 'TechnologyLogoCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  imageId: Scalars['Int'];
  isOnHomepage: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TechnologyLogoCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isOnHomepage?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TechnologyLogoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isOnHomepage: Scalars['Boolean'];
  logo: ImageCreateNestedOneWithoutTechnologyLogosInput;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TechnologyLogoCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  imageId: Scalars['String'];
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TechnologyLogoCreateManyLogoInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TechnologyLogoCreateManyLogoInputEnvelope = {
  data: Array<TechnologyLogoCreateManyLogoInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TechnologyLogoCreateNestedManyWithoutLogoInput = {
  connect?: InputMaybe<Array<TechnologyLogoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TechnologyLogoCreateOrConnectWithoutLogoInput>>;
  create?: InputMaybe<Array<TechnologyLogoCreateWithoutLogoInput>>;
  createMany?: InputMaybe<TechnologyLogoCreateManyLogoInputEnvelope>;
};

export type TechnologyLogoCreateOrConnectWithoutLogoInput = {
  create: TechnologyLogoCreateWithoutLogoInput;
  where: TechnologyLogoWhereUniqueInput;
};

export type TechnologyLogoCreateWithoutLogoInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TechnologyLogoGroupBy = {
  __typename?: 'TechnologyLogoGroupBy';
  _count?: Maybe<TechnologyLogoCountAggregate>;
  _max?: Maybe<TechnologyLogoMaxAggregate>;
  _min?: Maybe<TechnologyLogoMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TechnologyLogoListRelationFilter = {
  every?: InputMaybe<TechnologyLogoWhereInput>;
  none?: InputMaybe<TechnologyLogoWhereInput>;
  some?: InputMaybe<TechnologyLogoWhereInput>;
};

export type TechnologyLogoMaxAggregate = {
  __typename?: 'TechnologyLogoMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  isOnHomepage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TechnologyLogoMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isOnHomepage?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TechnologyLogoMinAggregate = {
  __typename?: 'TechnologyLogoMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['String']>;
  isOnHomepage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TechnologyLogoMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isOnHomepage?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TechnologyLogoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TechnologyLogoOrderByWithAggregationInput = {
  _count?: InputMaybe<TechnologyLogoCountOrderByAggregateInput>;
  _max?: InputMaybe<TechnologyLogoMaxOrderByAggregateInput>;
  _min?: InputMaybe<TechnologyLogoMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isOnHomepage?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TechnologyLogoOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isOnHomepage?: InputMaybe<SortOrder>;
  logo?: InputMaybe<ImageOrderByWithRelationInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TechnologyLogoScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageId = 'imageId',
  IsOnHomepage = 'isOnHomepage',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type TechnologyLogoScalarWhereInput = {
  AND?: InputMaybe<Array<TechnologyLogoScalarWhereInput>>;
  NOT?: InputMaybe<Array<TechnologyLogoScalarWhereInput>>;
  OR?: InputMaybe<Array<TechnologyLogoScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  isOnHomepage?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TechnologyLogoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TechnologyLogoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TechnologyLogoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TechnologyLogoScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imageId?: InputMaybe<StringWithAggregatesFilter>;
  isOnHomepage?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TechnologyLogoUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnHomepage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  logo?: InputMaybe<ImageUpdateOneRequiredWithoutTechnologyLogosInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TechnologyLogoUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnHomepage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TechnologyLogoUpdateManyWithWhereWithoutLogoInput = {
  data: TechnologyLogoUpdateManyMutationInput;
  where: TechnologyLogoScalarWhereInput;
};

export type TechnologyLogoUpdateManyWithoutLogoInput = {
  connect?: InputMaybe<Array<TechnologyLogoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TechnologyLogoCreateOrConnectWithoutLogoInput>>;
  create?: InputMaybe<Array<TechnologyLogoCreateWithoutLogoInput>>;
  createMany?: InputMaybe<TechnologyLogoCreateManyLogoInputEnvelope>;
  delete?: InputMaybe<Array<TechnologyLogoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TechnologyLogoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TechnologyLogoWhereUniqueInput>>;
  set?: InputMaybe<Array<TechnologyLogoWhereUniqueInput>>;
  update?: InputMaybe<Array<TechnologyLogoUpdateWithWhereUniqueWithoutLogoInput>>;
  updateMany?: InputMaybe<Array<TechnologyLogoUpdateManyWithWhereWithoutLogoInput>>;
  upsert?: InputMaybe<Array<TechnologyLogoUpsertWithWhereUniqueWithoutLogoInput>>;
};

export type TechnologyLogoUpdateWithWhereUniqueWithoutLogoInput = {
  data: TechnologyLogoUpdateWithoutLogoInput;
  where: TechnologyLogoWhereUniqueInput;
};

export type TechnologyLogoUpdateWithoutLogoInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnHomepage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TechnologyLogoUpsertWithWhereUniqueWithoutLogoInput = {
  create: TechnologyLogoCreateWithoutLogoInput;
  update: TechnologyLogoUpdateWithoutLogoInput;
  where: TechnologyLogoWhereUniqueInput;
};

export type TechnologyLogoWhereInput = {
  AND?: InputMaybe<Array<TechnologyLogoWhereInput>>;
  NOT?: InputMaybe<Array<TechnologyLogoWhereInput>>;
  OR?: InputMaybe<Array<TechnologyLogoWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  isOnHomepage?: InputMaybe<BoolFilter>;
  logo?: InputMaybe<ImageRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TechnologyLogoWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  imageId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  password: Scalars['String'];
  person: Person;
  personId: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  password: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  person: PersonCreateNestedOneWithoutUserInput;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  personId: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateManyPersonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateManyPersonInputEnvelope = {
  data: Array<UserCreateManyPersonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPersonInput>>;
  createMany?: InputMaybe<UserCreateManyPersonInputEnvelope>;
};

export type UserCreateOrConnectWithoutPersonInput = {
  create: UserCreateWithoutPersonInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPersonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  password: Scalars['String'];
  personId: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  person?: InputMaybe<PersonOrderByWithRelationInput>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Password = 'password',
  PersonId = 'personId',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  personId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  personId?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateOneRequiredWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutPersonInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutPersonInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPersonInput>>;
  createMany?: InputMaybe<UserCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutPersonInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutPersonInput>>;
};

export type UserUpdateWithWhereUniqueWithoutPersonInput = {
  data: UserUpdateWithoutPersonInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutPersonInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutPersonInput = {
  create: UserCreateWithoutPersonInput;
  update: UserUpdateWithoutPersonInput;
  where: UserWhereUniqueInput;
};

export type UserUsernamePasswordCompoundUniqueInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  username_password?: InputMaybe<UserUsernamePasswordCompoundUniqueInput>;
};
