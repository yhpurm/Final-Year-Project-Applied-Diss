export class Ticker {
    constructor(
        public last: string,
        public buy: string,
        public sell: string,
        public symbol: string) {}
}

export class PostTicker {
    constructor(
        public username: string,
        public date: number,
        public title: string,
        public text: string,
        public last: number,
        public buy: number,
        public sell: number,
        public symbol: string,
        public lat: number,
        public long: number) {}
}