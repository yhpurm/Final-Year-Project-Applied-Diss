import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "../DataModals/profile.model";
import { Status } from "../DataModals/status.model";
import { BalStatus } from "../DataModals/status.model";
import { StatsStatus } from "../DataModals/blockstats.modal";
import { PostPools } from "../DataModals/pools.modal";
import { PostTicker } from '../DataModals/blockticker.modal';
import { FlagStatus } from "../DataModals/status.model";
import { ReqStatus } from "../DataModals/request.modal";

@Injectable()
export class MlabsService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    getGlobalUsers() {
        return this.http.get('http://localhost:3000/globalusers')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Profile[] = [];
                let message;
                for (let element of extracted) {
                    console.log(element.username);
                    message = new Profile(element.username, element.aboutMe, element.avatar, element.statusCount ,element.friendCount,element.isOnline,element.bitcoinAddress,element.email,element.lat,element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    getGlobalStatus() {
        return this.http.get('http://localhost:3000/globalstatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted) {
                    console.log(element.username);
                    status = new Status(element.username, element.date, element.title, element.text,element.valueAtTime, element.sentAmount,  element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getBalGlobalStatus() {
        return this.http.get('http://localhost:3000/globalbalStatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted) {
                    console.log(element.username);
                    status = new BalStatus(element.username, element.date, element.title, element.text,element.balance, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getStatsGlobalStatus() {
        return this.http.get('http://localhost:3000/globalstatsStatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted) {
                    console.log(element.username);
                    status = new StatsStatus(element.username, element.date, element.title, element.text,element.market_price_usd, element.hash_rate, element.total_fees_btc, element.n_btc_mined, element.n_tx,element.n_blocks_mined, element.totalbc, element.n_blocks_total, element.estimated_transaction_volume_usd, element.blocks_size,element.miners_revenue_usd, element.nextretarget, element.difficulty, element.estimated_btc_sent, element.miners_revenue_btc,element.total_btc_sent, element.trade_volume_btc, element.trade_volume_usd, element.timestamp,  element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getPoolGlobalStatus() {
        return this.http.get('http://localhost:3000/globalpoolStatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted) {
                    console.log(element.username);
                    status = new PostPools(element.username, element.date, element.title, element.text,element.Unknown, element.GBMiners, element.SlushPool, element.KanoCKPool, element.BitFury,element.AntPool, element.F2Pool, element.ViaBTC, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getPriceGlobalStatus() {
        return this.http.get('http://localhost:3000/globalpoolStatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted) {
                    console.log(element.username);
                    status = new PostTicker(element.username, element.date, element.title, element.text,element.last, element.buy, element.sell, element.symbol, element.lat,element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getFlagGlobalStatus() {
        return this.http.get('http://localhost:3000/globalpoolStatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted) {
                    console.log(element.username);
                    status = new FlagStatus(element.username, element.date, element.title, element.text,element.locationName, element.contact, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getReqGlobalStatus() {
        return this.http.get('http://localhost:3000/globalreqStatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted) {
                    console.log(element.username);
                    status = new ReqStatus(element.username, element.date, element.title, element.text,element.amount, element.address, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    searchUsers(username: string) {
        return this.http.get('http://localhost:3000/globalusers/' + username )
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Profile[] = [];
                let message;
                console.log(extracted);
                console.log(extracted.username);
                for (let element of extracted) {
                    console.log(element.username);
                    message = new Profile(element.username, element.aboutMe, element.avatar, element.statusCount ,element.friendCount,element.isOnline,element.bitcoinAddress,element.email,element.lat,element.long);
                    msgArray.push(message);
                }
                return  msgArray;
            });
    }
}
