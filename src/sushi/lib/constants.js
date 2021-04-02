import BigNumber from 'bignumber.js/bignumber'
import rainLogo from '../../assets/images/200X200.png'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 10950600 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 25920000

export const START_NEW_POOL_AT = 1615716000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber('115792089237316195423570985008687907853269984665640564039457584007913129639935'), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18')
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  uniCakeV2Factory: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
  uniCakeV2Router: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726'
}

// TODO: change the address & set LP pool
export const contractAddresses = {
  sushi: {
    1: '0xB1f66997A5760428D3a87D68b90BfE0aE64121cC',
    88: '0x7262fa193e9590b2e075c3c16170f3f2f32f5c74',
    99: '0x9FB56E17EF76Eb21d89d2Ec73058245844e70E3d',
    56: '0x489f2c22c40f443b4dfac60ec6ea2d65f831f929',
    97: '0x325031a081DF666f7ebC49C66D3A096c6097E127'
  },
  rain: {
    56: '0x489f2c22c40f443b4dfac60ec6ea2d65f831f929',
    97: '0x325031a081DF666f7ebC49C66D3A096c6097E127'
  },
  xSushi: {
    1: '0x9abf23f4e439d695a7fd341a1b25873c50cfa52e',
    88: '0xd6393b5bDC65f94Af3edcc653aB14120fF274199'
  },
  maker: {
    1: '0x0FCB3b6232a2AD0af2f0602Acd759D634743579f',
    88: '0xF5bF43C60B3ef1eCf6B5676767957749845F9401'
  },
  masterChef: {
    1: '0xb67D7a6644d9E191Cac4DA2B88D6817351C7fF62',
    88: '0xb0b8e9BBAd546Eb0d816a472D44f9100309885c1',
    99: '0xA49D353dd804f516bcd500D1Dd6eE72675CF498d',
    56: '0x88641aC9FeAEe2e15eaA83806D7c87ECE306D7E5',
    97: '0x8F18fC3cAB6677689717936c2d65210d4Fe8Fe1B'
  },
  rainMasterChef: {
    56: '0x88641aC9FeAEe2e15eaA83806D7c87ECE306D7E5',
    97: '0x8F18fC3cAB6677689717936c2d65210d4Fe8Fe1B'
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    88: '0xB1f66997A5760428D3a87D68b90BfE0aE64121cC'
  }
}

export const supportedPools1 = [
  {
    pid: 1,
    lpAddresses: {
      56: '0x36d6B6Bf6E2DEF648209ad77950DB420f9348920'
    },
    tokenAddresses: {
      56: '0x489f2c22c40f443b4dfac60ec6ea2d65f831f929'
    },
    token2Addresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    name: 'RAIN - BUSD',
    symbol: 'RAIN-BUSD CAKE-LP',
    symbolShort: 'RAIN-BUSD',
    description: 'Deposit RAIN-BUSD CAKE-LP Earn RAIN',
    tokenSymbol: 'RAIN',
    token2Symbol: 'BUSD',
    icon: rainLogo,
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: false,
    isNew: true,
    protocal: 'PancakeSwap',
    iconProtocal: 'https://s2.coinmarketcap.com/static/img/coins/128x128/7186.png',
    pairLink: '',
    addLiquidityLink:
      'https://exchange.pancakeswap.finance/#/add/0x489f2c22c40F443b4dfac60EC6eA2d65F831F929/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink:
      'https://exchange.pancakeswap.finance/#/remove/0x489f2c22c40F443b4dfac60EC6eA2d65F831F929/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  }
]

// 0xd6be3b9780572f0215afb3e4d15751955503cebe
export const supportedPools = [...supportedPools1]
export const tomoSupportedPools = [
  {
    pid: 0,
    lpAddresses: {
      88: '0x810a21afe69fe356697a9824930904383930bd96'
    },
    tokenAddresses: {
      88: '0x7262fa193e9590b2e075c3c16170f3f2f32f5c74'
    },
    token2Addresses: {
      88: '0xb1f66997a5760428d3a87d68b90bfe0ae64121cc'
    },
    name: 'LUA - TOMO',
    symbol: 'LUA-TOMO LUA-V1 LP',
    symbolShort: 'LUA-TOMO',
    description: `Deposit LUA-TOMO LUA-V1 LP Earn LUA`,
    tokenSymbol: 'LUA',
    token2Symbol: 'TOMO',
    icon: 'https://luaswap.org/favicon.png',
    icon2: 'https://wallet.tomochain.com/public/imgs/tomoiconwhite.png',
    isHot: false,
    isNew: true,
    protocal: 'LuaSwap',
    iconProtocal: 'https://luaswap.org/favicon.png',
    pairLink: 'https://info.luaswap.org/tomochain/pair/0x810a21afe69fe356697a9824930904383930bd96',
    addLiquidityLink:
      'https://app.luaswap.org/#/add/0x7262fa193e9590b2e075c3c16170f3f2f32f5c74/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc',
    removeLiquidityLink:
      'https://app.luaswap.org/#/remove/0x7262fa193e9590b2e075c3c16170f3f2f32f5c74/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc'
  }
]
