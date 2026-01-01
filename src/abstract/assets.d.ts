import { TAssetType, TChangeFlag } from './const';

export interface TAsset {
    type: TAssetType;
    label: string;
    value?: number;
    info?: {
        exchange: string;
        ticker: string;
        shares?: number;
        price: number;
        currency: string;
        exRate: number;
    };
}

export interface TChangeItem {
    value: number;
    pct: number;
}

export interface TChange {
    today?: TChangeItem;
    ytd?: TChangeItem;
}

export interface TRankingItem {
    date: string;
    rank?: number;
    networth?: number;
    prev?: string;
    next?: string;
}

export type TRanking = TRankingItem & {
    list: string;
    name: string;
    history?: TRankingItem[];
};

export type TRealtime = TRankingItem & TChange;

export interface TAnnualRecord {
    first: number;
    last: number;
    diff: number;
    flag: TChangeFlag;
    mean: number;
    median: number;
    max: number;
    min: number;
    range: number;
    stdDev: number;
}

export interface TAnnual {
    year: number,
    rank?: TAnnualRecord;
    networth?: TAnnualRecord;
}
