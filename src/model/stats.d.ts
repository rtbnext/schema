import { TChange } from '../abstract/assets';
import * as Const from '../abstract/const';
import { TMetaData } from '../abstract/generic';

export type TGenericStats = TChange & {
    date: string;
    count: number;
    total: number;
    woman: number;
    quota: number;
}

export type TGlobalStats = TMetaData & TGenericStats & {
    stats: {
        profiles: number;
        days: number;
    };
}

export type TDBStats = TMetaData & {
    files: number;
    size: number;
}

export type THistory = THistoryItem[];

export type THistoryItem = [ string, number, number, number, number, number, number ];

export interface TGroupedStats {
    industry: TStatsGroup< Const.TIndustry >;
    citizenship: TStatsGroup< string >;
}

export interface TStatsGroup< T extends string > {
    index: TMetaData & {
        items: { [ K in T ]: TStatsGroupItem }
    };
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
    gender: TStatsList< Const.TGender >;
    maritalStatus: TStatsList< Const.TMaritalStatus >;
    agePyramid: TAgePyramid;
    children: {
        full: TStatsList< string >;
        short: TStatsList< Const.TChildrenGroup >;
    };
    selfMade: TStatsList< string >;
    philanthropyScore: TStatsList< string >;
}

export type TAgePyramid = Record< Const.TGender, TAgePyramidGroup >;

export interface TAgePyramidGroup {
    count: number;
    decades: TStatsList< string >;
    max: number;
    min: number;
    mean: number;
}

export type TWealthStats = TMetaData & {
    percentiles: TStatsList< Const.TPercentiles >;
    quartiles: [ number, number, number ];
    total: number;
    max: number;
    min: number;
    mean: number;
    median: number;
    stdDev: number;
    decades: TStatsList< string >;
    gender: TStatsList< Const.TGender >;
    spread: TStatsList< Const.TWealthSpread >;
}

export type TScatter = TMetaData & {
    items: TScatterItem[];
    count: number;
}

export interface TScatterItem {
    readonly uri: string;
    name: string;
    gender: Const.TGender;
    age: number;
    networth: number;
}

export interface TStatsCollection {
    global: TGlobalStats;
    history: THistory;
    groups: TGroupedStats;
    profile: TProfileStats;
    wealth: TWealthStats;
    scatter: TScatter;
}
