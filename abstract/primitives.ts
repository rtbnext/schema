import { Brand } from 'devtypes/types/base';

export type ProfileURI = string;
export type ListURI = string;

export type BrandedProfile< T > = Brand< T, ProfileURI, 'uri', true >;
export type BrandedList< T > = Brand< T, ListURI, 'list', true >;
