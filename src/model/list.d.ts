import { TChange } from '../abstract/assets';
import { TGender, TIndustry } from '../abstract/const';
import { TIndex, TMetaData } from '../abstract/generic';
import { TGenericStats } from './stats';

export type TListIndex = Map< string, TListIndexItem >;

export type TListIndexItem = TIndex & {
    shortName: string;
    desc: string;
    date: string;
    count: number;
    columns: string[];
    filters: string[];
}

export type TList = Record< string, TListSnapshot >;

export type TListSnapshot = TMetaData & {
    date: string;
    items: TListItem[];
    count: number;
    stats: TGenericStats;
}

export interface TListItem {
    uri: string;
    name: string;
    rank: number;
    networth: number;
    gender?: TGender;
    age?: number;
    citizenship?: string;
}

export interface TListCollection {
    list: Record< string, TList >;
    index: TListIndex;
}

export interface TRTBListSnapshot extends TListSnapshot {
    items: TRTBListItem[];
}

export type TRTBListItem = TListItem & TChange & {
    industry: TIndustry;
    source: string[];
}
