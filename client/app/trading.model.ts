export class trading{
    constructor(public id: string,  public name: string,
        public symbol: string, public rank : Number,
        public price_usd: Number, public price_btc: Number,
        public h24_volume_usd: Number, public market_cap_usd: Number, 
        public available_supply: Number, public max_supply: Number, public percent_change_1h: Number, public percent_change_24h: Number, public percent_change_7d: Number, public last_updated: Number){}
}