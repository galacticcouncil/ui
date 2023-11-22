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
  statemine: 'AssetHub',
  assethub: 'AssetHub',
  statemint: 'AssetHub',
  'assethub-kusama': 'AssetHub',
  subsocial: 'Subsocial',
  zeitgeist: 'Zeitgeist',
};

export class ChainType extends DataType {
  static isValid(value: any) {
    return !!ChainTypes[value];
  }
}
