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

  prices: Ticker[] = [];
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

  ngOnInit() {
    this.getLocation();
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

    this.username = this.user.username;
    console.log(this.username);
  }

  setPosition(position) {
    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
  }
  
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

  onSetValue(symbol: string, last: number, buy: number, sell: number ){
      this.postLast = last;
      this.postBuy = buy;
      this.postSell = sell;
      this.postSymbol = symbol;
  }

  onStatusPriceSubmit(){
    this.date = Date.now();
    this.username = "test"
    //console.log(this.username,this.date,this.title,this.text,this.price,this.sentAmount,this.bitcoinAddress,this.receivingAddress,this.lat,this.long)
    const newStatusPost = new PostTicker(this.username,this.date,this.title,this.text,this.postLast,this.postBuy,this.postSell,this.postSymbol,this.lat,this.long);
    this.statusService.savePricePost(newStatusPost)
    .subscribe(
        () => console.log('POST from status'),
        error => console.error(error)
    );
    }

    get user(): any {
        return JSON.parse(localStorage.getItem('user'));
      }

}