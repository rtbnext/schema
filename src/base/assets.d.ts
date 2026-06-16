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
