import { DateString } from './abstract/primitives';
import * as Utils from './abstract/utils';

import { ProfileCollection } from './collection/profile';

export type BillionairesIndex = Utils.MetaData & {
    currentDay: DateString;
    availableDays: DateString[];
    profile: ProfileCollection;
};
