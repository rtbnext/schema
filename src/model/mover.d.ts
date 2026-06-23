import type { Expand } from 'devtypes/types/util';
import type { TChangeItem } from '../base/assets';
import type { TMetaData, TSnapshot } from '../base/generic';


export type TMoverItem = {
  readonly uri: string;
  name: string;
  value: number;
};

export type TMoverEntry = {
  winner: TMoverItem[];
  loser: TMoverItem[];
};

export type TMoverBucket = {
  total: TChangeItem,
  networth: TMoverEntry;
  percent: TMoverEntry;
};

export type TMoverData = Expand< TSnapshot & {
  today: TMoverBucket;
  ytd: TMoverBucket;
} >;

export type TMover = Expand< TMetaData & TMoverData >;
