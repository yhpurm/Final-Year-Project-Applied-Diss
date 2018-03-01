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
var status_model_1 = require("./status.model");
var StatusService = /** @class */ (function () {
    // Http Contructor for setting up connection
    function StatusService(http) {
        this.http = http;
    }
    StatusService.prototype.getAllStatus = function () {
        return this.http.get('http://localhost:3000/Tx/Local/All')
            .map(function (data) {
            console.log("got here 1!");
            var extracted = data.json();
            var msgArray = [];
            console.log("got extracted here!");
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new status_model_1.Status(element.username, element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.firstName);
                status = new status_model_1.Status(element.username, element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getTxById = function (id) {
        return this.http.get('http://localhost:3000/Tx/' + id)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                console.log(element.firstName);
                message = new status_model_1.Status(element.username, element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    StatusService.prototype.saveTx = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/post', body, { headers: headers });
    };
    StatusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], StatusService);
    return StatusService;
}());
exports.StatusService = StatusService;
//# sourceMappingURL=status.service.js.map