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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var BlockchainService = /** @class */ (function () {
    // Http Contructor for setting up connection
    function BlockchainService(http) {
        this.http = http;
    }
    BlockchainService.prototype.saveWallet = function (wallet) {
        console.log(wallet);
        var body = JSON.stringify(wallet);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/newWallet', body, { headers: headers });
    };
    BlockchainService.prototype.getCurrentPrice = function () {
        console.log("contacting ticker");
        return this.http.get('https://blockchain.info/ticker')
            .map(function (response) { return response.json(); })
            .catch(handleError);
    };
    BlockchainService.prototype.getBlockchainStats = function () {
        console.log("contacting stats");
        return this.http.get('https://api.blockchain.info/stats?cors=true')
            .map(function (response) { return response.json(); })
            .catch(handleError);
    };
    BlockchainService.prototype.getPools = function () {
        console.log("contacting pools");
        return this.http.get('https://api.blockchain.info/pools?cors=true&timespan=5days')
            .map(function (response) { return response.json(); })
            .catch(handleError);
    };
    BlockchainService.prototype.getBalance = function (balreq) {
        console.log(balreq);
        var body = JSON.stringify(balreq);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Wallet/balance', body, { headers: headers }).map(function (data) {
            console.log(data.json());
            var extracted = data.json();
            var msgArray = [];
            var message;
            console.log("fixed: " + extracted.balance);
            message = extracted.balance;
            return message;
        });
    };
    BlockchainService.prototype.sendBTC = function (guid) {
        console.log("sending bitcoin");
        return this.http.get('https://api.blockchain.info/merchant/' + guid + '/payment')
            .map(function (response) { return response.json(); })
            .catch(handleError);
    };
    BlockchainService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BlockchainService);
    return BlockchainService;
}());
exports.BlockchainService = BlockchainService;
function handleError(error) {
    // log error
    // could be something more sofisticated
    var errorMsg = error.message || "Problem contacting blockchain!!!! try again later.";
    console.error(errorMsg);
    // throw an application level error
    return Observable_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=blockchain.service.js.map