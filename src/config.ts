// import { ChainId as LChainId } from '@luaswap/sdk'
// import { ChainId as PChainId } from '@

export default {
  rpc: 'https://wallet.tomochain.com/api/luaswap/rpc',
  rpcTomochain: 'https://rpc.tomochain.com',
  chainId: 56,
  apiETH: 'https://wallet.tomochain.com/api/luaswap',
  apiTOMO: 'https://wallet.tomochain.com/api/luaswap/tomochain'
}

export enum ChainId {
  MAINNET = 1,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  TOMOCHAIN_DEVNET = 99,
  TOMOCHAIN_TESTNET = 89,
  TOMOCHAIN_MAINNET = 88
}

export const RPC_URL: { [chainId in ChainId]: string } = {
  1: 'https://wallet.tomochain.com/api/luaswap/rpc',
  3: '',
  4: '',
  5: '',
  42: '',
  56: 'https://bsc-dataseed.binance.org/',
  88: 'https://rpc.tomochain.com',
  89: '',
  97: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  99: ''
}

export const API_URL: { [chainId in ChainId]: string } = {
  1: 'https://wallet.tomochain.com/api/luaswap',
  3: '',
  4: '',
  5: '',
  42: '',
  56: '',
  88: 'https://wallet.tomochain.com/api/luaswap/tomochain',
  89: '',
  97: '',
  99: ''
}

export const LUA_CONTRACT: { [chainId in ChainId]: string } = {
  1: '0xB1f66997A5760428D3a87D68b90BfE0aE64121cC',
  3: '',
  4: '',
  5: '',
  42: '',
  56: '0x489f2c22c40f443b4dfac60ec6ea2d65f831f929',
  88: '0x7262fa193e9590B2E075c3C16170f3f2f32F5C74',
  89: '',
  97: '0x325031a081DF666f7ebC49C66D3A096c6097E127',
  99: ''
}
