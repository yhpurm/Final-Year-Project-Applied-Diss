"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var tradingService = /** @class */ (function () {
    // Http Contructor for setting up connection
    function tradingService(http) {
        this.http = http;
    }
    tradingService.prototype.getTrading = function () {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var trading;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                trading = new trading(element.id, element.name, element.symbol, element.rank, element.price_usd, element.price_btc, element.h24_volume_price, element.market_cap_usd, element.available_supply);
                msgArray.push(trading);
            }
            return msgArray;
        });
    };
    tradingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], tradingService);
    return tradingService;
}());
exports.tradingService = tradingService;
//# sourceMappingURL=trading.service.js.map