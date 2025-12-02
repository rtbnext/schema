import * as Const from './const';
import { ISODateString } from './primitives';

export type MetaData = {
    '@metadata': {
        schemaVersion: 2;
        lastModified: ISODateString;
    };
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
