import { TAnnual, TAsset, TRanking, TRealtime } from '../abstract/assets';
import { TGender, TIndustry, TMaritalStatus } from '../abstract/const';
import { TEducation, TImage, TLocation, TRelation, TWiki } from '../abstract/generic';

export interface TProfileData {
    uri: string;
    id: string;
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
