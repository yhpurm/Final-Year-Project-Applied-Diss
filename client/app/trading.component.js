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
var trading_service_1 = require("./trading.service");
var tradingComponent = /** @class */ (function () {
    function tradingComponent(tradingService) {
        this.tradingService = tradingService;
        this.trading = [];
    }
    tradingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Avatars will be stored on the client side and the user option of which avatar is what we will actually be sending back and forth to he backend
        var imagePath = "\\avatars\\" + 1 + ".png";
        console.log(imagePath);
        // This service gets the logged in users trading
        this.tradingService.getTrading()
            .subscribe(function (tradings) {
            _this.trading = tradings;
            console.log("GET this users trading");
        }, function (error) { return console.error(error); });
    };
    tradingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'trading',
            templateUrl: 'trading.component.html',
            providers: [trading_service_1.tradingService]
        }),
        __metadata("design:paramtypes", [trading_service_1.tradingService])
    ], tradingComponent);
    return tradingComponent;
}());
exports.tradingComponent = tradingComponent;
//# sourceMappingURL=trading.component.js.map