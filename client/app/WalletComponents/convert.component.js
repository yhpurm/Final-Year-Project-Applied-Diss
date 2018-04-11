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
var profile_service_1 = require("../services/profile.service");
var blockchain_service_1 = require("../services/blockchain.service");
var ConvertComponent = /** @class */ (function () {
    function ConvertComponent(profileService, blockchainService) {
        this.profileService = profileService;
        this.blockchainService = blockchainService;
        this.fiatGroup = ["EUR", "USD", "JPY", "SGD", "HKD", "CAD", "NZD", "AUD", "CLP", "GBP", "DKK", "SEK", "ISK", "CHF", "BRL", "RUB", "PLN", "THB", "KRW", "TWD"];
    }
    ConvertComponent.prototype.onConvertFiat = function () {
        var _this = this;
        if (this.fiat == null) {
            return alert("Select Fiat");
        }
        else if (this.value == null) {
            return alert("Enter value");
        }
        console.log(this.fiat);
        console.log(this.value);
        this.blockchainService.getValueAtTime(this.fiat, this.value)
            .subscribe(function (message) { return _this.result = message; }, function (error) { return console.error(error); });
    };
    ConvertComponent.prototype.updateFiat = function (val) {
        this.fiat = val;
    };
    ConvertComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'convert',
            templateUrl: 'convert.component.html',
            providers: [profile_service_1.ProfileService, blockchain_service_1.BlockchainService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, blockchain_service_1.BlockchainService])
    ], ConvertComponent);
    return ConvertComponent;
}());
exports.ConvertComponent = ConvertComponent;
//# sourceMappingURL=convert.component.js.map