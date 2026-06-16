import type { Expand } from 'devtypes/types/util';
import type { TChangeItem } from '../base/assets';
import type { TMetaData, TSnapshot } from '../base/generic';

export type TMoverEntry = {
  readonly uri: string;
  name: string;
  value: number;
};

export type TMoverSubject = {
  winner: TMoverEntry[];
  loser: TMoverEntry[];
};

export type TMoverItem = {
  total: TChangeItem,
  networth: TMoverSubject;
  percent: TMoverSubject;
};

export type TMover = Expand< TMetaData & TSnapshot & {
  today: TMoverItem;
  ytd: TMoverItem;
} >;
