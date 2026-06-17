import type { Expand } from 'devtypes/types/util';
import type { TGender, TMaritalStatus } from '../base/const';
import type { TMetaData } from '../base/generic';

export type TFilterItem = {
  readonly uri: string;
  name: string;
  value: unknown;
};

export type TFilter = Expand< TMetaData & {
  items: TFilterItem[];
  count: number;
} >;

export type TFilterSpecialList = {
  deceased: TFilterItem[];
  dropOff: TFilterItem[];
  family: TFilterItem[];
  selfMade: TFilterItem[];
};

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

export type TFilterSpecialCollection = {
  deceased: TFilter;
  dropOff: TFilter;
  family: TFilter;
  selfMade: TFilter;
};

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
