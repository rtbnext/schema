import type { Expand } from 'devtypes/types/util';
import type { TChange } from '../../_old/src/abstract/assets';

export type TGenericStats = Expand<
  TChange &
  {
    date: string;
    count: number;
    total: number;
    woman: number;
    quota: number;
  }
>;
