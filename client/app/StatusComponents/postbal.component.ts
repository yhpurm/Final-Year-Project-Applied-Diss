import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { ProfileService } from '../services/profile.service';
import { StatusService } from '../services/status.service';
import { Wallet } from "../DataModals/myWallet.model";
import { BalStatus } from "../DataModals/status.model";
import { BalanceReq } from "../DataModals/bal.modal";
import { Balance } from "../DataModals/bal.modal";

@Component({
  moduleId: module.id,
  selector: 'balance',
  templateUrl: 'postbal.component.html',
  providers: [BlockchainService,ProfileService,StatusService]
})

export class PostBalanceComponent implements OnInit {

  constructor(private blockchainService: BlockchainService, private profileService: ProfileService,private statusService: StatusService) {}

    wallets: Wallet [] = [];
    guid: string;
    pass: string;
    passvalid: string;
    balance: number;
    title: string;
    text: string;
    sentAmount: string;
    username: string;
    date: Number;
    lat: number;
    long: number;
    geolocationPosition: Object;

    ngOnInit() {
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

    setGuid(gid: string){
        console.log("guid: " + gid);
        this.guid = gid;
        console.log(this.guid);
    }

    onGetBal(){
        if(this.guid == null){
            return "GUID is empty please select an address"
        }

        if(this.pass != this.passvalid){
            return "GUID is empty please select an address"
        }

        const balrequest = new BalanceReq(this.guid,this.pass);
        this.blockchainService.getBalance(balrequest)
        .subscribe(
            messages => this.balance = messages,
            error => console.error(error)
        );
    }

    onStatusBalSubmit(){
        this.date = Date.now();
        this.username = "test"
        console.log(this.username,this.date,this.title,this.text,this.balance,this.lat,this.long)
        const newStatusPost = new BalStatus(this.username,this.date,this.title,this.text,this.balance,this.lat,this.long);
        this.statusService.saveBalPost(newStatusPost)
        .subscribe(
            () => console.log('POST from status'),
            error => console.error(error)
        );
    }
}
