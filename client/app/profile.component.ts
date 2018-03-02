import { Component, OnInit} from '@angular/core';
import { Profile} from "./profile.model";
import { ProfileService } from "./profile.service";
import { AuthService } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'Profile',
  templateUrl: 'profile.component.html',
  providers: [ProfileService]
})

export class ProfileComponent implements OnInit { 

  profile: Profile[] = [];
  //username: string;
  fName: String;
  lName: String;
  address: String;
  //email: string;
  lat: Number;
  long: Number[] = [];
  username;
  email;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService) { }
  
  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.email = profile.user.email;
    });
    
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
