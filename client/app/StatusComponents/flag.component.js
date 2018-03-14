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
var status_service_1 = require("../services/status.service");
var profile_service_1 = require("../services/profile.service");
var status_model_1 = require("../DataModals/status.model");
var geocoder = new google.maps.Geocoder();
var FlagComponent = /** @class */ (function () {
    function FlagComponent(statusService, profileService) {
        this.statusService = statusService;
        this.profileService = profileService;
    }
    FlagComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        // asign username from local storage
        this.username = this.user.username;
        console.log(this.username);
    };
    FlagComponent.prototype.onStatusMarker = function (lt, ln) {
        this.lat = lt;
        this.long = ln;
        alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    FlagComponent.prototype.onStatusSubmit = function () {
        this.date = Date.now();
        var newStatusPost = new status_model_1.FlagStatus(this.username, this.date, this.title, this.text, this.locationName, this.contact, this.lat, this.long);
        console.log(newStatusPost);
        this.statusService.saveFlagPost(newStatusPost)
            .subscribe(function () { return console.log('POST from status'); }, function (error) { return console.error(error); });
    };
    Object.defineProperty(FlagComponent.prototype, "user", {
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    FlagComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'postflag',
            templateUrl: 'flag.component.html',
            providers: [status_service_1.StatusService, profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [status_service_1.StatusService, profile_service_1.ProfileService])
    ], FlagComponent);
    return FlagComponent;
}());
exports.FlagComponent = FlagComponent;
//# sourceMappingURL=flag.component.js.map