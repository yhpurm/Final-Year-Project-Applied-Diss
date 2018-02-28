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
var createWallet_model_1 = require("./createWallet.model");
var blockchain_service_1 = require("./blockchain.service");
var NewWalletComponent = /** @class */ (function () {
    function NewWalletComponent(blockchainService) {
        this.blockchainService = blockchainService;
        this.wallet = [];
    }
    NewWalletComponent.prototype.onCreateNewWallet = function () {
        var _this = this;
        console.log("request triggered");
        if (this.walletpass != this.passwordValid) {
            alert("Email must contain @ and end with .com");
            return;
        }
        console.log(this.walletpass);
        console.log(this.email);
        console.log(this.label);
        var newWallet = new createWallet_model_1.createWallet(this.walletpass, this.email, this.label);
        this.blockchainService.saveWallet(newWallet)
            .subscribe(function (messages) { return _this.wallet = messages; }, function (error) { return console.error(error); });
        console.log(this.wallet);
    };
    NewWalletComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'NewWallet',
            templateUrl: 'walletrequest.component.html',
            providers: [blockchain_service_1.BlockchainService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService])
    ], NewWalletComponent);
    return NewWalletComponent;
}());
exports.NewWalletComponent = NewWalletComponent;
//# sourceMappingURL=walletrequest.component.js.map