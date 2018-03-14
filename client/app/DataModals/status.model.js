"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status = /** @class */ (function () {
    function Status(username, date, title, text, valueAtTime, sentAmount, bitcoinAddress, receivingAddress, lat, long) {
        this.username = username;
        this.date = date;
        this.title = title;
        this.text = text;
        this.valueAtTime = valueAtTime;
        this.sentAmount = sentAmount;
        this.bitcoinAddress = bitcoinAddress;
        this.receivingAddress = receivingAddress;
        this.lat = lat;
        this.long = long;
    }
    return Status;
}());
exports.Status = Status;
var BalStatus = /** @class */ (function () {
    function BalStatus(username, date, title, text, balance, lat, long) {
        this.username = username;
        this.date = date;
        this.title = title;
        this.text = text;
        this.balance = balance;
        this.lat = lat;
        this.long = long;
    }
    return BalStatus;
}());
exports.BalStatus = BalStatus;
var FlagStatus = /** @class */ (function () {
    function FlagStatus(username, date, title, text, locationName, contact, lat, long) {
        this.username = username;
        this.date = date;
        this.title = title;
        this.text = text;
        this.locationName = locationName;
        this.contact = contact;
        this.lat = lat;
        this.long = long;
    }
    return FlagStatus;
}());
exports.FlagStatus = FlagStatus;
//# sourceMappingURL=status.model.js.map