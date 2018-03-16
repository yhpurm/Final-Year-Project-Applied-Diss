import { Component } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { BlockchainService } from "../services/blockchain.service";
import { Wallet } from "../DataModals/myWallet.model";
import { Profile } from "../DataModals/profile.model";
import { OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'convert',
  templateUrl: 'convert.component.html',
  providers: [ProfileService, BlockchainService]
})

export class ConvertComponent { 

  constructor(private profileService: ProfileService,private blockchainService: BlockchainService) {}

  fiat: string;
  value: string;
  result: number;
  fiatGroup: any[] = ["EUR","USD"];

  onConvertFiat() {
    if(this.fiat == null){
        return alert("Select Fiat");
    }
    else if(this.value == null){
        return alert("Enter value");
    }
    console.log(this.fiat);
    console.log(this.value);
    this.blockchainService.getValueAtTime(this.fiat,this.value)
          .subscribe(
            message => this.result = message,
            error => console.error(error)
        );
    }

    updateFiat(val: string){
        this.fiat = val;
    }
}