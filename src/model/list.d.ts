import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
import type { TGender, TIndustry } from '../base/const';
import type { TIndex, TMetaData, TSnapshot } from '../base/generic';
import type { TGenericStats } from './stats';

export type TListIndexItem = Expand<
  TIndex &
  {
    shortName: string;
    desc: string;
    date: string;
    count: number;
    columns: string[];
    filters: string[];
  }
>;

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

export type TListSnapshot = Expand<
  TMetaData &
  TSnapshot &
  {
    items: TListItem[];
    count: number;
    stats: TGenericStats;
  }
>;

export type TList = Record< string, TListSnapshot >;

export type TListCollection = {
  list: Record< string, TList >;
  index: TListIndex;
};

export type TRTBListItem = Expand<
  TListItem &
  TChange &
  {
    industry: TIndustry;
    source: string[];
  }
>;

export type TRTBListSnapshot = Expand<
  Omit< TListSnapshot, 'items' > &
  {
    items: TRTBListItem[];
  }
>;
