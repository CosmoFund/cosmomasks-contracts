module.exports = {
  contracts_directory: './src/cosmomasks/contracts',
  contracts_build_directory: './src/cosmomasks/abi',
  compilers: {
    solc: {
      version: '0.7.6',
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999,
        },
        evmVersion: 'istanbul',
      },
    },
  },
};
