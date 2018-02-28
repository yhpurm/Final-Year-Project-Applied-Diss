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
               
               for(let price of res){
                  console.log("p" + price); 
                  this.prices.push(price);
               } 
           },
           error => console.error("error:" + error)
    );

  }

 }