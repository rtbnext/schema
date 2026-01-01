import { TChange } from '../abstract/assets';
import { TGender } from '../abstract/const';
import { TMetaData } from '../abstract/generic';

export type TGenericStats = TChange & {
    date: string;
    count: number;
    total: number;
    woman: number;
    quota: number;
}

export type TStatsList< T extends string > = { [ K in T ]?: number };

export type TProfileStats = TMetaData & {}

export type TAgePyramid = Record< TGender, {
    decades: TStatsList< string >;
    count: number;
    max: number;
    min: number;
    mean: number;
} >;

export type TWealthStats = TMetaData & {}

export type TScatter = TMetaData & {
    items: TScatterItem[];
    count: number;
}

export interface TScatterItem {
    readonly uri: string;
    name: string;
    gender: TGender;
    age: number;
    networth: number;
}
