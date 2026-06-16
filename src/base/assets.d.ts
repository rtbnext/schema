import type { Expand } from 'devtypes/types/util';
import type { TAssetType } from './const';

export type TAsset = {
  type: TAssetType;
  label: string;
  value?: number;
  info?: {
    exchange: string;
    ticker: string;
    shares?: number;
    price: number;
    currency: string;
    exRate: number;
  };
};

export type TChangeItem = {
  value: number;
  percent: number;
};

export type TChange = {
  today?: TChangeItem;
  ytd?: TChangeItem;
};

export type TRankingItem = {
  date: string;
  rank?: number;
  networth?: number;
  prev?: string;
  next?: string;
};

export type TRanking = Expand<
  TRankingItem &
  {
    list: string;
    name: string;
    history?: TRankingItem[];
  }
>;

export type TRealtime = Expand<
  TRankingItem &
  TChange
>;
