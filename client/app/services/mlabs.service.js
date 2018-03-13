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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var profile_model_1 = require("../DataModals/profile.model");
var MlabsService = /** @class */ (function () {
    // Http Contructor for setting up connection
    function MlabsService(http) {
        this.http = http;
    }
    MlabsService.prototype.getGlobalUsers = function () {
        return this.http.get('http://localhost:3000/globalusers')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, extracted_1 = extracted; _i < extracted_1.length; _i++) {
                var element = extracted_1[_i];
                console.log(element.username);
                message = new profile_model_1.Profile(element.username, element.aboutMe, element.avatar, element.statusCount, element.friendCount, element.isOnline, element.bitcoinAddress, element.email, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MlabsService.prototype.searchUsers = function (username) {
        return this.http.get('http://localhost:3000/globalusers/' + username)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            console.log(extracted);
            console.log(extracted.username);
            for (var _i = 0, extracted_2 = extracted; _i < extracted_2.length; _i++) {
                var element = extracted_2[_i];
                console.log(element.username);
                message = new profile_model_1.Profile(element.username, element.aboutMe, element.avatar, element.statusCount, element.friendCount, element.isOnline, element.bitcoinAddress, element.email, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MlabsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MlabsService);
    return MlabsService;
}());
exports.MlabsService = MlabsService;
//# sourceMappingURL=mlabs.service.js.map