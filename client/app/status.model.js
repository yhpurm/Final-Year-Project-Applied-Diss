"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status = /** @class */ (function () {
    function Status(username, text, date, bitcoinAddress, receivingAddress, lat, long) {
        this.username = username;
        this.text = text;
        this.date = date;
        this.bitcoinAddress = bitcoinAddress;
        this.receivingAddress = receivingAddress;
        this.lat = lat;
        this.long = long;
    }
    return Status;
}());
exports.Status = Status;
//# sourceMappingURL=status.model.js.map