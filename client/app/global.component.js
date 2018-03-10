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
var mlabs_service_1 = require("./mlabs.service");
var GlobalComponent = /** @class */ (function () {
    function GlobalComponent(mlabsService) {
        this.mlabsService = mlabsService;
        this.profiles = [];
    }
    GlobalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mlabsService.getGlobalUsers()
            .subscribe(function (res) {
            console.log(res);
            _this.profiles = res;
            console.log(_this.profiles);
        }, function (error) { return console.error("error:" + error); });
    };
    GlobalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Global',
            templateUrl: 'global.component.html',
            providers: [mlabs_service_1.MlabsService]
        }),
        __metadata("design:paramtypes", [mlabs_service_1.MlabsService])
    ], GlobalComponent);
    return GlobalComponent;
}());
exports.GlobalComponent = GlobalComponent;
//# sourceMappingURL=global.component.js.map