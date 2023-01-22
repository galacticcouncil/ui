import { DataType } from './DataType';

export const AssetTypes = {
  aUSD: 'Acala USD',
  ACA: 'Acala',
  BSX: 'Basilisk',
  BTC: 'Bitcoin',
  DAI: 'DAI (Wormhole)',
  DOT: 'Polkadot',
  ETH: 'Ethereum',
  HDX: 'HydraDX',
  KAR: 'Karura',
  KSM: 'Kusama',
  LRNA: 'Lerna',
  PHA: 'Phala',
  TNKR: 'Tinkernet',
  WBTC: 'WBTC (Wormhole)',
  WETH: 'WETH (Wormhole)',
};

export class AssetType extends DataType {
  static isValid(value: any) {
    return !!AssetTypes[value];
  }
}
