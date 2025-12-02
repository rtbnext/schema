import * as Const from '../abstract/const';
import { BrandedProfile, DateString, ProfileURI } from '../abstract/primitives';
import * as Utils from '../abstract/utils';

export type ProfileInfo< P extends ProfileURI > = BrandedProfile< {
    readonly uri: P;
    deceased: boolean;
    family: boolean;
    dropOff: boolean;
    name: string;
    shortName: string;
    gender: Const.Gender;
    birthDate?: DateString;
    birthPlace?: Location;
    citizenship: Const.ISOCountryCode;
    residence: Location;
    maritalStatus?: Const.MaritalStatus;
    children?: number;
    education?: {
        school: string;
        degree?: string;
    }[];
    industry: Const.Industry;
    source: string[];
    selfMade?: {
        type: string;
        is: boolean;
        rank?: Const.SelfMadeRank;
    };
    organization?: {
        name: string;
        title?: string;
    };
}, P >;

export type ProfileBio = {
    bio?: string[];
    quotes?: string[];
    facts?: string[];
};

export type HistoryData = [
    DateString,
    number | undefined,
    number,
    number | undefined,
    number | undefined
];

export type AnnualData = {
    year: string;
    networth: Utils.ReportEntity;
    rank: Utils.ReportEntity;
};

export type Profile< P extends ProfileURI > = Utils.MetaData & {
    info: ProfileInfo< P >;
    bio: ProfileBio;
    related: Utils.RelatedEntity[];
    map: Utils.MapEntity[];
    ranking: Utils.RankingEntity[];
    realtime: Utils.RealtimeEntity & { date: DateString };
    history: HistoryData[];
    annual: AnnualData;
    assets: Utils.AssetEntity[];
    media: Utils.MediaEntity[];
};

export type ProfileCollection< P extends ProfileURI = ProfileURI > = {
    index: { [ K in P ]: never };
    alias: Record< string, P >;
    items: { [ K in P ]: Profile< K > }
};
