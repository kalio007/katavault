require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const API_URL = process.env.API_URL;
const SEPOLIA_PRIV_KEY = process.env.SEPOLIA_PRIV_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `${API_URL}`,
      accounts: [SEPOLIA_PRIV_KEY]
    }
  }
};
