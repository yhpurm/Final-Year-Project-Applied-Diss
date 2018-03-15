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
var blockchain_service_1 = require("../services/blockchain.service");
var status_service_1 = require("../services/status.service");
var pools_modal_1 = require("../DataModals/pools.modal");
var geocoder = new google.maps.Geocoder();
var PoolComponent = /** @class */ (function () {
    function PoolComponent(blockchainService, statusService) {
        this.blockchainService = blockchainService;
        this.statusService = statusService;
    }
    PoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("prices init");
        this.blockchainService.getPools()
            .subscribe(function (res) {
            console.log(res);
            _this.AntPool = res.AntPool;
            _this.GBMiners = res.GBMiners;
            _this.SlushPool = res.SlushPool;
            _this.KanoPool = res.KanoPool;
            _this.BitFury = res.BitFury;
            _this.F2Pool = res.F2Pool;
            _this.ViaBTC = res.ViaBTC;
            _this.Unknown = res.Unknown;
        }, function (error) { return console.error("error:" + error); });
        this.getLocation();
        // asign username from local storage
        this.username = this.user.username;
        console.log(this.username);
    };
    PoolComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    PoolComponent.prototype.getLocation = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    console.log(position),
                    _this.setPosition(position);
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
    };
    PoolComponent.prototype.onStatusPoolSubmit = function () {
        this.date = Date.now();
        var newStatusPost = new pools_modal_1.PostPools(this.username, this.date, this.title, this.text, this.Unknown, this.GBMiners, this.SlushPool, this.KanoPool, this.BitFury, this.AntPool, this.F2Pool, this.ViaBTC, this.lat, this.long);
        console.log(newStatusPost);
        this.statusService.savePoolPost(newStatusPost)
            .subscribe(function () { return console.log('POST from status'); }, function (error) { return console.error(error); });
    };
    Object.defineProperty(PoolComponent.prototype, "user", {
        get: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        enumerable: true,
        configurable: true
    });
    PoolComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stats',
            templateUrl: 'postpoolstatus.component.html',
            providers: [blockchain_service_1.BlockchainService, status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [blockchain_service_1.BlockchainService, status_service_1.StatusService])
    ], PoolComponent);
    return PoolComponent;
}());
exports.PoolComponent = PoolComponent;
//# sourceMappingURL=postpoolstatus.component.js.map