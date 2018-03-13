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
var status_service_1 = require("./status.service");
var profile_service_1 = require("./profile.service");
var status_model_1 = require("./status.model");
var auth_service_1 = require("./services/auth.service");
var geocoder = new google.maps.Geocoder();
var PostStatusComponent = /** @class */ (function () {
    function PostStatusComponent(statusService, authService, profileService) {
        this.statusService = statusService;
        this.authService = authService;
        this.profileService = profileService;
        this.wallets = [];
        this.friends = [];
    }
    PostStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
        });
        console.log(this.username);
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
        this.profileService.getFriends()
            .subscribe(function (res) {
            console.log(res);
            _this.friends = res;
            console.log(_this.friends);
        }, function (error) { return console.error("error:" + error); });
        this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
            zoom: 7,
            center: { lat: 53.1424, lng: -7.6921 }
        });
        google.maps.event.addListener(this.map, 'click', function (event) {
            console.log(event.latLng);
            var lt = event.latLng.lat;
            var ln = event.latLng.lng;
            console.log(lt());
            console.log(ln());
            _this.onStatusMarker(event.latLng.lat(), event.latLng.lng());
        });
    };
    PostStatusComponent.prototype.onStatusMarker = function (lt, ln) {
        this.lat = lt;
        this.long = ln;
        alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    PostStatusComponent.prototype.setAddress = function (address) {
        console.log("address: " + address);
        this.bitcoinAddress = address;
        console.log(this.bitcoinAddress);
    };
    PostStatusComponent.prototype.setTargetAddress = function (address) {
        console.log("address: " + address);
        this.receivingAddress = address;
        console.log(this.receivingAddress);
    };
    PostStatusComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    PostStatusComponent.prototype.getLocation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position),
                    _this.setPosition(position);
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
    };
    PostStatusComponent.prototype.onStatusSubmit = function () {
        this.date = Date.now();
        console.log(this.username, this.date, this.title, this.text, this.price, this.sentAmount, this.bitcoinAddress, this.receivingAddress, this.lat, this.long);
        var newStatusPost = new status_model_1.Status(this.username, this.date, this.title, this.text, this.price, this.sentAmount, this.bitcoinAddress, this.receivingAddress, this.lat, this.long);
        this.statusService.saveTx(newStatusPost)
            .subscribe(function () { return console.log('POST from status'); }, function (error) { return console.error(error); });
    };
    PostStatusComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'poststatus',
            templateUrl: 'poststatus.component.html',
            providers: [status_service_1.StatusService, profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [status_service_1.StatusService,
            auth_service_1.AuthService,
            profile_service_1.ProfileService])
    ], PostStatusComponent);
    return PostStatusComponent;
}());
exports.PostStatusComponent = PostStatusComponent;
//# sourceMappingURL=poststatus.component.js.map