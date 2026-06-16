import type { Expand } from 'devtypes/types/util';
import type { TIndex } from '../../_old/src/abstract/generic';

export type TListIndexItem = Expand<
  TIndex &
  {
    shortName: string;
    desc: string;
    date: string;
    count: number;
    columns: string[];
    filters: string[];
  }
>;

export type TListIndex = Map< string, TListIndexItem >;
