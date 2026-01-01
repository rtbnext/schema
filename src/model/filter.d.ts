import { TGender, TMaritalStatus } from '../abstract/const';
import { TMetaData } from '../abstract/generic';

export interface TFilter {
    readonly uri: string;
    name: string;
    value: unknown;
}

export type TFilterList = TMetaData & {
    items: TFilter[];
    count: number;
}

export interface TFilterCollection {
    industry: Record< string, TFilter[] >;
    citizenship: Record< string, TFilter[] >;
    country: Record< string, TFilter[] >;
    state: Record< string, TFilter[] >;
    gender: { [ K in TGender ]?: TFilter[] };
    age: Record< number, TFilter[] >;
    maritalStatus: { [ K in TMaritalStatus ]?: TFilter[] };
    special: {
        deceased: TFilter[];
        dropOff: TFilter[];
        family: TFilter[];
        selfMade: TFilter[];
    };
}
