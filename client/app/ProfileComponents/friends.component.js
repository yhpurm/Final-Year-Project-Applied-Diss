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
var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(profileService) {
        this.profileService = profileService;
        // Modals
        this.profiles = [];
    }
    // On component initialization
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get friends from service
        this.profileService.getFriends()
            .subscribe(function (res) {
            _this.profiles = res;
            console.log("results: " + _this.profiles);
        }, function (error) { return console.error("error:" + error); });
    };
    FriendsComponent.prototype.onDeleteFriend = function (name) {
        var retVal = confirm("Do you want to continue ?");
        if (retVal == true) {
            this.profileService
                .deleteFriend(name)
                .subscribe(function (result) { return console.log('DELETE from products'); }, function (error) { return console.error(error); });
        }
        else {
            alert("Delete cancled!");
            return false;
        }
    };
    FriendsComponent.prototype.generateBarCode = function (addr) {
        var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + addr + '&amp;size=200x200';
        console.log(addr);
        return url;
    };
    FriendsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Friends',
            templateUrl: 'friends.component.html',
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=friends.component.js.map