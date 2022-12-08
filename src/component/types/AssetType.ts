import { DataType } from './DataType';

export const AssetTypes = {
  aUSD: 'Acala USD',
  BSX: 'Basilisk',
  KSM: 'Kusama',
  PHA: 'Phala',
  TNKR: 'Tinkernet',
  DAI: 'Dai',
  DOT: 'Polkadot',
  HDX: 'HydraDX',
  KAR: 'Karura',
};

export class AssetType extends DataType {
  static isValid(value: any) {
    return !!AssetTypes[value];
  }
}
