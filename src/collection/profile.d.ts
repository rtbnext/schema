import { BrandedProfile, ProfileURI } from '../abstract/primitives';

export type Profile< P extends ProfileURI > = BrandedProfile< {}, P >;

export type ProfileCollection< P extends ProfileURI = ProfileURI > = {
    index: { [ K in P ]: never };
    alias: Record< string, P >;
    items: { [ K in P ]: Profile< K > }
};
