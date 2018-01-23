export class Profile {
    constructor(public username: string,
        public firstName: string,public lastName: string,
        public bitcoinAddress: string, public email: string, 
        public phone: number,public lat: number,
        public long: number) {}
}