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
var blockticker_modal_1 = require("../DataModals/blockticker.modal");
var blockticker_modal_2 = require("../DataModals/blockticker.modal");
var status_service_1 = require("../services/status.service");
var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(blockchainService, statusService) {
        this.blockchainService = blockchainService;
        this.statusService = statusService;
        // Modals
        this.prices = [];
    }
    // After component initialization
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get your location
        this.getLocation();
        // Get current price from service
        this.blockchainService.getCurrentPrice()
            .subscribe(function (res) {
            console.log('GET from ticker');
            console.log(res);
            for (var price in res) {
                var value = res[price];
                console.log("p: " + value.last);
                _this.prices.push(new blockticker_modal_1.Ticker(value.last, value.buy, value.sell, value.symbol));
            }
        }, function (error) { return console.error("error:" + error); });
        // get logged in user from storage
        this.username = this.user.username;
        console.log(this.username);
    };
    // Update lat and long
    TransactionsComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    // get your location
    TransactionsComponent.prototype.getLocation = function () {
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
    // set values event
    TransactionsComponent.prototype.onSetValue = function (symbol, last, buy, sell) {
        this.postLast = last;
        this.postBuy = buy;
        this.postSell = sell;
        this.postSymbol = symbol;
    };
    // POST new price status
    TransactionsComponent.prototype.onStatusPriceSubmit = function () {
        //Get current date and time
        this.date = Date.now();
        //console.log(this.username,this.date,this.title,this.text,this.price,this.sentAmount,this.bitcoinAddress,this.receivingAddress,this.lat,this.long)
        var newPricePost = new blockticker_modal_2.PostTicker(this.username, this.date, this.title, this.text, this.postLast, this.postBuy, this.postSell, this.postSymbol, this.lat, this.long);
        // price status post
        this.statusService.savePricePost(newPricePost)
            .subscribe(function () { return console.log('POST from price status'); }, function (error) { return console.error(error); });
    };
    Object.defineProperty(TransactionsComponent.prototype, "user", {
        // Get username from local storage
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    TransactionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'activity',
            templateUrl: 'blockchainActivity.component.html',
            providers: [blockchain_service_1.BlockchainService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService, status_service_1.StatusService])
    ], TransactionsComponent);
    return TransactionsComponent;
}());
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=blockchainActivity.component.js.map