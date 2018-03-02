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
var MlabsSearchComponent = /** @class */ (function () {
    function MlabsSearchComponent(route) {
        this.route = route;
    }
    MlabsSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.test = params['word'];
            console.log(_this.test);
        });
    };
    MlabsSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'MlabsSearchResult',
            templateUrl: 'MlabsSearchResults.component.html',
            providers: [profile_service_1.ProfileService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], MlabsSearchComponent);
    return MlabsSearchComponent;
}());
exports.MlabsSearchComponent = MlabsSearchComponent;
//# sourceMappingURL=MlabsSearchResults.component.js.map