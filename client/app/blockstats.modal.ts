export class Stats {
    constructor(
        public market_price_usd: number,
        public hash_rate: number,
        public total_fees_btc: number,
        public n_btc_mined: number,
        public n_tx: number,
        public n_blocks_mined: number,
        public minutes_between_blocks: number,
        public totalbc: number,
        public n_blocks_total: number,
        public estimated_transaction_volume_usd: number,
        public blocks_size: number,
        public miners_revenue_usd: number,
        public nextretarget: number,
        public difficulty: number,
        public estimated_btc_sent: number,
        public miners_revenue_btc: number,
        public total_btc_sent: number,
        public trade_volume_btc: number,
        public trade_volume_usd: number,
        public timestamp: number) {}
}