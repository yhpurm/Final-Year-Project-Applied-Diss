import { Component } from '@angular/core';
import { Profile } from "./profile.model";
import { Wallet } from "./mywallet.model";
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

  constructor(private profileService: BlockchainService) {}
  
  onCreateNewWallet() {
    var atSymbol = this.email.includes("@");
    var dotCom = this.email.endsWith(".com");
    
    if(atSymbol == false || dotCom == false){
        alert("Email must contain @ and end with .com");
        return;
    }

    if(this.password != this.confirm){
      alert("wallet passwords do not match");
      return;
    }
    
    this.profileService.createWallet(this.walletpass,this.email,this.label)
          .subscribe(
            messages => this.wallet = messages,
            error => console.error(error)
        );
        console.log(this.wallet);
    }

 }