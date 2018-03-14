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
var trading_service_1 = require("../../services/trading.service");
var SearchFilterComponent = /** @class */ (function () {
    function SearchFilterComponent(appService) {
        var _this = this;
        this.appService = appService;
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 5,
            displayAllSelectedText: true
        };
        // Text configuration
        this.myTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Filter cryptos',
            allSelected: 'All selected',
        };
        this.currencies = ['usd', 'eur'];
        this.selectedCurrency = '';
        this.cryptoCurrOptions = [];
        this.appService.coinsSubject.subscribe({
            next: function (v) { return _this.updateCryptoOptions(v); },
        });
    }
    SearchFilterComponent.prototype.ngOnInit = function () {
    };
    SearchFilterComponent.prototype.selectCurrency = function (newValue) {
        this.appService.loadMarketCaps(newValue);
    };
    SearchFilterComponent.prototype.filterChange = function (newValue) {
        // BUG method should not be triggered by filter select
        this.appService.updateFilter(newValue);
    };
    SearchFilterComponent.prototype.updateCryptoOptions = function (coins) {
        var _this = this;
        this.cryptoCurrOptions = [];
        coins.forEach(function (coin, index) {
            _this.cryptoCurrOptions.push({
                id: index,
                name: coin.id.charAt(0).toUpperCase() + coin.id.slice(1)
            });
        });
    };
    SearchFilterComponent = __decorate([
        core_1.Component({
            selector: 'app-search-filter',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css'],
            providers: []
        }),
        __metadata("design:paramtypes", [trading_service_1.AppService])
    ], SearchFilterComponent);
    return SearchFilterComponent;
}());
exports.SearchFilterComponent = SearchFilterComponent;
//# sourceMappingURL=search.component.js.map