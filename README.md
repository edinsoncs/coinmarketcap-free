# Coinmarketcap FREE

![Dexi](https://i.ibb.co/ZBk2v0b/dexi.png)


With the CoinMarketCap Free module, you can track the prices and obtain comprehensive information about cryptocurrencies listed on the official CoinMarketCap website, all without the need for an API secret. Additionally, historical data is readily available for your convenience.


## Installation
Install using npm:
```sh
npm install coinmarketcapfree --save
```

## Usage
Require library
```javascript
import { getCoinmarketDefault } from 'coinmarketcapfree';
```
```javascript
(async () => {
    const result = await getCoinmarketDefault();
    console.log(result);
})();
```

[DEXI](https://www.dexi.tools)