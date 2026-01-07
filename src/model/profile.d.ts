import { TAnnual, TAsset, TRanking, TRealtime } from '../abstract/assets';
import { TGender, TIndustry, TMaritalStatus } from '../abstract/const';
import { TEducation, TImage, TIndex, TLocation, TMetaData, TRelation, TWiki } from '../abstract/generic';

export type TProfileIndex = Map< string, TProfileIndexItem >;

export type TProfileIndexItem = TIndex & {
    aliases: string[];
    image?: string;
    desc?: string;
}

export type TProfileData = TMetaData & {
    readonly id: string;
    uri: string;
    info: {
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
        birthPlace?: TLocation;
        citizenship?: string;
        residence?: TLocation;
        maritalStatus?: TMaritalStatus;
        children?: number;
        education?: TEducation[];
        industry: TIndustry;
        source: string[];
        selfMade: {
            type: string;
            is: boolean;
            rank?: number;
        };
        philanthropyScore?: number;
        organization?: {
            name: string;
            title?: string;
        };
    };
    bio: {
        cv: string[];
        facts: string[];
        quotes: string[];
    };
    related: TRelation[];
    media: TImage[];
    realtime?: TRealtime;
    ranking: TRanking[];
    annual: TAnnual[];
    assets: TAsset[];
    wiki?: TWiki;
}

export type TProfileHistoryItem = [ string, number, number, number, number ];

export type TProfileHistory = TProfileHistoryItem[];

export interface TProfile {
    data: TProfileData;
    history: TProfileHistory;
}
