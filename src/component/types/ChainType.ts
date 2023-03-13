import { DataType } from './DataType';

export const ChainTypes = {
  acala: 'Acala',
  basilisk: 'Basilisk',
  hydradx: 'HydraDX',
  karura: 'Karura',
  kusama: 'Kusama',
  phala: 'Phala',
  polkadot: 'Polkadot',
  robonomics: 'Robonomics',
  tinkernet: 'Tinkernet',
  statemine: 'Statemine',
};

export class ChainType extends DataType {
  static isValid(value: any) {
    return !!ChainTypes[value];
  }
}
