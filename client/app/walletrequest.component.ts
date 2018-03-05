import { Component } from '@angular/core';
import { Profile } from "./profile.model";
import { Wallet } from "./mywallet.model";
import { createWallet } from "./createWallet.model";
import { BlockchainService } from "./blockchain.service";

@Component({
  moduleId: module.id,
  selector: 'NewWallet',
  templateUrl: 'walletrequest.component.html',
  providers: [BlockchainService]
})

export class NewWalletComponent {

  wallet: Wallet[] = [];
  walletpass: string;
  passwordValid: string;
  email: string;
  label: string;

  constructor( private blockchainService: BlockchainService) {}
  
  onCreateNewWallet() {
    console.log("request triggered");

    if(this.walletpass != this.passwordValid){
      alert("pass not same");
      return;
    }

    console.log(this.walletpass);
    console.log(this.label);
    const newWallet = new createWallet (this.walletpass,this.label);
    
    this.blockchainService.saveWallet(newWallet)
          .subscribe(
            messages => this.wallet = messages,
            error => console.error(error)
        );
        console.log(this.wallet);
    }
 }