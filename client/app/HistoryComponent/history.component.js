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
var auth_service_1 = require("../services/auth.service");
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(profileService, authService) {
        this.profileService = profileService;
        this.authService = authService;
        this.history = [];
        this.showmap = true;
    }
    // On component initialization
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get logged in username
        this.username = this.user.username;
        console.log(this.username);
        this.profileService.getMyPayments()
            .subscribe(function (response) {
            _this.history = response;
            console.log(_this.history);
            console.log("got account history");
        }, function (error) { return console.error(error); });
    };
    Object.defineProperty(HistoryComponent.prototype, "user", {
        // returns logged in user from local storage
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    HistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'history',
            templateUrl: 'history.component.html',
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            auth_service_1.AuthService])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map