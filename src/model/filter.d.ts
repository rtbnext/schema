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

export type TFilterSpecialGroup = {
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
  special: TFilterSpecialGroup;
};
