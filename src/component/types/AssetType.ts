import { DataType } from './DataType';

export const AssetTypes = {
  aUSD: 'Acala USD',
  ACA: 'Acala',
  BSX: 'Basilisk',
  BTC: 'Bitcoin',
  DAI: 'Dai',
  DOT: 'Polkadot',
  ETH: 'Ethereum',
  HDX: 'HydraDX',
  KAR: 'Karura',
  KSM: 'Kusama',
  LRNA: 'Lerna',
  PHA: 'Phala',
  TNKR: 'Tinkernet',
  WBTC: 'Portal BTC',
  WETH: 'Portal ETH',
};

export class AssetType extends DataType {
  static isValid(value: any) {
    return !!AssetTypes[value];
  }
}
