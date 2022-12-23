import { DataType } from './DataType';

export const AssetTypes = {
  aUSD: 'Acala USD',
  BSX: 'Basilisk',
  BTC: 'Bitcoin',
  DAI: 'Dai',
  DOT: 'Polkadot',
  ETH: 'Ethereum',
  HDX: 'HydraDX',
  KAR: 'Karura',
  KSM: 'Kusama',
  PHA: 'Phala',
  TNKR: 'Tinkernet',
};

export class AssetType extends DataType {
  static isValid(value: any) {
    return !!AssetTypes[value];
  }
}
