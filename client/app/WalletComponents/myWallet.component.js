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
var bal_modal_1 = require("../DataModals/bal.modal");
var WalletComponent = /** @class */ (function () {
    function WalletComponent(blockchainService, profileService) {
        this.blockchainService = blockchainService;
        this.profileService = profileService;
        this.wallets = [];
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
    };
    WalletComponent.prototype.setGuid = function (gid) {
        console.log("guid: " + gid);
        this.guid = gid;
        console.log(this.guid);
    };
    WalletComponent.prototype.onGetBal = function () {
        var _this = this;
        if (this.guid == null) {
            return "GUID is empty please select an address";
        }
        if (this.pass != this.passvalid) {
            return "GUID is empty please select an address";
        }
        var balrequest = new bal_modal_1.BalanceReq(this.guid, this.pass);
        this.blockchainService.getBalance(balrequest)
            .subscribe(function (messages) { return _this.balance = messages; }, function (error) { return console.error(error); });
    };
    WalletComponent.prototype.generateBarCode = function (addr) {
        var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + addr + '&amp;size=200x200';
        console.log(addr);
        return url;
    };
    WalletComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Wallet',
            templateUrl: 'myWallet.component.html',
            providers: [blockchain_service_1.BlockchainService, profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService, profile_service_1.ProfileService])
    ], WalletComponent);
    return WalletComponent;
}());
exports.WalletComponent = WalletComponent;
//# sourceMappingURL=myWallet.component.js.map