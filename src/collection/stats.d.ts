import * as Const from '../abstract/const';
import { DateString, ProfileURI } from '../abstract/primitives';
import * as Utils from '../abstract/utils';

export type ListItem = Utils.StatsEntity & {
    first?: Utils.ProfileEntity;
};

export type HistoryData = [
    DateString,
    number,
    number,
    number | undefined,
    number,
    ProfileURI
];

export type Stats< T extends string > = {
    [ K in T ]: {
        list: ListItem;
        history: HistoryData[];
    };
};

export type StatsCollection = Utils.MetaData & {
    industry: Stats< Const.Industry >;
    country: Stats< Const.ISOCountryCode >;
    state: Stats< Const.USStateCode >;
};
