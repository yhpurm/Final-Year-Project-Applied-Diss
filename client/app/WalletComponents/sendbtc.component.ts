import { Component } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { BlockchainService } from "../services/blockchain.service";
import { Wallet } from "../DataModals/myWallet.model";
import { SendBTC } from "../DataModals/sendbtc.model";
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

  
  onSendBTC() {
    if(this.password != this.passwordValid){
        return alert("Passwords dont match");
    }

    const PayRequest = new SendBTC (this.guid,this.password,this.amount,this.to);

    console.log(this.guid,this.password,this.amount,this.to);
    this.blockchainService.sendBTC(PayRequest)
          .subscribe(
            messages => this.wallets = messages,
            error => alert(error)
        );
    }
}
