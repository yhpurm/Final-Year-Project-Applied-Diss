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
var PoolComponent = /** @class */ (function () {
    function PoolComponent(blockchainService) {
        this.blockchainService = blockchainService;
    }
    PoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("prices init");
        this.blockchainService.getPools()
            .subscribe(function (res) {
            console.log(res);
            _this.AntPool = res.AntPool;
            _this.GBMiners = res.GBMiners;
            _this.SlushPool = res.SlushPool;
            _this.KanoPool = res.KanoPool;
            _this.BitFury = res.BitFury;
            _this.F2Pool = res.F2Pool;
            _this.ViaBTC = res.ViaBTC;
            _this.CKPool = res.CKPool;
            _this.Unknown = res.Unknown;
        }, function (error) { return console.error("error:" + error); });
    };
    PoolComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stats',
            templateUrl: 'postpoolstatus.component.html',
            providers: [blockchain_service_1.BlockchainService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService])
    ], PoolComponent);
    return PoolComponent;
}());
exports.PoolComponent = PoolComponent;
//# sourceMappingURL=postpoolstatus.component.js.map