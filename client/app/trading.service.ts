import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { trading } from "./trading.model";

@Injectable()
export class tradingService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}
    getTrading(): Observable<any> {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: trading[] = [];
                let trading;
                for (let element of extracted.data) {
                    trading = new trading(element.id, element.name, element.symbol, element.rank, element.price_usd, element.price_btc, element.h24_volume_price, element.market_cap_usd, element.available_supply, );
                    msgArray.push(trading);
                }
                return msgArray;
            });
        }
