export class Status {
    constructor(public username: string,
        public date: Number,
        public title: String,
        public text: String,
        public valueAtTime: Number,
        public sentAmount: Number,
        public bitcoinAddress: String,
        public receivingAddress: String,
        public lat: Number,
        public long: Number) {}
}

export class BalStatus {
    constructor(public username: string,
        public date: Number,
        public title: String,
        public text: String,
        public balance: Number,
        public lat: Number,
        public long: Number) {}
}

export class FlagStatus {
    constructor(public username: string,
        public date: Number,
        public title: String,
        public text: String,
        public locationName: String,
        public contact: String,
        public lat: Number,
        public long: Number) {}
}