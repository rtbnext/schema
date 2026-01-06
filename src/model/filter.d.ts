import { TGender, TMaritalStatus } from '../abstract/const';
import { TMetaData } from '../abstract/generic';

export interface TFilterItem {
    readonly uri: string;
    name: string;
    value: unknown;
}

export type TFilter = TMetaData & {
    items: TFilterItem[];
    count: number;
}

export interface TFilterList {
    industry: Record< string, TFilterItem[] >;
    citizenship: Record< string, TFilterItem[] >;
    country: Record< string, TFilterItem[] >;
    state: Record< string, TFilterItem[] >;
    gender: { [ K in TGender ]?: TFilterItem[] };
    age: Record< number, TFilterItem[] >;
    maritalStatus: { [ K in TMaritalStatus ]?: TFilterItem[] };
    special: {
        deceased: TFilterItem[];
        dropOff: TFilterItem[];
        family: TFilterItem[];
        selfMade: TFilterItem[];
    };
}

export interface TFilterCollection {
    industry: Record< string, TFilter >;
    citizenship: Record< string, TFilter >;
    country: Record< string, TFilter >;
    state: Record< string, TFilter >;
    gender: { [ K in TGender ]?: TFilter };
    age: Record< number, TFilter >;
    maritalStatus: { [ K in TMaritalStatus ]?: TFilter };
    special: {
        deceased: TFilter;
        dropOff: TFilter;
        family: TFilter;
        selfMade: TFilter;
    };
}
