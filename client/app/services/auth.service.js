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
require("rxjs/add/operator/map");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = "http://localhost:8080";
    }
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
        ; // Get token and asssign to variable to be used elsewhere
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        return this.http.post("http://localhost:3000" + '/login', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user, email, avatar, isOnline, aboutMe) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        localStorage.setItem('email', JSON.stringify(email)); // Set email in local storage as string
        localStorage.setItem('avatar', JSON.stringify(avatar)); // Set avatar in local storage
        localStorage.setItem('isOnline', JSON.stringify(isOnline)); // Set isOnline in local storage 
        localStorage.setItem('aboutMe', JSON.stringify(aboutMe)); // Set aboutMe in local storage
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
        this.storeUserData;
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        //return tokenNotExpired();
        if (this.authToken = localStorage.getItem('token')) {
            return true; // return true
        }
        else {
            return false; // return user to page
        }
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map