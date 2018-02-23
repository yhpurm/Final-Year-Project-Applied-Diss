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
var RequestComponent = /** @class */ (function () {
    function RequestComponent(profileService, statusService) {
        this.profileService = profileService;
        this.statusService = statusService;
        this.profile = [];
        this.long = [];
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
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