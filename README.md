# DSurv App - Curve.fi clone 

This project is a clone of the classic user interface of Curve.fi, developed using Motoko and DFINITY's Internet Computer platform. Curve.fi is a decentralized exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading. This project aims to replicate the user interface and some functionalities of Curve.fi while leveraging the features provided by Motoko and DFINITY.

<div align="center">
  <img src="https://github.com/Hariram-6674/DSurv-for-trading-tokens/raw/main/demo.gif" alt="DSurv">
</div>

## Deployment Instructions

To deploy the Keeper App on your local environment using DFINITY and React, follow these steps:

1. **Install DFINITY SDK:**
   ```bash
   DFX_VERSION=0.8.4 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
   ```

2. **Start DFINITY Local Node:**
   ```bash
   dfx start --clean
   ```

3. **Deploy the App:**
   Open a new terminal window and execute the following command:
   ```bash
   dfx deploy
   ```

4. **Start the React Development Server:**
   ```bash
   npm start
   ```

5. **Access the App:**
   After starting the development server, navigate to the following URL in your web browser:
   ```
   http://127.0.0.1:8000/?canisterId=<id>
   ```
   Replace with the Canister ID of `dkeeper_assets`.

## About the App

DSurv App allows users to perform the following actions:

- **Integration with DFINITY's Internet Computer:** Utilizing the capabilities of DFINITY's Internet Computer platform for decentralized computation and smart contract functionalities.
- **Stablecoin Trading:** Users can trade various stablecoins with minimal slippage, similar to the original Curve.fi platform.
- **Liquidity Pool Management:** Users can provide liquidity to the pools and manage their deposited assets.

## Environment Requirements

- Linux or WSL environment.
- Node.js and npm installed.
- DFINITY SDK version 0.8.4(for me it was stable).
