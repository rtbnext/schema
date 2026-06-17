import type { Expand } from 'devtypes/types/util';
import type { TMetaData } from '../base/generic';

export type TFilterItem = {
  readonly uri: string;
  name: string;
  value: unknown;
};

export type TFilter = Expand< TMetaData & {
  items: TFilterItem[];
  count: number;
} >;
