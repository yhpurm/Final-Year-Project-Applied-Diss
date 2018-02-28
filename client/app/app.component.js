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
var router_1 = require("@angular/router");
var mlabs_service_1 = require("./mlabs.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, mlabsService) {
        this.router = router;
        this.mlabsService = mlabsService;
        this.profile = [];
    }
    AppComponent.prototype.goToSearch = function (search) {
        var _this = this;
        console.log(search);
        this.word = search;
        this.router.navigateByUrl("/search?word=" + this.word);
        this.mlabsService.searchUsers(this.word)
            .subscribe(function (users) {
            _this.profile = users;
            console.log('GET from stores');
            users.forEach(function (store) {
                // do stuff with response
            });
        }, function (error) { return console.error(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [mlabs_service_1.MlabsService]
        }),
        __metadata("design:paramtypes", [router_1.Router, mlabs_service_1.MlabsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map