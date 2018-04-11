import { Component } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { BlockchainService } from "../services/blockchain.service";
import { Wallet } from "../DataModals/myWallet.model";
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
  amount: string;
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
    console.log("address: " + address);
    this.to = address;
    console.log(this.to);
  }

  onSendBTC() {
    if(this.password != this.passwordValid){
        return alert("Passwords dont match");
    }
    this.blockchainService.sendBTC(this.guid,this.password,this.amount,this.to)
          .subscribe(
            messages => this.wallets = messages,
            error => console.error(error)
        );
    }
}
