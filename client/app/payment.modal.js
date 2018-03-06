"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Payments = /** @class */ (function () {
    function Payments(to, from, amounts, fees, txid, success) {
        this.to = to;
        this.from = from;
        this.amounts = amounts;
        this.fees = fees;
        this.txid = txid;
        this.success = success;
    }
    return Payments;
}());
exports.Payments = Payments;
//# sourceMappingURL=payment.modal.js.map