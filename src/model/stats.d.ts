import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
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
