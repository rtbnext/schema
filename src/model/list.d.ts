import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
import type { TGender, TIndustry } from '../base/const';
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
  networth: number;
  gender?: TGender;
  age?: number;
  citizenship?: string;
};

export type TListSnapshot< T extends TListItem = TListItem > = Expand< TMetaData & TSnapshot & {
  items: T[];
  count: number;
  stats: TGenericStats;
} >;

export type TList< T extends TListSnapshot = TListSnapshot > = Record< string, T >;

export type TListCollection = {
  list: Record< string, TList >;
  index: TListIndex;
};

export type TRTBListItem = Expand< TListItem & TChange & {
  industry: TIndustry;
  source: string[];
} >;

export type TRTBListSnapshot = TListSnapshot< TRTBListItem >;
