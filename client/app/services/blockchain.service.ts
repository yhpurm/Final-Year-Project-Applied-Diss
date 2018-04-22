import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/myWallet.model";
import { Ticker } from "../DataModals/blockticker.modal";
import { Pools } from "../DataModals/pools.modal";
import { Stats } from "../DataModals/blockstats.modal";
import { createWallet } from "../DataModals/createWallet.model";
import { BalanceReq } from "../DataModals/bal.modal";
import { Balance } from "../DataModals/bal.modal";
import { Payment } from "../DataModals/payment.modal";
import { SendBTC } from "../DataModals/sendbtc.model";

@Injectable()
export class BlockchainService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

        saveWallet(wallet: createWallet): Observable<any> {
            console.log(wallet);
            const body = JSON.stringify(wallet);
            console.log(body);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('http://localhost:3000/newWallet', body, {headers: headers});
        }

        saveTx(tx: Payment): Observable<any> {
            console.log(tx);
            const body = JSON.stringify(tx);
            console.log(body);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('http://localhost:3000/saveTx', body, {headers: headers});
        }

        getCurrentPrice() {
            console.log("contacting ticker");
            return this.http.get('https://blockchain.info/ticker')
            .map(response => response.json() as Ticker[])
            .catch(handleError);
        }

        getValueAtTime(fiat:string, val: string) {
            console.log("contacting ticker");
            return this.http.get('https://blockchain.info/tobtc?currency=' + fiat + '&value=' + val)
            .map(response => response.json() as Ticker[])
            .catch(handleError);
        }

        getBlockchainStats() {
            console.log("contacting stats");
            return this.http.get('https://api.blockchain.info/stats?cors=true')
            .map(response => response.json() as Stats[])
            .catch(handleError);
        }

        getPools() {
            console.log("contacting pools");
            return this.http.get('https://api.blockchain.info/pools?cors=true&timespan=5days')
            .map(response => response.json() as Pools[])
            .catch(handleError);
        }

        getBalance(balreq: BalanceReq): Observable<any> {
            console.log(balreq);
            const body = JSON.stringify(balreq);
            console.log(body);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('http://localhost:3000/Wallet/balance', body, {headers: headers}).map( (data: Response) => {
                console.log(data.json());
                const extracted = data.json();
                const msgArray: Balance[] = [];
                var message;
                console.log("fixed: " + extracted.balance);
                message = extracted.balance;
                return message;
            });
        }

        sendBTC(payment: SendBTC) {
            console.log("sending bitcoin");
            const body = JSON.stringify(payment);
            console.log(body);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('/Wallet/payment',body, {headers: headers})
            .map(response => response.json() as Payment[])
            .catch(handleError);
        }
    }

  function handleError (error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Problem contacting blockchain!!!! try again later.`
    console.error(errorMsg);
  
    // throw an application level error
    return Observable.throw(errorMsg);
  }