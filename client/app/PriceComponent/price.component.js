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
var data_service_1 = require("../services/data.service");
var PriceComponent = /** @class */ (function () {
    function PriceComponent(_data) {
        this._data = _data;
        this.objectKeys = Object.keys;
    }
    PriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.getPrices()
            .subscribe(function (res) {
            _this.cryptos = res;
            console.log(res);
        });
        this.refreshData();
        this.cryptos = setInterval(function () {
            _this.refreshData();
        }, 5000); // refresh all 5 sec
    };
    // refresh data for get new cryptos values
    PriceComponent.prototype.refreshData = function () {
        var _this = this;
        this._data.getPrices()
            .subscribe(function (res) {
            _this.cryptos = res;
            console.log(res);
        });
    };
    PriceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'price',
            templateUrl: 'price.component.html',
            styleUrls: ['price.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], PriceComponent);
    return PriceComponent;
}());
exports.PriceComponent = PriceComponent;
//# sourceMappingURL=price.component.js.map