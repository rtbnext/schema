/**
 * RTBNext Schema V2
 * Filter
 * 
 * Type definitions for filter entries, filter documents,
 * and filter collections.
 */

import type { Expand } from 'devtypes/types/util';
import type { TGender, TMaritalStatus } from '../base/const';
import type { TMetaData } from '../base/generic';


/**
 * Filter entry.
 */
export type TFilterItem = {
  readonly uri: string;
  name: string;
  value: unknown;
};

/**
 * Filter data.
 */
export type TFilterData = {
  items: TFilterItem[];
  count: number;
};

/**
 * Filter document.
 */
export type TFilter = Expand< TMetaData & TFilterData >;

/**
 * Special filter lists.
 */
export type TFilterSpecialList = {
  deceased: TFilterItem[];
  dropOff: TFilterItem[];
  family: TFilterItem[];
  selfMade: TFilterItem[];
};

/**
 * Collection of filter lists.
 */
export type TFilterList = {
  industry: Record< string, TFilterItem[] >;
  citizenship: Record< string, TFilterItem[] >;
  country: Record< string, TFilterItem[] >;
  state: Record< string, TFilterItem[] >;
  gender: { [ K in TGender ]?: TFilterItem[] };
  age: Record< number, TFilterItem[] >;
  maritalStatus: { [ K in TMaritalStatus ]?: TFilterItem[] };
  special: TFilterSpecialList;
};

/**
 * Collection of special filter documents.
 */
export type TFilterSpecialCollection = {
  deceased: TFilter;
  dropOff: TFilter;
  family: TFilter;
  selfMade: TFilter;
};

/**
 * Collection of filter documents.
 */
export type TFilterCollection = {
  industry: Record< string, TFilter >;
  citizenship: Record< string, TFilter >;
  country: Record< string, TFilter >;
  state: Record< string, TFilter >;
  gender: { [ K in TGender ]?: TFilter };
  age: Record< number, TFilter >;
  maritalStatus: { [ K in TMaritalStatus ]?: TFilter };
  special: TFilterSpecialCollection;
};
