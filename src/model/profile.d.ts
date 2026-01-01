import { TGender, TIndustry, TMaritalStatus } from '../abstract/const';

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
        birthPlace?: Generic.TLocation;
        citizenship?: string;
        residence?: Generic.TLocation;
        maritalStatus?: TMaritalStatus;
        children?: number;
        education?: Generic.TEducation[];
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
    related: Generic.TRelation[];
    media: Generic.TImage[];
    map: Generic.TMap[];
    realtime?: Generic.TRealtime;
    ranking: Generic.TRanking[];
    annual: Generic.TAnnual[];
    assets: Generic.TAsset[];
    wiki?: Generic.TWiki;
}
