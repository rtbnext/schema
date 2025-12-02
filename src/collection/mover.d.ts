import { DateString, ProfileURI } from '../abstract/primitives';
import * as Utils from '../abstract/utils';

export type MoverEntry = {
    uri: ProfileURI;
    value: number;
};

export type MoverSubject = {
    winner: MoverEntry[];
    loser: MoverEntry[];
};

export type Mover = {
    networth: MoverSubject;
    percent: MoverSubject;
};

export type MoverCollection = Record< DateString, Utils.MetaData & {
    today: Mover;
    ytd: Mover;
} >;
