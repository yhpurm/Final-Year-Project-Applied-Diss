import { Component } from '@angular/core';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/mywallet.model";
import { createWallet } from "../DataModals/createWallet.model";
import { BlockchainService } from "../services/blockchain.service";

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