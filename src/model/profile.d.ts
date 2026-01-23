import { TAnnual, TAsset, TRanking, TRealtime } from '../abstract/assets';
import { TGender, TIndustry, TMaritalStatus } from '../abstract/const';
import * as G from '../abstract/generic';

export type TProfileIndex = Map< string, TProfileIndexItem >;

export type TProfileIndexItem = G.TIndex & {
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
    birthPlace?: G.TLocation;
    citizenship?: string;
    residence?: G.TLocation;
    maritalStatus?: TMaritalStatus;
    children?: number;
    education?: G.TEducation[];
    industry: TIndustry;
    source: string[];
    selfMade: G.TSelfMade;
    philanthropyScore?: number;
    organization?: G.TOrganization;
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
    related: G.TRelation[];
    media: G.TImage[];
    realtime?: TRealtime;
    ranking: TRanking[];
    annual: TAnnual[];
    assets: TAsset[];
    wiki?: G.TWiki;
}

export type TProfileHistoryItem = [ string, number, number, number, number ];

export type TProfileHistory = TProfileHistoryItem[];

export type TProfile = G.TMetaData & {
    data: TProfileData;
    history: TProfileHistory;
}
