import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../trading.service';
import {Coin} from '../trading.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coins: Coin[];
  noDataMsg: string;
  fiat: string;

  constructor(private appService: AppService) {
    this.noDataMsg = 'Select fiat currency to get started';
    this.appService.filteredCoinsSubject.subscribe({
      next: (v) => this.updateCoins(v),
    });
    this.appService.apiSubject.subscribe({
      next: (msg) => this.noDataMsg = msg,
    });
    this.appService.fiatSubject.subscribe({
      next: (newValue) => this.fiat = newValue,
    });
  }

  updateCoins(coins: Coin[]) {
    this.coins = [];
    coins.forEach((coin) => this.coins.push(coin));
  }
  ngOnInit() {
  }

}