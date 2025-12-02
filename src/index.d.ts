import { DateString } from './abstract/primitives';
import * as Utils from './abstract/utils';

import { ListCollection } from './collection/list';
import { MoverCollection } from './collection/mover';
import { ProfileCollection } from './collection/profile';
import { Queue } from './collection/queue';

export type BillionairesIndex = Utils.MetaData & {
    currentDay: DateString;
    availableDays: DateString[];
    queue: Queue;
    profile: ProfileCollection;
    list: ListCollection;
    mover: MoverCollection;
};
