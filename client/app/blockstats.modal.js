"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stats = /** @class */ (function () {
    function Stats(market_price_usd, hash_rate, total_fees_btc, n_btc_mined, n_tx, n_blocks_mined, minutes_between_blocks, totalbc, n_blocks_total, estimated_transaction_volume_usd, blocks_size, miners_revenue_usd, nextretarget, difficulty, estimated_btc_sent, miners_revenue_btc, total_btc_sent, trade_volume_btc, trade_volume_usd, timestamp) {
        this.market_price_usd = market_price_usd;
        this.hash_rate = hash_rate;
        this.total_fees_btc = total_fees_btc;
        this.n_btc_mined = n_btc_mined;
        this.n_tx = n_tx;
        this.n_blocks_mined = n_blocks_mined;
        this.minutes_between_blocks = minutes_between_blocks;
        this.totalbc = totalbc;
        this.n_blocks_total = n_blocks_total;
        this.estimated_transaction_volume_usd = estimated_transaction_volume_usd;
        this.blocks_size = blocks_size;
        this.miners_revenue_usd = miners_revenue_usd;
        this.nextretarget = nextretarget;
        this.difficulty = difficulty;
        this.estimated_btc_sent = estimated_btc_sent;
        this.miners_revenue_btc = miners_revenue_btc;
        this.total_btc_sent = total_btc_sent;
        this.trade_volume_btc = trade_volume_btc;
        this.trade_volume_usd = trade_volume_usd;
        this.timestamp = timestamp;
    }
    return Stats;
}());
exports.Stats = Stats;
var StatsStatus = /** @class */ (function () {
    function StatsStatus(username, date, title, text, market_price_usd, hash_rate, total_fees_btc, n_btc_mined, n_tx, n_blocks_mined, totalbc, n_blocks_total, estimated_transaction_volume_usd, blocks_size, miners_revenue_usd, nextretarget, difficulty, estimated_btc_sent, miners_revenue_btc, total_btc_sent, trade_volume_btc, trade_volume_usd, timestamp) {
        this.username = username;
        this.date = date;
        this.title = title;
        this.text = text;
        this.market_price_usd = market_price_usd;
        this.hash_rate = hash_rate;
        this.total_fees_btc = total_fees_btc;
        this.n_btc_mined = n_btc_mined;
        this.n_tx = n_tx;
        this.n_blocks_mined = n_blocks_mined;
        this.totalbc = totalbc;
        this.n_blocks_total = n_blocks_total;
        this.estimated_transaction_volume_usd = estimated_transaction_volume_usd;
        this.blocks_size = blocks_size;
        this.miners_revenue_usd = miners_revenue_usd;
        this.nextretarget = nextretarget;
        this.difficulty = difficulty;
        this.estimated_btc_sent = estimated_btc_sent;
        this.miners_revenue_btc = miners_revenue_btc;
        this.total_btc_sent = total_btc_sent;
        this.trade_volume_btc = trade_volume_btc;
        this.trade_volume_usd = trade_volume_usd;
        this.timestamp = timestamp;
    }
    return StatsStatus;
}());
exports.StatsStatus = StatsStatus;
//# sourceMappingURL=blockstats.modal.js.map