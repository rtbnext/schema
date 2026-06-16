import type { Expand } from 'devtypes/types/util';
import type { TAnnual, TAsset, TPerformance, TRanking, TRealtime } from '../base/assets';
import type { TGender, TIndustry, TMaritalStatus } from '../base/const';
import type * as Generic from '../base/generic';

export type TProfileInfo = {
  deceased: boolean;
  family: boolean;
  dropOff: boolean;
  embargo?: boolean;
  name: string;
  shortName: string;
  lastName: string;
  firstName: string;
  gender: TGender;
  birthDate?: string;
  birthPlace?: Generic.TLocation;
  citizenship?: string;
  residence?: Generic.TLocation;
  maritalStatus?: TMaritalStatus;
  children?: number;
  education?: Generic.TEducation[];
  industry: TIndustry;
  source: string[];
  selfMade: Generic.TSelfMade;
  philanthropyScore?: number;
  organization?: Generic.TOrganization;
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
  related: Generic.TRelation[];
  media: Generic.TImage[];
  realtime?: TRealtime;
  performance?: TPerformance;
  ranking: TRanking[];
  annual: TAnnual[];
  assets: TAsset[];
  wiki?: Generic.TWiki;
};

export type TProfileHistoryItem = [
  date: string,
  rank: number,
  networth: number,
  change: number,
  percent: number
];

export type TProfileHistory = TProfileHistoryItem[];

export type TProfile = Expand<
  Generic.TMetaData &
  {
    data: TProfileData;
    history: TProfileHistory;
  }
>;
