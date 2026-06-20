import type { Expand } from 'devtypes/types/util';
import type { TAssetType, TChangeFlag } from './const';


export type TAssetInfo = {
  exchange: string;
  ticker: string;
  shares?: number;
  price: number;
  currency: string;
  exRate: number;
};

export type TAsset = {
  type: TAssetType;
  label: string;
  value?: number;
  info?: TAssetInfo;
};

export type TChangeItem = {
  value: number;
  percent: number;
};

export type TChange = {
  today?: TChangeItem;
  ytd?: TChangeItem;
};

export type TDataPoint = {
  date: string;
  networth: number;
  rank?: number;
};

export type TExtrema = {
  high?: TDataPoint;
  low?: TDataPoint;
};

export type TReturns = {
  week?: TChangeItem;
  month?: TChangeItem;
  quarter?: TChangeItem;
  halfYear?: TChangeItem;
  year?: TChangeItem;
  twoYear?: TChangeItem;
  fiveYear?: TChangeItem;
};

export type TPerformance = {
  extrema?: TExtrema;
  returns?: TReturns;
};

export type TRankingItem = {
  date: string;
  rank?: number;
  networth?: number;
  prev?: string;
  next?: string;
};

export type TRanking = Expand< TRankingItem & {
  list: string;
  name: string;
  history?: TRankingItem[];
} >;

export type TRealtime = Expand< TRankingItem & TChange >;

export type TAnnualRecord = {
  first: number;
  last: number;
  diff: number;
  flag: TChangeFlag;
  mean: number;
  median: number;
  max: number;
  min: number;
  range: number;
  stdDev: number;
};

export type TAnnual = {
  year: number,
  rank?: TAnnualRecord;
  networth?: TAnnualRecord;
};
