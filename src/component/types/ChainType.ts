import { DataType } from './DataType';

export const ChainTypes = {
  acala: 'Acala',
  astar: 'Astar',
  basilisk: 'Basilisk',
  bifrost: 'Bifrost',
  centrifuge: 'Centrifuge',
  hydradx: 'HydraDX',
  interlay: 'Interlay',
  karura: 'Karura',
  kusama: 'Kusama',
  moonbeam: 'Moonbeam',
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
