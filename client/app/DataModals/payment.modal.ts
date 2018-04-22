export class Payment {
    constructor(
        public to: string,
        public from: number,
        public amounts: number,
        public fees: number,
        public txid: number,
        public success: number,
        public lat: number,
        public long: number) {}
        
}