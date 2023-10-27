function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("node-fetch")),n=function(){return e.default("https://www.dexi.tools/coinmarketcap").then(function(t){return t.json()}).then(function(t){return t})};n(),exports.getCoinmarketDefault=n;
//# sourceMappingURL=index.cjs.map
