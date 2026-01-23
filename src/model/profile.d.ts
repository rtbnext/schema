import { TAnnual, TAsset, TRanking, TRealtime } from '../abstract/assets';
import { TGender, TIndustry, TMaritalStatus } from '../abstract/const';
import * as Generic from '../abstract/generic';

export type TProfileIndex = Map< string, TProfileIndexItem >;

export type TProfileIndexItem = Generic.TIndex & {
    aliases: string[];
    image?: string;
    desc?: string;
}

export interface TProfileInfo {
    deceased: boolean;
    family: boolean;
    dropOff: boolean;
    embargo?: boolean;
    name: string;
    shortName: string;
    lastName: string;
    firstName: string;
    gender: TGender;
    birthDate?: string;
    birthPlace?: Generic.TLocation;
    citizenship?: string;
    residence?: Generic.TLocation;
    maritalStatus?: TMaritalStatus;
    children?: number;
    education?: Generic.TEducation[];
    industry: TIndustry;
    source: string[];
    selfMade: Generic.TSelfMade;
    philanthropyScore?: number;
    organization?: Generic.TOrganization;
}

export interface TProfileBio {
    cv: string[];
    facts: string[];
    quotes: string[];
}

export interface TProfileData {
    readonly id: string;
    uri: string;
    info: TProfileInfo;
    bio: TProfileBio;
    related: Generic.TRelation[];
    media: Generic.TImage[];
    realtime?: TRealtime;
    ranking: TRanking[];
    annual: TAnnual[];
    assets: TAsset[];
    wiki?: Generic.TWiki;
}

export type TProfileHistoryItem = [ string, number, number, number, number ];

export type TProfileHistory = TProfileHistoryItem[];

export type TProfile = Generic.TMetaData & {
    data: TProfileData;
    history: TProfileHistory;
}
