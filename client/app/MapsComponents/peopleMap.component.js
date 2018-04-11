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
var PeopleMapComponent = /** @class */ (function () {
    function PeopleMapComponent(profileService, authService) {
        this.profileService = profileService;
        this.authService = authService;
        // Modals
        this.profiles = [];
        this.showmap = false;
    }
    // On component initialization
    PeopleMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Set up google maps view
        this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
            zoom: 4,
            center: { lat: 53.1424, lng: -7.6921 }
        });
        //GET friends from profile service
        this.profileService.getFriends()
            .subscribe(function (res) {
            _this.profiles = res;
            // Unpack friends profile modals
            for (var _i = 0, _a = _this.profiles; _i < _a.length; _i++) {
                var p = _a[_i];
                console.log(p);
                _this.plotFriends(p);
            }
        }, function (error) { return console.error("error:" + error); });
    };
    // Plot friends profile to map
    PeopleMapComponent.prototype.plotFriends = function (friend) {
        // log lat and long
        console.log("friend location:" + friend.lat + friend.long);
        // create icon from friends avatar
        var icon = {
            url: "/app/avatars/" + friend.avatar + ".png",
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        // Create objects to mark on map
        var location = { lat: friend.lat, lng: friend.long };
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icon,
            title: friend.username,
        });
        // add listner to marker that shows profile about me section
        marker.addListener('click', function () {
            alert(friend.aboutMe);
        });
    };
    PeopleMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'viewmap',
            templateUrl: 'viewmap.component.html',
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService,
            auth_service_1.AuthService])
    ], PeopleMapComponent);
    return PeopleMapComponent;
}());
exports.PeopleMapComponent = PeopleMapComponent;
//# sourceMappingURL=peopleMap.component.js.map