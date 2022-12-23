import { DataType } from './DataType';

export const ChainTypes = {
  acala: 'Acala',
  basilisk: 'Basilisk',
  hydra: 'HydraDX',
  karura: 'Karura',
  phala: 'Phala',
  polkadot: 'Polkadot',
};

export class ChainType extends DataType {
  static isValid(value: any) {
    return !!ChainTypes[value];
  }
}
