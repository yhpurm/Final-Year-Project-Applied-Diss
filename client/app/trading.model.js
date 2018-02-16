"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trading = /** @class */ (function () {
    function trading(id, name, symbol, rank, price_usd, price_btc, h24_volume_usd, market_cap_usd, available_supply, max_supply, percent_change_1h, percent_change_24h, percent_change_7d, last_updated) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;
        this.rank = rank;
        this.price_usd = price_usd;
        this.price_btc = price_btc;
        this.h24_volume_usd = h24_volume_usd;
        this.market_cap_usd = market_cap_usd;
        this.available_supply = available_supply;
        this.max_supply = max_supply;
        this.percent_change_1h = percent_change_1h;
        this.percent_change_24h = percent_change_24h;
        this.percent_change_7d = percent_change_7d;
        this.last_updated = last_updated;
    }
    return trading;
}());
exports.trading = trading;
//# sourceMappingURL=trading.model.js.map