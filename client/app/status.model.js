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
//# sourceMappingURL=status.model.js.map