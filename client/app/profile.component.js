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
var status_service_1 = require("./status.service");
var auth_service_1 = require("./services/auth.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, statusService, authService) {
        this.profileService = profileService;
        this.statusService = statusService;
        this.authService = authService;
        this.profile = [];
        this.wallets = [];
        this.status = [];
        this.long = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.email = profile.user.email;
        });
        // Avatars will be stored on the client side and the user option of which avatar is what we will actually be sending back and forth to he backend
        var imagePath = ".\avatars\\" + 1 + ".png";
        console.log(imagePath);
        // This service gets the logged in users profile
        this.profileService.getProfileByUsername(this.username)
            .subscribe(function (profiles) {
            _this.profile = profiles;
            console.log("GET this users profile");
        }, function (error) { return console.error(error); });
        // This service gets the logged in users profile
        this.statusService.getStatusByUsername(this.username)
            .subscribe(function (res) {
            _this.status = res;
            console.log(_this.status);
        }, function (error) { return console.error(error); });
    };
    Object.defineProperty(ProfileComponent.prototype, "user", {
        // Functions to return what is in storage
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "useremail", {
        get: function () {
            return JSON.parse(localStorage.getItem('email'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "userAvatar", {
        get: function () {
            return JSON.parse(localStorage.getItem('avatar'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "useraboutMe", {
        get: function () {
            return JSON.parse(localStorage.getItem('aboutMe'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "userisOnline", {
        get: function () {
            return JSON.parse(localStorage.getItem('isOnline'));
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.editAboutme = function () {
        var info = JSON.parse(localStorage.getItem('aboutMe'));
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Profile',
            templateUrl: 'profile.component.html',
            providers: [profile_service_1.ProfileService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            status_service_1.StatusService,
            auth_service_1.AuthService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map