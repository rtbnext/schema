import type { TGender } from '../base/const';

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
};
