import type { Expand } from 'devtypes/types/util';
import type { TAnnual, TAsset, TPerformance, TRanking, TRealtime } from '../base/assets';
import type { TGender, TIndustry, TMaritalStatus } from '../base/const';
import type { TEducation, TImage, TIndex, TLocation, TMetaData, TOrganization, TRelation, TSelfMade, TWiki } from '../base/generic';


export type TProfileIndexItem = Expand< TIndex & {
  aliases: string[];
  desc?: string;
  image?: string;
} >;

export type TProfileIndex = Map< string, TProfileIndexItem >;

export type TProfileFlags = {
  deceased: boolean;
  family: boolean;
  dropOff: boolean;
  embargo: boolean;
};

export type TProfileName = {
  fullName: string;
  shortName: string;
  lastName: string;
  firstName: string;
};

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
  selfMade: TSelfMade;
  philanthropyScore?: number;
  organization?: TOrganization;
};

export type TProfileBio = {
  cv: string[];
  quotes: string[];
  facts: string[];
};

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

export type TProfileHistoryItem = [
  date: string,
  rank: number,
  networth: number,
  change: number,
  percent: number
];

export type TProfileHistory = TProfileHistoryItem[];

export type TProfileMetaData = TMetaData< {
  lastLookup: string;
} >;

export type TProfile = Expand< TProfileMetaData & {
  data: TProfileData;
  history: TProfileHistory;
} >;
