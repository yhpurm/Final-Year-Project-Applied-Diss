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
    var errorMsg = error.message || "Problem creating the wallet!!!! try again later.";
    console.error(errorMsg);
    // throw an application level error
    return Observable_1.Observable.throw(errorMsg);
}
//# sourceMappingURL=blockchain.service.js.map