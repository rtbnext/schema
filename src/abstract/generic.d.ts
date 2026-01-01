import { TRelationType } from './const';

export interface TMetaData {
    '@metadata': {
        schemaVersion: 2;
        lastModified: string;
    };
}

export interface TLocation {
    country: string;
    state?: string;
    city?: string;
}

export interface TEducation {
    school: string;
    degree?: string;
}

export interface TRelation {
    type: TRelationType;
    name: string;
    relation?: string;
    uri?: string;
}

export interface TImage {
    url: string;
    credits: string;
    file: string;
    thumb?: string;
    caption?: string;
    desc?: string;
    date?: string;
}
