# Data modals
These are the middleware that allow or Angular app to comunicate with outside data sources and technologies.

## Modals and descriptions
- bal: Takes care of the balance response from blockchain.info and requesting the balance.
- blockstats: Takes care of the blockchain statistics response from blockchain.info along with posting those statistics to a status.
- blockticker: Takes care of the response for the latest prices and posting those latest prices in a status
- createWallet: Used for creating a new wallet.
- myWallet: Used for returning wallet information.
- payment: Used for parsing the success/failure response when bitcoin is sent.
- pools: Used to retrieve miner data and then post it in a status.
- profile: This model is used for processing data related to your profile, global users andd friends.
- request: used to request bitcoin.
- status: used to post different types and statuses and process status loaded by the app.
- trading: used to process trading data.
