/**
 * RTBNext Schema V2
 * Search
 * 
 * Type definitions for search index records for fast lookup of
 * profile information, including personal details, financial data,
 * and other relevant attributes as flat array of objects.
 */

import type { Expand } from 'devtypes/types/util';

import type { TGender, TIndustry, TMaritalStatus, TProfileStatusFlag, TSelfMadeRank } from '../base/const';
import type { TMetaData } from '../base/generic';


/**
 * Search index entry.
 */
export type TSearchIndexItem = {
  id: string;
  uri: string;
  deceased: boolean;
  family: boolean;
  dropOff: boolean;
  embargo: boolean;
  fullName: string;
  lastName: string;
  gender?: TGender;
  birthDate?: string;
  age?: number;
  birthCountry?: string;
  residenceCountry?: string;
  citizenship?: string;
  industry?: TIndustry;
  source?: string[];
  networth?: number;
  rank?: number;
  organization?: string;
  maritalStatus?: TMaritalStatus;
  children?: number;
  philanthropyScore?: number;
  selfMade?: boolean;
  selfMadeRank?: TSelfMadeRank;
  wikidata?: string;
  status?: TProfileStatusFlag;
  score?: number;
  timestamp: string;
};

/**
 * Search index document.
 */
export type TSearchIndex = Expand< TMetaData & {
  count: number;
  items: TSearchIndexItem[];
} >;
