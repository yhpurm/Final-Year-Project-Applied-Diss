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
var profile_service_1 = require("./profile.service");
var mlabs_service_1 = require("./mlabs.service");
var MlabsSearchComponent = /** @class */ (function () {
    function MlabsSearchComponent(route, mlabsService) {
        this.route = route;
        this.mlabsService = mlabsService;
        this.profiles = [];
    }
    MlabsSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.test = params['word'];
            console.log(_this.test);
            _this.mlabsService.searchUsers(_this.test)
                .subscribe(function (res) {
                console.log(res);
                _this.profiles = res;
            }, function (error) { return console.error("error:" + error); });
        });
    };
    MlabsSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'MlabsSearchResult',
            templateUrl: 'MlabsSearchResults.component.html',
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, mlabs_service_1.MlabsService])
    ], MlabsSearchComponent);
    return MlabsSearchComponent;
}());
exports.MlabsSearchComponent = MlabsSearchComponent;
//# sourceMappingURL=MlabsSearchResults.component.js.map