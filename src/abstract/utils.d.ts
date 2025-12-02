import * as Const from './const';
import { DateString, ISODateString } from './primitives';

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

export type AnnualEntity = {
    first: number;
    end: number;
    diff: number;
    flag: Const.ChangeFlag;
    average: number;
    max: number;
    min: number;
    range: number;
};
