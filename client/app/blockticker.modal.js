"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ticker = /** @class */ (function () {
    function Ticker(last, buy, sell, symbol) {
        this.last = last;
        this.buy = buy;
        this.sell = sell;
        this.symbol = symbol;
    }
    return Ticker;
}());
exports.Ticker = Ticker;
var PostTicker = /** @class */ (function () {
    function PostTicker(username, date, title, text, last, buy, sell, symbol, lat, long) {
        this.username = username;
        this.date = date;
        this.title = title;
        this.text = text;
        this.last = last;
        this.buy = buy;
        this.sell = sell;
        this.symbol = symbol;
        this.lat = lat;
        this.long = long;
    }
    return PostTicker;
}());
exports.PostTicker = PostTicker;
//# sourceMappingURL=blockticker.modal.js.map