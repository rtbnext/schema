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

export interface TMover {
    date: string;
    today: TMoverItem;
    ytd: TMoverItem;
}
