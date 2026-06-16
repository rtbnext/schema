import type { TGender, TIndustry, TMaritalStatus } from '../base/const';
import type * as Generic from '../base/generic';

export type TProfileInfo = {
  deceased: boolean;
  family: boolean;
  dropOff: boolean;
  embargo?: boolean;
  name: string;
  shortName: string;
  lastName: string;
  firstName: string;
  gender: TGender;
  birthDate?: string;
  birthPlace?: Generic.TLocation;
  citizenship?: string;
  residence?: Generic.TLocation;
  maritalStatus?: TMaritalStatus;
  children?: number;
  education?: Generic.TEducation[];
  industry: TIndustry;
  source: string[];
  selfMade: Generic.TSelfMade;
  philanthropyScore?: number;
  organization?: Generic.TOrganization;
};

export type TProfileBio = {
  cv: string[];
  quotes: string[];
  facts: string[];
};

export type TProfileData = {
  readonly id: string;
  uri: string;
  info: TProfileInfo;
  bio: TProfileBio;
};
