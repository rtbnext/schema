export type TLocation = {
  country: string;
  state?: string;
  city?: string;
};

export type TEducation = {
  school: string;
  degree?: string;
};

export type TOrganization = {
  name: string;
  title?: string;
};

export type TSelfMade = {
  type: string;
  is: boolean;
  rank?: number;
};
