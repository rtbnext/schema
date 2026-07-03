/**
 * RTBNext Schema V2
 * Mover
 * 
 * Type definitions for movers, including the largest
 * gains and losses over predefined time periods.
 */

import type { Expand } from 'devtypes/types/util';
import type { TChangeItem } from '../base/assets';
import type { TMetaData, TSnapshot } from '../base/generic';


/**
 * Mover entry.
 */
export type TMoverItem = {
  readonly uri: string;
  name: string;
  value: number;
};

/**
 * Winners and losers for a metric.
 */
export type TMoverEntry = {
  winner: TMoverItem[];
  loser: TMoverItem[];
};

/**
 * Mover statistics for a time period.
 */
export type TMoverBucket = {
  total: TChangeItem,
  networth: TMoverEntry;
  percent: TMoverEntry;
};

/**
 * Mover snapshot.
 */
export type TMoverData = Expand< TSnapshot & {
  today: TMoverBucket;
  ytd: TMoverBucket;
} >;

/**
 * Mover document.
 */
export type TMover = Expand< TMetaData & TMoverData >;
