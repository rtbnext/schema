/**
 * RTBNext Schema V2
 * Profile
 * 
 * Type definitions for profile records representing individuals,
 * including personal information, financial data, relationships,
 * media, and historical statistics.
 */

import type { Expand } from 'devtypes/types/util';
import type { TAnnual, TAsset, TPerformance, TRanking, TRealtime } from '../base/assets';
import type { TGender, TIndustry, TMaritalStatus } from '../base/const';
import type { TEducation, TImage, TIndex, TLocation, TMetaData, TOrganization, TRelation, TSelfMade, TWiki } from '../base/generic';


/**
 * Profile search index entry.
 */
export type TProfileIndexItem = Expand< TIndex & {
  aliases: string[];
  desc?: string;
  image?: string;
} >;

/**
 * Profile search index.
 */
export type TProfileIndex = Map< string, TProfileIndexItem >;

/**
 * Profile status flags.
 */
export type TProfileFlags = {
  deceased?: boolean;
  family?: boolean;
  dropOff?: boolean;
  embargo?: boolean;
};

/**
 * Person name information.
 */
export type TProfileName = {
  fullName: string;
  shortName: string;
  lastName: string;
  firstName: string;
};

/**
 * General profile information.
 */
export type TProfileInfo = {
  flags: TProfileFlags;
  name: TProfileName;
  gender: TGender;
  birthDate?: string;
  birthPlace?: TLocation;
  citizenship?: string;
  residence?: TLocation;
  maritalStatus?: TMaritalStatus;
  children?: number;
  education?: TEducation[];
  industry: TIndustry;
  source: string[];
  selfMade?: TSelfMade;
  philanthropyScore?: number;
  organization?: TOrganization;
};

/**
 * Biographical profile content.
 */
export type TProfileBio = {
  cv: string[];
  quotes: string[];
  facts: string[];
};

/**
 * Complete profile data.
 */
export type TProfileData = {
  readonly id: string;
  uri: string;
  info: TProfileInfo;
  bio: TProfileBio;
  related: TRelation[];
  media: TImage[];
  realtime?: TRealtime;
  performance?: TPerformance;
  ranking: TRanking[];
  annual: TAnnual[];
  assets: TAsset[];
  wiki?: TWiki;
};

/**
 * Historical profile record.
 */
export type TProfileHistoryItem = [
  date: string,
  rank: number,
  networth: number,
  change: number,
  percent: number
];

/**
 * Historical profile data.
 */
export type TProfileHistory = TProfileHistoryItem[];

/**
 * Profile document metadata.
 */
export type TProfileMetaData = TMetaData< {
  lastLookup?: string;
} >;

/**
 * Complete profile document.
 */
export type TProfile = Expand< TProfileMetaData & {
  data: TProfileData;
  history: TProfileHistory;
} >;
