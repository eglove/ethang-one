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
  Rating: any;
  Role: any;
  float8: any;
  timestamp: any;
  uuid: any;
};

/** columns and relationships of "Blog" */
export type Blog = {
  __typename?: 'Blog';
  /** An array relationship */
  BlogAuthors: Array<BlogAuthor>;
  /** An aggregate relationship */
  BlogAuthors_aggregate: BlogAuthor_Aggregate;
  /** An object relationship */
  Image: Image;
  content: Scalars['String'];
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  imageId: Scalars['uuid'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "Blog" */
export type BlogBlogAuthorsArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};


/** columns and relationships of "Blog" */
export type BlogBlogAuthors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};

/** columns and relationships of "BlogAuthor" */
export type BlogAuthor = {
  __typename?: 'BlogAuthor';
  /** An object relationship */
  Blog: Blog;
  /** An object relationship */
  Person: Person;
  blogId: Scalars['uuid'];
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  personId: Scalars['uuid'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "BlogAuthor" */
export type BlogAuthor_Aggregate = {
  __typename?: 'BlogAuthor_aggregate';
  aggregate?: Maybe<BlogAuthor_Aggregate_Fields>;
  nodes: Array<BlogAuthor>;
};

/** aggregate fields of "BlogAuthor" */
export type BlogAuthor_Aggregate_Fields = {
  __typename?: 'BlogAuthor_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<BlogAuthor_Max_Fields>;
  min?: Maybe<BlogAuthor_Min_Fields>;
};


/** aggregate fields of "BlogAuthor" */
export type BlogAuthor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "BlogAuthor" */
export type BlogAuthor_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<BlogAuthor_Max_Order_By>;
  min?: InputMaybe<BlogAuthor_Min_Order_By>;
};

/** input type for inserting array relation for remote table "BlogAuthor" */
export type BlogAuthor_Arr_Rel_Insert_Input = {
  data: Array<BlogAuthor_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<BlogAuthor_On_Conflict>;
};

/** Boolean expression to filter rows from the table "BlogAuthor". All fields are combined with a logical 'AND'. */
export type BlogAuthor_Bool_Exp = {
  Blog?: InputMaybe<Blog_Bool_Exp>;
  Person?: InputMaybe<Person_Bool_Exp>;
  _and?: InputMaybe<Array<BlogAuthor_Bool_Exp>>;
  _not?: InputMaybe<BlogAuthor_Bool_Exp>;
  _or?: InputMaybe<Array<BlogAuthor_Bool_Exp>>;
  blogId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  personId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "BlogAuthor" */
export enum BlogAuthor_Constraint {
  /** unique or primary key constraint */
  BlogAuthorPkey = 'BlogAuthor_pkey'
}

/** input type for inserting data into table "BlogAuthor" */
export type BlogAuthor_Insert_Input = {
  Blog?: InputMaybe<Blog_Obj_Rel_Insert_Input>;
  Person?: InputMaybe<Person_Obj_Rel_Insert_Input>;
  blogId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  personId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type BlogAuthor_Max_Fields = {
  __typename?: 'BlogAuthor_max_fields';
  blogId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  personId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "BlogAuthor" */
export type BlogAuthor_Max_Order_By = {
  blogId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  personId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type BlogAuthor_Min_Fields = {
  __typename?: 'BlogAuthor_min_fields';
  blogId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  personId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "BlogAuthor" */
export type BlogAuthor_Min_Order_By = {
  blogId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  personId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "BlogAuthor" */
export type BlogAuthor_Mutation_Response = {
  __typename?: 'BlogAuthor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BlogAuthor>;
};

/** on conflict condition type for table "BlogAuthor" */
export type BlogAuthor_On_Conflict = {
  constraint: BlogAuthor_Constraint;
  update_columns?: Array<BlogAuthor_Update_Column>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};

/** Ordering options when selecting data from "BlogAuthor". */
export type BlogAuthor_Order_By = {
  Blog?: InputMaybe<Blog_Order_By>;
  Person?: InputMaybe<Person_Order_By>;
  blogId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  personId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: BlogAuthor */
export type BlogAuthor_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "BlogAuthor" */
export enum BlogAuthor_Select_Column {
  /** column name */
  BlogId = 'blogId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'personId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "BlogAuthor" */
export type BlogAuthor_Set_Input = {
  blogId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  personId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "BlogAuthor" */
export enum BlogAuthor_Update_Column {
  /** column name */
  BlogId = 'blogId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'personId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregated selection of "Blog" */
export type Blog_Aggregate = {
  __typename?: 'Blog_aggregate';
  aggregate?: Maybe<Blog_Aggregate_Fields>;
  nodes: Array<Blog>;
};

/** aggregate fields of "Blog" */
export type Blog_Aggregate_Fields = {
  __typename?: 'Blog_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Blog_Max_Fields>;
  min?: Maybe<Blog_Min_Fields>;
};


/** aggregate fields of "Blog" */
export type Blog_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blog_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Blog" */
export type Blog_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blog_Max_Order_By>;
  min?: InputMaybe<Blog_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Blog" */
export type Blog_Arr_Rel_Insert_Input = {
  data: Array<Blog_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Blog". All fields are combined with a logical 'AND'. */
export type Blog_Bool_Exp = {
  BlogAuthors?: InputMaybe<BlogAuthor_Bool_Exp>;
  Image?: InputMaybe<Image_Bool_Exp>;
  _and?: InputMaybe<Array<Blog_Bool_Exp>>;
  _not?: InputMaybe<Blog_Bool_Exp>;
  _or?: InputMaybe<Array<Blog_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageId?: InputMaybe<Uuid_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Blog" */
export enum Blog_Constraint {
  /** unique or primary key constraint */
  BlogPkey = 'Blog_pkey',
  /** unique or primary key constraint */
  BlogSlugKey = 'Blog_slug_key'
}

/** input type for inserting data into table "Blog" */
export type Blog_Insert_Input = {
  BlogAuthors?: InputMaybe<BlogAuthor_Arr_Rel_Insert_Input>;
  Image?: InputMaybe<Image_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Blog_Max_Fields = {
  __typename?: 'Blog_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Blog" */
export type Blog_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blog_Min_Fields = {
  __typename?: 'Blog_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "Blog" */
export type Blog_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Blog" */
export type Blog_Mutation_Response = {
  __typename?: 'Blog_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Blog>;
};

/** input type for inserting object relation for remote table "Blog" */
export type Blog_Obj_Rel_Insert_Input = {
  data: Blog_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};

/** on conflict condition type for table "Blog" */
export type Blog_On_Conflict = {
  constraint: Blog_Constraint;
  update_columns?: Array<Blog_Update_Column>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

/** Ordering options when selecting data from "Blog". */
export type Blog_Order_By = {
  BlogAuthors_aggregate?: InputMaybe<BlogAuthor_Aggregate_Order_By>;
  Image?: InputMaybe<Image_Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Blog */
export type Blog_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Blog" */
export enum Blog_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Blog" */
export type Blog_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Blog" */
export enum Blog_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Course" */
export type Course = {
  __typename?: 'Course';
  /** An array relationship */
  CourseInstructors: Array<CourseInstructor>;
  /** An aggregate relationship */
  CourseInstructors_aggregate: CourseInstructor_Aggregate;
  /** An array relationship */
  CourseUrls: Array<CourseUrl>;
  /** An aggregate relationship */
  CourseUrls_aggregate: CourseUrl_Aggregate;
  /** An object relationship */
  School: School;
  complete: Scalars['Boolean'];
  createdAt: Scalars['timestamp'];
  duration: Scalars['float8'];
  id: Scalars['uuid'];
  order: Scalars['Int'];
  rating?: Maybe<Scalars['Rating']>;
  ratingUrl?: Maybe<Scalars['String']>;
  recommended: Scalars['Boolean'];
  schoolId: Scalars['uuid'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamp'];
  yearUpdated: Scalars['Int'];
};


/** columns and relationships of "Course" */
export type CourseCourseInstructorsArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


/** columns and relationships of "Course" */
export type CourseCourseInstructors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


/** columns and relationships of "Course" */
export type CourseCourseUrlsArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};


/** columns and relationships of "Course" */
export type CourseCourseUrls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};

/** columns and relationships of "CourseInstructor" */
export type CourseInstructor = {
  __typename?: 'CourseInstructor';
  /** An object relationship */
  Course: Course;
  /** An object relationship */
  Person: Person;
  courseId: Scalars['uuid'];
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  instructorId: Scalars['uuid'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "CourseInstructor" */
export type CourseInstructor_Aggregate = {
  __typename?: 'CourseInstructor_aggregate';
  aggregate?: Maybe<CourseInstructor_Aggregate_Fields>;
  nodes: Array<CourseInstructor>;
};

/** aggregate fields of "CourseInstructor" */
export type CourseInstructor_Aggregate_Fields = {
  __typename?: 'CourseInstructor_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CourseInstructor_Max_Fields>;
  min?: Maybe<CourseInstructor_Min_Fields>;
};


/** aggregate fields of "CourseInstructor" */
export type CourseInstructor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "CourseInstructor" */
export type CourseInstructor_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CourseInstructor_Max_Order_By>;
  min?: InputMaybe<CourseInstructor_Min_Order_By>;
};

/** input type for inserting array relation for remote table "CourseInstructor" */
export type CourseInstructor_Arr_Rel_Insert_Input = {
  data: Array<CourseInstructor_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<CourseInstructor_On_Conflict>;
};

/** Boolean expression to filter rows from the table "CourseInstructor". All fields are combined with a logical 'AND'. */
export type CourseInstructor_Bool_Exp = {
  Course?: InputMaybe<Course_Bool_Exp>;
  Person?: InputMaybe<Person_Bool_Exp>;
  _and?: InputMaybe<Array<CourseInstructor_Bool_Exp>>;
  _not?: InputMaybe<CourseInstructor_Bool_Exp>;
  _or?: InputMaybe<Array<CourseInstructor_Bool_Exp>>;
  courseId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instructorId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "CourseInstructor" */
export enum CourseInstructor_Constraint {
  /** unique or primary key constraint */
  CourseInstructorPkey = 'CourseInstructor_pkey'
}

/** input type for inserting data into table "CourseInstructor" */
export type CourseInstructor_Insert_Input = {
  Course?: InputMaybe<Course_Obj_Rel_Insert_Input>;
  Person?: InputMaybe<Person_Obj_Rel_Insert_Input>;
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  instructorId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type CourseInstructor_Max_Fields = {
  __typename?: 'CourseInstructor_max_fields';
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  instructorId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "CourseInstructor" */
export type CourseInstructor_Max_Order_By = {
  courseId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instructorId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CourseInstructor_Min_Fields = {
  __typename?: 'CourseInstructor_min_fields';
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  instructorId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "CourseInstructor" */
export type CourseInstructor_Min_Order_By = {
  courseId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instructorId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "CourseInstructor" */
export type CourseInstructor_Mutation_Response = {
  __typename?: 'CourseInstructor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CourseInstructor>;
};

/** on conflict condition type for table "CourseInstructor" */
export type CourseInstructor_On_Conflict = {
  constraint: CourseInstructor_Constraint;
  update_columns?: Array<CourseInstructor_Update_Column>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};

/** Ordering options when selecting data from "CourseInstructor". */
export type CourseInstructor_Order_By = {
  Course?: InputMaybe<Course_Order_By>;
  Person?: InputMaybe<Person_Order_By>;
  courseId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instructorId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: CourseInstructor */
export type CourseInstructor_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "CourseInstructor" */
export enum CourseInstructor_Select_Column {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InstructorId = 'instructorId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "CourseInstructor" */
export type CourseInstructor_Set_Input = {
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  instructorId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "CourseInstructor" */
export enum CourseInstructor_Update_Column {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  InstructorId = 'instructorId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "CourseUrl" */
export type CourseUrl = {
  __typename?: 'CourseUrl';
  /** An object relationship */
  Course: Course;
  /** An object relationship */
  School: School;
  courseId: Scalars['uuid'];
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  schoolId: Scalars['uuid'];
  updatedAt: Scalars['timestamp'];
  url: Scalars['String'];
};

/** aggregated selection of "CourseUrl" */
export type CourseUrl_Aggregate = {
  __typename?: 'CourseUrl_aggregate';
  aggregate?: Maybe<CourseUrl_Aggregate_Fields>;
  nodes: Array<CourseUrl>;
};

/** aggregate fields of "CourseUrl" */
export type CourseUrl_Aggregate_Fields = {
  __typename?: 'CourseUrl_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CourseUrl_Max_Fields>;
  min?: Maybe<CourseUrl_Min_Fields>;
};


/** aggregate fields of "CourseUrl" */
export type CourseUrl_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CourseUrl_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "CourseUrl" */
export type CourseUrl_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CourseUrl_Max_Order_By>;
  min?: InputMaybe<CourseUrl_Min_Order_By>;
};

/** input type for inserting array relation for remote table "CourseUrl" */
export type CourseUrl_Arr_Rel_Insert_Input = {
  data: Array<CourseUrl_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<CourseUrl_On_Conflict>;
};

/** Boolean expression to filter rows from the table "CourseUrl". All fields are combined with a logical 'AND'. */
export type CourseUrl_Bool_Exp = {
  Course?: InputMaybe<Course_Bool_Exp>;
  School?: InputMaybe<School_Bool_Exp>;
  _and?: InputMaybe<Array<CourseUrl_Bool_Exp>>;
  _not?: InputMaybe<CourseUrl_Bool_Exp>;
  _or?: InputMaybe<Array<CourseUrl_Bool_Exp>>;
  courseId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  schoolId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "CourseUrl" */
export enum CourseUrl_Constraint {
  /** unique or primary key constraint */
  CourseUrlCourseIdUrlSchoolIdKey = 'CourseUrl_courseId_url_schoolId_key',
  /** unique or primary key constraint */
  CourseUrlPkey = 'CourseUrl_pkey',
  /** unique or primary key constraint */
  CourseUrlUrlKey = 'CourseUrl_url_key'
}

/** input type for inserting data into table "CourseUrl" */
export type CourseUrl_Insert_Input = {
  Course?: InputMaybe<Course_Obj_Rel_Insert_Input>;
  School?: InputMaybe<School_Obj_Rel_Insert_Input>;
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  schoolId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CourseUrl_Max_Fields = {
  __typename?: 'CourseUrl_max_fields';
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  schoolId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "CourseUrl" */
export type CourseUrl_Max_Order_By = {
  courseId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  schoolId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CourseUrl_Min_Fields = {
  __typename?: 'CourseUrl_min_fields';
  courseId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  schoolId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "CourseUrl" */
export type CourseUrl_Min_Order_By = {
  courseId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  schoolId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "CourseUrl" */
export type CourseUrl_Mutation_Response = {
  __typename?: 'CourseUrl_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CourseUrl>;
};

/** on conflict condition type for table "CourseUrl" */
export type CourseUrl_On_Conflict = {
  constraint: CourseUrl_Constraint;
  update_columns?: Array<CourseUrl_Update_Column>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};

/** Ordering options when selecting data from "CourseUrl". */
export type CourseUrl_Order_By = {
  Course?: InputMaybe<Course_Order_By>;
  School?: InputMaybe<School_Order_By>;
  courseId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  schoolId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: CourseUrl */
export type CourseUrl_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "CourseUrl" */
export enum CourseUrl_Select_Column {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SchoolId = 'schoolId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "CourseUrl" */
export type CourseUrl_Set_Input = {
  courseId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  schoolId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "CourseUrl" */
export enum CourseUrl_Update_Column {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SchoolId = 'schoolId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** aggregated selection of "Course" */
export type Course_Aggregate = {
  __typename?: 'Course_aggregate';
  aggregate?: Maybe<Course_Aggregate_Fields>;
  nodes: Array<Course>;
};

/** aggregate fields of "Course" */
export type Course_Aggregate_Fields = {
  __typename?: 'Course_aggregate_fields';
  avg?: Maybe<Course_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Course_Max_Fields>;
  min?: Maybe<Course_Min_Fields>;
  stddev?: Maybe<Course_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Sum_Fields>;
  var_pop?: Maybe<Course_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Var_Samp_Fields>;
  variance?: Maybe<Course_Variance_Fields>;
};


/** aggregate fields of "Course" */
export type Course_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Course" */
export type Course_Aggregate_Order_By = {
  avg?: InputMaybe<Course_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Course_Max_Order_By>;
  min?: InputMaybe<Course_Min_Order_By>;
  stddev?: InputMaybe<Course_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Course_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Course_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Course_Sum_Order_By>;
  var_pop?: InputMaybe<Course_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Course_Var_Samp_Order_By>;
  variance?: InputMaybe<Course_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Course" */
export type Course_Arr_Rel_Insert_Input = {
  data: Array<Course_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Course_On_Conflict>;
};

/** aggregate avg on columns */
export type Course_Avg_Fields = {
  __typename?: 'Course_avg_fields';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Course" */
export type Course_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  CourseInstructors?: InputMaybe<CourseInstructor_Bool_Exp>;
  CourseUrls?: InputMaybe<CourseUrl_Bool_Exp>;
  School?: InputMaybe<School_Bool_Exp>;
  _and?: InputMaybe<Array<Course_Bool_Exp>>;
  _not?: InputMaybe<Course_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Bool_Exp>>;
  complete?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  duration?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Rating_Comparison_Exp>;
  ratingUrl?: InputMaybe<String_Comparison_Exp>;
  recommended?: InputMaybe<Boolean_Comparison_Exp>;
  schoolId?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  yearUpdated?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Course" */
export enum Course_Constraint {
  /** unique or primary key constraint */
  CoursePkey = 'Course_pkey'
}

/** input type for incrementing numeric columns in table "Course" */
export type Course_Inc_Input = {
  duration?: InputMaybe<Scalars['float8']>;
  order?: InputMaybe<Scalars['Int']>;
  yearUpdated?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Course" */
export type Course_Insert_Input = {
  CourseInstructors?: InputMaybe<CourseInstructor_Arr_Rel_Insert_Input>;
  CourseUrls?: InputMaybe<CourseUrl_Arr_Rel_Insert_Input>;
  School?: InputMaybe<School_Obj_Rel_Insert_Input>;
  complete?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  duration?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Rating']>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended?: InputMaybe<Scalars['Boolean']>;
  schoolId?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  yearUpdated?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Course_Max_Fields = {
  __typename?: 'Course_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  duration?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  ratingUrl?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  yearUpdated?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Course" */
export type Course_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  ratingUrl?: InputMaybe<Order_By>;
  schoolId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Min_Fields = {
  __typename?: 'Course_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  duration?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  ratingUrl?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  yearUpdated?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Course" */
export type Course_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  ratingUrl?: InputMaybe<Order_By>;
  schoolId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Course" */
export type Course_Mutation_Response = {
  __typename?: 'Course_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "Course" */
export type Course_Obj_Rel_Insert_Input = {
  data: Course_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Course_On_Conflict>;
};

/** on conflict condition type for table "Course" */
export type Course_On_Conflict = {
  constraint: Course_Constraint;
  update_columns?: Array<Course_Update_Column>;
  where?: InputMaybe<Course_Bool_Exp>;
};

/** Ordering options when selecting data from "Course". */
export type Course_Order_By = {
  CourseInstructors_aggregate?: InputMaybe<CourseInstructor_Aggregate_Order_By>;
  CourseUrls_aggregate?: InputMaybe<CourseUrl_Aggregate_Order_By>;
  School?: InputMaybe<School_Order_By>;
  complete?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  ratingUrl?: InputMaybe<Order_By>;
  recommended?: InputMaybe<Order_By>;
  schoolId?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Course */
export type Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Course" */
export enum Course_Select_Column {
  /** column name */
  Complete = 'complete',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Rating = 'rating',
  /** column name */
  RatingUrl = 'ratingUrl',
  /** column name */
  Recommended = 'recommended',
  /** column name */
  SchoolId = 'schoolId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YearUpdated = 'yearUpdated'
}

/** input type for updating data in table "Course" */
export type Course_Set_Input = {
  complete?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  duration?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['uuid']>;
  order?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Rating']>;
  ratingUrl?: InputMaybe<Scalars['String']>;
  recommended?: InputMaybe<Scalars['Boolean']>;
  schoolId?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  yearUpdated?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Course_Stddev_Fields = {
  __typename?: 'Course_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Course" */
export type Course_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Stddev_Pop_Fields = {
  __typename?: 'Course_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Course" */
export type Course_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Stddev_Samp_Fields = {
  __typename?: 'Course_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Course" */
export type Course_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Sum_Fields = {
  __typename?: 'Course_sum_fields';
  duration?: Maybe<Scalars['float8']>;
  order?: Maybe<Scalars['Int']>;
  yearUpdated?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Course" */
export type Course_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** update columns of table "Course" */
export enum Course_Update_Column {
  /** column name */
  Complete = 'complete',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Rating = 'rating',
  /** column name */
  RatingUrl = 'ratingUrl',
  /** column name */
  Recommended = 'recommended',
  /** column name */
  SchoolId = 'schoolId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YearUpdated = 'yearUpdated'
}

/** aggregate var_pop on columns */
export type Course_Var_Pop_Fields = {
  __typename?: 'Course_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Course" */
export type Course_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Var_Samp_Fields = {
  __typename?: 'Course_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Course" */
export type Course_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Variance_Fields = {
  __typename?: 'Course_variance_fields';
  duration?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  yearUpdated?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Course" */
export type Course_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  yearUpdated?: InputMaybe<Order_By>;
};

/** columns and relationships of "Image" */
export type Image = {
  __typename?: 'Image';
  /** An array relationship */
  Blogs: Array<Blog>;
  /** An aggregate relationship */
  Blogs_aggregate: Blog_Aggregate;
  /** An array relationship */
  People: Array<Person>;
  /** An aggregate relationship */
  People_aggregate: Person_Aggregate;
  /** An array relationship */
  Projects: Array<Project>;
  /** An aggregate relationship */
  Projects_aggregate: Project_Aggregate;
  /** An array relationship */
  Schools: Array<School>;
  /** An aggregate relationship */
  Schools_aggregate: School_Aggregate;
  /** An array relationship */
  TechnologyLogos: Array<TechnologyLogo>;
  /** An aggregate relationship */
  TechnologyLogos_aggregate: TechnologyLogo_Aggregate;
  altText: Scalars['String'];
  createdAt: Scalars['timestamp'];
  height: Scalars['String'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamp'];
  url: Scalars['String'];
  width: Scalars['String'];
};


/** columns and relationships of "Image" */
export type ImageBlogsArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImageBlogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImagePeopleArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImagePeople_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImageProjectsArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImageProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImageSchoolsArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImageSchools_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImageTechnologyLogosArgs = {
  distinct_on?: InputMaybe<Array<TechnologyLogo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TechnologyLogo_Order_By>>;
  where?: InputMaybe<TechnologyLogo_Bool_Exp>;
};


/** columns and relationships of "Image" */
export type ImageTechnologyLogos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TechnologyLogo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TechnologyLogo_Order_By>>;
  where?: InputMaybe<TechnologyLogo_Bool_Exp>;
};

/** aggregated selection of "Image" */
export type Image_Aggregate = {
  __typename?: 'Image_aggregate';
  aggregate?: Maybe<Image_Aggregate_Fields>;
  nodes: Array<Image>;
};

/** aggregate fields of "Image" */
export type Image_Aggregate_Fields = {
  __typename?: 'Image_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Image_Max_Fields>;
  min?: Maybe<Image_Min_Fields>;
};


/** aggregate fields of "Image" */
export type Image_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Image". All fields are combined with a logical 'AND'. */
export type Image_Bool_Exp = {
  Blogs?: InputMaybe<Blog_Bool_Exp>;
  People?: InputMaybe<Person_Bool_Exp>;
  Projects?: InputMaybe<Project_Bool_Exp>;
  Schools?: InputMaybe<School_Bool_Exp>;
  TechnologyLogos?: InputMaybe<TechnologyLogo_Bool_Exp>;
  _and?: InputMaybe<Array<Image_Bool_Exp>>;
  _not?: InputMaybe<Image_Bool_Exp>;
  _or?: InputMaybe<Array<Image_Bool_Exp>>;
  altText?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  height?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Image" */
export enum Image_Constraint {
  /** unique or primary key constraint */
  ImagePkey = 'Image_pkey',
  /** unique or primary key constraint */
  ImageUrlKey = 'Image_url_key'
}

/** input type for inserting data into table "Image" */
export type Image_Insert_Input = {
  Blogs?: InputMaybe<Blog_Arr_Rel_Insert_Input>;
  People?: InputMaybe<Person_Arr_Rel_Insert_Input>;
  Projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  Schools?: InputMaybe<School_Arr_Rel_Insert_Input>;
  TechnologyLogos?: InputMaybe<TechnologyLogo_Arr_Rel_Insert_Input>;
  altText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  height?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Image_Max_Fields = {
  __typename?: 'Image_max_fields';
  altText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Image_Min_Fields = {
  __typename?: 'Image_min_fields';
  altText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Image" */
export type Image_Mutation_Response = {
  __typename?: 'Image_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Image>;
};

/** input type for inserting object relation for remote table "Image" */
export type Image_Obj_Rel_Insert_Input = {
  data: Image_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Image_On_Conflict>;
};

/** on conflict condition type for table "Image" */
export type Image_On_Conflict = {
  constraint: Image_Constraint;
  update_columns?: Array<Image_Update_Column>;
  where?: InputMaybe<Image_Bool_Exp>;
};

/** Ordering options when selecting data from "Image". */
export type Image_Order_By = {
  Blogs_aggregate?: InputMaybe<Blog_Aggregate_Order_By>;
  People_aggregate?: InputMaybe<Person_Aggregate_Order_By>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  Schools_aggregate?: InputMaybe<School_Aggregate_Order_By>;
  TechnologyLogos_aggregate?: InputMaybe<TechnologyLogo_Aggregate_Order_By>;
  altText?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Image */
export type Image_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Image" */
export enum Image_Select_Column {
  /** column name */
  AltText = 'altText',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "Image" */
export type Image_Set_Input = {
  altText?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  height?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Image" */
export enum Image_Update_Column {
  /** column name */
  AltText = 'altText',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url',
  /** column name */
  Width = 'width'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Person" */
export type Person = {
  __typename?: 'Person';
  /** An array relationship */
  BlogAuthors: Array<BlogAuthor>;
  /** An aggregate relationship */
  BlogAuthors_aggregate: BlogAuthor_Aggregate;
  /** An array relationship */
  CourseInstructors: Array<CourseInstructor>;
  /** An aggregate relationship */
  CourseInstructors_aggregate: CourseInstructor_Aggregate;
  /** An object relationship */
  Image?: Maybe<Image>;
  /** An array relationship */
  ProjectContributors: Array<ProjectContributor>;
  /** An aggregate relationship */
  ProjectContributors_aggregate: ProjectContributor_Aggregate;
  /** An array relationship */
  Users: Array<User>;
  /** An aggregate relationship */
  Users_aggregate: User_Aggregate;
  createdAt: Scalars['timestamp'];
  firstName: Scalars['String'];
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  imageId?: Maybe<Scalars['uuid']>;
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamp'];
  websiteUrl?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Person" */
export type PersonBlogAuthorsArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};


/** columns and relationships of "Person" */
export type PersonBlogAuthors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};


/** columns and relationships of "Person" */
export type PersonCourseInstructorsArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


/** columns and relationships of "Person" */
export type PersonCourseInstructors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


/** columns and relationships of "Person" */
export type PersonProjectContributorsArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};


/** columns and relationships of "Person" */
export type PersonProjectContributors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};


/** columns and relationships of "Person" */
export type PersonUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "Person" */
export type PersonUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "Person" */
export type Person_Aggregate = {
  __typename?: 'Person_aggregate';
  aggregate?: Maybe<Person_Aggregate_Fields>;
  nodes: Array<Person>;
};

/** aggregate fields of "Person" */
export type Person_Aggregate_Fields = {
  __typename?: 'Person_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Person_Max_Fields>;
  min?: Maybe<Person_Min_Fields>;
};


/** aggregate fields of "Person" */
export type Person_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Person" */
export type Person_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Max_Order_By>;
  min?: InputMaybe<Person_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Person" */
export type Person_Arr_Rel_Insert_Input = {
  data: Array<Person_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Person_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Person". All fields are combined with a logical 'AND'. */
export type Person_Bool_Exp = {
  BlogAuthors?: InputMaybe<BlogAuthor_Bool_Exp>;
  CourseInstructors?: InputMaybe<CourseInstructor_Bool_Exp>;
  Image?: InputMaybe<Image_Bool_Exp>;
  ProjectContributors?: InputMaybe<ProjectContributor_Bool_Exp>;
  Users?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Person_Bool_Exp>>;
  _not?: InputMaybe<Person_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  githubUrl?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageId?: InputMaybe<Uuid_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  linkedinUrl?: InputMaybe<String_Comparison_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  websiteUrl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Person" */
export enum Person_Constraint {
  /** unique or primary key constraint */
  PersonPkey = 'Person_pkey'
}

/** input type for inserting data into table "Person" */
export type Person_Insert_Input = {
  BlogAuthors?: InputMaybe<BlogAuthor_Arr_Rel_Insert_Input>;
  CourseInstructors?: InputMaybe<CourseInstructor_Arr_Rel_Insert_Input>;
  Image?: InputMaybe<Image_Obj_Rel_Insert_Input>;
  ProjectContributors?: InputMaybe<ProjectContributor_Arr_Rel_Insert_Input>;
  Users?: InputMaybe<User_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  firstName?: InputMaybe<Scalars['String']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Person_Max_Fields = {
  __typename?: 'Person_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Person" */
export type Person_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  githubUrl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  linkedinUrl?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  websiteUrl?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Min_Fields = {
  __typename?: 'Person_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  firstName?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Person" */
export type Person_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  githubUrl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  linkedinUrl?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  websiteUrl?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Person" */
export type Person_Mutation_Response = {
  __typename?: 'Person_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Person>;
};

/** input type for inserting object relation for remote table "Person" */
export type Person_Obj_Rel_Insert_Input = {
  data: Person_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Person_On_Conflict>;
};

/** on conflict condition type for table "Person" */
export type Person_On_Conflict = {
  constraint: Person_Constraint;
  update_columns?: Array<Person_Update_Column>;
  where?: InputMaybe<Person_Bool_Exp>;
};

/** Ordering options when selecting data from "Person". */
export type Person_Order_By = {
  BlogAuthors_aggregate?: InputMaybe<BlogAuthor_Aggregate_Order_By>;
  CourseInstructors_aggregate?: InputMaybe<CourseInstructor_Aggregate_Order_By>;
  Image?: InputMaybe<Image_Order_By>;
  ProjectContributors_aggregate?: InputMaybe<ProjectContributor_Aggregate_Order_By>;
  Users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  githubUrl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  linkedinUrl?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  websiteUrl?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Person */
export type Person_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Person" */
export enum Person_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GithubUrl = 'githubUrl',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LinkedinUrl = 'linkedinUrl',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WebsiteUrl = 'websiteUrl'
}

/** input type for updating data in table "Person" */
export type Person_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  firstName?: InputMaybe<Scalars['String']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  lastName?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Person" */
export enum Person_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GithubUrl = 'githubUrl',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LinkedinUrl = 'linkedinUrl',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WebsiteUrl = 'websiteUrl'
}

/** columns and relationships of "Project" */
export type Project = {
  __typename?: 'Project';
  /** An object relationship */
  Image: Image;
  /** An array relationship */
  ProjectContributors: Array<ProjectContributor>;
  /** An aggregate relationship */
  ProjectContributors_aggregate: ProjectContributor_Aggregate;
  createdAt: Scalars['timestamp'];
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  imageId: Scalars['uuid'];
  name: Scalars['String'];
  projectUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  summary: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "Project" */
export type ProjectProjectContributorsArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectProjectContributors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};

/** columns and relationships of "ProjectContributor" */
export type ProjectContributor = {
  __typename?: 'ProjectContributor';
  /** An object relationship */
  Person: Person;
  /** An object relationship */
  Project: Project;
  contributorId: Scalars['uuid'];
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  projectId: Scalars['uuid'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "ProjectContributor" */
export type ProjectContributor_Aggregate = {
  __typename?: 'ProjectContributor_aggregate';
  aggregate?: Maybe<ProjectContributor_Aggregate_Fields>;
  nodes: Array<ProjectContributor>;
};

/** aggregate fields of "ProjectContributor" */
export type ProjectContributor_Aggregate_Fields = {
  __typename?: 'ProjectContributor_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ProjectContributor_Max_Fields>;
  min?: Maybe<ProjectContributor_Min_Fields>;
};


/** aggregate fields of "ProjectContributor" */
export type ProjectContributor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ProjectContributor" */
export type ProjectContributor_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ProjectContributor_Max_Order_By>;
  min?: InputMaybe<ProjectContributor_Min_Order_By>;
};

/** input type for inserting array relation for remote table "ProjectContributor" */
export type ProjectContributor_Arr_Rel_Insert_Input = {
  data: Array<ProjectContributor_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<ProjectContributor_On_Conflict>;
};

/** Boolean expression to filter rows from the table "ProjectContributor". All fields are combined with a logical 'AND'. */
export type ProjectContributor_Bool_Exp = {
  Person?: InputMaybe<Person_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  _and?: InputMaybe<Array<ProjectContributor_Bool_Exp>>;
  _not?: InputMaybe<ProjectContributor_Bool_Exp>;
  _or?: InputMaybe<Array<ProjectContributor_Bool_Exp>>;
  contributorId?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "ProjectContributor" */
export enum ProjectContributor_Constraint {
  /** unique or primary key constraint */
  ProjectContributorPkey = 'ProjectContributor_pkey'
}

/** input type for inserting data into table "ProjectContributor" */
export type ProjectContributor_Insert_Input = {
  Person?: InputMaybe<Person_Obj_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  contributorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type ProjectContributor_Max_Fields = {
  __typename?: 'ProjectContributor_max_fields';
  contributorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "ProjectContributor" */
export type ProjectContributor_Max_Order_By = {
  contributorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ProjectContributor_Min_Fields = {
  __typename?: 'ProjectContributor_min_fields';
  contributorId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "ProjectContributor" */
export type ProjectContributor_Min_Order_By = {
  contributorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ProjectContributor" */
export type ProjectContributor_Mutation_Response = {
  __typename?: 'ProjectContributor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectContributor>;
};

/** on conflict condition type for table "ProjectContributor" */
export type ProjectContributor_On_Conflict = {
  constraint: ProjectContributor_Constraint;
  update_columns?: Array<ProjectContributor_Update_Column>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};

/** Ordering options when selecting data from "ProjectContributor". */
export type ProjectContributor_Order_By = {
  Person?: InputMaybe<Person_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  contributorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ProjectContributor */
export type ProjectContributor_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ProjectContributor" */
export enum ProjectContributor_Select_Column {
  /** column name */
  ContributorId = 'contributorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "ProjectContributor" */
export type ProjectContributor_Set_Input = {
  contributorId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "ProjectContributor" */
export enum ProjectContributor_Update_Column {
  /** column name */
  ContributorId = 'contributorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregated selection of "Project" */
export type Project_Aggregate = {
  __typename?: 'Project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

/** aggregate fields of "Project" */
export type Project_Aggregate_Fields = {
  __typename?: 'Project_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
};


/** aggregate fields of "Project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Project" */
export type Project_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Max_Order_By>;
  min?: InputMaybe<Project_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Project" */
export type Project_Arr_Rel_Insert_Input = {
  data: Array<Project_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  Image?: InputMaybe<Image_Bool_Exp>;
  ProjectContributors?: InputMaybe<ProjectContributor_Bool_Exp>;
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  githubUrl?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageId?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  projectUrl?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Project" */
export enum Project_Constraint {
  /** unique or primary key constraint */
  ProjectPkey = 'Project_pkey',
  /** unique or primary key constraint */
  ProjectSlugKey = 'Project_slug_key'
}

/** input type for inserting data into table "Project" */
export type Project_Insert_Input = {
  Image?: InputMaybe<Image_Obj_Rel_Insert_Input>;
  ProjectContributors?: InputMaybe<ProjectContributor_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  projectUrl?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: 'Project_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  projectUrl?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Project" */
export type Project_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  githubUrl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectUrl?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: 'Project_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  githubUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  projectUrl?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "Project" */
export type Project_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  githubUrl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectUrl?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Project" */
export type Project_Mutation_Response = {
  __typename?: 'Project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** input type for inserting object relation for remote table "Project" */
export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** on conflict condition type for table "Project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "Project". */
export type Project_Order_By = {
  Image?: InputMaybe<Image_Order_By>;
  ProjectContributors_aggregate?: InputMaybe<ProjectContributor_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  githubUrl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projectUrl?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Project */
export type Project_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Project" */
export enum Project_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GithubUrl = 'githubUrl',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectUrl = 'projectUrl',
  /** column name */
  Slug = 'slug',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "Project" */
export type Project_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  githubUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  projectUrl?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "Project" */
export enum Project_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GithubUrl = 'githubUrl',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectUrl = 'projectUrl',
  /** column name */
  Slug = 'slug',
  /** column name */
  Summary = 'summary',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "Rating". All fields are combined with logical 'AND'. */
export type Rating_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Rating']>;
  _gt?: InputMaybe<Scalars['Rating']>;
  _gte?: InputMaybe<Scalars['Rating']>;
  _in?: InputMaybe<Array<Scalars['Rating']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Rating']>;
  _lte?: InputMaybe<Scalars['Rating']>;
  _neq?: InputMaybe<Scalars['Rating']>;
  _nin?: InputMaybe<Array<Scalars['Rating']>>;
};

/** Boolean expression to compare columns of type "Role". All fields are combined with logical 'AND'. */
export type Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Role']>;
  _gt?: InputMaybe<Scalars['Role']>;
  _gte?: InputMaybe<Scalars['Role']>;
  _in?: InputMaybe<Array<Scalars['Role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Role']>;
  _lte?: InputMaybe<Scalars['Role']>;
  _neq?: InputMaybe<Scalars['Role']>;
  _nin?: InputMaybe<Array<Scalars['Role']>>;
};

/** columns and relationships of "School" */
export type School = {
  __typename?: 'School';
  /** An array relationship */
  CourseUrls: Array<CourseUrl>;
  /** An aggregate relationship */
  CourseUrls_aggregate: CourseUrl_Aggregate;
  /** An array relationship */
  Courses: Array<Course>;
  /** An aggregate relationship */
  Courses_aggregate: Course_Aggregate;
  /** An object relationship */
  Image: Image;
  createdAt: Scalars['timestamp'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  imageId: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamp'];
  url: Scalars['String'];
};


/** columns and relationships of "School" */
export type SchoolCourseUrlsArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};


/** columns and relationships of "School" */
export type SchoolCourseUrls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};


/** columns and relationships of "School" */
export type SchoolCoursesArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** columns and relationships of "School" */
export type SchoolCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};

/** aggregated selection of "School" */
export type School_Aggregate = {
  __typename?: 'School_aggregate';
  aggregate?: Maybe<School_Aggregate_Fields>;
  nodes: Array<School>;
};

/** aggregate fields of "School" */
export type School_Aggregate_Fields = {
  __typename?: 'School_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<School_Max_Fields>;
  min?: Maybe<School_Min_Fields>;
};


/** aggregate fields of "School" */
export type School_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<School_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "School" */
export type School_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<School_Max_Order_By>;
  min?: InputMaybe<School_Min_Order_By>;
};

/** input type for inserting array relation for remote table "School" */
export type School_Arr_Rel_Insert_Input = {
  data: Array<School_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<School_On_Conflict>;
};

/** Boolean expression to filter rows from the table "School". All fields are combined with a logical 'AND'. */
export type School_Bool_Exp = {
  CourseUrls?: InputMaybe<CourseUrl_Bool_Exp>;
  Courses?: InputMaybe<Course_Bool_Exp>;
  Image?: InputMaybe<Image_Bool_Exp>;
  _and?: InputMaybe<Array<School_Bool_Exp>>;
  _not?: InputMaybe<School_Bool_Exp>;
  _or?: InputMaybe<Array<School_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageId?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "School" */
export enum School_Constraint {
  /** unique or primary key constraint */
  SchoolPkey = 'School_pkey',
  /** unique or primary key constraint */
  SchoolUrlKey = 'School_url_key'
}

/** input type for inserting data into table "School" */
export type School_Insert_Input = {
  CourseUrls?: InputMaybe<CourseUrl_Arr_Rel_Insert_Input>;
  Courses?: InputMaybe<Course_Arr_Rel_Insert_Input>;
  Image?: InputMaybe<Image_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type School_Max_Fields = {
  __typename?: 'School_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "School" */
export type School_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type School_Min_Fields = {
  __typename?: 'School_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "School" */
export type School_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "School" */
export type School_Mutation_Response = {
  __typename?: 'School_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<School>;
};

/** input type for inserting object relation for remote table "School" */
export type School_Obj_Rel_Insert_Input = {
  data: School_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<School_On_Conflict>;
};

/** on conflict condition type for table "School" */
export type School_On_Conflict = {
  constraint: School_Constraint;
  update_columns?: Array<School_Update_Column>;
  where?: InputMaybe<School_Bool_Exp>;
};

/** Ordering options when selecting data from "School". */
export type School_Order_By = {
  CourseUrls_aggregate?: InputMaybe<CourseUrl_Aggregate_Order_By>;
  Courses_aggregate?: InputMaybe<Course_Aggregate_Order_By>;
  Image?: InputMaybe<Image_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: School */
export type School_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "School" */
export enum School_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "School" */
export type School_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "School" */
export enum School_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "TechnologyLogo" */
export type TechnologyLogo = {
  __typename?: 'TechnologyLogo';
  /** An object relationship */
  Image: Image;
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  imageId: Scalars['uuid'];
  isOnHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "TechnologyLogo" */
export type TechnologyLogo_Aggregate = {
  __typename?: 'TechnologyLogo_aggregate';
  aggregate?: Maybe<TechnologyLogo_Aggregate_Fields>;
  nodes: Array<TechnologyLogo>;
};

/** aggregate fields of "TechnologyLogo" */
export type TechnologyLogo_Aggregate_Fields = {
  __typename?: 'TechnologyLogo_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TechnologyLogo_Max_Fields>;
  min?: Maybe<TechnologyLogo_Min_Fields>;
};


/** aggregate fields of "TechnologyLogo" */
export type TechnologyLogo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TechnologyLogo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "TechnologyLogo" */
export type TechnologyLogo_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TechnologyLogo_Max_Order_By>;
  min?: InputMaybe<TechnologyLogo_Min_Order_By>;
};

/** input type for inserting array relation for remote table "TechnologyLogo" */
export type TechnologyLogo_Arr_Rel_Insert_Input = {
  data: Array<TechnologyLogo_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<TechnologyLogo_On_Conflict>;
};

/** Boolean expression to filter rows from the table "TechnologyLogo". All fields are combined with a logical 'AND'. */
export type TechnologyLogo_Bool_Exp = {
  Image?: InputMaybe<Image_Bool_Exp>;
  _and?: InputMaybe<Array<TechnologyLogo_Bool_Exp>>;
  _not?: InputMaybe<TechnologyLogo_Bool_Exp>;
  _or?: InputMaybe<Array<TechnologyLogo_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageId?: InputMaybe<Uuid_Comparison_Exp>;
  isOnHomepage?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "TechnologyLogo" */
export enum TechnologyLogo_Constraint {
  /** unique or primary key constraint */
  TechnologyLogoImageIdKey = 'TechnologyLogo_imageId_key',
  /** unique or primary key constraint */
  TechnologyLogoPkey = 'TechnologyLogo_pkey'
}

/** input type for inserting data into table "TechnologyLogo" */
export type TechnologyLogo_Insert_Input = {
  Image?: InputMaybe<Image_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  isOnHomepage?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type TechnologyLogo_Max_Fields = {
  __typename?: 'TechnologyLogo_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "TechnologyLogo" */
export type TechnologyLogo_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type TechnologyLogo_Min_Fields = {
  __typename?: 'TechnologyLogo_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "TechnologyLogo" */
export type TechnologyLogo_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "TechnologyLogo" */
export type TechnologyLogo_Mutation_Response = {
  __typename?: 'TechnologyLogo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TechnologyLogo>;
};

/** on conflict condition type for table "TechnologyLogo" */
export type TechnologyLogo_On_Conflict = {
  constraint: TechnologyLogo_Constraint;
  update_columns?: Array<TechnologyLogo_Update_Column>;
  where?: InputMaybe<TechnologyLogo_Bool_Exp>;
};

/** Ordering options when selecting data from "TechnologyLogo". */
export type TechnologyLogo_Order_By = {
  Image?: InputMaybe<Image_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  isOnHomepage?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: TechnologyLogo */
export type TechnologyLogo_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "TechnologyLogo" */
export enum TechnologyLogo_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  IsOnHomepage = 'isOnHomepage',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "TechnologyLogo" */
export type TechnologyLogo_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  isOnHomepage?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "TechnologyLogo" */
export enum TechnologyLogo_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  IsOnHomepage = 'isOnHomepage',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An object relationship */
  Person: Person;
  createdAt: Scalars['timestamp'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  personId: Scalars['uuid'];
  role: Scalars['Role'];
  updatedAt: Scalars['timestamp'];
  username: Scalars['String'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Person?: InputMaybe<Person_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  personId?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Role_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserCredentialsUsernamePasswordUniqueConstraint = 'UserCredentials_username_password_unique_constraint',
  /** unique or primary key constraint */
  UserPkey = 'User_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'User_username_key'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Person?: InputMaybe<Person_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  personId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  personId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  personId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Person?: InputMaybe<Person_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  personId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  PersonId = 'personId',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['Role']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  PersonId = 'personId',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Blog" */
  delete_Blog?: Maybe<Blog_Mutation_Response>;
  /** delete data from the table: "BlogAuthor" */
  delete_BlogAuthor?: Maybe<BlogAuthor_Mutation_Response>;
  /** delete single row from the table: "BlogAuthor" */
  delete_BlogAuthor_by_pk?: Maybe<BlogAuthor>;
  /** delete single row from the table: "Blog" */
  delete_Blog_by_pk?: Maybe<Blog>;
  /** delete data from the table: "Course" */
  delete_Course?: Maybe<Course_Mutation_Response>;
  /** delete data from the table: "CourseInstructor" */
  delete_CourseInstructor?: Maybe<CourseInstructor_Mutation_Response>;
  /** delete single row from the table: "CourseInstructor" */
  delete_CourseInstructor_by_pk?: Maybe<CourseInstructor>;
  /** delete data from the table: "CourseUrl" */
  delete_CourseUrl?: Maybe<CourseUrl_Mutation_Response>;
  /** delete single row from the table: "CourseUrl" */
  delete_CourseUrl_by_pk?: Maybe<CourseUrl>;
  /** delete single row from the table: "Course" */
  delete_Course_by_pk?: Maybe<Course>;
  /** delete data from the table: "Image" */
  delete_Image?: Maybe<Image_Mutation_Response>;
  /** delete single row from the table: "Image" */
  delete_Image_by_pk?: Maybe<Image>;
  /** delete data from the table: "Person" */
  delete_Person?: Maybe<Person_Mutation_Response>;
  /** delete single row from the table: "Person" */
  delete_Person_by_pk?: Maybe<Person>;
  /** delete data from the table: "Project" */
  delete_Project?: Maybe<Project_Mutation_Response>;
  /** delete data from the table: "ProjectContributor" */
  delete_ProjectContributor?: Maybe<ProjectContributor_Mutation_Response>;
  /** delete single row from the table: "ProjectContributor" */
  delete_ProjectContributor_by_pk?: Maybe<ProjectContributor>;
  /** delete single row from the table: "Project" */
  delete_Project_by_pk?: Maybe<Project>;
  /** delete data from the table: "School" */
  delete_School?: Maybe<School_Mutation_Response>;
  /** delete single row from the table: "School" */
  delete_School_by_pk?: Maybe<School>;
  /** delete data from the table: "TechnologyLogo" */
  delete_TechnologyLogo?: Maybe<TechnologyLogo_Mutation_Response>;
  /** delete single row from the table: "TechnologyLogo" */
  delete_TechnologyLogo_by_pk?: Maybe<TechnologyLogo>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Blog" */
  insert_Blog?: Maybe<Blog_Mutation_Response>;
  /** insert data into the table: "BlogAuthor" */
  insert_BlogAuthor?: Maybe<BlogAuthor_Mutation_Response>;
  /** insert a single row into the table: "BlogAuthor" */
  insert_BlogAuthor_one?: Maybe<BlogAuthor>;
  /** insert a single row into the table: "Blog" */
  insert_Blog_one?: Maybe<Blog>;
  /** insert data into the table: "Course" */
  insert_Course?: Maybe<Course_Mutation_Response>;
  /** insert data into the table: "CourseInstructor" */
  insert_CourseInstructor?: Maybe<CourseInstructor_Mutation_Response>;
  /** insert a single row into the table: "CourseInstructor" */
  insert_CourseInstructor_one?: Maybe<CourseInstructor>;
  /** insert data into the table: "CourseUrl" */
  insert_CourseUrl?: Maybe<CourseUrl_Mutation_Response>;
  /** insert a single row into the table: "CourseUrl" */
  insert_CourseUrl_one?: Maybe<CourseUrl>;
  /** insert a single row into the table: "Course" */
  insert_Course_one?: Maybe<Course>;
  /** insert data into the table: "Image" */
  insert_Image?: Maybe<Image_Mutation_Response>;
  /** insert a single row into the table: "Image" */
  insert_Image_one?: Maybe<Image>;
  /** insert data into the table: "Person" */
  insert_Person?: Maybe<Person_Mutation_Response>;
  /** insert a single row into the table: "Person" */
  insert_Person_one?: Maybe<Person>;
  /** insert data into the table: "Project" */
  insert_Project?: Maybe<Project_Mutation_Response>;
  /** insert data into the table: "ProjectContributor" */
  insert_ProjectContributor?: Maybe<ProjectContributor_Mutation_Response>;
  /** insert a single row into the table: "ProjectContributor" */
  insert_ProjectContributor_one?: Maybe<ProjectContributor>;
  /** insert a single row into the table: "Project" */
  insert_Project_one?: Maybe<Project>;
  /** insert data into the table: "School" */
  insert_School?: Maybe<School_Mutation_Response>;
  /** insert a single row into the table: "School" */
  insert_School_one?: Maybe<School>;
  /** insert data into the table: "TechnologyLogo" */
  insert_TechnologyLogo?: Maybe<TechnologyLogo_Mutation_Response>;
  /** insert a single row into the table: "TechnologyLogo" */
  insert_TechnologyLogo_one?: Maybe<TechnologyLogo>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Blog" */
  update_Blog?: Maybe<Blog_Mutation_Response>;
  /** update data of the table: "BlogAuthor" */
  update_BlogAuthor?: Maybe<BlogAuthor_Mutation_Response>;
  /** update single row of the table: "BlogAuthor" */
  update_BlogAuthor_by_pk?: Maybe<BlogAuthor>;
  /** update single row of the table: "Blog" */
  update_Blog_by_pk?: Maybe<Blog>;
  /** update data of the table: "Course" */
  update_Course?: Maybe<Course_Mutation_Response>;
  /** update data of the table: "CourseInstructor" */
  update_CourseInstructor?: Maybe<CourseInstructor_Mutation_Response>;
  /** update single row of the table: "CourseInstructor" */
  update_CourseInstructor_by_pk?: Maybe<CourseInstructor>;
  /** update data of the table: "CourseUrl" */
  update_CourseUrl?: Maybe<CourseUrl_Mutation_Response>;
  /** update single row of the table: "CourseUrl" */
  update_CourseUrl_by_pk?: Maybe<CourseUrl>;
  /** update single row of the table: "Course" */
  update_Course_by_pk?: Maybe<Course>;
  /** update data of the table: "Image" */
  update_Image?: Maybe<Image_Mutation_Response>;
  /** update single row of the table: "Image" */
  update_Image_by_pk?: Maybe<Image>;
  /** update data of the table: "Person" */
  update_Person?: Maybe<Person_Mutation_Response>;
  /** update single row of the table: "Person" */
  update_Person_by_pk?: Maybe<Person>;
  /** update data of the table: "Project" */
  update_Project?: Maybe<Project_Mutation_Response>;
  /** update data of the table: "ProjectContributor" */
  update_ProjectContributor?: Maybe<ProjectContributor_Mutation_Response>;
  /** update single row of the table: "ProjectContributor" */
  update_ProjectContributor_by_pk?: Maybe<ProjectContributor>;
  /** update single row of the table: "Project" */
  update_Project_by_pk?: Maybe<Project>;
  /** update data of the table: "School" */
  update_School?: Maybe<School_Mutation_Response>;
  /** update single row of the table: "School" */
  update_School_by_pk?: Maybe<School>;
  /** update data of the table: "TechnologyLogo" */
  update_TechnologyLogo?: Maybe<TechnologyLogo_Mutation_Response>;
  /** update single row of the table: "TechnologyLogo" */
  update_TechnologyLogo_by_pk?: Maybe<TechnologyLogo>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_BlogArgs = {
  where: Blog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BlogAuthorArgs = {
  where: BlogAuthor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BlogAuthor_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Blog_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CourseArgs = {
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CourseInstructorArgs = {
  where: CourseInstructor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CourseInstructor_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CourseUrlArgs = {
  where: CourseUrl_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CourseUrl_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Course_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ImageArgs = {
  where: Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Image_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PersonArgs = {
  where: Person_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProjectContributorArgs = {
  where: ProjectContributor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProjectContributor_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SchoolArgs = {
  where: School_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_School_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TechnologyLogoArgs = {
  where: TechnologyLogo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TechnologyLogo_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_BlogArgs = {
  objects: Array<Blog_Insert_Input>;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlogAuthorArgs = {
  objects: Array<BlogAuthor_Insert_Input>;
  on_conflict?: InputMaybe<BlogAuthor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlogAuthor_OneArgs = {
  object: BlogAuthor_Insert_Input;
  on_conflict?: InputMaybe<BlogAuthor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_OneArgs = {
  object: Blog_Insert_Input;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CourseArgs = {
  objects: Array<Course_Insert_Input>;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CourseInstructorArgs = {
  objects: Array<CourseInstructor_Insert_Input>;
  on_conflict?: InputMaybe<CourseInstructor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CourseInstructor_OneArgs = {
  object: CourseInstructor_Insert_Input;
  on_conflict?: InputMaybe<CourseInstructor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CourseUrlArgs = {
  objects: Array<CourseUrl_Insert_Input>;
  on_conflict?: InputMaybe<CourseUrl_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CourseUrl_OneArgs = {
  object: CourseUrl_Insert_Input;
  on_conflict?: InputMaybe<CourseUrl_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_OneArgs = {
  object: Course_Insert_Input;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ImageArgs = {
  objects: Array<Image_Insert_Input>;
  on_conflict?: InputMaybe<Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Image_OneArgs = {
  object: Image_Insert_Input;
  on_conflict?: InputMaybe<Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonArgs = {
  objects: Array<Person_Insert_Input>;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_OneArgs = {
  object: Person_Insert_Input;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectContributorArgs = {
  objects: Array<ProjectContributor_Insert_Input>;
  on_conflict?: InputMaybe<ProjectContributor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectContributor_OneArgs = {
  object: ProjectContributor_Insert_Input;
  on_conflict?: InputMaybe<ProjectContributor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SchoolArgs = {
  objects: Array<School_Insert_Input>;
  on_conflict?: InputMaybe<School_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_School_OneArgs = {
  object: School_Insert_Input;
  on_conflict?: InputMaybe<School_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TechnologyLogoArgs = {
  objects: Array<TechnologyLogo_Insert_Input>;
  on_conflict?: InputMaybe<TechnologyLogo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TechnologyLogo_OneArgs = {
  object: TechnologyLogo_Insert_Input;
  on_conflict?: InputMaybe<TechnologyLogo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BlogArgs = {
  _set?: InputMaybe<Blog_Set_Input>;
  where: Blog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BlogAuthorArgs = {
  _set?: InputMaybe<BlogAuthor_Set_Input>;
  where: BlogAuthor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BlogAuthor_By_PkArgs = {
  _set?: InputMaybe<BlogAuthor_Set_Input>;
  pk_columns: BlogAuthor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_By_PkArgs = {
  _set?: InputMaybe<Blog_Set_Input>;
  pk_columns: Blog_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CourseArgs = {
  _inc?: InputMaybe<Course_Inc_Input>;
  _set?: InputMaybe<Course_Set_Input>;
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CourseInstructorArgs = {
  _set?: InputMaybe<CourseInstructor_Set_Input>;
  where: CourseInstructor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CourseInstructor_By_PkArgs = {
  _set?: InputMaybe<CourseInstructor_Set_Input>;
  pk_columns: CourseInstructor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CourseUrlArgs = {
  _set?: InputMaybe<CourseUrl_Set_Input>;
  where: CourseUrl_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CourseUrl_By_PkArgs = {
  _set?: InputMaybe<CourseUrl_Set_Input>;
  pk_columns: CourseUrl_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_By_PkArgs = {
  _inc?: InputMaybe<Course_Inc_Input>;
  _set?: InputMaybe<Course_Set_Input>;
  pk_columns: Course_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ImageArgs = {
  _set?: InputMaybe<Image_Set_Input>;
  where: Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Image_By_PkArgs = {
  _set?: InputMaybe<Image_Set_Input>;
  pk_columns: Image_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PersonArgs = {
  _set?: InputMaybe<Person_Set_Input>;
  where: Person_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_By_PkArgs = {
  _set?: InputMaybe<Person_Set_Input>;
  pk_columns: Person_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectContributorArgs = {
  _set?: InputMaybe<ProjectContributor_Set_Input>;
  where: ProjectContributor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectContributor_By_PkArgs = {
  _set?: InputMaybe<ProjectContributor_Set_Input>;
  pk_columns: ProjectContributor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SchoolArgs = {
  _set?: InputMaybe<School_Set_Input>;
  where: School_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_School_By_PkArgs = {
  _set?: InputMaybe<School_Set_Input>;
  pk_columns: School_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TechnologyLogoArgs = {
  _set?: InputMaybe<TechnologyLogo_Set_Input>;
  where: TechnologyLogo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TechnologyLogo_By_PkArgs = {
  _set?: InputMaybe<TechnologyLogo_Set_Input>;
  pk_columns: TechnologyLogo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch data from the table: "BlogAuthor" */
  BlogAuthor: Array<BlogAuthor>;
  /** fetch aggregated fields from the table: "BlogAuthor" */
  BlogAuthor_aggregate: BlogAuthor_Aggregate;
  /** fetch data from the table: "BlogAuthor" using primary key columns */
  BlogAuthor_by_pk?: Maybe<BlogAuthor>;
  /** fetch aggregated fields from the table: "Blog" */
  Blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table: "Course" */
  Course: Array<Course>;
  /** fetch data from the table: "CourseInstructor" */
  CourseInstructor: Array<CourseInstructor>;
  /** fetch aggregated fields from the table: "CourseInstructor" */
  CourseInstructor_aggregate: CourseInstructor_Aggregate;
  /** fetch data from the table: "CourseInstructor" using primary key columns */
  CourseInstructor_by_pk?: Maybe<CourseInstructor>;
  /** fetch data from the table: "CourseUrl" */
  CourseUrl: Array<CourseUrl>;
  /** fetch aggregated fields from the table: "CourseUrl" */
  CourseUrl_aggregate: CourseUrl_Aggregate;
  /** fetch data from the table: "CourseUrl" using primary key columns */
  CourseUrl_by_pk?: Maybe<CourseUrl>;
  /** fetch aggregated fields from the table: "Course" */
  Course_aggregate: Course_Aggregate;
  /** fetch data from the table: "Course" using primary key columns */
  Course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "Image" */
  Image: Array<Image>;
  /** fetch aggregated fields from the table: "Image" */
  Image_aggregate: Image_Aggregate;
  /** fetch data from the table: "Image" using primary key columns */
  Image_by_pk?: Maybe<Image>;
  /** fetch data from the table: "Person" */
  Person: Array<Person>;
  /** fetch aggregated fields from the table: "Person" */
  Person_aggregate: Person_Aggregate;
  /** fetch data from the table: "Person" using primary key columns */
  Person_by_pk?: Maybe<Person>;
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch data from the table: "ProjectContributor" */
  ProjectContributor: Array<ProjectContributor>;
  /** fetch aggregated fields from the table: "ProjectContributor" */
  ProjectContributor_aggregate: ProjectContributor_Aggregate;
  /** fetch data from the table: "ProjectContributor" using primary key columns */
  ProjectContributor_by_pk?: Maybe<ProjectContributor>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "School" */
  School: Array<School>;
  /** fetch aggregated fields from the table: "School" */
  School_aggregate: School_Aggregate;
  /** fetch data from the table: "School" using primary key columns */
  School_by_pk?: Maybe<School>;
  /** fetch data from the table: "TechnologyLogo" */
  TechnologyLogo: Array<TechnologyLogo>;
  /** fetch aggregated fields from the table: "TechnologyLogo" */
  TechnologyLogo_aggregate: TechnologyLogo_Aggregate;
  /** fetch data from the table: "TechnologyLogo" using primary key columns */
  TechnologyLogo_by_pk?: Maybe<TechnologyLogo>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootBlogAuthorArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};


export type Query_RootBlogAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};


export type Query_RootBlogAuthor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootBlog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourseInstructorArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


export type Query_RootCourseInstructor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


export type Query_RootCourseInstructor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourseUrlArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};


export type Query_RootCourseUrl_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};


export type Query_RootCourseUrl_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Query_RootImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Query_RootImage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Query_RootPerson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Query_RootPerson_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProjectContributorArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};


export type Query_RootProjectContributor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};


export type Query_RootProjectContributor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSchoolArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Query_RootSchool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Query_RootSchool_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTechnologyLogoArgs = {
  distinct_on?: InputMaybe<Array<TechnologyLogo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TechnologyLogo_Order_By>>;
  where?: InputMaybe<TechnologyLogo_Bool_Exp>;
};


export type Query_RootTechnologyLogo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TechnologyLogo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TechnologyLogo_Order_By>>;
  where?: InputMaybe<TechnologyLogo_Bool_Exp>;
};


export type Query_RootTechnologyLogo_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch data from the table: "BlogAuthor" */
  BlogAuthor: Array<BlogAuthor>;
  /** fetch aggregated fields from the table: "BlogAuthor" */
  BlogAuthor_aggregate: BlogAuthor_Aggregate;
  /** fetch data from the table: "BlogAuthor" using primary key columns */
  BlogAuthor_by_pk?: Maybe<BlogAuthor>;
  /** fetch aggregated fields from the table: "Blog" */
  Blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table: "Course" */
  Course: Array<Course>;
  /** fetch data from the table: "CourseInstructor" */
  CourseInstructor: Array<CourseInstructor>;
  /** fetch aggregated fields from the table: "CourseInstructor" */
  CourseInstructor_aggregate: CourseInstructor_Aggregate;
  /** fetch data from the table: "CourseInstructor" using primary key columns */
  CourseInstructor_by_pk?: Maybe<CourseInstructor>;
  /** fetch data from the table: "CourseUrl" */
  CourseUrl: Array<CourseUrl>;
  /** fetch aggregated fields from the table: "CourseUrl" */
  CourseUrl_aggregate: CourseUrl_Aggregate;
  /** fetch data from the table: "CourseUrl" using primary key columns */
  CourseUrl_by_pk?: Maybe<CourseUrl>;
  /** fetch aggregated fields from the table: "Course" */
  Course_aggregate: Course_Aggregate;
  /** fetch data from the table: "Course" using primary key columns */
  Course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "Image" */
  Image: Array<Image>;
  /** fetch aggregated fields from the table: "Image" */
  Image_aggregate: Image_Aggregate;
  /** fetch data from the table: "Image" using primary key columns */
  Image_by_pk?: Maybe<Image>;
  /** fetch data from the table: "Person" */
  Person: Array<Person>;
  /** fetch aggregated fields from the table: "Person" */
  Person_aggregate: Person_Aggregate;
  /** fetch data from the table: "Person" using primary key columns */
  Person_by_pk?: Maybe<Person>;
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch data from the table: "ProjectContributor" */
  ProjectContributor: Array<ProjectContributor>;
  /** fetch aggregated fields from the table: "ProjectContributor" */
  ProjectContributor_aggregate: ProjectContributor_Aggregate;
  /** fetch data from the table: "ProjectContributor" using primary key columns */
  ProjectContributor_by_pk?: Maybe<ProjectContributor>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "School" */
  School: Array<School>;
  /** fetch aggregated fields from the table: "School" */
  School_aggregate: School_Aggregate;
  /** fetch data from the table: "School" using primary key columns */
  School_by_pk?: Maybe<School>;
  /** fetch data from the table: "TechnologyLogo" */
  TechnologyLogo: Array<TechnologyLogo>;
  /** fetch aggregated fields from the table: "TechnologyLogo" */
  TechnologyLogo_aggregate: TechnologyLogo_Aggregate;
  /** fetch data from the table: "TechnologyLogo" using primary key columns */
  TechnologyLogo_by_pk?: Maybe<TechnologyLogo>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Subscription_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlogAuthorArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};


export type Subscription_RootBlogAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BlogAuthor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BlogAuthor_Order_By>>;
  where?: InputMaybe<BlogAuthor_Bool_Exp>;
};


export type Subscription_RootBlogAuthor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlog_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourseInstructorArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


export type Subscription_RootCourseInstructor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseInstructor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseInstructor_Order_By>>;
  where?: InputMaybe<CourseInstructor_Bool_Exp>;
};


export type Subscription_RootCourseInstructor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourseUrlArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};


export type Subscription_RootCourseUrl_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseUrl_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CourseUrl_Order_By>>;
  where?: InputMaybe<CourseUrl_Bool_Exp>;
};


export type Subscription_RootCourseUrl_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Subscription_RootImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Subscription_RootImage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Subscription_RootPerson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Subscription_RootPerson_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProjectContributorArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};


export type Subscription_RootProjectContributor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectContributor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectContributor_Order_By>>;
  where?: InputMaybe<ProjectContributor_Bool_Exp>;
};


export type Subscription_RootProjectContributor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSchoolArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Subscription_RootSchool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<School_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<School_Order_By>>;
  where?: InputMaybe<School_Bool_Exp>;
};


export type Subscription_RootSchool_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTechnologyLogoArgs = {
  distinct_on?: InputMaybe<Array<TechnologyLogo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TechnologyLogo_Order_By>>;
  where?: InputMaybe<TechnologyLogo_Bool_Exp>;
};


export type Subscription_RootTechnologyLogo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TechnologyLogo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TechnologyLogo_Order_By>>;
  where?: InputMaybe<TechnologyLogo_Bool_Exp>;
};


export type Subscription_RootTechnologyLogo_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
