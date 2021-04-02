import BigNumber from 'bignumber.js/bignumber'
import rainLogo from '../../assets/images/200X200.png'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 10950600 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 2425000

export const START_NEW_POOL_AT = 1605601513

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
  uniCakeV2Factory: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
  uniCakeV2Router: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
  YFI: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
  YCRV: '',
  UNIAmpl: '',
  WETH: '',
  LINK: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  MKR: '0x5f0da599bb2cccfcf6fdfd7d81743b6020864350',
  SNX: '0x9ac983826058b8a9c7aa1c9171441191232e8404',
  COMP: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
  LEND: '',
  SUSHIYCRV: ''
}

// TODO: change the address & set LP pool
export const contractAddresses = {
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
  rainMasterChef: {
    56: '0x88641aC9FeAEe2e15eaA83806D7c87ECE306D7E5',
    97: '0x8F18fC3cAB6677689717936c2d65210d4Fe8Fe1B'
  },
  wbnb: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd'
  }
}

export const supportedPools = [
  {
    pid: 1,
    lpAddresses: {
      1: '0x36d6B6Bf6E2DEF648209ad77950DB420f9348920'
    },
    tokenAddresses: {
      1: '0x489f2c22c40f443b4dfac60ec6ea2d65f831f929'
    },
    token2Addresses: {
      1: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
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
