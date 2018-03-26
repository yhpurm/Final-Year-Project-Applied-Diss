import { Component, OnInit } from '@angular/core';
import { MlabsService } from "../services/mlabs.service";
import { ProfileService } from "../services/profile.service";
import { Profile } from "../DataModals/profile.model";

@Component({
  moduleId: module.id,
  selector: 'Global',
  templateUrl: 'global.component.html',
  providers: [MlabsService,ProfileService]
})

export class GlobalComponent implements OnInit {

    // Modals
    profiles: Profile [] = [];
    constructor(private mlabsService: MlabsService,
        private profileService: ProfileService) {}

    // On component initialization
    ngOnInit(){
    
        // MLABS Service get global users on server
        this.mlabsService.getGlobalUsers()
           .subscribe(
            res => {
                    this.profiles = res;
                    console.log("results: " + this.profiles);
               },
               error => console.error("error:" + error)
        );
    }

    // Add an friend event
    onAddFriend(username: string, aboutMe: string, avatar: number, statusCount: number,
    friendCount: number, isOnline: Boolean, address: string,
    email: string, lat: number, long: number){

        // Create new friend modal
        const newFriendPost = new Profile(username,aboutMe,avatar,statusCount,friendCount,isOnline,address,email,lat,long);
        // Pass new friend modal to service
        this.profileService.addFriend(newFriendPost)
        .subscribe(
            () => console.log('POST to friends'),
            error => console.error(error)
        );
    }
 }