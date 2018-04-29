import { Component } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { BlockchainService } from "../services/blockchain.service";
import { Wallet } from "../DataModals/myWallet.model";
import { SendBTC } from "../DataModals/sendbtc.model";
import { Payment } from "../DataModals/payment.modal";
import { Profile } from "../DataModals/profile.model";
import { OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'SendBTC',
  templateUrl: 'sendbtc.component.html',
  providers: [ProfileService, BlockchainService]
})

export class SendBTCComponent implements OnInit { 

  constructor(private profileService: ProfileService,private blockchainService: BlockchainService) {}
  
  wallets: Wallet [] = [];
  guid: string;
  to: string;
  amount: number;
  password: string;
  passwordValid: string;
  friends: Profile [] = [];
  geolocationPosition: Object;
  lat: number;
  long: number;

  ngOnInit() {

    this.getLocation();

    this.profileService.getMyWallets()
       .subscribe(
           response => {
               this.wallets = response;
               console.log(this.wallets);
               console.log("got wallets");
           },
           error => console.error(error)
        );

    this.profileService.getFriends()
           .subscribe(
            res => {
                    console.log(res);
                    this.friends = res;
                    console.log(this.friends);
               },
               error => console.error("error:" + error)
            );
  }

  setTargetAddress(address: string){
    alert("target address: " + address);
    this.to = address;
    console.log("to:"+ this.to);
  }

  selectItem(id: string){
        this.guid = id;
        console.log("guid" + this.guid);
  }
  
  SaveTx(pay: Payment){
    console.log(pay);
    console.log(pay.to,pay.from,pay.amounts,pay.fees,pay.txid,pay.success,this.lat,this.long);
    var payment = new Payment(pay.to,pay.from,pay.amounts,pay.fees,pay.txid,pay.success,this.lat,this.long);
    var retVal = confirm("Do you want to save Tx attempt?");
    console.log(payment);
    if( retVal == true ){
        this.blockchainService.saveTx(payment)
        .subscribe(
            () => console.log('POST from blockchain tx'),
            error => alert(error)
        );
    }else{
        alert("Tx not saved");
    }

    alert("Transaction request sent to block chain for processing!");
  }
  
  onSendBTC() {
    if(this.password != this.passwordValid){
        return alert("Passwords dont match");
    }

    const PayRequest = new SendBTC (this.guid,this.password,this.amount,this.to);

    console.log(this.guid,this.password,this.amount,this.to);
    this.blockchainService.sendBTC(PayRequest)
          .subscribe(
            messages => this.SaveTx(messages),
            error => alert(error)
        );
    }

    // Update lat and long
  setPosition(position) {
    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    console.log("Your Lat:" + this.lat  + "\nYour Long" + this.lat );
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
}
