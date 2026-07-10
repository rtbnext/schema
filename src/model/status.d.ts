/**
 * RTBNext Schema V2
 * Status Types
 * 
 * Shared type definitions for the RTBNext status document.
 * These types define the structure and allowed values for the status
 * document, which provides information about the health and availability
 * of RTBNext services.
 */

import type { Expand } from 'devtypes/types/util';
import type { TService, TStatusFlag } from '../base/const';
import type { TMetaData } from '../base/generic';

/**
 * Status document.
 */
export type TStatus = Expand< TMetaData & {
  status: TStatusFlag;
  services: { [ S in TService ]: TStatusFlag };
} >;
