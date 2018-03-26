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
var mlabs_service_1 = require("../services/mlabs.service");
var MlabsSearchComponent = /** @class */ (function () {
    function MlabsSearchComponent(route, mlabsService) {
        this.route = route;
        this.mlabsService = mlabsService;
        // Modals
        this.profiles = [];
    }
    // On component initialization
    MlabsSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            // Retrieve string from router parameters
            _this.value = params['word'];
            console.log("Searched word: " + _this.value);
            // Contact MLABS service
            _this.mlabsService.searchUsers(_this.value)
                .subscribe(function (res) {
                _this.profiles = res;
                console.log("MLABS search results: " + _this.profiles);
            }, function (error) { return console.error("error:" + error); });
        });
    };
    MlabsSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'MlabsSearchResult',
            templateUrl: 'MlabsSearchResults.component.html',
            providers: [mlabs_service_1.MlabsService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, mlabs_service_1.MlabsService])
    ], MlabsSearchComponent);
    return MlabsSearchComponent;
}());
exports.MlabsSearchComponent = MlabsSearchComponent;
//# sourceMappingURL=MlabsSearchResults.component.js.map