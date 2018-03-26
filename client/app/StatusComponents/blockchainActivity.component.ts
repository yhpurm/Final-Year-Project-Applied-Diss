import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { Ticker } from '../DataModals/blockticker.modal';
import { PostTicker } from '../DataModals/blockticker.modal';
import { StatusService } from "../services/status.service";

@Component({
  moduleId: module.id,
  selector: 'activity',
  templateUrl: 'blockchainActivity.component.html',
  providers: [BlockchainService,StatusService]
})

export class TransactionsComponent implements OnInit {

  // Modals
  prices: Ticker[] = [];

  // variables
  username: string;
  date: number;
  title: string;
  text: string;
  postLast: number;
  postSell: number;
  postBuy: number;
  postSymbol: string;
  lat: number;
  long: number;
  geolocationPosition: Object;

  constructor(private blockchainService: BlockchainService,private statusService: StatusService) {}

  // After component initialization
  ngOnInit() {
    // get your location
    this.getLocation();

    // Get current price from service
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

    // get logged in user from storage
    this.username = this.user.username;
    console.log(this.username);
  }

  // Update lat and long
  setPosition(position) {
    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
  }
 
  // get your location
  getLocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position,
                  console.log(position),
                  this.setPosition(position)
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  };
  }

  // set values event
  onSetValue(symbol: string, last: number, buy: number, sell: number ){
      this.postLast = last;
      this.postBuy = buy;
      this.postSell = sell;
      this.postSymbol = symbol;
  }

  // POST new price status
  onStatusPriceSubmit(){
    //Get current date and time
    this.date = Date.now();
    //console.log(this.username,this.date,this.title,this.text,this.price,this.sentAmount,this.bitcoinAddress,this.receivingAddress,this.lat,this.long)
    const newPricePost = new PostTicker(this.username,this.date,this.title,this.text,this.postLast,this.postBuy,this.postSell,this.postSymbol,this.lat,this.long);
    // price status post
    this.statusService.savePricePost(newPricePost)
    .subscribe(
        () => console.log('POST from price status'),
        error => console.error(error)
    );
}

    // Get username from local storage
    get user(): any {
        return JSON.parse(localStorage.getItem('user'));
    }

}