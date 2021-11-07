require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember assume half clinic bottom gaze'; 
let testAccounts = [
"0x77623eef25fb2b60cc43395888cfbc3b13b2823af398041cda5aa1af057f0ed3",
"0xb00f524e9bfb4edb120b42a1c0a4a557b87a5641c31d349f175c5ec36083cb34",
"0xf5d3e0bf976219fdb6ceefe401a19d7610e1eaeb6e8be40652d4c40c5008d51f",
"0xa59d7ef956dae3ca5a458b10aa48a18d5acb3cd06eb0096ee8fe4b2d3b65d23a",
"0x07acc27be973177b070689f7209bcc052be4eea21e8e50f6b553900aea2a5257",
"0x3dc9ddc41efd2db9f7e7ca55bfcd0ab8dbecf0f814703fad2d5a46b66c0ed486",
"0xf623ae6ed9f56a9dc2bbbc6bb661e3e2b861386d748bb43ec21c009ef77f933c",
"0xbb07958956d007c41d45ddd56c4789a676e2706a246a619d5ad8f297c5f4ef9e",
"0x24478b796b1ef33ca1f176845ac7149b9fdce72800faa02107f8fbeb8f7acfa4",
"0x543d5670587d2dd38331c75855546f912a83e0cebc189aa2bfe622be1f8f2b83"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

