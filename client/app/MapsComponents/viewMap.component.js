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
var ViewMapComponent = /** @class */ (function () {
    function ViewMapComponent(profileService, authService, statusService) {
        this.profileService = profileService;
        this.authService = authService;
        this.statusService = statusService;
    }
    // On component initialization
    ViewMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load map view
        this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
            zoom: 4,
            center: { lat: 53.1424, lng: -7.6921 }
        });
        // get logged in username
        this.username = this.user.username;
        console.log(this.username);
        // This service gets the logged in users posted statuses
        this.statusService.getStatusByUsername(this.username)
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("normal status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("text:" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the logged in users posted balance statuses
        this.statusService.getBalStatusByUsername(this.username)
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("balance status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("text:" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the logged in users posted blockchain statistics statuses
        this.statusService.getStatsStatusByUsername(this.username)
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("stats status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/purple-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("text:" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the logged in users posted miner related statuses
        this.statusService.getPoolStatusByUsername(this.username)
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("pool status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("text:" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        this.statusService.getPriceStatusByUsername(this.username)
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("price status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("text:" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the logged in users posted flagged statuses
        this.statusService.getFlagsStatusByUsername(this.username)
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("flags status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/ltblu-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("text:" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the logged in users posted requested bitcoin statuses
        this.statusService.getReqStatusByUsername(this.username)
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("Request status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("text:" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
    };
    Object.defineProperty(ViewMapComponent.prototype, "user", {
        // returns logged in user from local storage
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    ViewMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'viewmap',
            templateUrl: 'viewmap.component.html',
            providers: [profile_service_1.ProfileService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            auth_service_1.AuthService,
            status_service_1.StatusService])
    ], ViewMapComponent);
    return ViewMapComponent;
}());
exports.ViewMapComponent = ViewMapComponent;
//# sourceMappingURL=viewMap.component.js.map