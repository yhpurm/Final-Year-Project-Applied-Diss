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
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(profileService) {
        this.profileService = profileService;
        this.imagePaths = ['/app/avatars/0.png', '/app/avatars/1.png', '/app/avatars/2.png'];
    }
    SettingsComponent.prototype.onImgClick = function (img) {
        console.log(img);
        this.profileService.patchAvatar(img)
            .subscribe(function () { return alert('Avatar changed!'); }, function (error) { return console.error(error); });
    };
    SettingsComponent.prototype.onEnter = function (text) {
        console.log(text);
        var retVal = confirm("Do you want to update your bio ?");
        if (retVal == true) {
            this.profileService.patchBio(text)
                .subscribe(function () { return alert('Bio changed!'); }, function (error) { return console.error(error); });
        }
        else {
            alert("submission cancled");
        }
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Settings',
            templateUrl: 'settings.component.html',
            styles: ["\n  \tul { padding:0; width:780px; margin:20px auto}\n  \tli { display:inline;}\n        .tn{ \n\t   margin:2px 0px;\n\t   box-shadow:#999 1px 1px 3px 1px; \n\t   cursor: pointer \n        }\n  "],
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map