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

export type Stats< T extends string > = { [ K in T ]: {
    list: ListItem;
    history: HistoryData[];
} };

export type StatsList< T extends string > = { [ K in T ]: number };

export type AgePyramid = {
    [ G in Const.Gender ]: StatsList< '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' >
};

export type StatsCollection = Utils.MetaData & {
    industry: Stats< Const.Industry >;
    country: Stats< Const.ISOCountryCode >;
    state: Stats< Const.USStateCode >;
    selfMade: StatsList< Const.SelfMadeRank >;
    maritalStatus: StatsList< Const.MaritalStatus >;
    agePyramid: AgePyramid;
    children: {
        full: StatsList< `${number}` >;
        short: StatsList< 'none' | 'one' | 'two' | 'three' | 'four' | '5-to-10' | 'over-10' >;
    };
};
