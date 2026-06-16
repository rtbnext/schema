import type { Expand } from 'devtypes/types/util';
import type { TIndex, TMetaData, TSnapshot } from '../../_old/src/abstract/generic';
import type { TGender } from '../../_old/src/abstract/const';

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
