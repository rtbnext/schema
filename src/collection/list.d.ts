import * as Const from '../abstract/const';
import { BrandedList, BrandedProfile, DateString, ListURI } from '../abstract/primitives';
import * as Utils from '../abstract/utils';

export type ListItem = Utils.RealtimeEntity & BrandedProfile< {
    name: string;
    gender: Const.Gender;
    age?: number;
    citizenship?: Const.ISOCountryCode;
    industry: Const.Industry;
    source: string[];
} >;

export type ListSnapshot< L extends ListURI > = Utils.MetaData & BrandedList< {
    date: DateString;
    stats: Utils.StatsEntity;
    items: ListItem[];
}, L >;

export type List< L extends ListURI > = Record< DateString, ListSnapshot< L > >;

export type ListIndex< L extends ListURI > = BrandedList< {
    date: DateString;
    name: string;
    short: string;
    description?: string;
    count: number;
    columns: string[];
    filters: string[];
}, L >;

export type ListCollection< L extends ListURI = ListURI > = {
    index: { [ K in L ]: ListIndex< K > };
    items: { [ K in L ]: List< K > };
};
