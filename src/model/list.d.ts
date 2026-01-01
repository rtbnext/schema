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
