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
var blockchain_service_1 = require("../services/blockchain.service");
var profile_service_1 = require("../services/profile.service");
var status_service_1 = require("../services/status.service");
var status_model_1 = require("../DataModals/status.model");
var bal_modal_1 = require("../DataModals/bal.modal");
var PostBalanceComponent = /** @class */ (function () {
    function PostBalanceComponent(blockchainService, profileService, statusService) {
        this.blockchainService = blockchainService;
        this.profileService = profileService;
        this.statusService = statusService;
        // Modals
        this.wallets = [];
    }
    // On component initialization
    PostBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get wallets from profile service
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
        this.getLocation();
        // asign username from local storage
        this.username = this.user.username;
        console.log(this.username);
    };
    // set lat and long
    PostBalanceComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    // get user location
    PostBalanceComponent.prototype.getLocation = function () {
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
    // set wallet ID
    PostBalanceComponent.prototype.setGuid = function (gid) {
        console.log("guid: " + gid);
        this.guid = gid;
        console.log(this.guid);
    };
    // Get user balance
    PostBalanceComponent.prototype.onGetBal = function () {
        var _this = this;
        if (this.guid == null) {
            return "GUID is empty please select an address";
        }
        if (this.pass != this.passvalid) {
            return "GUID is empty please select an address";
        }
        // create balance request modal
        var balrequest = new bal_modal_1.BalanceReq(this.guid, this.pass);
        // pass to service
        this.blockchainService.getBalance(balrequest)
            .subscribe(function (messages) { return _this.balance = messages; }, function (error) { return console.error(error); });
    };
    // POST status balance
    PostBalanceComponent.prototype.onStatusBalSubmit = function () {
        // set current date
        this.date = Date.now();
        //console.log(this.username,this.date,this.title,this.text,this.balance,this.lat,this.long)
        // create new balance modal
        var newStatusPost = new status_model_1.BalStatus(this.username, this.date, this.title, this.text, this.balance, this.lat, this.long);
        // send modal to service
        this.statusService.saveBalPost(newStatusPost)
            .subscribe(function () { return console.log('POST from status'); }, function (error) { return console.error(error); });
    };
    Object.defineProperty(PostBalanceComponent.prototype, "user", {
        // get username from local storage
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    PostBalanceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'balance',
            templateUrl: 'postbal.component.html',
            providers: [blockchain_service_1.BlockchainService, profile_service_1.ProfileService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService, profile_service_1.ProfileService, status_service_1.StatusService])
    ], PostBalanceComponent);
    return PostBalanceComponent;
}());
exports.PostBalanceComponent = PostBalanceComponent;
//# sourceMappingURL=postbal.component.js.map