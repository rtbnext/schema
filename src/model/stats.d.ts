import { TChange } from '../abstract/assets';
import { TMetaData } from '../abstract/generic';

export type TGenericStats = TChange & {
    date: string;
    count: number;
    total: number;
    woman: number;
    quota: number;
}

export type TProfileStats = TMetaData & {}

export type TWealthStats = TMetaData & {}

export type TScatter = TMetaData & {}
