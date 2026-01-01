import { TMetaData } from '../abstract/generic';

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
    stats: TListStats;
    items: TListItem[];
}
