import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    moduleId: module.id,
    selector: 'price',
    templateUrl: 'price.component.html',
    styleUrls: ['price.component.css']
  })
  export class PriceComponent {
    objectKeys = Object.keys;
    cryptos: any;
  
    constructor(private _data: DataService) {
  
    }
  
    ngOnInit() {
      this._data.getPrices()
        .subscribe(res => {
          this.cryptos = res;
          console.log(res);
        });

        this.refreshData();
        this.cryptos = setInterval(() => {
          this.refreshData();
        }, 5000); // refresh all 5 sec
      }
    
      // refresh data for get new cryptos values
      refreshData(){
        this._data.getPrices()
          .subscribe(res => {
            this.cryptos = res;
            console.log(res);
          });
    }
  
  }