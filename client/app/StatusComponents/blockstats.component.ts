import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { StatusService } from '../services/status.service';
import { Stats } from '../DataModals/blockstats.modal';
import { StatsStatus } from '../DataModals/blockstats.modal';
declare var google: any;
var geocoder = new google.maps.Geocoder();

@Component({
  moduleId: module.id,
  selector: 'stats',
  templateUrl: 'blockstats.component.html',
  providers: [BlockchainService,StatusService]
})

export class StatsComponent implements OnInit {

  username: string;
  date: number;
  title: string;
  text: string;
  market_price_usd: number;
  hash_rate: number;
  total_fees_btc: number;
  n_btc_mined: number;
  n_tx: number;
  n_blocks_mined: number;
  minutes_between_blocks: number;
  totalbc: number;
  n_blocks_total: number;
  estimated_transaction_volume_usd: number;
  blocks_size: number;
  miners_revenue_usd: number;
  nextretarget: number;
  difficulty: number;
  estimated_btc_sent: number;
  miners_revenue_btc: number;
  total_btc_sent: number;
  trade_volume_btc: number;
  trade_volume_usd: number;
  timestamp: number;
  lat: number;
  long: number;
  geolocationPosition: Object;

  constructor(private blockchainService: BlockchainService, private statusService: StatusService) {}

  ngOnInit() {
    console.log("prices init");
    this.blockchainService.getBlockchainStats()
       .subscribe(
        res => {
               this.market_price_usd = res.market_price_usd;
               this.hash_rate = res.hash_rate;
               this.total_fees_btc = res.total_fees_btc;
               this.n_btc_mined = res.n_btc_mined;
               this.n_tx = res.n_tx;
               this.n_blocks_mined = res.n_blocks_mined;
               this.totalbc = res.totalbc;
               this.n_blocks_total = res.n_blocks_total;
               this.estimated_transaction_volume_usd = res.estimated_transaction_volume_usd;
               this.blocks_size = res.blocks_size;
               this.miners_revenue_usd = res.miners_revenue_usd;
               this.nextretarget = res.nextretarget;
               this.difficulty= res.difficulty;
               this.estimated_btc_sent = res.estimated_btc_sent;
               this.miners_revenue_btc = res.miners_revenue_btc;
               this.total_btc_sent = res.total_btc_sent;
               this.trade_volume_btc= res.trade_volume_btc;
               this.trade_volume_usd = res.trade_volume_usd;
               this.timestamp = res.timestamp;
           },
           error => console.error("error:" + error)
    );

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

  onStatusSubmit(){
    this.date = Date.now();
    this.username = "test"
    const newStatusPost = new StatsStatus(this.username,this.date,this.title,this.text,
      this.market_price_usd,this.hash_rate,this.total_fees_btc,this.n_btc_mined,this.n_tx,this.n_blocks_mined
    ,this.totalbc,this.n_blocks_total,this.estimated_transaction_volume_usd,
    this.blocks_size,this.miners_revenue_usd,this.nextretarget,this.difficulty,
    this.estimated_btc_sent,this.miners_revenue_btc,this.total_btc_sent,
  this.trade_volume_btc,this.trade_volume_btc,this.timestamp,this.lat,this.long);
  console.log(newStatusPost)
    this.statusService.saveStatsPost(newStatusPost)
    .subscribe(
        () => console.log('POST from status'),
        error => console.error(error)
    );
}

 }