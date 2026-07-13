/**
 * RTBNext Schema V2
 * Constants
 * 
 * Shared constant type definitions used throughout the RTBNext schema.
 * These string literal unions define fixed value sets for schema fields
 * and ensure consistency across all packages.
 */

/**
 * Supported business sectors.
 */
export type TIndustry =
  | 'automotive' | 'diversified' | 'energy' | 'engineering' | 'finance'
  | 'foodstuff' | 'gambling' | 'healthcare' | 'logistics' | 'manufacturing'
  | 'media' | 'mining' | 'property' | 'retail' | 'service' | 'sports'
  | 'technology' | 'telecom';

/**
 * Supported gender values.
 * 
 * d = diverse
 * m = male
 * f = female
 */
export type TGender =
  | 'm' | 'f' | 'd';

/**
 * Supported marital status values.
 */
export type TMaritalStatus =
  | 'single' | 'relationship' | 'married' | 'remarried' | 'engaged'
  | 'separated' | 'divorced' | 'widowed';

/**
 * Supported age groups.
 */
export type TAgeGroup =
  | '30' | '40' | '50' | '60' | '70' | '80' | '90';

/**
 * Self-made ranking from 1 (lowest) to 10 (highest).
 */
export type TSelfMadeRank =
  | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

/**
 * Supported relation target types.
 */
export type TRelationType =
  | 'person' | 'organization' | 'place' | 'unknown';

/**
 * Supported asset ownership categories.
 */
export type TAssetType =
  | 'public' | 'private' | 'misc';

/**
 * Supported change indicators for rankings or statistics.
 */
export type TChangeFlag =
  | 'up' | 'down' | 'unchanged' | 'new' | 'returned' | 'dropoff' | 'unknown';

/**
 * Available statistical grouping categories.
 */
export type TStatsGroup =
  | 'industry' | 'citizenship';

/**
 * Supported child count groups.
 */
export type TChildrenGroup =
  | 'none' | 'one' | 'two' | 'three' | 'four' | '5-to-10' | 'over-10';

/**
 * Supported percentile values.
 */
export type TPercentile =
  | '10th' | '25th' | '50th' | '75th' | '90th' | '95th' | '99th';

/**
 * Wealth spread factors used for statistical analysis.
 */
export type TWealthSpread =
  | '1' | '2' | '5' | '10' | '20' | '50' | '100' | '200' | '500' | '1000';

/**
 * Supported filter categories.
 */
export type TFilterGroup =
  | 'industry' | 'citizenship' | 'country' | 'state' | 'gender'
  | 'age' | 'maritalStatus' | 'special';

/**
 * Special filter options.
 */
export type TFilterSpecial =
  | 'deceased' | 'dropOff' | 'family' | 'selfMade';

/**
 * Supported service types.
 */
export type TService =
  | 'profile' | 'list' | 'mover' | 'filter' | 'stats' | 'system';

/**
 * Supported status flags.
 */
export type TStatusFlag =
  | 'healthy'	| 'degraded' | 'maintenance' | 'outage' | 'unknown';

/**
 * Supported profile status flags.
 */
export type TProfileStatusFlag =
  | 'healthy' | 'invalid' | 'missing' | 'unknown';
