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
var blockchain_service_1 = require("./blockchain.service");
var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.prices = [];
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("prices init");
        this.blockchainService.getCurrentPrice()
            .subscribe(function (prices) {
            _this.prices = prices;
            console.log(prices);
            console.log('GET from ticker');
            prices.forEach(function (price) {
                console.log(price.last);
                console.log(price.buy);
                console.log(price.sell);
                console.log(price.symbol);
            });
        }, function (error) { return console.error("error:" + error); });
    };
    TransactionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activity',
            templateUrl: 'blockchainActivity.component.html',
            providers: [blockchain_service_1.BlockchainService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService])
    ], TransactionsComponent);
    return TransactionsComponent;
}());
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=blockchainActivity.component.js.map