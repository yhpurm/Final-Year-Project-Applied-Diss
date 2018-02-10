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
  lat: Number;
  long: Number[] = [];

  constructor(private profileService: ProfileService) {}
  
  ngOnInit() {

    // Avatars will be stored on the client side and the user option of which avatar is what we will actually be sending back and forth to he backend
    var imagePath = "\\avatars\\" + 1 + ".png";
    console.log(imagePath); 

    // This service gets the logged in users profile
    this.profileService.getProfileByUsername(this.username)
    .subscribe(
        profiles => {
            this.profile = profiles;
            console.log("GET this users profile");  
        },
        error => console.error(error)
     );
    }
  }
