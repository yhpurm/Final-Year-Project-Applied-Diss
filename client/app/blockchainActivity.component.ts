import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './blockchain.service';
import { Ticker } from './blockticker.modal';

@Component({
  moduleId: module.id,
  selector: 'activity',
  templateUrl: 'blockchainActivity.component.html',
  providers: [BlockchainService]
})

export class TransactionsComponent implements OnInit {

  prices: Ticker[] = [];
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit() {
    console.log("prices init");
    this.blockchainService.getCurrentPrice()
       .subscribe(
        prices => {
               this.prices = prices;
               console.log(prices);
               console.log('GET from ticker');
               
               prices.forEach(price => {
                console.log(price.last);
                console.log(price.buy);
                console.log(price.sell);
                console.log(price.symbol);
               })  
           },
           error => console.error("error:" + error)
    );

  }

 }