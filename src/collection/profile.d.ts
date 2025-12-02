import * as Const from '../abstract/const';
import { BrandedProfile, ProfileURI } from '../abstract/primitives';

export type ProfileInfo< P extends ProfileURI > = BrandedProfile< {
    readonly uri: P;
    deceased: boolean;
    family: boolean;
    dropOff: boolean;
    name: string;
    shortName: string;
    gender: Const.Gender;
    birthDate?: string;
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

export type Profile< P extends ProfileURI > = {
    info: ProfileInfo< P >;
};

export type ProfileCollection< P extends ProfileURI = ProfileURI > = {
    index: { [ K in P ]: never };
    alias: Record< string, P >;
    items: { [ K in P ]: Profile< K > }
};
