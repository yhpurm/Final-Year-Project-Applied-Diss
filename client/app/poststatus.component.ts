import { Component,Input,Output,EventEmitter,ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from "./status.service";
import { ProfileService } from "./profile.service";
import { Status } from "./status.model";
import { Wallet } from "./myWallet.model";
import { AuthService } from './services/auth.service';
declare var google: any;
var geocoder = new google.maps.Geocoder();

@Component({
  moduleId: module.id,
  selector: 'poststatus',
  templateUrl: 'poststatus.component.html',
  providers: [StatusService,ProfileService]
})

export class PostStatusComponent implements OnInit { 

  constructor(private statusService: StatusService,
     private authService: AuthService,
     private profileService: ProfileService) {}

  // Variables
  map: any;
  wallets: Wallet [] = [];
  username: string;
  title: string;
  text: String;
  date: Number;
  price: Number;
  sentAmount: Number;
  bitcoinAddress: string;
  receivingAddress: string;
  lat: Number;
  long: Number;
  geolocationPosition: Object;

  ngOnInit(){

    this.authService.getProfile().subscribe(profile => {
        this.username = profile.user.username;
      });

    console.log(this.username);
    this.profileService.getMyWallets()
        .subscribe(
            response => {
                this.wallets = response;
                console.log(this.wallets);
                console.log("got wallets");
            },
            error => console.error(error)
         );

    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 7,
          center: {lat: 53.1424, lng: -7.6921}
    });

    google.maps.event.addListener(this.map, 'click', (event)=> {
      console.log(event.latLng);
      var lt = event.latLng.lat;
      var ln = event.latLng.lng;
      console.log(lt());
      console.log(ln());
      this.onStatusMarker(event.latLng.lat(),event.latLng.lng());
  });
  }
   
  onStatusMarker(lt: number,ln: number) {
    this.lat = lt;
    this.long = ln;

    alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
}

setAddress(address: string){
  console.log("address: " + address);
  this.bitcoinAddress = address;
  console.log(this.bitcoinAddress);
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
      console.log(this.username,this.date,this.title,this.text,this.price,this.sentAmount,this.bitcoinAddress,this.receivingAddress,this.lat,this.long)
      const newStatusPost = new Status(this.username,this.date,this.title,this.text,this.price,this.sentAmount,this.bitcoinAddress,this.receivingAddress,this.lat,this.long);
      this.statusService.saveTx(newStatusPost)
      .subscribe(
          () => console.log('POST from status'),
          error => console.error(error)
      );
  }
}

