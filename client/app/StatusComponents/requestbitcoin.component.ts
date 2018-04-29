import { Component } from '@angular/core';
import { Profile} from "../DataModals/profile.model";
import { Wallet } from "../DataModals/myWallet.model";
import { ReqStatus } from "../DataModals/request.modal";
import { ProfileService } from "../services/profile.service";
import { StatusService } from "../services/status.service";
import { Status } from "../DataModals/status.model";
import { OnInit } from '@angular/core';
declare var google: any;
var geocoder = new google.maps.Geocoder();

@Component({
  moduleId: module.id,
  selector: 'Request',
  templateUrl: 'requestbitcoin.component.html',
  providers: [ProfileService,StatusService]
})

export class RequestComponent implements OnInit { 

    // Variable
    profile: Profile[] = [];
    wallets: Wallet[] = [];
    date: number;
    username: string;
    title: String;
    text: String;
    amount: number;
    address: String;
    lat: Number;
    geolocationPosition: Object;
    long: Number;

  constructor(private profileService: ProfileService,private statusService: StatusService) {}
  
  // On component initialization
  ngOnInit() {

    // assign username from local storage
    this.username = this.user.username;
    console.log(this.username);

    // get wallets from service
    this.profileService.getMyWallets()
        .subscribe(
            response => {
                this.wallets = response;
                console.log(this.wallets);
                console.log("got wallets");
            },
            error => console.error(error)
         );

         this.getLocation();
    }

    // set lat and long
    setPosition(position) {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      console.log("Your Lat:" + this.lat + "\nYour Long" + this.long);
    }

    // set address
    setAddress(address: string){
      console.log("address: " + address);
      this.address = address;
      console.log(this.address);
    }
    
    // get location
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

    // POST status
    onStatusSubmit(){
        // current date
        this.date = Date.now();
        //console.log(this.username,this.date,this.title,this.text,this.address,this.lat,this.long)
        // new status modal
        const newStatusPost = new ReqStatus(this.username,this.date,this.title,this.text,this.amount,this.address,this.lat,this.long);
        // send modal to service
        this.statusService.saveReqPost(newStatusPost)
        .subscribe(
            () => console.log('POST from status'),
            error => console.error(error)
        );
  }

    // get username from storage
    get user(): any {
      return JSON.parse(localStorage.getItem('user'));
    }
    
  }