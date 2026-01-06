import { TMetaData, TSnapshot } from '../abstract/generic';

export interface TMoverEntry {
    readonly uri: string;
    name: string;
    value: number;
}

export interface TMoverSubject {
    winner: TMoverEntry[];
    loser: TMoverEntry[];
}

export interface TMoverItem {
    networth: TMoverSubject;
    percent: TMoverSubject;
}

export type TMover = TMetaData & TSnapshot & {
    today: TMoverItem;
    ytd: TMoverItem;
}
