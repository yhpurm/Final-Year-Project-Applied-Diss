import { Component } from '@angular/core';
import { Profile} from "./profile.model";
import { ProfileService } from "./profile.service";
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'Profile',
  templateUrl: 'profile.component.html',
  providers: [ProfileService]
})

export class ProfileComponent implements OnInit { 

  profile: Profile[] = [];
  username: string;
  fName: String;
  lName: String;
  address: String;
  email: string;
  phone: Number;
  lat: Number;
  long: Number[] = [];

  constructor(private profileService: ProfileService) {}
  
  ngOnInit() {

   

  }
}