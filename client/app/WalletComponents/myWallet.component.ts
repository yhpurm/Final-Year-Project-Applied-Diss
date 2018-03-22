import { Component, OnInit } from '@angular/core';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/mywallet.model";
import { ProfileService } from "../services/profile.service";
import { BlockchainService } from '../services/blockchain.service';
import { BalanceReq } from "../DataModals/bal.modal";

@Component({
  moduleId: module.id,
  selector: 'Wallet',
  templateUrl: 'myWallet.component.html',
  providers: [BlockchainService,ProfileService]
})

export class WalletComponent implements OnInit {

  wallets: Wallet[] = [];
  username: string;
  guid: string;
  pass: string;
  passvalid: string;
  address: string;
  balance: number;

  constructor(private blockchainService: BlockchainService, private profileService: ProfileService) {}

  ngOnInit(){

    this.profileService.getMyWallets()
        .subscribe(
            response => {
                this.wallets = response;
                console.log(this.wallets);
                console.log("got wallets");
            },
            error => console.error(error)
         );
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
}
