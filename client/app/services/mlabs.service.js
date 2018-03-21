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
var profile_model_1 = require("../DataModals/profile.model");
var status_model_1 = require("../DataModals/status.model");
var status_model_2 = require("../DataModals/status.model");
var blockstats_modal_1 = require("../DataModals/blockstats.modal");
var pools_modal_1 = require("../DataModals/pools.modal");
var blockticker_modal_1 = require("../DataModals/blockticker.modal");
var status_model_3 = require("../DataModals/status.model");
var request_modal_1 = require("../DataModals/request.modal");
var MlabsService = /** @class */ (function () {
    // Http Contructor for setting up connection
    function MlabsService(http) {
        this.http = http;
    }
    MlabsService.prototype.getGlobalUsers = function () {
        return this.http.get('http://localhost:3000/globalusers')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, extracted_1 = extracted; _i < extracted_1.length; _i++) {
                var element = extracted_1[_i];
                console.log(element.username);
                message = new profile_model_1.Profile(element.username, element.aboutMe, element.avatar, element.statusCount, element.friendCount, element.isOnline, element.bitcoinAddress, element.email, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.getGlobalStatus = function () {
        return this.http.get('http://localhost:3000/globalstatus')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, extracted_2 = extracted; _i < extracted_2.length; _i++) {
                var element = extracted_2[_i];
                console.log(element.username);
                status = new status_model_1.Status(element.username, element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.getBalGlobalStatus = function () {
        return this.http.get('http://localhost:3000/globalbalStatus')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, extracted_3 = extracted; _i < extracted_3.length; _i++) {
                var element = extracted_3[_i];
                console.log(element.username);
                status = new status_model_2.BalStatus(element.username, element.date, element.title, element.text, element.balance, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.getStatsGlobalStatus = function () {
        return this.http.get('http://localhost:3000/globalstatsStatus')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, extracted_4 = extracted; _i < extracted_4.length; _i++) {
                var element = extracted_4[_i];
                console.log(element.username);
                status = new blockstats_modal_1.StatsStatus(element.username, element.date, element.title, element.text, element.market_price_usd, element.hash_rate, element.total_fees_btc, element.n_btc_mined, element.n_tx, element.n_blocks_mined, element.totalbc, element.n_blocks_total, element.estimated_transaction_volume_usd, element.blocks_size, element.miners_revenue_usd, element.nextretarget, element.difficulty, element.estimated_btc_sent, element.miners_revenue_btc, element.total_btc_sent, element.trade_volume_btc, element.trade_volume_usd, element.timestamp, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.getPoolGlobalStatus = function () {
        return this.http.get('http://localhost:3000/globalpoolStatus')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, extracted_5 = extracted; _i < extracted_5.length; _i++) {
                var element = extracted_5[_i];
                console.log(element.username);
                status = new pools_modal_1.PostPools(element.username, element.date, element.title, element.text, element.Unknown, element.GBMiners, element.SlushPool, element.KanoCKPool, element.BitFury, element.AntPool, element.F2Pool, element.ViaBTC, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.getPriceGlobalStatus = function () {
        return this.http.get('http://localhost:3000/globalpoolStatus')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, extracted_6 = extracted; _i < extracted_6.length; _i++) {
                var element = extracted_6[_i];
                console.log(element.username);
                status = new blockticker_modal_1.PostTicker(element.username, element.date, element.title, element.text, element.last, element.buy, element.sell, element.symbol, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.getFlagGlobalStatus = function () {
        return this.http.get('http://localhost:3000/globalpoolStatus')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, extracted_7 = extracted; _i < extracted_7.length; _i++) {
                var element = extracted_7[_i];
                console.log(element.username);
                status = new status_model_3.FlagStatus(element.username, element.date, element.title, element.text, element.locationName, element.contact, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.getReqGlobalStatus = function () {
        return this.http.get('http://localhost:3000/globalreqStatus')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, extracted_8 = extracted; _i < extracted_8.length; _i++) {
                var element = extracted_8[_i];
                console.log(element.username);
                status = new request_modal_1.ReqStatus(element.username, element.date, element.title, element.text, element.amount, element.address, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.searchUsers = function (username) {
        return this.http.get('http://localhost:3000/globalusers/' + username)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            console.log(extracted);
            console.log(extracted.username);
            for (var _i = 0, extracted_9 = extracted; _i < extracted_9.length; _i++) {
                var element = extracted_9[_i];
                console.log(element.username);
                message = new profile_model_1.Profile(element.username, element.aboutMe, element.avatar, element.statusCount, element.friendCount, element.isOnline, element.bitcoinAddress, element.email, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MlabsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MlabsService);
    return MlabsService;
}());
exports.MlabsService = MlabsService;
//# sourceMappingURL=mlabs.service.js.map