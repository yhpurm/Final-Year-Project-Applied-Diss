import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,XMR,BCH,LTC,EOS,ADA,XLM,IOT,NEO,MIOTA,XMR,XEM,TRX,USDT,VEN,ETC,QTUM,OMG,BNB,ICX,XRP,LSK,XVG,ONT,BTG&tsyms=EUR')
      .map(result => this.result = result.json());
  }

}