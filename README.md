# Expo Dapp Seed

This repository contains the initial setup for building React Native Dapps with Expo, Truffle and Web3.

## Setup

First clone the repo, then run the following commands in your terminal:

`yarn install`

Check that the port for Ganache is correct in `truffle-config.js` and also in the useEffect hook inside `App.tsx`.

Once you confirmed the above, run `yarn ios`.

After building, the app will show up with a white screen and you can see in the console logs that it has been successfully connected to the local blockchain.
