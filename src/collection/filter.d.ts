import * as Const from '../abstract/const';
import { ProfileURI } from '../abstract/primitives';
import * as Utils from '../abstract/utils';

export type FilterList = ProfileURI[];

export type Filter< T extends string > = { [ K in T ]: FilterList };

export type FilterCollection = Utils.MetaData & {
    industry: Filter< Const.Industry >;
    country: Filter< Const.ISOCountryCode >;
    state: Filter< Const.USStateCode >;
    special: {
        deceased: FilterList;
        dropOff: FilterList;
        old: FilterList;
        selfMade: FilterList;
        woman: FilterList;
        young: FilterList;
    };
};
