import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpParams} from '@angular/common/http';

import {cryptoCurrencies} from '../TradingComponents/localdata';
import {temp} from '../TradingComponents/templateApi';
import {Coin} from '../DataModals/trading.model';

const API_BASE_URL = 'https://api.coinmarketcap.com/v1/';
const coins: Coin[] = [];
@Injectable()
export class AppService {
  private allCoins: Coin[];
  private filteredCoins: Coin[];
  private filter: number[];

  coinsSubject: Subject<Coin[]>;
  filteredCoinsSubject: Subject<Coin[]>;
  apiSubject: Subject<string>;
  fiatSubject: Subject<string>;

  constructor(private http: HttpClient) {
    this.filter = [];
    this.coinsSubject = new Subject();
    this.filteredCoinsSubject = new Subject();
    this.apiSubject = new Subject();
    this.fiatSubject = new Subject();
  }

  getCryptoOptions() {
    return cryptoCurrencies;
  }

  loadMarketCaps(fiat: string) {
    this.fiatSubject.next(fiat);
    const url = API_BASE_URL + 'ticker/';
    let params = new HttpParams();
    params = params.append('limit', '25');
    if (fiat !== 'usd') {
      // TODO: check if fiat is valid
      params = params.append('convert', fiat);
    }
    this.apiSubject.next('loading...');
    this.http
      .get<Coin[]>(url, {params})
      .subscribe(
      data => {
        this.allCoins = data;
        this.announceCoins();
        this.filterMarketCaps();
      }
      );
    //    this.allCoins = mock.data;
  }

  filterMarketCaps() {
    this.filteredCoins = [];
    if (this.filter.length === 0) {
      this.allCoins.forEach((coin) => this.filteredCoins.push(coin));
    }

    if (this.filter.length > 0) {
      this.filter.forEach((i) => {
        this.filteredCoins.push(this.allCoins[i]);
      });
    }
    this.announceFilteredCoins();
  }

  announceCoins() {
    this.coinsSubject.next(this.allCoins);
  }

  announceFilteredCoins() {
    this.filteredCoinsSubject.next(this.filteredCoins);
  }

  updateFilter(filter: number[]) {
    this.filter = [];
    filter.forEach((elem) => {
      this.filter.push(elem);
    });
    this.filterMarketCaps();
  }

}