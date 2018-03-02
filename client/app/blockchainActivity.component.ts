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
        res => {

               console.log('GET from ticker');
               console.log(res);
               for(let price in res){
                let value = res[price];
                console.log("p: " + value.last); 
                this.prices.push(new Ticker(value.last, value.buy, value.sell, value.symbol));
               } 
           },
           error => console.error("error:" + error)
    );

  }

 }