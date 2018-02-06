import { Component } from '@angular/core';
import { Profile } from "./profile.model";
import { ProfileService } from "./profile.service";

@Component({
  moduleId: module.id,
  selector: 'Generate',
  templateUrl: 'generatewallet.component.html',
  providers: [ProfileService]
})

export class GenerateComponent {

  profile: Profile[] = [];
  username: string;
  aboutMe: String;
  address: String;
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
    
        this.profileService.createWallet()
          .subscribe(
            messages => this.messages = messages,
            error => console.error(error)
        );
        console.log(this.messages);
    }

 }