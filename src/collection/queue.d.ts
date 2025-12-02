import { BrandedProfile, ISODateString } from '../abstract/primitives';

export type QueueItem = BrandedProfile< {
    queued: ISODateString;
    priority?: number;
} >;

export type Queue = QueueItem[];
