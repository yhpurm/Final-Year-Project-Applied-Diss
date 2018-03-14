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
var request_modal_1 = require("../DataModals/request.modal");
var profile_service_1 = require("../services/profile.service");
var status_service_1 = require("../services/status.service");
var geocoder = new google.maps.Geocoder();
var RequestComponent = /** @class */ (function () {
    function RequestComponent(profileService, statusService) {
        this.profileService = profileService;
        this.statusService = statusService;
        this.profile = [];
        this.wallets = [];
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        // asign username from local storage
        this.username = this.user.username;
        console.log(this.username);
        this.profileService.getMyWallets()
            .subscribe(function (response) {
            _this.wallets = response;
            console.log(_this.wallets);
            console.log("got wallets");
        }, function (error) { return console.error(error); });
        this.getLocation();
    };
    RequestComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    RequestComponent.prototype.setAddress = function (address) {
        console.log("address: " + address);
        this.address = address;
        console.log(this.address);
    };
    RequestComponent.prototype.getLocation = function () {
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
    RequestComponent.prototype.onStatusSubmit = function () {
        this.date = Date.now();
        console.log(this.username, this.date, this.title, this.text, this.address, this.lat, this.long);
        var newStatusPost = new request_modal_1.ReqStatus(this.username, this.date, this.title, this.text, this.amount, this.address, this.lat, this.long);
        this.statusService.saveReqPost(newStatusPost)
            .subscribe(function () { return console.log('POST from status'); }, function (error) { return console.error(error); });
    };
    Object.defineProperty(RequestComponent.prototype, "user", {
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    RequestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Request',
            templateUrl: 'requestbitcoin.component.html',
            providers: [profile_service_1.ProfileService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, status_service_1.StatusService])
    ], RequestComponent);
    return RequestComponent;
}());
exports.RequestComponent = RequestComponent;
//# sourceMappingURL=requestbitcoin.component.js.map