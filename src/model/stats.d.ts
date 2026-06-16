import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
import type { TChildrenGroup, TGender, TIndustry, TMaritalStatus } from '../base/const';
import type { TMetaData } from '../base/generic';

export type TGenericStats = Expand< TChange & {
  date: string;
  count: number;
  total: number;
  woman: number;
  quota: number;
} >;

export type TGlobalStats = Expand< TMetaData & TGenericStats & {
  stats: {
    profiles: number;
    days: number;
  };
} >;

export type TDBStats = Expand< TMetaData & {
  files: number;
  size: number;
} >;

export type THistoryItem = readonly [
  date: string,
  count: number,
  total: number,
  woman: number,
  quota: number,
  change: number,
  percent: number
];

export type THistory = THistoryItem[];

export type TStatsGroupItem = Expand< TGenericStats & {
  first: {
    readonly uri: string;
    name: string;
    rank: number;
    networth: number;
  };
} >;

export type TStatsGroup< T extends string > = {
  index: TMetaData & { items: { [ K in T ]: TStatsGroupItem } };
  history: { [ K in T ]: THistory };
};

export type TGroupedStats = {
  industry: TStatsGroup< TIndustry >;
  citizenship: TStatsGroup< string >;
};

export type TStatsList< T extends string > = { [ K in T ]?: number };

export type TAgePyramidGroup = {
  count: number;
  decades: TStatsList< string >;
  max: number;
  min: number;
  mean: number;
};

export type TAgePyramid = Record< TGender, TAgePyramidGroup >;

export type TProfileStats = Expand< TMetaData & {
  gender: TStatsList< TGender >;
  maritalStatus: TStatsList< TMaritalStatus >;
  agePyramid: TAgePyramid;
  children: {
    full: TStatsList< string >;
    short: TStatsList< TChildrenGroup >;
  };
  selfMade: TStatsList< string >;
  philanthropyScore: TStatsList< string >;
} >;
