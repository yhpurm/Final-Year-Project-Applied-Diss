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
var profile_service_1 = require("../services/profile.service");
var blockchain_service_1 = require("../services/blockchain.service");
var SendBTCComponent = /** @class */ (function () {
    function SendBTCComponent(profileService, blockchainService) {
        this.profileService = profileService;
        this.blockchainService = blockchainService;
        this.wallets = [];
    }
    SendBTCComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
    };
    SendBTCComponent.prototype.onSendBTC = function () {
        var _this = this;
        this.blockchainService.sendBTC(this.guid)
            .subscribe(function (messages) { return _this.wallets = messages; }, function (error) { return console.error(error); });
    };
    SendBTCComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'SendBTC',
            templateUrl: 'sendbtc.component.html',
            providers: [profile_service_1.ProfileService, blockchain_service_1.BlockchainService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, blockchain_service_1.BlockchainService])
    ], SendBTCComponent);
    return SendBTCComponent;
}());
exports.SendBTCComponent = SendBTCComponent;
//# sourceMappingURL=sendbtc.component.js.map