"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Payment = /** @class */ (function () {
    function Payment(to, from, amounts, fees, txid, success) {
        this.to = to;
        this.from = from;
        this.amounts = amounts;
        this.fees = fees;
        this.txid = txid;
        this.success = success;
    }
    return Payment;
}());
exports.Payment = Payment;
//# sourceMappingURL=payment.modal.js.map