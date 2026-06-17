import type { Expand } from 'devtypes/types/util';
import type { TRelationType, TSelfMadeRank } from './const';

export type TMetaData< T extends Record< string, any > = {} > = {
  $metadata: Expand< {
    schemaVersion: 2;
    lastModified: string;
  } & T >;
};

export type TIndex = {
  readonly uri: string;
  name: string;
  text: string;
};

export type TSnapshot = {
  readonly date: string;
};

export type TLocation = {
  country: string;
  state?: string;
  city?: string;
};

export type TEducation = {
  school: string;
  degree?: string;
};

export type TOrganization = {
  name: string;
  title?: string;
};

export type TSelfMade = {
  type: string;
  is: boolean;
  rank?: TSelfMadeRank;
};

export type TRelation = {
  type: TRelationType;
  name: string;
  relation?: string;
  uri?: string;
};

export type TImage = {
  url: string;
  credits: string;
  file: string;
  thumb?: string;
  caption?: string;
  desc?: string;
  date?: string;
};

export type TWiki = {
  uri: string;
  pageId: number;
  refId: number;
  confidence: number;
  name: string;
  lastModified: string;
  summary: string[];
  sortKey?: string;
  wikidata?: string;
  desc?: string;
  image?: TImage;
};
