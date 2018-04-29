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
var status_service_1 = require("../services/status.service");
var auth_service_1 = require("../services/auth.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, statusService, authService) {
        this.profileService = profileService;
        this.statusService = statusService;
        this.authService = authService;
        // Modals
        this.profile = [];
        this.wallets = [];
        this.status = [];
        this.balStatus = [];
        this.statStatus = [];
        this.poolsStatus = [];
        this.tickerStatus = [];
        this.flagStatus = [];
        this.reqStatus = [];
    }
    // timestamp to date
    ProfileComponent.prototype.Timestamp = function (date) {
        var d = new Date(date);
        return d;
    };
    // After component initialization
    ProfileComponent.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get username from local storage
        this.username = this.user.username;
        console.log(this.username);
        // Get wallets from profile service
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
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
        // This service gets the logged in users profile
        this.statusService.getBalStatusByUsername(this.username)
            .subscribe(function (res) {
            _this.balStatus = res;
            console.log(_this.balStatus);
        }, function (error) { return console.error(error); });
        // This service gets the logged in users profile
        this.statusService.getStatsStatusByUsername(this.username)
            .subscribe(function (res) {
            _this.statStatus = res;
            console.log(_this.statStatus);
        }, function (error) { return console.error(error); });
        // This service gets the logged in users profile
        this.statusService.getPoolStatusByUsername(this.username)
            .subscribe(function (res) {
            _this.poolsStatus = res;
            console.log("this.poolsStatus");
            console.log(_this.poolsStatus);
        }, function (error) { return console.error(error); });
        // This service gets the logged in users profile
        this.statusService.getPriceStatusByUsername(this.username)
            .subscribe(function (res) {
            _this.tickerStatus = res;
            console.log("tikcer: " + _this.tickerStatus);
        }, function (error) { return console.error(error); });
        // This service gets the logged in users profile
        this.statusService.getFlagsStatusByUsername(this.username)
            .subscribe(function (res) {
            _this.flagStatus = res;
            console.log(_this.flagStatus);
        }, function (error) { return console.error(error); });
        // This service gets the logged in users profile
        this.statusService.getReqStatusByUsername(this.username)
            .subscribe(function (res) {
            _this.reqStatus = res;
            console.log(_this.reqStatus);
        }, function (error) { return console.error(error); });
    };
    // Delete status event
    ProfileComponent.prototype.onDeleteStatus = function (title) {
        var proceed = confirm("Do you want to continue ?");
        if (proceed == true) {
            this.statusService
                .deleteStatusWithTitle(title)
                .subscribe(function (result) { return alert('DELETED ' + title); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    // Delete balance status event
    ProfileComponent.prototype.onDeleteBalStatus = function (title) {
        var proceed = confirm("Do you want to continue ?");
        if (proceed == true) {
            this.statusService
                .deleteBalStatusWithTitle(title)
                .subscribe(function (result) { return alert('DELETED ' + title); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    // Delete blockchain status event
    ProfileComponent.prototype.onDeleteStatsStatus = function (title) {
        var proceed = confirm("Do you want to continue ?");
        if (proceed == true) {
            this.statusService
                .deleteStatsStatusWithTitle(title)
                .subscribe(function (result) { return alert('DELETED ' + title); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    // Delete miners status event
    ProfileComponent.prototype.onDeletePoolStatus = function (title) {
        var proceed = confirm("Do you want to continue ?");
        if (proceed == true) {
            this.statusService
                .deletePoolStatusWithTitle(title)
                .subscribe(function (result) { return alert('DELETED ' + title); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    // Delete values status event
    ProfileComponent.prototype.onDeletePriceStatus = function (title) {
        var proceed = confirm("Do you want to continue ?");
        if (proceed == true) {
            this.statusService
                .deletePriceStatusWithTitle(title)
                .subscribe(function (result) { return alert('DELETED ' + title); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    // Delete donations status event
    ProfileComponent.prototype.onDeleteReqStatus = function (title) {
        var proceed = confirm("Do you want to continue ?");
        if (proceed == true) {
            this.statusService
                .deleteReqStatusWithTitle(title)
                .subscribe(function (result) { return alert('DELETED ' + title); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    ProfileComponent.prototype.generateBarCode = function (addr) {
        var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + addr + '&amp;size=200x200';
        console.log(addr);
        return url;
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