import { Component } from '@angular/core';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/mywallet.model";
import { ProfileService } from "../services/profile.service";

@Component({
  moduleId: module.id,
  selector: 'Wallet',
  templateUrl: 'myWallet.component.html',
  providers: [ProfileService]
})

export class WalletComponent {

  wallet: Wallet[] = [];
  username: string;
  walletpass: string;
  address: string;
  guid: string;

  constructor(private profileService: ProfileService) {}

  
  onGetMyWallet() {
    // get users wallet
    }

 }