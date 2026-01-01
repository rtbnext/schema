import { TChange } from '../abstract/assets';
import { TChildrenGroup, TGender, TMaritalStatus } from '../abstract/const';
import { TMetaData } from '../abstract/generic';

export type TGenericStats = TChange & {
    date: string;
    count: number;
    total: number;
    woman: number;
    quota: number;
}

export type TStatsList< T extends string > = { [ K in T ]?: number };

export type TProfileStats = TMetaData & {
    gender: TStatsList< TGender >;
    maritalStatus: TStatsList< TMaritalStatus >;
    agePyramid: TAgePyramid;
    children: {
        full: TStatsList< string >;
        short: TStatsList< TChildrenGroup >;
    };
    selfMade: TStatsList< string >;
    philanthropyScore: TStatsList< string >;
}

export type TAgePyramid = Record< TGender, TAgePyramidGroup >;

export interface TAgePyramidGroup {
    count: number;
    decades: TStatsList< string >;
    max: number;
    min: number;
    mean: number;
}

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
