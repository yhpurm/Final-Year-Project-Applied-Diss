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
var profile_service_1 = require("./profile.service");
var GenerateComponent = /** @class */ (function () {
    function GenerateComponent(profileService) {
        this.profileService = profileService;
        this.wallet = [];
        this.long = [];
    }
    GenerateComponent.prototype.onCreateNewWallet = function () {
        var _this = this;
        var atSymbol = this.email.includes("@");
        var dotCom = this.email.endsWith(".com");
        if (atSymbol == false || dotCom == false) {
            alert("Email must contain @ and end with .com");
            return;
        }
        this.profileService.createWallet(this.walletpass, this.email, this.username)
            .subscribe(function (messages) { return _this.wallet = messages; }, function (error) { return console.error(error); });
        console.log(this.wallet);
    };
    GenerateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Generate',
            templateUrl: 'generatewallet.component.html',
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], GenerateComponent);
    return GenerateComponent;
}());
exports.GenerateComponent = GenerateComponent;
//# sourceMappingURL=generatewallet.component.js.map