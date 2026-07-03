/**
 * RTBNext Schema V2
 * List
 * 
 * Type definitions for ranking lists, snapshots, list items,
 * and collection indexes.
 */

import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../base/assets';
import type { TChangeFlag, TGender, TIndustry, TSelfMadeRank } from '../base/const';
import type { TIndex, TMetaData, TSnapshot } from '../base/generic';
import type { TGenericStats } from './stats';


/**
 * List index entry.
 */
export type TListIndexItem = Expand< TIndex & {
  shortName: string;
  desc: string;
  columns: string[];
  filters: string[];
} >;

/**
 * List index.
 */
export type TListIndex = Map< string, TListIndexItem >;

/**
 * Base list item.
 */
export type TListItem = {
  uri: string;
  name: string;
  rank: number;
};

/**
 * Snapshot of a ranking list.
 * 
 * @template T List item type.
 */
export type TListSnapshotData< T extends TListItem = TListItem > = Expand< TSnapshot & {
  items: T[];
  count: number;
  stats: TGenericStats;
} >;

/**
 * Ranking list snapshot document.
 * 
 * @template T List item type.
 */
export type TListSnapshot< T extends TListItem = TListItem > = Expand< TMetaData & TListSnapshotData< T > >;

/**
 * Collection of ranking list snapshots.
 * 
 * @template T Snapshot type.
 */
export type TList< T extends TListSnapshot = TListSnapshot > = Record< string, T >;

/**
 * Collection of all ranking lists and their index.
 */
export type TListCollection = {
  list: Record< string, TList >;
  index: TListIndex;
};

/**
 * Base person ranking entry.
 */
export type TPersonListItem = Expand< TListItem & {
  networth: number;
  industry: TIndustry;
  source: string[];
  gender?: TGender;
  age?: number;
  citizenship?: string;
} >;

/**
 * RTB ranking entry.
 */
export type TRTBListItem = Expand< TPersonListItem & TChange & {
  flag: TChangeFlag;
  rankDiff?: number;
} >;

/**
 * RTB ranking snapshot document.
 */
export type TRTBListSnapshot = TListSnapshot< TRTBListItem >;

/**
 * Billionaires ranking entry.
 */
export type TBillionairesListItem = Expand< TPersonListItem & {
  selfMadeRank?: TSelfMadeRank;
  philanthropyScore?: number;
} >;

/**
 * Forbes 400 ranking entry.
 */
export type T400ListItem = TBillionairesListItem;
