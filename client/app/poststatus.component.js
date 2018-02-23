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
var status_service_1 = require("./status.service");
var status_model_1 = require("./status.model");
var geocoder = new google.maps.Geocoder();
var PostStatusComponent = /** @class */ (function () {
    function PostStatusComponent(statusService) {
        this.statusService = statusService;
    }
    PostStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
            zoom: 7,
            center: { lat: 53.1424, lng: -7.6921 }
        });
        google.maps.event.addListener(this.map, 'click', function (event) {
            console.log(event.latLng);
            var lt = event.latLng.lat;
            var ln = event.latLng.lng;
            console.log(lt());
            console.log(ln());
            _this.onStatusMarker(event.latLng.lat(), event.latLng.lng(), _this.MyAddress, _this.TargetAddress);
        });
    };
    PostStatusComponent.prototype.selectItem = function (value) {
        this.TargetAddress = value;
    };
    PostStatusComponent.prototype.onStatusMarker = function (lt, ln, myAdd, targetAdd) {
        this.lat = lt;
        this.long = ln;
        alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
    };
    PostStatusComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
    };
    PostStatusComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition);
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    PostStatusComponent.prototype.onAddMarker = function (name, lt, ln) {
        var lat = lt;
        var long = ln;
        var myLatLng = { lat: lat, lng: long }, map = this.map, marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: name,
        });
        marker.addListener('click', function () {
            // Stuff for when Tx is clicked goes here
        });
    };
    PostStatusComponent.prototype.onStatusSubmit = function () {
        this.date = Date.now();
        var newStatusPost = new status_model_1.Status(this.username, this.date, this.title, this.text, this.price, this.value, this.MyAddress, this.TargetAddress, this.lat, this.long);
        this.statusService.saveTx(newStatusPost)
            .subscribe(function () { return console.log('POST from stores'); }, function (error) { return console.error(error); });
    };
    PostStatusComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'poststatus',
            templateUrl: 'poststatus.component.html',
            providers: [status_service_1.StatusService]
        }),
        __metadata("design:paramtypes", [status_service_1.StatusService])
    ], PostStatusComponent);
    return PostStatusComponent;
}());
exports.PostStatusComponent = PostStatusComponent;
//# sourceMappingURL=poststatus.component.js.map