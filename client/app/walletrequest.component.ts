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
  username: string;
  walletpass: string;
  address: string;
  password: string;
  confirm: string;
  email: string;
  label: string;
  phone: Number;
  lat: Number;
  long: Number[] = [];

  constructor(private blockchainService: BlockchainService) {}
  
  onCreateNewWallet() {
    console.log("request triggered");
    console.log(this.walletpass);
    console.log(this.email);
    console.log(this.label);

    const newWallet = new createWallet (this.walletpass,this.email,this.label);
    
    this.blockchainService.saveWallet(newWallet)
          .subscribe(
            messages => this.wallet = messages,
            error => console.error(error)
        );
        console.log(this.wallet);
    }

 }