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
var mlabs_service_1 = require("../services/mlabs.service");
var GlobalMapComponent = /** @class */ (function () {
    function GlobalMapComponent(mlabsService, authService, statusService) {
        this.mlabsService = mlabsService;
        this.authService = authService;
        this.statusService = statusService;
        this.showmap = true;
    }
    // On component initialization
    GlobalMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set up google maps view
        this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
            zoom: 4,
            center: { lat: 53.1424, lng: -7.6921 }
        });
        // This service gets the general statuses
        this.mlabsService.getGlobalStatus()
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
                    alert("title:" + status.text + "\n" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the balance statuses
        this.mlabsService.getBalGlobalStatus()
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("normal status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("title:" + status.text + "\n" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the blockchain statistics statuses
        this.mlabsService.getStatsGlobalStatus()
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("normal status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/purple-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("title:" + status.text + "\n" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the miner related statuses
        this.mlabsService.getPoolGlobalStatus()
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("normal status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("title:" + status.text + "\n" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the value statuses
        this.mlabsService.getPriceGlobalStatus()
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("normal status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("title:" + status.text + "\n" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the flagged locations statuses
        this.mlabsService.getFlagGlobalStatus()
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("normal status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/ltblu-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("title:" + status.text + "\n" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
        // This service gets the requested bitcoin statuses
        this.mlabsService.getReqGlobalStatus()
            .subscribe(function (res) {
            res.forEach(function (status) {
                console.log("normal status:" + status.lat + status.long);
                var location = { lat: status.lat, lng: status.long };
                var marker = new google.maps.Marker({
                    position: location,
                    map: _this.map,
                    icon: 'http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png',
                    title: status.title,
                });
                marker.addListener('click', function () {
                    alert("title:" + status.text + "\n" + status.text);
                });
            });
        }, function (error) { return console.error(error); });
    };
    GlobalMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'viewmap',
            templateUrl: 'viewmap.component.html',
            providers: [profile_service_1.ProfileService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [mlabs_service_1.MlabsService,
            auth_service_1.AuthService,
            status_service_1.StatusService])
    ], GlobalMapComponent);
    return GlobalMapComponent;
}());
exports.GlobalMapComponent = GlobalMapComponent;
//# sourceMappingURL=viewGlobalMap.component.js.map