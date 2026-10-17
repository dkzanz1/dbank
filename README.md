# DBank — Internet Computer (ICP) Canister dApp (`dbank_assets`)

[![CI Build Verification](https://github.com/dkzanz1/bdank/actions/workflows/node.js.yml/badge.svg)](https://github.com/dkzanz1/bdank/actions/workflows/node.js.yml)
![Stack](https://img.shields.io/badge/stack-Internet%20Computer%20%7C%20Motoko%20%7C%20JavaScript%20%7C%20Webpack-blue)
![Type](https://img.shields.io/badge/type-Learning%20Case%20Study-brightgreen)

A decentralized banking application built on the Internet Computer (ICP) protocol, exploring canister smart contract integration, Motoko backend state, and client-side actor interfaces.

> **Context:** Constructed to gain hands-on experience with the Internet Computer SDK (`dfx`), Candid interface definitions, and connecting JavaScript frontend assets to Motoko backend canisters.

---

## 🛠️ Key Architectural & Web3 Learnings

- **ICP Canister Architecture:** Integrated client-side assets with backend smart contracts (canisters) running compiled Motoko/WebAssembly code on the Internet Computer.
- **DFINITY Agent & Candid:** Utilized `@dfinity/agent` and `@dfinity/candid` to interface with canister actor methods and serialize data types between JavaScript and the ICP protocol.
- **Custom Build Pipeline:** Executed Webpack and `dfx` type generation scripts to synchronise declarations between canisters and frontend static assets.

---

## 💻 Tech Stack

- **Blockchain Ecosystem:** Internet Computer (ICP), Motoko, `dfx` SDK
- **Frontend & Integration:** JavaScript (ES6+), `@dfinity/agent`, `@dfinity/candid`, `@dfinity/principal`
- **Build Tooling:** Webpack 5, Webpack Dev Server, Node.js, GitHub Actions (Node.js CI runner)

---

## ⚙️ Local Setup & Execution

To run this project locally, you will need the DFINITY SDK (`dfx`) installed:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/dkzanz1/bdank.git](https://github.com/dkzanz1/bdank.git)
   cd bdank
