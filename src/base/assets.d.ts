/**
 * RTBNext Schema V2
 * Asset Types
 *
 * Shared type definitions for assets, net worth, rankings,
 * performance metrics, and historical financial data.
 */

import type { Expand } from 'devtypes/types/util';
import type { TAssetType, TChangeFlag } from './const';


/**
 * Market information for a publicly traded asset.
 */
export type TAssetInfo = {
  exchange: string;
  ticker: string;
  shares?: number;
  price: number;
  currency: string;
  exRate: number;
};

/**
 * Asset entry.
 */
export type TAsset = {
  type: TAssetType;
  label: string;
  value?: number;
  info?: TAssetInfo;
};

/**
 * Absolute and relative change.
 */
export type TChangeItem = {
  value: number;
  percent: number;
};

/**
 * Short-term change information.
 */
export type TChange = {
  today?: TChangeItem;
  ytd?: TChangeItem;
};

/**
 * Historical net worth data point.
 */
export type TDataPoint = {
  date: string;
  networth: number;
  rank?: number;
};

/**
 * Historical high and low values.
 */
export type TExtrema = {
  high?: TDataPoint;
  low?: TDataPoint;
};

/**
 * Performance over predefined time periods.
 */
export type TReturns = {
  week?: TChangeItem;
  month?: TChangeItem;
  quarter?: TChangeItem;
  halfYear?: TChangeItem;
  year?: TChangeItem;
  twoYear?: TChangeItem;
  fiveYear?: TChangeItem;
};

/**
 * Historical performance metrics.
 */
export type TPerformance = {
  extrema?: TExtrema;
  returns?: TReturns;
};

/**
 * Ranking data for a specific date.
 */
export type TRankingItem = {
  date: string;
  rank?: number;
  networth?: number;
  prev?: string;
  next?: string;
};

/**
 * Ranking entry with optional history.
 */
export type TRanking = Expand< TRankingItem & {
  list: string;
  name: string;
  history?: TRankingItem[];
} >;

/**
 * Real-time ranking and change information.
 */
export type TRealtime = Expand< TRankingItem & TChange >;

/**
 * Annual statistical record.
 */
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

/**
 * Annual ranking and net worth statistics.
 */
export type TAnnual = {
  year: number,
  rank?: TAnnualRecord;
  networth?: TAnnualRecord;
};
