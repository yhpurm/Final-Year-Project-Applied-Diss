export class SendBTC {
    constructor(
        public guid: string,
        public password: string,
        public amount: number,
        public to: string) {}
}