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
var trading_service_1 = require("../trading.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.noDataMsg = 'Select fiat currency to get started';
        this.appService.filteredCoinsSubject.subscribe({
            next: function (v) { return _this.updateCoins(v); },
        });
        this.appService.apiSubject.subscribe({
            next: function (msg) { return _this.noDataMsg = msg; },
        });
        this.appService.fiatSubject.subscribe({
            next: function (newValue) { return _this.fiat = newValue; },
        });
    }
    ListComponent.prototype.updateCoins = function (coins) {
        var _this = this;
        this.coins = [];
        coins.forEach(function (coin) { return _this.coins.push(coin); });
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        }),
        __metadata("design:paramtypes", [trading_service_1.AppService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map