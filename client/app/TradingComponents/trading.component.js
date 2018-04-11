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
var TradingComponent = /** @class */ (function () {
    function TradingComponent() {
    }
    TradingComponent.prototype.ngOnInit = function () {
        new TradingView.widget({
            "width": 980,
            "height": 610,
            "symbol": "BITFINEX:BTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "White",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "hideideas": true,
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650"
        });
    };
    TradingComponent = __decorate([
        core_1.Component({
            selector: 'trading',
            templateUrl: './app/TradingComponents/trading.component.html',
            styleUrls: ['./app/TradingComponents/trading.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TradingComponent);
    return TradingComponent;
}());
exports.TradingComponent = TradingComponent;
//# sourceMappingURL=trading.component.js.map