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
var sendbtc_model_1 = require("../DataModals/sendbtc.model");
var payment_modal_1 = require("../DataModals/payment.modal");
var SendBTCComponent = /** @class */ (function () {
    function SendBTCComponent(profileService, blockchainService) {
        this.profileService = profileService;
        this.blockchainService = blockchainService;
        this.wallets = [];
        this.friends = [];
    }
    SendBTCComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLocation();
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
        this.profileService.getFriends()
            .subscribe(function (res) {
            console.log(res);
            _this.friends = res;
            console.log(_this.friends);
        }, function (error) { return console.error("error:" + error); });
    };
    SendBTCComponent.prototype.setTargetAddress = function (address) {
        alert("target address: " + address);
        this.to = address;
        console.log("to:" + this.to);
    };
    SendBTCComponent.prototype.selectItem = function (id) {
        this.guid = id;
        console.log("guid" + this.guid);
    };
    SendBTCComponent.prototype.SaveTx = function (pay) {
        console.log(pay);
        console.log(pay.to, pay.from, pay.amounts, pay.fees, pay.txid, pay.success, this.lat, this.long);
        var payment = new payment_modal_1.Payment(pay.to, pay.from, pay.amounts, pay.fees, pay.txid, pay.success, this.lat, this.long);
        var retVal = confirm("Do you want to save Tx attempt?");
        console.log(payment);
        if (retVal == true) {
            this.blockchainService.saveTx(payment)
                .subscribe(function () { return console.log('POST from blockchain tx'); }, function (error) { return alert(error); });
        }
        else {
            alert("Tx not saved");
        }
        alert("Transaction request sent to block chain for processing!");
    };
    SendBTCComponent.prototype.onSendBTC = function () {
        var _this = this;
        if (this.password != this.passwordValid) {
            return alert("Passwords dont match");
        }
        var PayRequest = new sendbtc_model_1.SendBTC(this.guid, this.password, this.amount, this.to);
        console.log(this.guid, this.password, this.amount, this.to);
        this.blockchainService.sendBTC(PayRequest)
            .subscribe(function (messages) { return _this.SaveTx(messages); }, function (error) { return alert(error); });
    };
    // Update lat and long
    SendBTCComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log("Your Lat:" + this.lat + "\nYour Long" + this.lat);
    };
    // get your location
    SendBTCComponent.prototype.getLocation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position),
                    _this.setPosition(position);
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
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