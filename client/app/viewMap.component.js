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
var ViewMapComponent = /** @class */ (function () {
    function ViewMapComponent(profileService, statusService) {
        this.profileService = profileService;
        this.statusService = statusService;
        this.profile = [];
        this.status = [];
    }
    ViewMapComponent.prototype.ngOnInit = function () {
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
        this.statusService.getAllStatus()
            .subscribe(function (status) {
            _this.status = status;
            console.log('GET from stores');
            status.forEach(function (store) {
            });
        }, function (error) { return console.error(error); });
        google.maps.event.addListener(this.map, 'click', function (event) {
            console.log(event.latLng);
            var lt = event.latLng.lat;
            var ln = event.latLng.lng;
            console.log(lt());
            console.log(ln());
            //this.onStatusMarker(event.latLng.lat(),event.latLng.lng(), this.MyAddress, this.TargetAddress);
        });
    };
    ViewMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'viewmap',
            templateUrl: 'cryptomap.component.html',
            providers: [profile_service_1.ProfileService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, status_service_1.StatusService])
    ], ViewMapComponent);
    return ViewMapComponent;
}());
exports.ViewMapComponent = ViewMapComponent;
//# sourceMappingURL=viewMap.component.js.map