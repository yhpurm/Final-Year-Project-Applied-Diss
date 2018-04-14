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
var mywallet_model_1 = require("../DataModals/mywallet.model");
var ProfileService = /** @class */ (function () {
    // Http Contructor for setting up connection
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getProfileByUsername = function (user) {
        return this.http.get('http://localhost:3000/login/profile/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.firstName);
                message = new profile_model_1.Profile(element.username, element.aboutMe, element.avatar, element.statusCount, element.friendCount, element.isOnline, element.bitcoinAddress, element.email, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    ProfileService.prototype.getFriends = function () {
        return this.http.get('http://localhost:3000/Friends')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.avatar);
                message = new profile_model_1.Profile(element.username, element.aboutMe, element.avatar, element.statusCount, element.friendCount, element.isOnline, element.bitcoinAddress, element.email, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    ProfileService.prototype.getMyWallets = function () {
        return this.http.get('http://localhost:3000/wallets/all')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.guid);
                console.log(element.address);
                console.log(element.label);
                message = new mywallet_model_1.Wallet(element.guid, element.address, element.label);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    ProfileService.prototype.deleteFriend = function (val) {
        console.log(val);
        return this.http
            .delete('http://localhost:3000/removeFriend/' + val);
    };
    ProfileService.prototype.addFriend = function (friend) {
        console.log(friend);
        var body = JSON.stringify(friend);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/AddFriend', body, { headers: headers });
    };
    ProfileService.prototype.patchAvatar = function (img) {
        console.log(img);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/settings/avatar/' + img, { headers: headers });
    };
    ProfileService.prototype.patchBio = function (text) {
        console.log(text);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/settings/bio/' + text, { headers: headers });
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map