export class Status {
    constructor(public username: string,
        public text: string,
        public date: Date,
        public bitcoinAddress: string,
        public receivingAddress: string,
        public lat: number,
        public long: number) {}
}