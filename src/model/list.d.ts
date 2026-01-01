import { TGender, TIndustry } from '../abstract/const';
import { TMetaData } from '../abstract/generic';
import { TGenericStats } from './stats';

export type TListIndex = Map< string, TListIndexItem >;

export interface TListIndexItem {
    readonly uri: string;
    name: string;
    shortName: string;
    desc: string;
    date: string;
    text: string;
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
};

export interface TListItem {
    uri: string;
    name: string;
    rank: number;
    networth: number;
    gender?: TGender;
    age?: number;
    citizenship?: string;
    industry?: TIndustry;
    source?: string[];
}

export interface TListCollection {
    list: Record< string, TList >;
    index: TListIndex;
}
