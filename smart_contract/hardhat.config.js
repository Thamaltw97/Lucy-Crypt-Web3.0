// https://eth-ropsten.alchemyapi.io/v2/mNNM1lJuBI6SdiKAY_3RADlIjLtf9jJk

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/mNNM1lJuBI6SdiKAY_3RADlIjLtf9jJk',
      accounts: ['b7c03560e88476a57cca846b714b583f33273ff7f1b70341ad043b160d969de8']
    }
  }
}