import { Brand } from 'devtypes/types/base';

export type DateString = `${number}-${number}-${number}`;
export type ISODateString = `${number}-${number}-${number}T${number}:${number}:${number}Z`;

export type ProfileURI = Brand< string, 'profile' >;
export type ListURI = Brand< string, 'list' >;

export type BrandedProfile< T, P extends ProfileURI = ProfileURI > = Brand< T, P, 'uri', true >;
export type BrandedList< T, L extends ListURI = ListURI > = Brand< T, L, 'list', true >;
