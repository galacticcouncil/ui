import { DataType } from './DataType';

export const AssetTypes = {
  aUSD: 'Acala USD',
  ACA: 'Acala',
  BSX: 'Basilisk',
  BTC: 'Bitcoin',
  WBTC: 'Portal BTC',
  DAI: 'Dai',
  DOT: 'Polkadot',
  ETH: 'Ethereum',
  WETH: 'Portal ETH',
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
