import { DataType } from './DataType';

export const ChainTypes = {
  acala: 'Acala',
  basilisk: 'Basilisk',
  hydradx: 'HydraDX',
  interlay: 'Interlay',
  karura: 'Karura',
  kusama: 'Kusama',
  phala: 'Phala',
  polkadot: 'Polkadot',
  robonomics: 'Robonomics',
  tinkernet: 'Tinkernet',
  statemine: 'Statemine',
  statemint: 'Statemint',
  zeitgeist: 'Zeitgeist',
};

export class ChainType extends DataType {
  static isValid(value: any) {
    return !!ChainTypes[value];
  }
}
