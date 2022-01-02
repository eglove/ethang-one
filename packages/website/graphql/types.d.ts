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
  BlogAuthor: Array<BlogAuthor>;
  Image: Image;
  _count?: Maybe<BlogCount>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type BlogBlogAuthorArgs = {
  cursor?: InputMaybe<BlogAuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogAuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};

export type BlogAuthor = {
  __typename?: 'BlogAuthor';
  Blog: Blog;
  Person: Person;
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
  Blog: BlogCreateNestedOneWithoutBlogAuthorInput;
  Person: PersonCreateNestedOneWithoutBlogAuthorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogAuthorCreateManyBlogInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  personId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogAuthorCreateManyBlogInputEnvelope = {
  data: Array<BlogAuthorCreateManyBlogInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BlogAuthorCreateManyInput = {
  blogId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  personId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogAuthorCreateManyPersonInput = {
  blogId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogAuthorCreateManyPersonInputEnvelope = {
  data: Array<BlogAuthorCreateManyPersonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BlogAuthorCreateNestedManyWithoutBlogInput = {
  connect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogAuthorCreateOrConnectWithoutBlogInput>>;
  create?: InputMaybe<Array<BlogAuthorCreateWithoutBlogInput>>;
  createMany?: InputMaybe<BlogAuthorCreateManyBlogInputEnvelope>;
};

export type BlogAuthorCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogAuthorCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<BlogAuthorCreateWithoutPersonInput>>;
  createMany?: InputMaybe<BlogAuthorCreateManyPersonInputEnvelope>;
};

export type BlogAuthorCreateOrConnectWithoutBlogInput = {
  create: BlogAuthorCreateWithoutBlogInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorCreateOrConnectWithoutPersonInput = {
  create: BlogAuthorCreateWithoutPersonInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorCreateWithoutBlogInput = {
  Person: PersonCreateNestedOneWithoutBlogAuthorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogAuthorCreateWithoutPersonInput = {
  Blog: BlogCreateNestedOneWithoutBlogAuthorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Blog?: InputMaybe<BlogOrderByWithRelationInput>;
  Person?: InputMaybe<PersonOrderByWithRelationInput>;
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
  Blog?: InputMaybe<BlogUpdateOneRequiredWithoutBlogAuthorInput>;
  Person?: InputMaybe<PersonUpdateOneRequiredWithoutBlogAuthorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpdateManyWithWhereWithoutBlogInput = {
  data: BlogAuthorUpdateManyMutationInput;
  where: BlogAuthorScalarWhereInput;
};

export type BlogAuthorUpdateManyWithWhereWithoutPersonInput = {
  data: BlogAuthorUpdateManyMutationInput;
  where: BlogAuthorScalarWhereInput;
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

export type BlogAuthorUpdateManyWithoutPersonInput = {
  connect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogAuthorCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<BlogAuthorCreateWithoutPersonInput>>;
  createMany?: InputMaybe<BlogAuthorCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogAuthorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogAuthorWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogAuthorUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: InputMaybe<Array<BlogAuthorUpdateManyWithWhereWithoutPersonInput>>;
  upsert?: InputMaybe<Array<BlogAuthorUpsertWithWhereUniqueWithoutPersonInput>>;
};

export type BlogAuthorUpdateWithWhereUniqueWithoutBlogInput = {
  data: BlogAuthorUpdateWithoutBlogInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorUpdateWithWhereUniqueWithoutPersonInput = {
  data: BlogAuthorUpdateWithoutPersonInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorUpdateWithoutBlogInput = {
  Person?: InputMaybe<PersonUpdateOneRequiredWithoutBlogAuthorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpdateWithoutPersonInput = {
  Blog?: InputMaybe<BlogUpdateOneRequiredWithoutBlogAuthorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogAuthorUpsertWithWhereUniqueWithoutBlogInput = {
  create: BlogAuthorCreateWithoutBlogInput;
  update: BlogAuthorUpdateWithoutBlogInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorUpsertWithWhereUniqueWithoutPersonInput = {
  create: BlogAuthorCreateWithoutPersonInput;
  update: BlogAuthorUpdateWithoutPersonInput;
  where: BlogAuthorWhereUniqueInput;
};

export type BlogAuthorWhereInput = {
  AND?: InputMaybe<Array<BlogAuthorWhereInput>>;
  Blog?: InputMaybe<BlogRelationFilter>;
  NOT?: InputMaybe<Array<BlogAuthorWhereInput>>;
  OR?: InputMaybe<Array<BlogAuthorWhereInput>>;
  Person?: InputMaybe<PersonRelationFilter>;
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
  BlogAuthor: Scalars['Int'];
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
  BlogAuthor?: InputMaybe<BlogAuthorCreateNestedManyWithoutBlogInput>;
  Image: ImageCreateNestedOneWithoutBlogInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogCreateManyImageInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogCreateManyImageInputEnvelope = {
  data: Array<BlogCreateManyImageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BlogCreateManyInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  imageId: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogCreateNestedManyWithoutImageInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutImageInput>>;
  createMany?: InputMaybe<BlogCreateManyImageInputEnvelope>;
};

export type BlogCreateNestedOneWithoutBlogAuthorInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutBlogAuthorInput>;
  create?: InputMaybe<BlogCreateWithoutBlogAuthorInput>;
};

export type BlogCreateOrConnectWithoutBlogAuthorInput = {
  create: BlogCreateWithoutBlogAuthorInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateOrConnectWithoutImageInput = {
  create: BlogCreateWithoutImageInput;
  where: BlogWhereUniqueInput;
};

export type BlogCreateWithoutBlogAuthorInput = {
  Image: ImageCreateNestedOneWithoutBlogInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BlogCreateWithoutImageInput = {
  BlogAuthor?: InputMaybe<BlogAuthorCreateNestedManyWithoutBlogInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  BlogAuthor?: InputMaybe<BlogAuthorOrderByRelationAggregateInput>;
  Image?: InputMaybe<ImageOrderByWithRelationInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
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
  BlogAuthor?: InputMaybe<BlogAuthorUpdateManyWithoutBlogInput>;
  Image?: InputMaybe<ImageUpdateOneRequiredWithoutBlogInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type BlogUpdateManyWithWhereWithoutImageInput = {
  data: BlogUpdateManyMutationInput;
  where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithoutImageInput = {
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<BlogCreateWithoutImageInput>>;
  createMany?: InputMaybe<BlogCreateManyImageInputEnvelope>;
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutImageInput>>;
  upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutImageInput>>;
};

export type BlogUpdateOneRequiredWithoutBlogAuthorInput = {
  connect?: InputMaybe<BlogWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlogCreateOrConnectWithoutBlogAuthorInput>;
  create?: InputMaybe<BlogCreateWithoutBlogAuthorInput>;
  update?: InputMaybe<BlogUpdateWithoutBlogAuthorInput>;
  upsert?: InputMaybe<BlogUpsertWithoutBlogAuthorInput>;
};

export type BlogUpdateWithWhereUniqueWithoutImageInput = {
  data: BlogUpdateWithoutImageInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpdateWithoutBlogAuthorInput = {
  Image?: InputMaybe<ImageUpdateOneRequiredWithoutBlogInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateWithoutImageInput = {
  BlogAuthor?: InputMaybe<BlogAuthorUpdateManyWithoutBlogInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpsertWithWhereUniqueWithoutImageInput = {
  create: BlogCreateWithoutImageInput;
  update: BlogUpdateWithoutImageInput;
  where: BlogWhereUniqueInput;
};

export type BlogUpsertWithoutBlogAuthorInput = {
  create: BlogCreateWithoutBlogAuthorInput;
  update: BlogUpdateWithoutBlogAuthorInput;
};

export type BlogWhereInput = {
  AND?: InputMaybe<Array<BlogWhereInput>>;
  BlogAuthor?: InputMaybe<BlogAuthorListRelationFilter>;
  Image?: InputMaybe<ImageRelationFilter>;
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  OR?: InputMaybe<Array<BlogWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  CourseInstructor: Array<CourseInstructor>;
  School: School;
  _count?: Maybe<CourseCount>;
  complete: Scalars['Boolean'];
  courseUrls: Array<Scalars['String']>;
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


export type CourseCourseInstructorArgs = {
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
  CourseInstructor: Scalars['Int'];
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
  CourseInstructor?: InputMaybe<CourseInstructorCreateNestedManyWithoutCourseInput>;
  School: SchoolCreateNestedOneWithoutCourseInput;
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreatecourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id: Scalars['String'];
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  yearUpdated: Scalars['Int'];
};

export type CourseCreateManyInput = {
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreateManycourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id: Scalars['String'];
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  schoolId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  yearUpdated: Scalars['Int'];
};

export type CourseCreateManySchoolInput = {
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreateManycourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id: Scalars['String'];
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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

export type CourseCreateNestedOneWithoutCourseInstructorInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutCourseInstructorInput>;
  create?: InputMaybe<CourseCreateWithoutCourseInstructorInput>;
};

export type CourseCreateOrConnectWithoutCourseInstructorInput = {
  create: CourseCreateWithoutCourseInstructorInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutSchoolInput = {
  create: CourseCreateWithoutSchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateWithoutCourseInstructorInput = {
  School: SchoolCreateNestedOneWithoutCourseInput;
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreatecourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id: Scalars['String'];
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  yearUpdated: Scalars['Int'];
};

export type CourseCreateWithoutSchoolInput = {
  CourseInstructor?: InputMaybe<CourseInstructorCreateNestedManyWithoutCourseInput>;
  complete: Scalars['Boolean'];
  courseUrls?: InputMaybe<CourseCreatecourseUrlsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  duration: Scalars['Float'];
  id: Scalars['String'];
  order: Scalars['Int'];
  rating?: InputMaybe<Rating>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Course: Course;
  Person: Person;
  courseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
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
  Course: CourseCreateNestedOneWithoutCourseInstructorInput;
  Person: PersonCreateNestedOneWithoutCourseInstructorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourseInstructorCreateManyCourseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  instructorId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourseInstructorCreateManyCourseInputEnvelope = {
  data: Array<CourseInstructorCreateManyCourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseInstructorCreateManyInput = {
  courseId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  instructorId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourseInstructorCreateManyPersonInput = {
  courseId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourseInstructorCreateManyPersonInputEnvelope = {
  data: Array<CourseInstructorCreateManyPersonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseInstructorCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseInstructorCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<CourseInstructorCreateWithoutCourseInput>>;
  createMany?: InputMaybe<CourseInstructorCreateManyCourseInputEnvelope>;
};

export type CourseInstructorCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseInstructorCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<CourseInstructorCreateWithoutPersonInput>>;
  createMany?: InputMaybe<CourseInstructorCreateManyPersonInputEnvelope>;
};

export type CourseInstructorCreateOrConnectWithoutCourseInput = {
  create: CourseInstructorCreateWithoutCourseInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorCreateOrConnectWithoutPersonInput = {
  create: CourseInstructorCreateWithoutPersonInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorCreateWithoutCourseInput = {
  Person: PersonCreateNestedOneWithoutCourseInstructorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CourseInstructorCreateWithoutPersonInput = {
  Course: CourseCreateNestedOneWithoutCourseInstructorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Course?: InputMaybe<CourseOrderByWithRelationInput>;
  Person?: InputMaybe<PersonOrderByWithRelationInput>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  Course?: InputMaybe<CourseUpdateOneRequiredWithoutCourseInstructorInput>;
  Person?: InputMaybe<PersonUpdateOneRequiredWithoutCourseInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type CourseInstructorUpdateManyWithWhereWithoutPersonInput = {
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

export type CourseInstructorUpdateManyWithoutPersonInput = {
  connect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseInstructorCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<CourseInstructorCreateWithoutPersonInput>>;
  createMany?: InputMaybe<CourseInstructorCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseInstructorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseInstructorWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseInstructorUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: InputMaybe<Array<CourseInstructorUpdateManyWithWhereWithoutPersonInput>>;
  upsert?: InputMaybe<Array<CourseInstructorUpsertWithWhereUniqueWithoutPersonInput>>;
};

export type CourseInstructorUpdateWithWhereUniqueWithoutCourseInput = {
  data: CourseInstructorUpdateWithoutCourseInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorUpdateWithWhereUniqueWithoutPersonInput = {
  data: CourseInstructorUpdateWithoutPersonInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorUpdateWithoutCourseInput = {
  Person?: InputMaybe<PersonUpdateOneRequiredWithoutCourseInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseInstructorUpdateWithoutPersonInput = {
  Course?: InputMaybe<CourseUpdateOneRequiredWithoutCourseInstructorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseInstructorUpsertWithWhereUniqueWithoutCourseInput = {
  create: CourseInstructorCreateWithoutCourseInput;
  update: CourseInstructorUpdateWithoutCourseInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorUpsertWithWhereUniqueWithoutPersonInput = {
  create: CourseInstructorCreateWithoutPersonInput;
  update: CourseInstructorUpdateWithoutPersonInput;
  where: CourseInstructorWhereUniqueInput;
};

export type CourseInstructorWhereInput = {
  AND?: InputMaybe<Array<CourseInstructorWhereInput>>;
  Course?: InputMaybe<CourseRelationFilter>;
  NOT?: InputMaybe<Array<CourseInstructorWhereInput>>;
  OR?: InputMaybe<Array<CourseInstructorWhereInput>>;
  Person?: InputMaybe<PersonRelationFilter>;
  courseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
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
  CourseInstructor?: InputMaybe<CourseInstructorOrderByRelationAggregateInput>;
  School?: InputMaybe<SchoolOrderByWithRelationInput>;
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
  CourseInstructor?: InputMaybe<CourseInstructorUpdateManyWithoutCourseInput>;
  School?: InputMaybe<SchoolUpdateOneRequiredWithoutCourseInput>;
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

export type CourseUpdateOneRequiredWithoutCourseInstructorInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutCourseInstructorInput>;
  create?: InputMaybe<CourseCreateWithoutCourseInstructorInput>;
  update?: InputMaybe<CourseUpdateWithoutCourseInstructorInput>;
  upsert?: InputMaybe<CourseUpsertWithoutCourseInstructorInput>;
};

export type CourseUpdateWithWhereUniqueWithoutSchoolInput = {
  data: CourseUpdateWithoutSchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateWithoutCourseInstructorInput = {
  School?: InputMaybe<SchoolUpdateOneRequiredWithoutCourseInput>;
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

export type CourseUpdateWithoutSchoolInput = {
  CourseInstructor?: InputMaybe<CourseInstructorUpdateManyWithoutCourseInput>;
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

export type CourseUpdatecourseUrlsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type CourseUpsertWithWhereUniqueWithoutSchoolInput = {
  create: CourseCreateWithoutSchoolInput;
  update: CourseUpdateWithoutSchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpsertWithoutCourseInstructorInput = {
  create: CourseCreateWithoutCourseInstructorInput;
  update: CourseUpdateWithoutCourseInstructorInput;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  CourseInstructor?: InputMaybe<CourseInstructorListRelationFilter>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  School?: InputMaybe<SchoolRelationFilter>;
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
  Blog: Array<Blog>;
  Person: Array<Person>;
  Project: Array<Project>;
  School: Array<School>;
  TechnologyLogo?: Maybe<TechnologyLogo>;
  _count?: Maybe<ImageCount>;
  altText: Scalars['String'];
  createdAt: Scalars['DateTime'];
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};


export type ImageBlogArgs = {
  cursor?: InputMaybe<BlogWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogWhereInput>;
};


export type ImagePersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};


export type ImageProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type ImageSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};

export type ImageCount = {
  __typename?: 'ImageCount';
  Blog: Scalars['Int'];
  Person: Scalars['Int'];
  Project: Scalars['Int'];
  School: Scalars['Int'];
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
  Blog?: InputMaybe<BlogCreateNestedManyWithoutImageInput>;
  Person?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutImageInput>;
  School?: InputMaybe<SchoolCreateNestedManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoCreateNestedOneWithoutImageInput>;
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateManyInput = {
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateNestedOneWithoutBlogInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<ImageCreateWithoutBlogInput>;
};

export type ImageCreateNestedOneWithoutPersonInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutPersonInput>;
  create?: InputMaybe<ImageCreateWithoutPersonInput>;
};

export type ImageCreateNestedOneWithoutProjectInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutProjectInput>;
  create?: InputMaybe<ImageCreateWithoutProjectInput>;
};

export type ImageCreateNestedOneWithoutSchoolInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutSchoolInput>;
  create?: InputMaybe<ImageCreateWithoutSchoolInput>;
};

export type ImageCreateNestedOneWithoutTechnologyLogoInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutTechnologyLogoInput>;
  create?: InputMaybe<ImageCreateWithoutTechnologyLogoInput>;
};

export type ImageCreateOrConnectWithoutBlogInput = {
  create: ImageCreateWithoutBlogInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutPersonInput = {
  create: ImageCreateWithoutPersonInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutProjectInput = {
  create: ImageCreateWithoutProjectInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutSchoolInput = {
  create: ImageCreateWithoutSchoolInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutTechnologyLogoInput = {
  create: ImageCreateWithoutTechnologyLogoInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateWithoutBlogInput = {
  Person?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutImageInput>;
  School?: InputMaybe<SchoolCreateNestedManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoCreateNestedOneWithoutImageInput>;
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutPersonInput = {
  Blog?: InputMaybe<BlogCreateNestedManyWithoutImageInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutImageInput>;
  School?: InputMaybe<SchoolCreateNestedManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoCreateNestedOneWithoutImageInput>;
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutProjectInput = {
  Blog?: InputMaybe<BlogCreateNestedManyWithoutImageInput>;
  Person?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  School?: InputMaybe<SchoolCreateNestedManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoCreateNestedOneWithoutImageInput>;
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutSchoolInput = {
  Blog?: InputMaybe<BlogCreateNestedManyWithoutImageInput>;
  Person?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoCreateNestedOneWithoutImageInput>;
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['String'];
};

export type ImageCreateWithoutTechnologyLogoInput = {
  Blog?: InputMaybe<BlogCreateNestedManyWithoutImageInput>;
  Person?: InputMaybe<PersonCreateNestedManyWithoutImageInput>;
  Project?: InputMaybe<ProjectCreateNestedManyWithoutImageInput>;
  School?: InputMaybe<SchoolCreateNestedManyWithoutImageInput>;
  altText: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  height: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Blog?: InputMaybe<BlogOrderByRelationAggregateInput>;
  Person?: InputMaybe<PersonOrderByRelationAggregateInput>;
  Project?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  School?: InputMaybe<SchoolOrderByRelationAggregateInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoOrderByWithRelationInput>;
  altText?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  Blog?: InputMaybe<BlogUpdateManyWithoutImageInput>;
  Person?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  Project?: InputMaybe<ProjectUpdateManyWithoutImageInput>;
  School?: InputMaybe<SchoolUpdateManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoUpdateOneWithoutImageInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type ImageUpdateOneRequiredWithoutBlogInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutBlogInput>;
  create?: InputMaybe<ImageCreateWithoutBlogInput>;
  update?: InputMaybe<ImageUpdateWithoutBlogInput>;
  upsert?: InputMaybe<ImageUpsertWithoutBlogInput>;
};

export type ImageUpdateOneRequiredWithoutProjectInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutProjectInput>;
  create?: InputMaybe<ImageCreateWithoutProjectInput>;
  update?: InputMaybe<ImageUpdateWithoutProjectInput>;
  upsert?: InputMaybe<ImageUpsertWithoutProjectInput>;
};

export type ImageUpdateOneRequiredWithoutSchoolInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutSchoolInput>;
  create?: InputMaybe<ImageCreateWithoutSchoolInput>;
  update?: InputMaybe<ImageUpdateWithoutSchoolInput>;
  upsert?: InputMaybe<ImageUpsertWithoutSchoolInput>;
};

export type ImageUpdateOneRequiredWithoutTechnologyLogoInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutTechnologyLogoInput>;
  create?: InputMaybe<ImageCreateWithoutTechnologyLogoInput>;
  update?: InputMaybe<ImageUpdateWithoutTechnologyLogoInput>;
  upsert?: InputMaybe<ImageUpsertWithoutTechnologyLogoInput>;
};

export type ImageUpdateOneWithoutPersonInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutPersonInput>;
  create?: InputMaybe<ImageCreateWithoutPersonInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ImageUpdateWithoutPersonInput>;
  upsert?: InputMaybe<ImageUpsertWithoutPersonInput>;
};

export type ImageUpdateWithoutBlogInput = {
  Person?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  Project?: InputMaybe<ProjectUpdateManyWithoutImageInput>;
  School?: InputMaybe<SchoolUpdateManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoUpdateOneWithoutImageInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutPersonInput = {
  Blog?: InputMaybe<BlogUpdateManyWithoutImageInput>;
  Project?: InputMaybe<ProjectUpdateManyWithoutImageInput>;
  School?: InputMaybe<SchoolUpdateManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoUpdateOneWithoutImageInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutProjectInput = {
  Blog?: InputMaybe<BlogUpdateManyWithoutImageInput>;
  Person?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  School?: InputMaybe<SchoolUpdateManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoUpdateOneWithoutImageInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutSchoolInput = {
  Blog?: InputMaybe<BlogUpdateManyWithoutImageInput>;
  Person?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  Project?: InputMaybe<ProjectUpdateManyWithoutImageInput>;
  TechnologyLogo?: InputMaybe<TechnologyLogoUpdateOneWithoutImageInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateWithoutTechnologyLogoInput = {
  Blog?: InputMaybe<BlogUpdateManyWithoutImageInput>;
  Person?: InputMaybe<PersonUpdateManyWithoutImageInput>;
  Project?: InputMaybe<ProjectUpdateManyWithoutImageInput>;
  School?: InputMaybe<SchoolUpdateManyWithoutImageInput>;
  altText?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpsertWithoutBlogInput = {
  create: ImageCreateWithoutBlogInput;
  update: ImageUpdateWithoutBlogInput;
};

export type ImageUpsertWithoutPersonInput = {
  create: ImageCreateWithoutPersonInput;
  update: ImageUpdateWithoutPersonInput;
};

export type ImageUpsertWithoutProjectInput = {
  create: ImageCreateWithoutProjectInput;
  update: ImageUpdateWithoutProjectInput;
};

export type ImageUpsertWithoutSchoolInput = {
  create: ImageCreateWithoutSchoolInput;
  update: ImageUpdateWithoutSchoolInput;
};

export type ImageUpsertWithoutTechnologyLogoInput = {
  create: ImageCreateWithoutTechnologyLogoInput;
  update: ImageUpdateWithoutTechnologyLogoInput;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  Blog?: InputMaybe<BlogListRelationFilter>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  Person?: InputMaybe<PersonListRelationFilter>;
  Project?: InputMaybe<ProjectListRelationFilter>;
  School?: InputMaybe<SchoolListRelationFilter>;
  TechnologyLogo?: InputMaybe<TechnologyLogoRelationFilter>;
  altText?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  height?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
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
  BlogAuthor: Array<BlogAuthor>;
  CourseInstructor: Array<CourseInstructor>;
  Image?: Maybe<Image>;
  ProjectContributor: Array<ProjectContributor>;
  User: Array<User>;
  _count?: Maybe<PersonCount>;
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


export type PersonBlogAuthorArgs = {
  cursor?: InputMaybe<BlogAuthorWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlogAuthorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlogAuthorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogAuthorWhereInput>;
};


export type PersonCourseInstructorArgs = {
  cursor?: InputMaybe<CourseInstructorWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseInstructorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseInstructorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseInstructorWhereInput>;
};


export type PersonProjectContributorArgs = {
  cursor?: InputMaybe<ProjectContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};


export type PersonUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type PersonCount = {
  __typename?: 'PersonCount';
  BlogAuthor: Scalars['Int'];
  CourseInstructor: Scalars['Int'];
  ProjectContributor: Scalars['Int'];
  User: Scalars['Int'];
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
  BlogAuthor?: InputMaybe<BlogAuthorCreateNestedManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorCreateNestedManyWithoutPersonInput>;
  Image?: InputMaybe<ImageCreateNestedOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorCreateNestedManyWithoutPersonInput>;
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateManyImageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
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
  id: Scalars['String'];
  imageId?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateNestedManyWithoutImageInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutImageInput>>;
  createMany?: InputMaybe<PersonCreateManyImageInputEnvelope>;
};

export type PersonCreateNestedOneWithoutBlogAuthorInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutBlogAuthorInput>;
  create?: InputMaybe<PersonCreateWithoutBlogAuthorInput>;
};

export type PersonCreateNestedOneWithoutCourseInstructorInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutCourseInstructorInput>;
  create?: InputMaybe<PersonCreateWithoutCourseInstructorInput>;
};

export type PersonCreateNestedOneWithoutProjectContributorInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutProjectContributorInput>;
  create?: InputMaybe<PersonCreateWithoutProjectContributorInput>;
};

export type PersonCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PersonCreateWithoutUserInput>;
};

export type PersonCreateOrConnectWithoutBlogAuthorInput = {
  create: PersonCreateWithoutBlogAuthorInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutCourseInstructorInput = {
  create: PersonCreateWithoutCourseInstructorInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutImageInput = {
  create: PersonCreateWithoutImageInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutProjectContributorInput = {
  create: PersonCreateWithoutProjectContributorInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutUserInput = {
  create: PersonCreateWithoutUserInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutBlogAuthorInput = {
  CourseInstructor?: InputMaybe<CourseInstructorCreateNestedManyWithoutPersonInput>;
  Image?: InputMaybe<ImageCreateNestedOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorCreateNestedManyWithoutPersonInput>;
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutCourseInstructorInput = {
  BlogAuthor?: InputMaybe<BlogAuthorCreateNestedManyWithoutPersonInput>;
  Image?: InputMaybe<ImageCreateNestedOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorCreateNestedManyWithoutPersonInput>;
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutImageInput = {
  BlogAuthor?: InputMaybe<BlogAuthorCreateNestedManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorCreateNestedManyWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorCreateNestedManyWithoutPersonInput>;
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutProjectContributorInput = {
  BlogAuthor?: InputMaybe<BlogAuthorCreateNestedManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorCreateNestedManyWithoutPersonInput>;
  Image?: InputMaybe<ImageCreateNestedOneWithoutPersonInput>;
  User?: InputMaybe<UserCreateNestedManyWithoutPersonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type PersonCreateWithoutUserInput = {
  BlogAuthor?: InputMaybe<BlogAuthorCreateNestedManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorCreateNestedManyWithoutPersonInput>;
  Image?: InputMaybe<ImageCreateNestedOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorCreateNestedManyWithoutPersonInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
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
  BlogAuthor?: InputMaybe<BlogAuthorOrderByRelationAggregateInput>;
  CourseInstructor?: InputMaybe<CourseInstructorOrderByRelationAggregateInput>;
  Image?: InputMaybe<ImageOrderByWithRelationInput>;
  ProjectContributor?: InputMaybe<ProjectContributorOrderByRelationAggregateInput>;
  User?: InputMaybe<UserOrderByRelationAggregateInput>;
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
  BlogAuthor?: InputMaybe<BlogAuthorUpdateManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorUpdateManyWithoutPersonInput>;
  Image?: InputMaybe<ImageUpdateOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorUpdateManyWithoutPersonInput>;
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
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

export type PersonUpdateOneRequiredWithoutBlogAuthorInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutBlogAuthorInput>;
  create?: InputMaybe<PersonCreateWithoutBlogAuthorInput>;
  update?: InputMaybe<PersonUpdateWithoutBlogAuthorInput>;
  upsert?: InputMaybe<PersonUpsertWithoutBlogAuthorInput>;
};

export type PersonUpdateOneRequiredWithoutCourseInstructorInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutCourseInstructorInput>;
  create?: InputMaybe<PersonCreateWithoutCourseInstructorInput>;
  update?: InputMaybe<PersonUpdateWithoutCourseInstructorInput>;
  upsert?: InputMaybe<PersonUpsertWithoutCourseInstructorInput>;
};

export type PersonUpdateOneRequiredWithoutProjectContributorInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutProjectContributorInput>;
  create?: InputMaybe<PersonCreateWithoutProjectContributorInput>;
  update?: InputMaybe<PersonUpdateWithoutProjectContributorInput>;
  upsert?: InputMaybe<PersonUpsertWithoutProjectContributorInput>;
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

export type PersonUpdateWithoutBlogAuthorInput = {
  CourseInstructor?: InputMaybe<CourseInstructorUpdateManyWithoutPersonInput>;
  Image?: InputMaybe<ImageUpdateOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorUpdateManyWithoutPersonInput>;
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
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

export type PersonUpdateWithoutCourseInstructorInput = {
  BlogAuthor?: InputMaybe<BlogAuthorUpdateManyWithoutPersonInput>;
  Image?: InputMaybe<ImageUpdateOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorUpdateManyWithoutPersonInput>;
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
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

export type PersonUpdateWithoutImageInput = {
  BlogAuthor?: InputMaybe<BlogAuthorUpdateManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorUpdateManyWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorUpdateManyWithoutPersonInput>;
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
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

export type PersonUpdateWithoutProjectContributorInput = {
  BlogAuthor?: InputMaybe<BlogAuthorUpdateManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorUpdateManyWithoutPersonInput>;
  Image?: InputMaybe<ImageUpdateOneWithoutPersonInput>;
  User?: InputMaybe<UserUpdateManyWithoutPersonInput>;
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

export type PersonUpdateWithoutUserInput = {
  BlogAuthor?: InputMaybe<BlogAuthorUpdateManyWithoutPersonInput>;
  CourseInstructor?: InputMaybe<CourseInstructorUpdateManyWithoutPersonInput>;
  Image?: InputMaybe<ImageUpdateOneWithoutPersonInput>;
  ProjectContributor?: InputMaybe<ProjectContributorUpdateManyWithoutPersonInput>;
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

export type PersonUpsertWithWhereUniqueWithoutImageInput = {
  create: PersonCreateWithoutImageInput;
  update: PersonUpdateWithoutImageInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpsertWithoutBlogAuthorInput = {
  create: PersonCreateWithoutBlogAuthorInput;
  update: PersonUpdateWithoutBlogAuthorInput;
};

export type PersonUpsertWithoutCourseInstructorInput = {
  create: PersonCreateWithoutCourseInstructorInput;
  update: PersonUpdateWithoutCourseInstructorInput;
};

export type PersonUpsertWithoutProjectContributorInput = {
  create: PersonCreateWithoutProjectContributorInput;
  update: PersonUpdateWithoutProjectContributorInput;
};

export type PersonUpsertWithoutUserInput = {
  create: PersonCreateWithoutUserInput;
  update: PersonUpdateWithoutUserInput;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  BlogAuthor?: InputMaybe<BlogAuthorListRelationFilter>;
  CourseInstructor?: InputMaybe<CourseInstructorListRelationFilter>;
  Image?: InputMaybe<ImageRelationFilter>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  ProjectContributor?: InputMaybe<ProjectContributorListRelationFilter>;
  User?: InputMaybe<UserListRelationFilter>;
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

export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  Image: Image;
  ProjectContributor: Array<ProjectContributor>;
  _count?: Maybe<ProjectCount>;
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


export type ProjectProjectContributorArgs = {
  cursor?: InputMaybe<ProjectContributorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectContributorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectContributorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectContributorWhereInput>;
};

export type ProjectContributor = {
  __typename?: 'ProjectContributor';
  Person: Person;
  Project: Project;
  contributorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
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
  Person: PersonCreateNestedOneWithoutProjectContributorInput;
  Project: ProjectCreateNestedOneWithoutProjectContributorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectContributorCreateManyInput = {
  contributorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  projectId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectContributorCreateManyPersonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  projectId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectContributorCreateManyPersonInputEnvelope = {
  data: Array<ProjectContributorCreateManyPersonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectContributorCreateManyProjectInput = {
  contributorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectContributorCreateManyProjectInputEnvelope = {
  data: Array<ProjectContributorCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectContributorCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectContributorCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<ProjectContributorCreateWithoutPersonInput>>;
  createMany?: InputMaybe<ProjectContributorCreateManyPersonInputEnvelope>;
};

export type ProjectContributorCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectContributorCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<ProjectContributorCreateWithoutProjectInput>>;
  createMany?: InputMaybe<ProjectContributorCreateManyProjectInputEnvelope>;
};

export type ProjectContributorCreateOrConnectWithoutPersonInput = {
  create: ProjectContributorCreateWithoutPersonInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorCreateOrConnectWithoutProjectInput = {
  create: ProjectContributorCreateWithoutProjectInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorCreateWithoutPersonInput = {
  Project: ProjectCreateNestedOneWithoutProjectContributorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectContributorCreateWithoutProjectInput = {
  Person: PersonCreateNestedOneWithoutProjectContributorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Person?: InputMaybe<PersonOrderByWithRelationInput>;
  Project?: InputMaybe<ProjectOrderByWithRelationInput>;
  contributorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  Person?: InputMaybe<PersonUpdateOneRequiredWithoutProjectContributorInput>;
  Project?: InputMaybe<ProjectUpdateOneRequiredWithoutProjectContributorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpdateManyWithWhereWithoutPersonInput = {
  data: ProjectContributorUpdateManyMutationInput;
  where: ProjectContributorScalarWhereInput;
};

export type ProjectContributorUpdateManyWithWhereWithoutProjectInput = {
  data: ProjectContributorUpdateManyMutationInput;
  where: ProjectContributorScalarWhereInput;
};

export type ProjectContributorUpdateManyWithoutPersonInput = {
  connect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectContributorCreateOrConnectWithoutPersonInput>>;
  create?: InputMaybe<Array<ProjectContributorCreateWithoutPersonInput>>;
  createMany?: InputMaybe<ProjectContributorCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectContributorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectContributorWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectContributorUpdateWithWhereUniqueWithoutPersonInput>>;
  updateMany?: InputMaybe<Array<ProjectContributorUpdateManyWithWhereWithoutPersonInput>>;
  upsert?: InputMaybe<Array<ProjectContributorUpsertWithWhereUniqueWithoutPersonInput>>;
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

export type ProjectContributorUpdateWithWhereUniqueWithoutPersonInput = {
  data: ProjectContributorUpdateWithoutPersonInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorUpdateWithWhereUniqueWithoutProjectInput = {
  data: ProjectContributorUpdateWithoutProjectInput;
  where: ProjectContributorWhereUniqueInput;
};

export type ProjectContributorUpdateWithoutPersonInput = {
  Project?: InputMaybe<ProjectUpdateOneRequiredWithoutProjectContributorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpdateWithoutProjectInput = {
  Person?: InputMaybe<PersonUpdateOneRequiredWithoutProjectContributorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectContributorUpsertWithWhereUniqueWithoutPersonInput = {
  create: ProjectContributorCreateWithoutPersonInput;
  update: ProjectContributorUpdateWithoutPersonInput;
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
  Person?: InputMaybe<PersonRelationFilter>;
  Project?: InputMaybe<ProjectRelationFilter>;
  contributorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectContributorWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  ProjectContributor: Scalars['Int'];
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
  Image: ImageCreateNestedOneWithoutProjectInput;
  ProjectContributor?: InputMaybe<ProjectContributorCreateNestedManyWithoutProjectInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectCreateManyImageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectCreateManyImageInputEnvelope = {
  data: Array<ProjectCreateManyImageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  imageId: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectCreateNestedManyWithoutImageInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutImageInput>>;
  createMany?: InputMaybe<ProjectCreateManyImageInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutProjectContributorInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutProjectContributorInput>;
  create?: InputMaybe<ProjectCreateWithoutProjectContributorInput>;
};

export type ProjectCreateOrConnectWithoutImageInput = {
  create: ProjectCreateWithoutImageInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutProjectContributorInput = {
  create: ProjectCreateWithoutProjectContributorInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutImageInput = {
  ProjectContributor?: InputMaybe<ProjectContributorCreateNestedManyWithoutProjectInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectCreateWithoutProjectContributorInput = {
  Image: ImageCreateNestedOneWithoutProjectInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  projectUrl?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Image?: InputMaybe<ImageOrderByWithRelationInput>;
  ProjectContributor?: InputMaybe<ProjectContributorOrderByRelationAggregateInput>;
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
  Image?: InputMaybe<ImageUpdateOneRequiredWithoutProjectInput>;
  ProjectContributor?: InputMaybe<ProjectContributorUpdateManyWithoutProjectInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type ProjectUpdateManyWithWhereWithoutImageInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutImageInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutImageInput>>;
  createMany?: InputMaybe<ProjectCreateManyImageInputEnvelope>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutImageInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutImageInput>>;
};

export type ProjectUpdateOneRequiredWithoutProjectContributorInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutProjectContributorInput>;
  create?: InputMaybe<ProjectCreateWithoutProjectContributorInput>;
  update?: InputMaybe<ProjectUpdateWithoutProjectContributorInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutProjectContributorInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutImageInput = {
  data: ProjectUpdateWithoutImageInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutImageInput = {
  ProjectContributor?: InputMaybe<ProjectContributorUpdateManyWithoutProjectInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutProjectContributorInput = {
  Image?: InputMaybe<ImageUpdateOneRequiredWithoutProjectInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  githubUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  summary?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutImageInput = {
  create: ProjectCreateWithoutImageInput;
  update: ProjectUpdateWithoutImageInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutProjectContributorInput = {
  create: ProjectCreateWithoutProjectContributorInput;
  update: ProjectUpdateWithoutProjectContributorInput;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  Image?: InputMaybe<ImageRelationFilter>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  ProjectContributor?: InputMaybe<ProjectContributorListRelationFilter>;
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
  Course: Array<Course>;
  Image: Image;
  _count?: Maybe<SchoolCount>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


export type SchoolCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};

export type SchoolCount = {
  __typename?: 'SchoolCount';
  Course: Scalars['Int'];
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
  Course?: InputMaybe<CourseCreateNestedManyWithoutSchoolInput>;
  Image: ImageCreateNestedOneWithoutSchoolInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type SchoolCreateManyImageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type SchoolCreateManyImageInputEnvelope = {
  data: Array<SchoolCreateManyImageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SchoolCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type SchoolCreateNestedManyWithoutImageInput = {
  connect?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SchoolCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<SchoolCreateWithoutImageInput>>;
  createMany?: InputMaybe<SchoolCreateManyImageInputEnvelope>;
};

export type SchoolCreateNestedOneWithoutCourseInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutCourseInput>;
  create?: InputMaybe<SchoolCreateWithoutCourseInput>;
};

export type SchoolCreateOrConnectWithoutCourseInput = {
  create: SchoolCreateWithoutCourseInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateOrConnectWithoutImageInput = {
  create: SchoolCreateWithoutImageInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateWithoutCourseInput = {
  Image: ImageCreateNestedOneWithoutSchoolInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type SchoolCreateWithoutImageInput = {
  Course?: InputMaybe<CourseCreateNestedManyWithoutSchoolInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Course?: InputMaybe<CourseOrderByRelationAggregateInput>;
  Image?: InputMaybe<ImageOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
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
  Course?: InputMaybe<CourseUpdateManyWithoutSchoolInput>;
  Image?: InputMaybe<ImageUpdateOneRequiredWithoutSchoolInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type SchoolUpdateManyWithWhereWithoutImageInput = {
  data: SchoolUpdateManyMutationInput;
  where: SchoolScalarWhereInput;
};

export type SchoolUpdateManyWithoutImageInput = {
  connect?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SchoolCreateOrConnectWithoutImageInput>>;
  create?: InputMaybe<Array<SchoolCreateWithoutImageInput>>;
  createMany?: InputMaybe<SchoolCreateManyImageInputEnvelope>;
  delete?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SchoolScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  set?: InputMaybe<Array<SchoolWhereUniqueInput>>;
  update?: InputMaybe<Array<SchoolUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: InputMaybe<Array<SchoolUpdateManyWithWhereWithoutImageInput>>;
  upsert?: InputMaybe<Array<SchoolUpsertWithWhereUniqueWithoutImageInput>>;
};

export type SchoolUpdateOneRequiredWithoutCourseInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutCourseInput>;
  create?: InputMaybe<SchoolCreateWithoutCourseInput>;
  update?: InputMaybe<SchoolUpdateWithoutCourseInput>;
  upsert?: InputMaybe<SchoolUpsertWithoutCourseInput>;
};

export type SchoolUpdateWithWhereUniqueWithoutImageInput = {
  data: SchoolUpdateWithoutImageInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolUpdateWithoutCourseInput = {
  Image?: InputMaybe<ImageUpdateOneRequiredWithoutSchoolInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateWithoutImageInput = {
  Course?: InputMaybe<CourseUpdateManyWithoutSchoolInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpsertWithWhereUniqueWithoutImageInput = {
  create: SchoolCreateWithoutImageInput;
  update: SchoolUpdateWithoutImageInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolUpsertWithoutCourseInput = {
  create: SchoolCreateWithoutCourseInput;
  update: SchoolUpdateWithoutCourseInput;
};

export type SchoolWhereInput = {
  AND?: InputMaybe<Array<SchoolWhereInput>>;
  Course?: InputMaybe<CourseListRelationFilter>;
  Image?: InputMaybe<ImageRelationFilter>;
  NOT?: InputMaybe<Array<SchoolWhereInput>>;
  OR?: InputMaybe<Array<SchoolWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
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
  Image: Image;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageId: Scalars['String'];
  isOnHomepage: Scalars['Boolean'];
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
  Image: ImageCreateNestedOneWithoutTechnologyLogoInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TechnologyLogoCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  imageId: Scalars['String'];
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TechnologyLogoCreateNestedOneWithoutImageInput = {
  connect?: InputMaybe<TechnologyLogoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TechnologyLogoCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<TechnologyLogoCreateWithoutImageInput>;
};

export type TechnologyLogoCreateOrConnectWithoutImageInput = {
  create: TechnologyLogoCreateWithoutImageInput;
  where: TechnologyLogoWhereUniqueInput;
};

export type TechnologyLogoCreateWithoutImageInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Image?: InputMaybe<ImageOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageId?: InputMaybe<SortOrder>;
  isOnHomepage?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TechnologyLogoRelationFilter = {
  is?: InputMaybe<TechnologyLogoWhereInput>;
  isNot?: InputMaybe<TechnologyLogoWhereInput>;
};

export enum TechnologyLogoScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageId = 'imageId',
  IsOnHomepage = 'isOnHomepage',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

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
  Image?: InputMaybe<ImageUpdateOneRequiredWithoutTechnologyLogoInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnHomepage?: InputMaybe<BoolFieldUpdateOperationsInput>;
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

export type TechnologyLogoUpdateOneWithoutImageInput = {
  connect?: InputMaybe<TechnologyLogoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TechnologyLogoCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<TechnologyLogoCreateWithoutImageInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TechnologyLogoUpdateWithoutImageInput>;
  upsert?: InputMaybe<TechnologyLogoUpsertWithoutImageInput>;
};

export type TechnologyLogoUpdateWithoutImageInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnHomepage?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TechnologyLogoUpsertWithoutImageInput = {
  create: TechnologyLogoCreateWithoutImageInput;
  update: TechnologyLogoUpdateWithoutImageInput;
};

export type TechnologyLogoWhereInput = {
  AND?: InputMaybe<Array<TechnologyLogoWhereInput>>;
  Image?: InputMaybe<ImageRelationFilter>;
  NOT?: InputMaybe<Array<TechnologyLogoWhereInput>>;
  OR?: InputMaybe<Array<TechnologyLogoWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  imageId?: InputMaybe<StringFilter>;
  isOnHomepage?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TechnologyLogoWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  imageId?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Person: Person;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  password: Scalars['String'];
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
  Person: PersonCreateNestedOneWithoutUserInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  password: Scalars['String'];
  personId: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCreateManyPersonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt: Scalars['DateTime'];
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
  id: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt: Scalars['DateTime'];
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
  Person?: InputMaybe<PersonOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
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
  Person?: InputMaybe<PersonUpdateOneRequiredWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type UserUserCredentials_Username_Password_Unique_ConstraintCompoundUniqueInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Person?: InputMaybe<PersonRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  personId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  UserCredentials_username_password_unique_constraint?: InputMaybe<UserUserCredentials_Username_Password_Unique_ConstraintCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};
