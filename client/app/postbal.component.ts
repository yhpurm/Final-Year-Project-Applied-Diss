import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './blockchain.service';
import { ProfileService } from './profile.service';
import { Wallet } from "./myWallet.model";
import { BalanceReq } from "./bal.modal";
import { Balance } from "./bal.modal";

@Component({
  moduleId: module.id,
  selector: 'balance',
  templateUrl: 'postbal.component.html',
  providers: [BlockchainService,ProfileService]
})

export class PostBalanceComponent implements OnInit {

  constructor(private blockchainService: BlockchainService, private profileService: ProfileService) {}

    wallets: Wallet [] = [];
    guid: string;
    pass: string;
    passvalid: string;
    balance: number;

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
