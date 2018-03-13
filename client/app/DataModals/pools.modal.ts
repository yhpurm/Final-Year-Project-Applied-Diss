export class Pools {
    constructor(
        public GHash: number,
        public NiceHash: number,
        public CKPool: number,
        public oneHash: number,
        public Unknown: number,
        public BitClub: number,
        public Telco: number,
        public HaoBTC: number,
        public GBMiners: number,
        public SlushPool: number,
        public KanoCKPool: number,
        public BTCCPool: number,
        public BitMinter: number,
        public BitFury: number,
        public AntPool: number,
        public F2Pool: number,
        public ViaBTC: number,
        public BWCOM: number,
        public BTCcom: number) {}
}

export class PostPools {
    constructor(
        public username: string,
        public date: number,
        public title: string,
        public text: string,
        public Unknown: number,
        public GBMiners: number,
        public SlushPool: number,
        public KanoCKPool: number,
        public BitFury: number,
        public AntPool: number,
        public F2Pool: number,
        public ViaBTC: number,
        public lat: number,
        public long: number) {}
}