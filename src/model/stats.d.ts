/**
 * RTBNext Schema V2
 * Stats
 * 
 * Type definitions for statistical data, grouped statistics,
 * historical trends, demographic distributions, and wealth analysis.
 */

import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
import type { TChangeFlag, TChildrenGroup, TGender, TIndustry, TMaritalStatus, TPercentile, TWealthSpread } from '../base/const';
import type { TMetaData } from '../base/generic';


/**
 * Generic statistical summary.
 */
export type TGenericStats = Expand< TChange & {
  date: string;
  count: number;
  total: number;
  woman: number;
  quota: number;
} >;

/**
 * Global statistics data.
 */
export type TGlobalStatsData = Expand< TGenericStats & {
  stats: {
    profiles: number;
    days: number;
  };
} >;

/**
 * Global statistics document.
 */
export type TGlobalStats = Expand< TMetaData & TGlobalStatsData >;

/**
 * Database statistics data.
 */
export type TDBStatsData = {
  files: number;
  size: number;
};

/**
 * Database statistics document.
 */
export type TDBStats = Expand< TMetaData & TDBStatsData >;

/**
 * Historical statistics entry.
 */
export type THistoryItem = [
  date: string,
  count: number,
  total: number,
  woman: number,
  quota: number,
  change: number,
  percent: number
];

/**
 * Historical statistics.
 */
export type THistory = THistoryItem[];

/**
 * Statistics for a grouped category.
 */
export type TStatsGroupItem = Expand< TGenericStats & {
  first: {
    readonly uri: string;
    name: string;
    rank: number;
    networth: number;
  };
} >;

/**
 * Grouped statistics.
 * 
 * @template T Group identifier type.
 */
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
  percentiles: TStatsList< TPercentile >;
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

export type TTop10Item = {
  readonly uri: string;
  rank: number;
  networth: number;
  flag: TChangeFlag;
};

export type TTop10List = TTop10Item[];

export type TTop10Data = Record< string, TTop10List >;

export type TTop10 = Expand< TMetaData & {
  entries: TTop10Data;
} >;

export type TStatsCollection = {
  global: TGlobalStats;
  history: THistory;
  groups: TGroupedStats;
  profile: TProfileStats;
  scatter: TScatter;
  top10: TTop10;
  wealth: TWealthStats;
};
