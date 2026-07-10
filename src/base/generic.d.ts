/**
 * RTBNext Schema V2
 * Generic Types
 * 
 * Shared base type definitions used throughout the RTBNext schema.
 * These generic building blocks are reused by multiple schema objects
 * to provide a consistent and extensible data model.
 */

import type { Expand } from 'devtypes/types/util';
import type { TRelationType, TSelfMadeRank } from './const';


/**
 * Base metadata attached to every schema document.
 * 
 * @template T Additional metadata fields.
 */
export type TMetaData< T extends Record< string, unknown > = {} > = {
  $metadata: Expand< {
    schemaVersion: 2;
    generator: `rtbnext/${ string }`;
    lastModified: string;
  } & T >;
};

/**
 * Search index entry.
 */
export type TIndex = {
  readonly uri: string;
  name: string;
  text: string;
};

/**
 * Snapshot reference.
 */
export type TSnapshot = {
  readonly date: string;
};

/**
 * Snapshot index document.
 */
export type TSnapshotIndex = Expand< TMetaData & {
  dates: string[];
  latest?: string;
} >;

/**
 * Geographic location.
 */
export type TLocation = {
  country: string;
  state?: string;
  city?: string;
};

/**
 * Educational background.
 */
export type TEducation = {
  school: string;
  degree?: string;
};

/**
 * Organization affiliation.
 */
export type TOrganization = {
  name: string;
  title?: string;
};

/**
 * Self-made classification.
 */
export type TSelfMade = {
  type?: string;
  is: boolean;
  rank?: TSelfMadeRank;
};

/**
 * Relationship to another entity.
 */
export type TRelation = {
  type: TRelationType;
  name: string;
  relation?: string;
  uri?: string;
};

/**
 * Image metadata.
 */
export type TImage = {
  url: string;
  credits: string;
  file: string;
  thumb?: string;
  caption?: string;
  desc?: string;
  date?: string;
};

/**
 * Wikipedia reference.
 */
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
