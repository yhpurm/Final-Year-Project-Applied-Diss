export class Profile {
    constructor(public username: string, public aboutMe: string,
        public avatar: Number, public statusCount: Number,
        public friendCount: Number, public isOnline: Boolean,
        public bitcoinAddress: string, public email: string, 
        public lat: number, public long: number) {}
}