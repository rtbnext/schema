/**
 * RTBNext Schema V2
 * Filter
 * 
 * Type definitions for filter entries, filter documents,
 * and filter collections.
 */

import type { Expand } from 'devtypes/types/util';
import type { TAgeGroup, TFilterSpecial, TGender, TIndustry, TMaritalStatus } from '../base/const';
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
export type TFilterSpecialList = { [ K in TFilterSpecial ]: TFilterItem[] };

/**
 * Collection of filter lists.
 */
export type TFilterList = {
  industry: { [ K in TIndustry ]?: TFilterItem[] };
  citizenship: Record< string, TFilterItem[] >;
  country: Record< string, TFilterItem[] >;
  state: Record< string, TFilterItem[] >;
  gender: { [ K in TGender ]?: TFilterItem[] };
  age: { [ K in TAgeGroup ]?: TFilterItem[] };
  maritalStatus: { [ K in TMaritalStatus ]?: TFilterItem[] };
  special: TFilterSpecialList;
};

/**
 * Collection of special filter documents.
 */
export type TFilterSpecialCollection = { [ K in TFilterSpecial ]: TFilter };

/**
 * Collection of filter documents.
 */
export type TFilterCollection = {
  industry: { [ K in TIndustry ]?: TFilter };
  citizenship: Record< string, TFilter >;
  country: Record< string, TFilter >;
  state: Record< string, TFilter >;
  gender: { [ K in TGender ]?: TFilter };
  age: { [ K in TAgeGroup ]?: TFilter };
  maritalStatus: { [ K in TMaritalStatus ]?: TFilter };
  special: TFilterSpecialCollection;
};

/**
 * Filter index document.
 */
export type TFilterIndex = Expand< TMetaData & {
  industry: TIndustry[];
  citizenship: string[];
  country: string[];
  state: string[];
  gender: TGender[];
  age: TAgeGroup[];
  maritalStatus: TMaritalStatus[];
  special: TFilterSpecial[];
} >;
