# Wallet Components
Contains all the Javascript,Typescript and HTML files that creates new wallets, return the current price of BTC, send BTC and view your profile wallets.

### Developers:
- [Conor Tighe](https://github.com/ConorTighe1995)

## Components description
The walletrequest.components allow users to create wallets and save there details to mongodb to be used later in the application. Once the user has access to a wallet in there profile they can then send BTC with the sendbtc.components. Users can navigate to myWallet.components which make up a page listing the users wallets and allows them to check there balance. The convert.components allow users to convert the value of a FIAT currency to bitcoin.

## Features
- Create new bitcoin wallets.
- Add existing wallets to your profile.
- Convert the value of FIAT to bitcoin.
- Check the balance of your wallets.
- Send bitcoin to other wallets.
- Easily select from friends on your friends list to send BTC to.

## Services
- Blockchain Service: This service is used to create wallets, send bitcoin and allow the user to retrieve data related to there wallet.
- Profile Service: This service retrieves all your wallet details.

### Refrences