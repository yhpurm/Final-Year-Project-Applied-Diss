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
var StatsComponent = /** @class */ (function () {
    function StatsComponent(blockchainService) {
        this.blockchainService = blockchainService;
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
            _this.minutes_between_blocks = res.minutes_between_blocks;
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
    StatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stats',
            templateUrl: 'blockstats.component.html',
            providers: [blockchain_service_1.BlockchainService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=blockstats.component.js.map