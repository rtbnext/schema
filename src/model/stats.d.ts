import { TChange } from '../abstract/assets';
import { TChildrenGroup, TGender, TIndustry, TMaritalStatus, TPercentiles, TWealthSpread } from '../abstract/const';
import { TMetaData } from '../abstract/generic';

export type TGenericStats = TChange & {
    date: string;
    count: number;
    total: number;
    woman: number;
    quota: number;
}

export type THistory = THistoryItem[];

export type THistoryItem = [ string, number, number, number, number, number, number ];

export interface TGroupedStats {
    industry: TStatsGroup< TIndustry >;
    citizenship: TStatsGroup< string >;
}

export interface TStatsGroup< T extends string > {
    index: TMetaData & { [ K in T ]: TStatsGroupItem };
    history: { [ K in T ]: THistory };
}

export type TStatsGroupItem = TGenericStats & {
    first: {
        readonly uri: string;
        name: string;
        rank: number;
        networth: number;
    };
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

export type TWealthStats = TMetaData & {
    percentiles: TStatsList< TPercentiles >;
    quartiles: [ number, number, number ];
    total: number;
    max: number;
    min: number;
    mean: number;
    median: number;
    stdDev: number;
    decades: TStatsList< string >;
    gender: TStatsList< TGender >;
    spread: TStatsList< TWealthSpread >;
}

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

export interface TStatsCollection {
    history: THistory;
    groups: TGroupedStats;
    profile: TProfileStats;
    wealth: TWealthStats;
    scatter: TScatter;
}
