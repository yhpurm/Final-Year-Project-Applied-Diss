import { Component, OnInit} from '@angular/core';
import { Profile} from "../DataModals/profile.model";
import { ProfileService } from "../services/profile.service";
import { StatusService } from "../services/status.service";
import { Status } from "../DataModals/status.model";
import { AuthService } from '../services/auth.service';
import { Wallet } from '../DataModals/mywallet.model';
import { BalStatus } from "../DataModals/status.model";
import { StatsStatus } from "../DataModals/blockstats.modal";
import { PostPools } from "../DataModals/pools.modal";
import { PostTicker } from '../DataModals/blockticker.modal';
import { FlagStatus } from "../DataModals/status.model";
import { ReqStatus } from "../DataModals/request.modal";

@Component({
  moduleId: module.id,
  selector: 'Profile',
  templateUrl: 'profile.component.html',
  providers: [ProfileService,StatusService]
})

export class ProfileComponent implements OnInit { 

  profile: Profile[] = [];
  wallets: Wallet[] = [];
  status: Status[] = [];
  balStatus: BalStatus [] = [];
  statStatus: StatsStatus[] = [];
  poolsStatus: PostPools[] = [];
  tickerStatus: PostTicker[] = [];
  flagStatus: FlagStatus[] = [];
  reqStatus: ReqStatus[] = [];
  //username: string;
  fName: String;
  lName: String;
  address: String;
  //email: string;
  lat: Number;
  long: Number[] = [];
  username: string;
  email;

  constructor(
    private profileService: ProfileService,
    private statusService: StatusService,
    private authService: AuthService) { }
  
  ngOnInit() {

    this.username = this.user.username;
    console.log(this.username);
    
    this.profileService.getMyWallets()
        .subscribe(
            response => {
                this.wallets = response;
                console.log(this.wallets);
                console.log("got wallets");
            },
            error => console.error(error)
         );
    
    // Avatars will be stored on the client side and the user option of which avatar is what we will actually be sending back and forth to he backend
    var imagePath = ".\avatars\\" + this.userAvatar.avatar +".png";
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

     // This service gets the logged in users profile
     this.statusService.getStatusByUsername(this.username)
     .subscribe(
         res => {
             this.status = res;
             console.log(this.status);  
         },
         error => console.error(error)
     );

     // This service gets the logged in users profile
     this.statusService.getBalStatusByUsername(this.username)
     .subscribe(
         res => {
             this.balStatus = res;
             console.log(this.status);  
         },
         error => console.error(error)
     );
     
     // This service gets the logged in users profile
     this.statusService.getStatsStatusByUsername(this.username)
     .subscribe(
         res => {
             this.statStatus = res;
             console.log(this.status);  
         },
         error => console.error(error)
     );

     // This service gets the logged in users profile
     this.statusService.getPoolStatusByUsername(this.username)
     .subscribe(
         res => {
             this.poolsStatus = res;
             console.log(this.status);  
         },
         error => console.error(error)
     );

     // This service gets the logged in users profile
     this.statusService.getPriceStatusByUsername(this.username)
     .subscribe(
         res => {
             this.tickerStatus = res;
             console.log(this.status);  
         },
         error => console.error(error)
     );

     // This service gets the logged in users profile
     this.statusService.getFlagsStatusByUsername(this.username)
     .subscribe(
         res => {
             this.flagStatus = res;
             console.log(this.status);  
         },
         error => console.error(error)
     );

     // This service gets the logged in users profile
     this.statusService.getReqStatusByUsername(this.username)
     .subscribe(
         res => {
             this.reqStatus = res;
             console.log(this.status);  
         },
         error => console.error(error)
     );


    }

    // Functions to return what is in storage
    get user(): any {
      return JSON.parse(localStorage.getItem('user'));
    }

    get useremail(): any {
      return JSON.parse(localStorage.getItem('email'));
    }

    get userAvatar(): any {
      return JSON.parse(localStorage.getItem('avatar'));
    }

    get useraboutMe(): any {
      return JSON.parse(localStorage.getItem('aboutMe'));
    }

    get userisOnline(): any {
      return JSON.parse(localStorage.getItem('isOnline'));
    }

    editAboutme() {
      var info = JSON.parse(localStorage.getItem('aboutMe'));
    }
  }
