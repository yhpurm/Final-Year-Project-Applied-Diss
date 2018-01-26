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
var status_model_1 = require("./status.model");
var CryptoMapComponent = /** @class */ (function () {
    function CryptoMapComponent(profileService, statusService) {
        this.profileService = profileService;
        this.statusService = statusService;
        this.profile = [];
    }
    CryptoMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = "test";
        this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
            zoom: 7,
            center: { lat: 53.1424, lng: -7.6921 }
        });
        // this.profileService.getDetailsByUsername(this.username)
        //     .subscribe(
        //         userProfile => {
        //             this.profile = userProfile;
        //             console.log('GET username');
        //             userProfile.forEach(store => {
        //               this.onAddMarker(userProfile.username, userProfile.lat, userProfile.long);
        //               console.log(userProfile.username + "added");
        //             })  
        //         },
        //         error => console.error(error)
        // );
        google.maps.event.addListener(this.map, 'click', function (event) {
            console.log(event.latLng);
            var lt = event.latLng.lat;
            var ln = event.latLng.lng;
            console.log(lt());
            console.log(ln());
            _this.onProfileMarker(event.latLng.lat(), event.latLng.lng(), _this.MyAddress, _this.TargetAddress);
        });
    };
    CryptoMapComponent.prototype.onProfileMarker = function (lt, ln, myAdd, targetAdd) {
        var newStatus = prompt("Please enter your transaction status", "Status");
        console.log(newStatus);
        if (newStatus != null) {
            var location = { lat: lt, lng: ln };
            var marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: newStatus,
            });
            var d = new Date();
            var newStatusPost = new status_model_1.Status(this.username, newStatus, d, myAdd, targetAdd, lt, ln);
            this.statusService.saveTx(newStatusPost)
                .subscribe(function () { return console.log('POST from status'); }, function (error) { return console.error(error); });
            marker.addListener('click', function () {
                // Stuff for when Tx is clicked goes here
            });
        }
    };
    CryptoMapComponent.prototype.onAddMarker = function (name, lt, ln) {
        var lat = lt;
        var long = ln;
        var myLatLng = { lat: lat, lng: long }, map = this.map, marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: name,
        });
        marker.addListener('click', function () {
            // Stuff for when Tx is clicked goes here
        });
    };
    CryptoMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map',
            templateUrl: 'cryptomap.component.html',
            providers: [profile_service_1.ProfileService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, status_service_1.StatusService])
    ], CryptoMapComponent);
    return CryptoMapComponent;
}());
exports.CryptoMapComponent = CryptoMapComponent;
//# sourceMappingURL=cryptomap.component.js.map