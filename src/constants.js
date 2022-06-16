export const QUAI_MAINNET_NETWORK_ID = {
  prime: 9000,
  cyprus: 9100,
  paxos: 9200,
  hydra: 9300,
  'cyprus-1': 9101,
  'cyprus-2': 9102,
  'cyprus-3': 9103,
  'paxos-1': 9201,
  'paxos-2': 9202,
  'paxos-3': 9203,
  'hydra-1': 9301,
  'hydra-2': 9302,
  'hydra-3': 9303,
};

export const QUAI_MAINNET_CHAIN_ID = {
  Prime: '0x2328',
  Cyprus: '0x238c',
  Paxos: '0x23f0',
  Hydra: '0x2454',
  Cyprus1: '0x238d',
  Cyprus2: '0x238e',
  Cyprus3: '0x238f',
  Paxos1: '0x23f1',
  Paxos2: '0x23f2',
  Paxos3: '0x23f3',
  Hydra1: '0x2455',
  Hydra2: '0x2456',
  Hydra3: '0x2457',
};

export const QUAI_CONTEXTS = [
  {
    name: 'Prime',
    value: 'prime',
    byte: ['00', '09'],
    id: '0x2328',
    rpc: 'https://prime.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8547',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Cyprus',
    value: 'cyprus',
    byte: ['0a', '13'],
    id: '0x238c',
    rpc: 'https://cyprus.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8579',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Cyprus One',
    value: 'cyprus-1',
    byte: ['14', '1d'],
    id: '0x238d',
    rpc: 'https://cyprus1.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8611',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Cyprus Two',
    value: 'cyprus-2',
    byte: ['1e', '27'],
    id: '0x238e',
    rpc: 'https://cyprus2.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8543',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Cyprus Three',
    value: 'cyprus-3',
    byte: ['28', '31'],
    id: '0x238f',
    rpc: 'https://cyprus3.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8675',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Paxos',
    value: 'paxos',
    byte: ['32', '3b'],
    id: '0x23f0',
    rpc: 'https://paxos.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8581',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Paxos One',
    value: 'paxos-1',
    byte: ['3c', '45'],
    id: '0x23f1',
    rpc: 'https://paxos1.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8513',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Paxos Two',
    value: 'paxos-2',
    byte: ['46', '4f'],
    id: '0x23f2',
    rpc: 'https://paxos2.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8645',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Paxos Three',
    value: 'paxos-3',
    byte: ['50', '59'],
    id: '0x23f3',
    rpc: 'https://paxos3.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8577',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Hydra',
    value: 'hydra',
    byte: ['5a', '63'],
    id: '0x2454',
    rpc: 'https://hydra.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8583',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Hydra One',
    value: 'hydra-1',
    byte: ['64', '6d'],
    id: '0x2455',
    rpc: 'https://hydra1.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8615',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Hydra Two',
    value: 'hydra-2',
    byte: ['6e', '77'],
    id: '0x2456',
    rpc: 'https://hydra2.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8647',
    blockExplorerUrl: 'https://quaiscan.io',
  },
  {
    name: 'Hydra Three',
    value: 'hydra-3',
    byte: ['78', '81'],
    id: '0x2457',
    rpc: 'https://hydra3.rpc.quaiscan.io/',
    provider: 'ws://45.76.19.78:8679',
    blockExplorerUrl: 'https://quaiscan.io',
  },
];

export const QUAI_OPTIONS = [
  { name: 'Prime', value: 'prime' },
  { name: 'Cyprus', value: 'cyprus' },
  { name: 'Paxos', value: 'paxos' },
  { name: 'Hydra', value: 'hydra' },
  { name: 'Cyprus One', value: 'cyprus-1' },
  { name: 'Cyprus Two', value: 'cyprus-2' },
  { name: 'Cyprus Three', value: 'cyprus-3' },
  { name: 'Paxos One', value: 'paxos-1' },
  { name: 'Paxos Two', value: 'paxos-2' },
  { name: 'Paxos Three', value: 'paxos-3' },
  { name: 'Hydra One', value: 'hydra-1' },
  { name: 'Hydra Two', value: 'hydra-2' },
  { name: 'Hydra Three', value: 'hydra-3' },
];

export function GetShardFromAddress(address) {
  return QUAI_CONTEXTS.filter((obj) => {
    let num = parseInt(Number('0x' + address.substring(2, 4)), 10);
    let start = parseInt(Number('0x' + obj.byte[0]), 10);
    let end = parseInt(Number('0x' + obj.byte[1]), 10);
    console.log(obj, num, start, end, num >= start && num <= end);
    return num >= start && num <= end;
  });
}
