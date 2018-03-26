import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { StatusService } from '../services/status.service';
import { PostPools } from "../DataModals/pools.modal";

// Set variable from map location
declare var google: any;
var geocoder = new google.maps.Geocoder();

@Component({
  moduleId: module.id,
  selector: 'stats',
  templateUrl: 'postpoolstatus.component.html',
  providers: [BlockchainService,StatusService]
})


export class PoolComponent implements OnInit {

    // varibles
    title: string;
    text: string;
    AntPool: number;
    GBMiners: number;
    SlushPool: number;
    KanoPool: number;
    BitFury: number;
    F2Pool: number;
    ViaBTC: number;
    CKPool: number;
    Unknown: number;
    date: number;
    username: string;
    lat: number;
    long: number;
    geolocationPosition: Object;

  constructor(private blockchainService: BlockchainService, private statusService: StatusService) {}

  // On component initialization
  ngOnInit() {
    // get pool data from service
    this.blockchainService.getPools()
       .subscribe(
        res => {
                console.log(res);
                this.AntPool = res.AntPool;
                this.GBMiners = res.GBMiners;
                this.SlushPool = res.SlushPool;
                this.KanoPool = res.KanoPool;
                this.BitFury = res.BitFury;
                this.F2Pool = res.F2Pool;
                this.ViaBTC = res.ViaBTC;
                this.Unknown = res.Unknown;
                
           },
           error => console.error("error:" + error)
    );
    // get user location
    this.getLocation();
    // asign username from local storage
    this.username = this.user.username;
    console.log(this.username);
}

// set lat and long
setPosition(position) {
  this.lat = position.coords.latitude;
  this.long = position.coords.longitude;
  console.log("Your Lat:" + this.lat + "\nYour Long" + this.long);
}

// get location of user
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

// POST new miner status
onStatusPoolSubmit(){
    // set current date
    this.date = Date.now();
    // set new status post with miner data
    const newStatusPost = new PostPools(this.username,this.date,this.title,this.text,this.Unknown,this.GBMiners,this.SlushPool
    ,this.KanoPool,this.BitFury,this.AntPool,this.F2Pool,this.ViaBTC,this.lat,this.long);

    // send modal to service
    this.statusService.savePoolPost(newStatusPost)
    .subscribe(
        () => console.log('POST from miner status'),
        error => console.error(error)
    );
  }

  // GET username from local storage
  get user(): any {
    return JSON.parse(localStorage.getItem('user'));
  }


 }