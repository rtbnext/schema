import { Brand } from 'devtypes/types/base';

export type ProfileURI = Brand< string, 'profile' >;
export type ListURI = Brand< string, 'list' >;

export type BrandedProfile< T, P extends ProfileURI = ProfileURI > = Brand< T, P, 'uri', true >;
export type BrandedList< T, L extends ListURI = ListURI > = Brand< T, L, 'list', true >;
