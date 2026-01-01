export type TIndustry =
    | 'automotive' | 'casinos' | 'diversified' | 'energy' | 'engineering'
    | 'finance' | 'foodstuff' | 'healthcare' | 'logistics' | 'manufacturing'
    | 'media' | 'mining' | 'property' | 'retail' | 'service' | 'sports'
    | 'technology' | 'telecom';

export type TGender =
    | 'm' | 'f' | 'd';

export type TMaritalStatus =
    | 'single' | 'relationship' | 'married' | 'remarried' | 'engaged'
    | 'separated' | 'divorced' | 'widowed';

export type TSelfMadeRank =
    | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

export type TChangeFlag =
    | 'up' | 'down' | 'unchanged';

export type TRelationType =
    | 'person' | 'organization' | 'place' | 'unknown';

export type TAssetType =
    | 'public' | 'private' | 'misc';

export type TChildrenGroup =
    | 'none' | 'one' | 'two' | 'three' | 'four' | '5-to-10' | 'over-10';

export type TPercentiles =
    | '10th' | '25th' | '50th' | '75th' | '90th' | '95th' | '99th';

export type TWealthSpread =
    | '1' | '2' | '5' | '10' | '20' | '50' | '100' | '200' | '500';
