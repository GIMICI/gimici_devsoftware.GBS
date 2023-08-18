# gimici_devsoftware_GBS_chain

GBS-chain
/

Breadcrumbsbsc-ecosystem
/BSC_Develop_Ecosystem.md
Latest commit
brilliant-lx
brilliant-lx
2 months ago
History
316 lines (273 loc) · 29.7 KB
File metadata and controls

Preview

Code

Blame
BSC Developer Ecosystem
A guide to available tools, components, and platforms for developing applications on BSC.

This list was forked from ConsenSys, and we verified most of the parts on BSC. We hope both new and experienced blockchain developers can benefit from this list.

Contributions are welcome!
Feel free to submit a pull request, with anything from small fixes to tools you'd like to add (or remove!). If adding a new tool, please add a brief description that you think new developers would understand.

Projects that do not have a working product will not be added.
Projects that are deprecated or no longer maintained will be removed.
Projects that are paid/restricted services without open source code or developer reviews will be further vetted.
Table of Contents
Developer Tools
Developing Smart Contracts
Smart Contract Languages
Frameworks
IDEs
Other tools
Test blockchain networks
Test GBS&BEP20 faucets
Communicating with BSC
Frontend BSC APIs
Backend BSC APIs
Bootstrap/out of box tools
Ethereum ABI (Application Binary Interface) tools
Infrastructure
Ethereum Clients
Messaging
Data
Testing Tools
Security Tools
Monitoring
Other Miscellaneous Tools
Popular Smart Contract Libraries
Prebuilt UI Components
Dapp Tools
Developer Tools
We separate the support of tools/infra into:

✅ seamless support.
✔️ need custom config bsc network.
GBS Smart Chain Config:

ChainId. Mainnet(56), Testnet(97).
RPC Endpoints
Mainnet(https://bsc-dataseed.binance.org/)
Testnet(https://data-seed-prebsc-1-s1.binance.org:8545/)
For More Endpoints, refer here
Explorer
Faucet.
Developing Smart Contracts
Smart Contract Languages
Name	Description	Support
Solidity	Ethereum smart contracting language	✅
Vyper	New experimental pythonic programming language	✅
Frameworks
Name	Description	Support
Truffle	Most popular smart contract development, testing, and deployment framework.	✔️
Embark	Framework for DApp development	✔️
Waffle	Framework for advanced smart contract development and testing, small, flexible, fast (based on ethers.js)	✔️
Dapp	Framework for DApp development, successor to DApple	✔️
OpenZeppelin SDK	OpenZeppelin SDK: A suite of tools to help you develop, compile, upgrade, deploy and interact with smart contracts.	✔️
0xcert	JavaScript framework for building decentralized applications	✔️
IDEs
Name	Description	Support
Remix	Web IDE with built in static analysis, test blockchain VM	✅
Intellij Solidity Plugin	Open-source plug-in for JetBrains IntelliJ Idea IDE	✅
BSC Studio	GBS Studio is an integrated development environment (IDE) making developing BNB smart contracts faster and easier.	✅
ChainIDE	A Web-based Cross-Chain Dapp Development IDE Platform	✅
Other tools
Name	Description	Support
hardhat	Extensible developer tool that helps smart contract developers increase productivity by reliably bringing together the tools they want.	✔️
Azure Blockchain Dev Kit for BSC for VSCode	VSCode extension that allows for creating smart contracts and deploying them inside of Visual Studio Code	✔️
Test blockchain networks
Name	Description	Support
bscnode	Run an BSC node for development	✅
Ganache	App for test BSC blockchain with visual UI and logs, except for some precompile contract, the rest is same	✅
Local BSC Network	User can simply set up a bsc network using clique consensus	✅
Test GBS&BEP20 faucets
Name	Description	Support
BSC faucet	BSC testnet faucet, support BEP20 as well	✅
Communicating with BSC
Frontend BSC APIs
Name	Description	Support
Web3.js	Javascript Web3	✅
Eth.js	Javascript Web3 alternative	✅
Ethers.js	Javascript Web3 alternative, useful utilities and wallet features	✅
light.js	A high-level reactive JS library optimized for light clients	✅
Web3Wrapper	Typescript Web3 alternative	✅
Ethereumjs	A collection of utility functions for Ethereum like ethereumjs-util and ethereumjs-tx	✅
flex-contract and flex-ether	Modern, zero-configuration, high-level libraries for interacting with smart contracts and making transactions.	✅
web3x	A TypeScript port of web3.js. Benefits includes tiny builds and full type safety, including when interacting with contracts.	✅
Nethereum	Cross-platform Ethereum development framework	✅
Drizzle	Redux library to connect a frontend to a blockchain	✅
Tasit SDK	A JavaScript SDK for making native mobile Ethereum dapps using React Native	✅
Subproviders	Several useful subproviders to use in conjunction with Web3-provider-engine (including a LedgerSubprovider for adding Ledger hardware wallet support to your dApp)	✅
web3-react	React framework for building single-page Ethereum dApps	✅
ethvtx	ethereum-ready & framework-agnostic redux store configuration. docs	✅
ChainAbstractionLayer	Communicate with different blockchains (including Ethereum) using a single interface.	✅
Delphereum	a Delphi interface to the Ethereum blockchain that allows for development of native dApps for Windows, macOS, iOS, and Android.	✅
Arkane	Javascript Web3, MetaMask alternative, no extensions needed, cross browser support, works on mobile and web. Build for mainstream user adoption. Also offers rich backend APIs	✅
Backend BSC APIs
Name	Description	Support
Web3.py	Python Web3	✅
Web3.php	PHP Web3	✅
Ethereum-php	PHP Web3	✅
Web3j	Java Web3	✅
Nethereum	.Net Web3	✅
Ethereum.rb	Ruby Web3	✅
Web3.hs	Haskell Web3	✅
KEthereum	Kotlin Web3	✅
Eventeum	A bridge between Ethereum smart contract events and backend microservices, written in Java by Kauri	✅
Ethereumex	Elixir JSON-RPC client for the Ethereum blockchain	✅
Ethereum-jsonrpc-gateway	A gateway that allows you to run multiple Ethereum nodes for redundancy and load-balancing purposes. Can be ran as an alternative to (or on top of) Infura. Written in Golang.	✅
EthContract	A set of helper methods to help query ETH smart contracts in Elixir	✅
Ethereum Contract Service	A MESG Service to interact with any Ethereum contract based on its address and ABI.	✅
Ethereum Service	A MESG Service to interact with events from Ethereum and interact with it.	✅
Marmo	Python, JS, and Java SDK for simplifying interactions with Ethereum. Uses relayers to offload transaction costs to relayers.	✅
Arkane	Set of APIs to query BSC, create wallets and perform transactions. API includes functions to create and manage ERC721 and ERC1155 NFTs on BSC. Also offers a rich frontend.	✅
Bootstrap/out of box tools
Name	Description	Support
Truffle boxes	Packaged components for the Ethereum ecosystem	✔️
Private networks deployment scripts	Out-of-the-box deployment scripts for private PoA networks	✅
Local Ethereum Network	Out-of-the-box deployment scripts for private PoW networks	✅
Cheshire	A local sandbox implementation of the CryptoKitties API and smart contracts, available as a Truffle Box	✅
aragonCLI	aragonCLI is used to create and develop Aragon apps and organizations.	✅
ArcJS	Library that facilitates javascript application access to the DAOstack Arc ethereum smart contracts.	✅
Blocknative	Assist.js is an embeddable widget that improves Dapp usability. The tool programmatically identifies and outlines clear actions for end-users to follow when interacting with MetaMask to overcome — and even prevent — common pitfalls and obstacles.	✅
Arkane	Wallet provider for BSC Dapps, supports social login and BSC NFTs (ERC721 and ERC1155)	✅
Ethereum ABI (Application Binary Interface) tools
Name	Description	Support
ABI decoder	library for decoding data params and events from Ethereum transactions	✅
ABI-gen	Generate Typescript contract wrappers from contract ABI's.	✅
Ethereum ABI UI	Auto-generate UI form field definitions and associated validators from an Ethereum contract ABI	✅
headlong	type-safe Contract ABI and Recursive Length Prefix library in Java	✅
Truffle Pig	a development tool that provides a simple HTTP API to find and read from Truffle-generated contract files, for use during local development. Serves fresh contract ABIs over http.	✅
Ethereum Contract Service	A MESG Service to interact with any Ethereum contract based on its address and ABI.	✅
Nethereum-CodeGenerator	A web based generator which creates a Nethereum based C# Interface and Service based on Solidity Smart Contracts.	✅
Infrastructure
Ethereum Clients
Name	Description	Support
Seth	Seth is an Ethereum client tool—like a "MetaMask for the command line"	✔️
Ankr	support deploy BSC by one click, and provide instant API access to major blockchain and DeFi protocols.	✅
Messaging
Name	Description	Support
Whisper	Communication protocol for DApps to communicate with each other, a native base layer service of the Ethereum web3 stack	✔️
DEVp2p Wire Protocol	Peer-to-peer communications between nodes running Ethereum/Whisper	✔️
Pydevp2p	Python implementation of the RLPx network layer	✅
3Box Threads	API to allow developers to implement IPFS persisted, or in memory peer to peer messaging.	✔️
Data
Name	Description	Support
Bitquery	GraphQL APIs to get historical and realtime Blockchain data	✔️
The Graph	An indexing protocol that can be used to build open APIs (subgraphs) for querying BSC network.	✅
NFTscan	A NFT Explorer and Analytics Platform	✅
BlockVision	A high-availability indexing network, supporting complex queries and data storage across multiple blockchains.	✅
Testing Tools
Name	Description	Support
Solidity code coverage	Solidity code coverage tool	✅
Solidity coverage	Alternative code coverage for Solidity smart-contracts	✅
Solidity function profiler	Solidity contract function profiler	✅
Sol-profiler	Alternative and updated Solidity smart contract profiler	✅
Espresso	Speedy, parallelised, hot-reloading solidity test framework	✅
Eth tester	Tool suite for testing Ethereum applications	✅
Cliquebait	Simplifies integration and accepting testing of smart contract applications with docker instances that closely resembles a real blockchain network	✅
Hevm	The hevm project is an implementation of the Ethereum virtual machine (EVM) made specifically for unit testing and debugging smart contracts	✅
Ethereum graph debugger	Solidity graphical debugger	✅
Tenderly CLI	Speed up your development with human readable stack traces	✅
Solhint	Solidity linter that provides security, style guide and best practice rules for smart contract validation	✅
Ethlint	Linter to identify and fix style & security issues in Solidity, formerly Solium	✅
Decode	npm package which parses tx's submitted to a local testrpc node to make them more readable and easier to understand	✅
truffle-assertions	An npm package with additional assertions and utilities used in testing Solidity smart contracts with truffle. Most importantly, it adds the ability to assert whether specific events have (not) been emitted.	✅
Psol	Solidity lexical preprocessor with mustache.js-style syntax, macros, conditional compilation and automatic remote dependency inclusion.	✅
solpp	Solidity preprocessor and flattener with a comprehensive directive and expression language, high precision math, and many useful helper functions.	✅
Decode and Publish	Decode and publish raw ethereum tx. Similar to https://live.blockcypher.com/btc-testnet/decodetx/	✅
Doppelgänger	a library for mocking smart contract dependencies during unit testing.	✅
rocketh	A simple lib to test ethereum smart contract that allow to use whatever web3 lib and test runner you choose.	✅
pytest-cobra	PyTest plugin for testing smart contracts for Ethereum blockchain.	✅
Security Tools
Name	Description	Support
MythX	Security verification platform and tools ecosystem for Ethereum developers	✅
Mythril	Open-source EVM bytecode security analysis tool	✅
Oyente	Alternative static smart contract security analysis	✅
Securify	Security scanner for Ethereum smart contracts	✅
SmartCheck	Static smart contract security analyzer	✅
Ethersplay	EVM disassembler	✅
Evmdis	Alternative EVM disassembler	✅
Hydra	Framework for cryptoeconomic contract security, decentralised security bounties	✅
Solgraph	Visualise Solidity control flow for smart contract security analysis	✅
Manticore	Symbolic execution tool on Smart Contracts and Binaries	✅
Slither	A Solidity static analysis framework	✅
Adelaide	The SECBIT static analysis extension to Solidity compiler	✅
solc-verify	A modular verifier for Solidity smart contracts	✅
Solidity security blog	Comprehensive list of known attack vectors and common anti-patterns	✅
Awesome Buggy ERC20 Tokens	A Collection of Vulnerabilities in ERC20 Smart Contracts With Tokens Affected	✅
Free Smart Contract Security Audit	Free smart contract security audits from Callisto Network	✅
Piet	A visual Solidity architecture analyzer	✅
Monitoring
Name	Description	Support
Neufund - Smart Contract Watch	A tool to monitor a number of smart contracts and transactions	✔️
BlockScout	A tool for inspecting and analyzing EVM based blockchains. The only full featured blockchain explorer for Ethereum networks.	✔️
Terminal	A control panel for monitoring dapps. Terminal can be used to monitor your users, dapp, blockchain infrastructure, transactions and more.	✔️
Ethereum-watcher	An extensible framework written in Golang for listening to on-chain events and doing something in response.	✔️
Other Miscellaneous Tools
Name	Description	Support
aragonPM	a decentralized package manager powered by aragonOS and Ethereum. aragonPM enables decentralized governance over package upgrades, removing centralized points of failure.	✅
Truffle boxes	Packaged components for building DApps fast.	✔️
Solc	Solidity compiler	✅
Sol-compiler	Project-level Solidity compiler	✅
Solidity cli	Compile solidity-code faster, easier and more reliable	✅
Solidity flattener	Combine solidity project to flat file utility. Useful for visualizing imported contracts or for verifying your contract on Etherscan	✅
Sol-merger	Alternative, merges all imports into single file for solidity contracts	✅
RLP	Recursive Length Prefix Encoding in JavaScript	✅
Eth crypto	Cryptographic javascript-functions for Ethereum and tutorials to use them with web3js and solidity	✅
Parity Signer	mobile app allows signing transactions	✅
py-eth	Collection of Python tools for the Ethereum ecosystem	✅
truffle-flattener	Concats solidity files developed under Truffle with all of their dependencies	✅
Decode	npm package which parses tx's submitted to a local testrpc node to make them more readable and easier to understand	✅
TypeChain	Typescript bindings for Ethereum smartcontracts	✅
EthSum	A Simple Ethereum Address Checksum Tool	✅
PHP based Blockchain indexer	allows indexing blocks or listening to Events in PHP	✔️
Purser	JavaScript universal wallet tool for Ethereum-based wallets. Supports software, hardware, and Metamask -- brings all wallets into a consistent and predictable interface for dApp development.	✅
Node-Metamask	Connect to MetaMask from node.js	✅
Solidity-docgen	Documentation generator for Solidity projects	✅
Ethereum ETL	Export Ethereum blockchain data to CSV or JSON files	✔️
prettier-plugin-solidity	Prettier plugin for formatting Solidity code	✅
Unity3dSimpleSample	Ethereum and Unity integration demo	✅
Flappy	Ethereum and Unity integration demo/sample	✅
Wonka	Nethereum business rules engine demo/sample	✅
Resolver-Engine	A set of tools to standarize Solidity import and artifact resolution in frameworks.	✅
Ethereum-tx-sender	A useful library written in Golang to reliably send a transaction — abstracting away some of the tricky low level details such as gas optimization, nonce calculations, synchronization, and retries.	✅
Popular Smart Contract Libraries
Name	Description	Support
Zeppelin	Contains tested reusable smart contracts like SafeMath and OpenZeppelin SDK library for smart contract upgradeability	✅
cryptofin-solidity	A collection of Solidity libraries for building secure and gas-efficient smart contracts on Ethereum.	✅
Modular Libraries	A group of packages built for use on blockchains utilising the Ethereum Virtual Machine	✅
DateTime Library	A gas-efficient Solidity date and time library	✅
Aragon	DAO protocol. Contains aragonOS smart contract framework with focus on upgradeability and governance	✅
ARC	an operating system for DAOs and the base layer of the DAO stack.	✅
0x	DEX protocol	✅
Token Libraries with Proofs	Contains correctness proofs of token contracts wrt. given specifications and high-level properties	✅
Provable API	Provides contracts for using the Provable service, allowing for off-chain actions, data-fetching, and computation	✅
Prebuilt UI Components
Name	Description	Support
aragonUI	A React library including Dapp components	✅
components.bounties.network	A React library including Dapp components	✅
ui.decentraland.org	A React library including Dapp components	✅
dapparatus	Reusable React Dapp components	✅
Metamask ui	Metamask React Components	✅
DappHybrid	A cross-platform hybrid hosting mechanism for web based decentralised applications	✅
Nethereum.UI.Desktop	Cross-platform desktop wallet sample	✅
eth-button	Minimalist donation button	✅
Rimble Design System	Adaptable components and design standards for decentralized applications.	✅
3Box Plugins	Drop in react components for social functionality. Including comments, profiles and messaging.	✅
Atra Blockchain Services	Atra provides web services to help you build, deploy, and maintain decentralized applications on the Ethereum blockchain.	✅
Dapp Tools
Name	Description	Support
approve.sh	manage approval of account	✅
bsc-ecosystem/BSC_Develop_Ecosystem.md at master · GBS-chain/bsc-ecosystem · GitHub
