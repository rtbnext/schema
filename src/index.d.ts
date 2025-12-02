import { DateString } from './abstract/primitives';
import * as Utils from './abstract/utils';

import { FilterCollection } from './collection/filter';
import { ListCollection } from './collection/list';
import { MoverCollection } from './collection/mover';
import { ProfileCollection } from './collection/profile';
import { Queue } from './collection/queue';
import { StatsCollection } from './collection/stats';

export type BillionairesIndex = Utils.MetaData & {
    currentDay: DateString;
    availableDays: DateString[];
    queue: Queue;
    profile: ProfileCollection;
    list: ListCollection;
    mover: MoverCollection;
    filter: FilterCollection;
    stats: StatsCollection;
};
