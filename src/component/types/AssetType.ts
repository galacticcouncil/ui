import { DataType } from './DataType';

export const AssetTypes = {
  aUSD: 'Acala USD',
  BSX: 'Basilisk',
  HDX: 'Hydra',
  KSM: 'Kusama',
  PHA: 'Phala',
  TNKR: 'Tinkernet',
  KAR: 'Karura',
  DAI: 'Dai USD',
};

export class AssetType extends DataType {
  static isValid(value: any) {
    return !!AssetTypes[value];
  }
}
