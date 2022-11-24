import { DataType } from './DataType';

export const AssetTypes = {
  aUSD: 'Acala USD',
  BSX: 'Basilisk',
  KSM: 'Kusama',
  PHA: 'Phala',
  TNKR: 'Tinkernet',
  DAI: 'Dai USD',
  HDX: 'Hydra',
  KAR: 'Karura',
};

export class AssetType extends DataType {
  static isValid(value: any) {
    return !!AssetTypes[value];
  }
}
