import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "./profile.model";
import { Wallet } from "./myWallet.model";
import { Ticker } from "./blockticker.modal";
import { Pools } from "./pools.modal";
import { Stats } from "./blockstats.modal";
import { createWallet } from "./createWallet.model";

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

        getCurrentPrice() {
            console.log("contacting ticker");
            return this.http.get('https://blockchain.info/ticker')
            .map(response => response.json() as Ticker[])
            .catch(handleError);
        }

        getBlockchainStats() {
            console.log("contacting stats");
            return this.http.get('https://api.blockchain.info/stats')
            .map(response => response.json() as Stats[])
            .catch(handleError);
        }

        getPools() {
            console.log("contacting pools");
            return this.http.get('https://api.blockchain.info/pools?timespan=5days')
            .map(response => response.json() as Pools[])
            .catch(handleError);
        }

        getBalance(guid : string) {
            console.log("getting wallet balance");
            return this.http.get('https://api.blockchain.info/merchant/' + guid + '/balance')
            .map(response => response.json() as Ticker[])
            .catch(handleError);
        }
    }

  function handleError (error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Problem creating the wallet!!!! try again later.`
    console.error(errorMsg);
  
    // throw an application level error
    return Observable.throw(errorMsg);
  }