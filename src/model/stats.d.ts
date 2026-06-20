import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
import type { TChildrenGroup, TGender, TIndustry, TMaritalStatus, TPercentiles, TWealthSpread } from '../base/const';
import type { TMetaData } from '../base/generic';


export type TGenericStats = Expand< TChange & {
  date: string;
  count: number;
  total: number;
  woman: number;
  quota: number;
} >;

export type TGlobalStatsData = Expand< TGenericStats & {
  stats: {
    profiles: number;
    days: number;
  };
} >;

export type TGlobalStats = Expand< TMetaData & TGlobalStatsData >;

export type TDBStatsData = {
  files: number;
  size: number;
};

export type TDBStats = Expand< TMetaData & TDBStatsData >;

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
  index: Expand< TMetaData & {
    items: { [ K in T ]: TStatsGroupItem };
  } >;
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

export type TProfileStatsData = {
  gender: TStatsList< TGender >;
  maritalStatus: TStatsList< TMaritalStatus >;
  agePyramid: TAgePyramid;
  children: {
    full: TStatsList< string >;
    short: TStatsList< TChildrenGroup >;
  };
  selfMade: TStatsList< string >;
  philanthropyScore: TStatsList< string >;
};

export type TProfileStats = Expand< TMetaData & TProfileStatsData >;

export type TWealthStatsData = {
  percentiles: TStatsList< TPercentiles >;
  quartiles: [ number, number, number ];
  total: number;
  max: number;
  min: number;
  mean: number;
  median: number;
  stdDev: number;
  decades: TStatsList< string >;
  gender: TStatsList< TGender >;
  spread: TStatsList< TWealthSpread >;
};

export type TWealthStats = Expand< TMetaData & TWealthStatsData >;

export type TScatterItem = {
  readonly uri: string;
  name: string;
  gender: TGender;
  age: number;
  networth: number;
};

export type TScatterData = {
  items: TScatterItem[];
  count: number;
};

export type TScatter = Expand< TMetaData & TScatterData >;

export type TStatsCollection = {
  global: TGlobalStats;
  history: THistory;
  groups: TGroupedStats;
  profile: TProfileStats;
  wealth: TWealthStats;
  scatter: TScatter;
};
