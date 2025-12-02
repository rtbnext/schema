import * as Const from './const';
import { BrandedList, BrandedProfile, DateString, ISODateString, ListURI, ProfileURI } from './primitives';

export type MetaData = {
    '@metadata': {
        schemaVersion: 2;
        lastModified: ISODateString;
    };
};

export type MediaEntity = {
    url: string;
    credits: string;
    date: DateString;
    caption?: string;
    file: string;
    thumb?: string;
};

export type ProfileEntity< P extends ProfileURI = ProfileURI > = BrandedProfile< {
    name: string;
    date: DateString;
    rank?: number;
    networth?: number;
}, P >;

export type RankingEntity< L extends ListURI = ListURI > = BrandedList< {
    date: DateString;
    rank: number;
    prev?: ProfileURI;
    next?: ProfileURI;
}, L >;

export type RelatedEntity = {
    type: Const.Relations;
    name: string;
    relation?: string;
    uri?: ProfileURI;
};

export type RealtimeEntity = {
    rank?: number;
    networth: number;
    today?: {
        value: number;
        pct: number;
    };
    ytd?: {
        value: number;
        pct: number;
    };
};

export type ReportEntity = {
    first: number;
    end: number;
    diff: number;
    flag: Const.ChangeFlag;
    average: number;
    max: number;
    min: number;
    range: number;
};

export type AssetEntity = {
    type: Const.AssetType;
    value: number;
    label?: string;
    info?: {
        exchange: string;
        ticker: string;
        shares?: number;
        price: number;
        currency: string;
        exRate: number;
    };
};

export type StatsEntity = {
    count: number;
    total: number;
    woman?: number;
};

export type MapEntity = {
    lat: number;
    lon: number;
    country: Const.ISOCountryCode;
    address?: string;
    area?: number;
    year?: number;
    value?: number;
    polygon?: number[][];
};
