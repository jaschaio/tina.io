//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
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
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getPageDocument: PageDocument;
  getPageList: PageConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPageDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPageListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentNode = PageDocument;

export type PageSeo = {
  __typename?: 'PageSeo';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PageBlocksHeroActions = {
  __typename?: 'PageBlocksHeroActions';
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksHero = {
  __typename?: 'PageBlocksHero';
  headline?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<PageBlocksHeroActions>>>;
  videoSrc?: Maybe<Scalars['String']>;
};

export type PageBlocksFeaturesItemsFeatureMedia = {
  __typename?: 'PageBlocksFeaturesItemsFeatureMedia';
  src?: Maybe<Scalars['String']>;
  videoSrc?: Maybe<Scalars['String']>;
  cli?: Maybe<Scalars['Boolean']>;
};

export type PageBlocksFeaturesItemsFeatureActions = {
  __typename?: 'PageBlocksFeaturesItemsFeatureActions';
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksFeaturesItemsFeature = {
  __typename?: 'PageBlocksFeaturesItemsFeature';
  headline?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  media?: Maybe<PageBlocksFeaturesItemsFeatureMedia>;
  actions?: Maybe<Array<Maybe<PageBlocksFeaturesItemsFeatureActions>>>;
};

export type PageBlocksFeaturesItems = PageBlocksFeaturesItemsFeature;

export type PageBlocksFeatures = {
  __typename?: 'PageBlocksFeatures';
  items?: Maybe<Array<Maybe<PageBlocksFeaturesItems>>>;
};

export type PageBlocksFlyingActions = {
  __typename?: 'PageBlocksFlyingActions';
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksFlying = {
  __typename?: 'PageBlocksFlying';
  headline?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  actions?: Maybe<Array<Maybe<PageBlocksFlyingActions>>>;
};

export type PageBlocksPricingTierOneActions = {
  __typename?: 'PageBlocksPricingTierOneActions';
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksPricingTierOne = {
  __typename?: 'PageBlocksPricingTierOne';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  large?: Maybe<Scalars['Boolean']>;
  actions?: Maybe<Array<Maybe<PageBlocksPricingTierOneActions>>>;
};

export type PageBlocksPricingTierTwoActions = {
  __typename?: 'PageBlocksPricingTierTwoActions';
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksPricingTierTwo = {
  __typename?: 'PageBlocksPricingTierTwo';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  large?: Maybe<Scalars['Boolean']>;
  actions?: Maybe<Array<Maybe<PageBlocksPricingTierTwoActions>>>;
};

export type PageBlocksPricingTierThreeActions = {
  __typename?: 'PageBlocksPricingTierThreeActions';
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksPricingTierThree = {
  __typename?: 'PageBlocksPricingTierThree';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  large?: Maybe<Scalars['Boolean']>;
  actions?: Maybe<Array<Maybe<PageBlocksPricingTierThreeActions>>>;
};

export type PageBlocksPricingTierFourActions = {
  __typename?: 'PageBlocksPricingTierFourActions';
  label?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['Boolean']>;
  variant?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksPricingTierFour = {
  __typename?: 'PageBlocksPricingTierFour';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  large?: Maybe<Scalars['Boolean']>;
  actions?: Maybe<Array<Maybe<PageBlocksPricingTierFourActions>>>;
};

export type PageBlocksPricing = {
  __typename?: 'PageBlocksPricing';
  intro?: Maybe<Scalars['JSON']>;
  tierOne?: Maybe<PageBlocksPricingTierOne>;
  segue?: Maybe<Scalars['JSON']>;
  tierTwo?: Maybe<PageBlocksPricingTierTwo>;
  tierThree?: Maybe<PageBlocksPricingTierThree>;
  tierFour?: Maybe<PageBlocksPricingTierFour>;
};

export type PageBlocksFaqQuestions = {
  __typename?: 'PageBlocksFaqQuestions';
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['JSON']>;
};

export type PageBlocksFaq = {
  __typename?: 'PageBlocksFaq';
  title?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['JSON']>;
  questions?: Maybe<Array<Maybe<PageBlocksFaqQuestions>>>;
  color?: Maybe<Scalars['String']>;
};

export type PageBlocksContentOptions = {
  __typename?: 'PageBlocksContentOptions';
  narrow?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
};

export type PageBlocksContent = {
  __typename?: 'PageBlocksContent';
  options?: Maybe<PageBlocksContentOptions>;
  content?: Maybe<Scalars['JSON']>;
};

export type PageBlocksColumnsOptions = {
  __typename?: 'PageBlocksColumnsOptions';
  columns?: Maybe<Scalars['String']>;
  narrow?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  align?: Maybe<Scalars['String']>;
};

export type PageBlocksColumns = {
  __typename?: 'PageBlocksColumns';
  options?: Maybe<PageBlocksColumnsOptions>;
  columnOne?: Maybe<Scalars['JSON']>;
  columnTwo?: Maybe<Scalars['JSON']>;
};

export type PageBlocks = PageBlocksHero | PageBlocksFeatures | PageBlocksFlying | PageBlocksPricing | PageBlocksFaq | PageBlocksContent | PageBlocksColumns;

export type Page = {
  __typename?: 'Page';
  seo?: Maybe<PageSeo>;
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
};

export type PageDocument = Node & Document & {
  __typename?: 'PageDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Page;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PageDocument>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePageDocument: PageDocument;
  createPageDocument: PageDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePageDocumentArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationCreatePageDocumentArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
};

export type PageSeoMutation = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type PageBlocksHeroActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksHeroMutation = {
  headline?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  actions?: InputMaybe<Array<InputMaybe<PageBlocksHeroActionsMutation>>>;
  videoSrc?: InputMaybe<Scalars['String']>;
};

export type PageBlocksFeaturesItemsFeatureMediaMutation = {
  src?: InputMaybe<Scalars['String']>;
  videoSrc?: InputMaybe<Scalars['String']>;
  cli?: InputMaybe<Scalars['Boolean']>;
};

export type PageBlocksFeaturesItemsFeatureActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksFeaturesItemsFeatureMutation = {
  headline?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<PageBlocksFeaturesItemsFeatureMediaMutation>;
  actions?: InputMaybe<Array<InputMaybe<PageBlocksFeaturesItemsFeatureActionsMutation>>>;
};

export type PageBlocksFeaturesItemsMutation = {
  feature?: InputMaybe<PageBlocksFeaturesItemsFeatureMutation>;
};

export type PageBlocksFeaturesMutation = {
  items?: InputMaybe<Array<InputMaybe<PageBlocksFeaturesItemsMutation>>>;
};

export type PageBlocksFlyingActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksFlyingMutation = {
  headline?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  actions?: InputMaybe<Array<InputMaybe<PageBlocksFlyingActionsMutation>>>;
};

export type PageBlocksPricingTierOneActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksPricingTierOneMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
  large?: InputMaybe<Scalars['Boolean']>;
  actions?: InputMaybe<Array<InputMaybe<PageBlocksPricingTierOneActionsMutation>>>;
};

export type PageBlocksPricingTierTwoActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksPricingTierTwoMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
  large?: InputMaybe<Scalars['Boolean']>;
  actions?: InputMaybe<Array<InputMaybe<PageBlocksPricingTierTwoActionsMutation>>>;
};

export type PageBlocksPricingTierThreeActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksPricingTierThreeMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
  large?: InputMaybe<Scalars['Boolean']>;
  actions?: InputMaybe<Array<InputMaybe<PageBlocksPricingTierThreeActionsMutation>>>;
};

export type PageBlocksPricingTierFourActionsMutation = {
  label?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Boolean']>;
  variant?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksPricingTierFourMutation = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
  large?: InputMaybe<Scalars['Boolean']>;
  actions?: InputMaybe<Array<InputMaybe<PageBlocksPricingTierFourActionsMutation>>>;
};

export type PageBlocksPricingMutation = {
  intro?: InputMaybe<Scalars['JSON']>;
  tierOne?: InputMaybe<PageBlocksPricingTierOneMutation>;
  segue?: InputMaybe<Scalars['JSON']>;
  tierTwo?: InputMaybe<PageBlocksPricingTierTwoMutation>;
  tierThree?: InputMaybe<PageBlocksPricingTierThreeMutation>;
  tierFour?: InputMaybe<PageBlocksPricingTierFourMutation>;
};

export type PageBlocksFaqQuestionsMutation = {
  question?: InputMaybe<Scalars['String']>;
  answer?: InputMaybe<Scalars['JSON']>;
};

export type PageBlocksFaqMutation = {
  title?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['JSON']>;
  questions?: InputMaybe<Array<InputMaybe<PageBlocksFaqQuestionsMutation>>>;
  color?: InputMaybe<Scalars['String']>;
};

export type PageBlocksContentOptionsMutation = {
  narrow?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  align?: InputMaybe<Scalars['String']>;
};

export type PageBlocksContentMutation = {
  options?: InputMaybe<PageBlocksContentOptionsMutation>;
  content?: InputMaybe<Scalars['JSON']>;
};

export type PageBlocksColumnsOptionsMutation = {
  columns?: InputMaybe<Scalars['String']>;
  narrow?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  align?: InputMaybe<Scalars['String']>;
};

export type PageBlocksColumnsMutation = {
  options?: InputMaybe<PageBlocksColumnsOptionsMutation>;
  columnOne?: InputMaybe<Scalars['JSON']>;
  columnTwo?: InputMaybe<Scalars['JSON']>;
};

export type PageBlocksMutation = {
  hero?: InputMaybe<PageBlocksHeroMutation>;
  features?: InputMaybe<PageBlocksFeaturesMutation>;
  flying?: InputMaybe<PageBlocksFlyingMutation>;
  pricing?: InputMaybe<PageBlocksPricingMutation>;
  faq?: InputMaybe<PageBlocksFaqMutation>;
  content?: InputMaybe<PageBlocksContentMutation>;
  columns?: InputMaybe<PageBlocksColumnsMutation>;
};

export type PageMutation = {
  seo?: InputMaybe<PageSeoMutation>;
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>;
};

export type PagePartsFragment = { __typename?: 'Page', seo?: { __typename: 'PageSeo', title?: string | null, description?: string | null } | null, blocks?: Array<{ __typename: 'PageBlocksHero', headline?: string | null, text?: string | null, videoSrc?: string | null, actions?: Array<{ __typename: 'PageBlocksHeroActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | { __typename: 'PageBlocksFeatures', items?: Array<{ __typename: 'PageBlocksFeaturesItemsFeature', headline?: string | null, text?: string | null, media?: { __typename: 'PageBlocksFeaturesItemsFeatureMedia', src?: string | null, videoSrc?: string | null, cli?: boolean | null } | null, actions?: Array<{ __typename: 'PageBlocksFeaturesItemsFeatureActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null> | null } | { __typename: 'PageBlocksFlying', headline?: string | null, text?: string | null, actions?: Array<{ __typename: 'PageBlocksFlyingActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | { __typename: 'PageBlocksPricing', intro?: any | null, segue?: any | null, tierOne?: { __typename: 'PageBlocksPricingTierOne', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierOneActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierTwo?: { __typename: 'PageBlocksPricingTierTwo', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierTwoActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierThree?: { __typename: 'PageBlocksPricingTierThree', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierThreeActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierFour?: { __typename: 'PageBlocksPricingTierFour', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierFourActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null } | { __typename: 'PageBlocksFaq', title?: string | null, intro?: any | null, color?: string | null, questions?: Array<{ __typename: 'PageBlocksFaqQuestions', question?: string | null, answer?: any | null } | null> | null } | { __typename: 'PageBlocksContent', content?: any | null, options?: { __typename: 'PageBlocksContentOptions', narrow?: boolean | null, color?: string | null, align?: string | null } | null } | { __typename: 'PageBlocksColumns', columnOne?: any | null, columnTwo?: any | null, options?: { __typename: 'PageBlocksColumnsOptions', columns?: string | null, narrow?: boolean | null, color?: string | null, align?: string | null } | null } | null> | null };

export type GetPageDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPageDocumentQuery = { __typename?: 'Query', getPageDocument: { __typename?: 'PageDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Page', seo?: { __typename: 'PageSeo', title?: string | null, description?: string | null } | null, blocks?: Array<{ __typename: 'PageBlocksHero', headline?: string | null, text?: string | null, videoSrc?: string | null, actions?: Array<{ __typename: 'PageBlocksHeroActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | { __typename: 'PageBlocksFeatures', items?: Array<{ __typename: 'PageBlocksFeaturesItemsFeature', headline?: string | null, text?: string | null, media?: { __typename: 'PageBlocksFeaturesItemsFeatureMedia', src?: string | null, videoSrc?: string | null, cli?: boolean | null } | null, actions?: Array<{ __typename: 'PageBlocksFeaturesItemsFeatureActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null> | null } | { __typename: 'PageBlocksFlying', headline?: string | null, text?: string | null, actions?: Array<{ __typename: 'PageBlocksFlyingActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | { __typename: 'PageBlocksPricing', intro?: any | null, segue?: any | null, tierOne?: { __typename: 'PageBlocksPricingTierOne', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierOneActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierTwo?: { __typename: 'PageBlocksPricingTierTwo', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierTwoActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierThree?: { __typename: 'PageBlocksPricingTierThree', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierThreeActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierFour?: { __typename: 'PageBlocksPricingTierFour', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierFourActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null } | { __typename: 'PageBlocksFaq', title?: string | null, intro?: any | null, color?: string | null, questions?: Array<{ __typename: 'PageBlocksFaqQuestions', question?: string | null, answer?: any | null } | null> | null } | { __typename: 'PageBlocksContent', content?: any | null, options?: { __typename: 'PageBlocksContentOptions', narrow?: boolean | null, color?: string | null, align?: string | null } | null } | { __typename: 'PageBlocksColumns', columnOne?: any | null, columnTwo?: any | null, options?: { __typename: 'PageBlocksColumnsOptions', columns?: string | null, narrow?: boolean | null, color?: string | null, align?: string | null } | null } | null> | null } } };

export type GetPageListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPageListQuery = { __typename?: 'Query', getPageList: { __typename?: 'PageConnection', totalCount: number, edges?: Array<{ __typename?: 'PageConnectionEdges', node?: { __typename?: 'PageDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Page', seo?: { __typename: 'PageSeo', title?: string | null, description?: string | null } | null, blocks?: Array<{ __typename: 'PageBlocksHero', headline?: string | null, text?: string | null, videoSrc?: string | null, actions?: Array<{ __typename: 'PageBlocksHeroActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | { __typename: 'PageBlocksFeatures', items?: Array<{ __typename: 'PageBlocksFeaturesItemsFeature', headline?: string | null, text?: string | null, media?: { __typename: 'PageBlocksFeaturesItemsFeatureMedia', src?: string | null, videoSrc?: string | null, cli?: boolean | null } | null, actions?: Array<{ __typename: 'PageBlocksFeaturesItemsFeatureActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null> | null } | { __typename: 'PageBlocksFlying', headline?: string | null, text?: string | null, actions?: Array<{ __typename: 'PageBlocksFlyingActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | { __typename: 'PageBlocksPricing', intro?: any | null, segue?: any | null, tierOne?: { __typename: 'PageBlocksPricingTierOne', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierOneActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierTwo?: { __typename: 'PageBlocksPricingTierTwo', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierTwoActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierThree?: { __typename: 'PageBlocksPricingTierThree', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierThreeActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null, tierFour?: { __typename: 'PageBlocksPricingTierFour', name?: string | null, price?: string | null, interval?: string | null, body?: any | null, large?: boolean | null, actions?: Array<{ __typename: 'PageBlocksPricingTierFourActions', label?: string | null, icon?: boolean | null, variant?: string | null, url?: string | null } | null> | null } | null } | { __typename: 'PageBlocksFaq', title?: string | null, intro?: any | null, color?: string | null, questions?: Array<{ __typename: 'PageBlocksFaqQuestions', question?: string | null, answer?: any | null } | null> | null } | { __typename: 'PageBlocksContent', content?: any | null, options?: { __typename: 'PageBlocksContentOptions', narrow?: boolean | null, color?: string | null, align?: string | null } | null } | { __typename: 'PageBlocksColumns', columnOne?: any | null, columnTwo?: any | null, options?: { __typename: 'PageBlocksColumnsOptions', columns?: string | null, narrow?: boolean | null, color?: string | null, align?: string | null } | null } | null> | null } } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  seo {
    __typename
    title
    description
  }
  blocks {
    __typename
    ... on PageBlocksHero {
      headline
      text
      actions {
        __typename
        label
        icon
        variant
        url
      }
      videoSrc
    }
    ... on PageBlocksFeatures {
      items {
        __typename
        ... on PageBlocksFeaturesItemsFeature {
          headline
          text
          media {
            __typename
            src
            videoSrc
            cli
          }
          actions {
            __typename
            label
            icon
            variant
            url
          }
        }
      }
    }
    ... on PageBlocksFlying {
      headline
      text
      actions {
        __typename
        label
        icon
        variant
        url
      }
    }
    ... on PageBlocksPricing {
      intro
      tierOne {
        __typename
        name
        price
        interval
        body
        large
        actions {
          __typename
          label
          icon
          variant
          url
        }
      }
      segue
      tierTwo {
        __typename
        name
        price
        interval
        body
        large
        actions {
          __typename
          label
          icon
          variant
          url
        }
      }
      tierThree {
        __typename
        name
        price
        interval
        body
        large
        actions {
          __typename
          label
          icon
          variant
          url
        }
      }
      tierFour {
        __typename
        name
        price
        interval
        body
        large
        actions {
          __typename
          label
          icon
          variant
          url
        }
      }
    }
    ... on PageBlocksFaq {
      title
      intro
      questions {
        __typename
        question
        answer
      }
      color
    }
    ... on PageBlocksContent {
      options {
        __typename
        narrow
        color
        align
      }
      content
    }
    ... on PageBlocksColumns {
      options {
        __typename
        columns
        narrow
        color
        align
      }
      columnOne
      columnTwo
    }
  }
}
    `;
export const GetPageDocumentDocument = gql`
    query getPageDocument($relativePath: String!) {
  getPageDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...PageParts
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const GetPageListDocument = gql`
    query getPageList {
  getPageList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PageParts
        }
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getPageDocument(variables: GetPageDocumentQueryVariables, options?: C): Promise<{data: GetPageDocumentQuery, variables: GetPageDocumentQueryVariables, query: string}> {
        return requester<{data: GetPageDocumentQuery, variables: GetPageDocumentQueryVariables, query: string}, GetPageDocumentQueryVariables>(GetPageDocumentDocument, variables, options);
      },
    getPageList(variables?: GetPageListQueryVariables, options?: C): Promise<{data: GetPageListQuery, variables: GetPageListQueryVariables, query: string}> {
        return requester<{data: GetPageListQuery, variables: GetPageListQueryVariables, query: string}, GetPageListQueryVariables>(GetPageListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)
