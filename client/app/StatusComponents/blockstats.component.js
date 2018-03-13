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
var status_service_1 = require("../services/status.service");
var blockstats_modal_1 = require("../DataModals/blockstats.modal");
var geocoder = new google.maps.Geocoder();
var StatsComponent = /** @class */ (function () {
    function StatsComponent(blockchainService, statusService) {
        this.blockchainService = blockchainService;
        this.statusService = statusService;
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("prices init");
        this.blockchainService.getBlockchainStats()
            .subscribe(function (res) {
            _this.market_price_usd = res.market_price_usd;
            _this.hash_rate = res.hash_rate;
            _this.total_fees_btc = res.total_fees_btc;
            _this.n_btc_mined = res.n_btc_mined;
            _this.n_tx = res.n_tx;
            _this.n_blocks_mined = res.n_blocks_mined;
            _this.totalbc = res.totalbc;
            _this.n_blocks_total = res.n_blocks_total;
            _this.estimated_transaction_volume_usd = res.estimated_transaction_volume_usd;
            _this.blocks_size = res.blocks_size;
            _this.miners_revenue_usd = res.miners_revenue_usd;
            _this.nextretarget = res.nextretarget;
            _this.difficulty = res.difficulty;
            _this.estimated_btc_sent = res.estimated_btc_sent;
            _this.miners_revenue_btc = res.miners_revenue_btc;
            _this.total_btc_sent = res.total_btc_sent;
            _this.trade_volume_btc = res.trade_volume_btc;
            _this.trade_volume_usd = res.trade_volume_usd;
            _this.timestamp = res.timestamp;
        }, function (error) { return console.error("error:" + error); });
    };
    StatsComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    StatsComponent.prototype.getLocation = function () {
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
    StatsComponent.prototype.onStatusSubmit = function () {
        this.date = Date.now();
        this.username = "test";
        var newStatusPost = new blockstats_modal_1.StatsStatus(this.username, this.date, this.title, this.text, this.market_price_usd, this.hash_rate, this.total_fees_btc, this.n_btc_mined, this.n_tx, this.n_blocks_mined, this.totalbc, this.n_blocks_total, this.estimated_transaction_volume_usd, this.blocks_size, this.miners_revenue_usd, this.nextretarget, this.difficulty, this.estimated_btc_sent, this.miners_revenue_btc, this.total_btc_sent, this.trade_volume_btc, this.trade_volume_btc, this.timestamp, this.lat, this.long);
        console.log(newStatusPost);
        this.statusService.saveStatsPost(newStatusPost)
            .subscribe(function () { return console.log('POST from status'); }, function (error) { return console.error(error); });
    };
    StatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stats',
            templateUrl: 'blockstats.component.html',
            providers: [blockchain_service_1.BlockchainService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService, status_service_1.StatusService])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=blockstats.component.js.map