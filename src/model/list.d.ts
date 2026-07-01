import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
import type { TChangeFlag, TGender, TIndustry, TSelfMadeRank } from '../base/const';
import type { TIndex, TMetaData, TSnapshot } from '../base/generic';
import type { TGenericStats } from './stats';


export type TListIndexItem = Expand< TIndex & {
  shortName: string;
  desc: string;
  date: string;
  count: number;
  columns: string[];
  filters: string[];
} >;

export type TListIndex = Map< string, TListIndexItem >;

export type TListItem = {
  uri: string;
  name: string;
  rank: number;
};

export type TListSnapshotData< T extends TListItem = TListItem > = Expand< TSnapshot & {
  items: T[];
  count: number;
  stats: TGenericStats;
} >;

export type TListSnapshot< T extends TListItem = TListItem > = Expand< TMetaData & TListSnapshotData< T > >;

export type TList< T extends TListSnapshot = TListSnapshot > = Record< string, T >;

export type TListCollection = {
  list: Record< string, TList >;
  index: TListIndex;
};

export type TPersonListItem = Expand< TListItem & {
  networth: number;
  industry: TIndustry;
  source: string[];
  gender?: TGender;
  age?: number;
  citizenship?: string;
  selfMadeRank?: TSelfMadeRank;
  philanthropyScore?: number;
} >;

export type TRTBListItem = Expand< TPersonListItem & TChange & {
  flag: TChangeFlag;
  rankDiff?: number;
} >;

export type TRTBListSnapshot = TListSnapshot< TRTBListItem >;
