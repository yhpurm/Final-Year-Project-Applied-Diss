import { Component } from '@angular/core';
import { Profile } from "./profile.model";
import { Wallet } from "./mywallet.model";
import { ProfileService } from "./profile.service";

@Component({
  moduleId: module.id,
  selector: 'Settings',
  templateUrl: 'settings.component.html',
  providers: [ProfileService]
})

export class SettingsComponent {

  wallet: Wallet[] = [];
  username: string;
  walletpass: string;
  address: string;
  email: string;
  phone: Number;
  lat: Number;
  long: Number[] = [];

  constructor(private profileService: ProfileService) {}

  
  onCreateNewWallet() {
    var atSymbol = this.email.includes("@");
    var dotCom = this.email.endsWith(".com");
    
    if(atSymbol == false || dotCom == false){
        alert("Email must contain @ and end with .com");
        return;
    }
    
        this.profileService.createWallet(this.walletpass,this.email,this.username)
          .subscribe(
            messages => this.wallet = messages,
            error => console.error(error)
        );
        console.log(this.wallet);
    }

 }