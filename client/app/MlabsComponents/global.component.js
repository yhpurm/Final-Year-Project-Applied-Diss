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
var mlabs_service_1 = require("../services/mlabs.service");
var profile_service_1 = require("../services/profile.service");
var profile_model_1 = require("../DataModals/profile.model");
var GlobalComponent = /** @class */ (function () {
    function GlobalComponent(mlabsService, profileService) {
        this.mlabsService = mlabsService;
        this.profileService = profileService;
        // Modals
        this.profiles = [];
    }
    // On component initialization
    GlobalComponent.prototype.ngOnInit = function () {
        var _this = this;
        // MLABS Service get global users on server
        this.mlabsService.getGlobalUsers()
            .subscribe(function (res) {
            _this.profiles = res;
            console.log("results: " + _this.profiles);
        }, function (error) { return console.error("error:" + error); });
    };
    // Add an friend event
    GlobalComponent.prototype.onAddFriend = function (username, aboutMe, avatar, statusCount, friendCount, isOnline, address, email, lat, long) {
        // Create new friend modal
        var newFriendPost = new profile_model_1.Profile(username, aboutMe, avatar, statusCount, friendCount, isOnline, address, email, lat, long);
        // Pass new friend modal to service
        this.profileService.addFriend(newFriendPost)
            .subscribe(function () { return console.log('POST to friends'); }, function (error) { return console.error(error); });
    };
    GlobalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Global',
            templateUrl: 'global.component.html',
            providers: [mlabs_service_1.MlabsService, profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [mlabs_service_1.MlabsService,
            profile_service_1.ProfileService])
    ], GlobalComponent);
    return GlobalComponent;
}());
exports.GlobalComponent = GlobalComponent;
//# sourceMappingURL=global.component.js.map