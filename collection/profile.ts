import { BrandedProfile, ProfileURI } from '../abstract/primitives';

export type Profile< P extends ProfileURI > = BrandedProfile< {}, P >;

export type ProfileCollection = {
    items: { [ P in ProfileURI ]: Profile< P > }
};
