import { Component, OnInit } from '@angular/core';
import { MlabsService } from "./mlabs.service";
import { ProfileService } from "./profile.service";
import { Profile } from "./profile.model";

@Component({
  moduleId: module.id,
  selector: 'Global',
  templateUrl: 'global.component.html',
  providers: [MlabsService,ProfileService]
})

export class GlobalComponent implements OnInit {

    profiles: Profile [] = [];
    constructor(private mlabsService: MlabsService,
        private profileService: ProfileService) {}

    ngOnInit(){
    
            this.mlabsService.getGlobalUsers()
           .subscribe(
            res => {
                    console.log(res);
                    this.profiles = res;
                    console.log(this.profiles);
               },
               error => console.error("error:" + error)
            );
        }

    onAddFriend(username: string, aboutMe: string, avatar: number, statusCount: number,
    friendCount: number, isOnline: Boolean, address: string,
    email: string, lat: number, long: number){

        console.log(username,aboutMe,avatar,statusCount,friendCount,isOnline,address,email,lat,long)
        const newStatusPost = new Profile(username,aboutMe,avatar,statusCount,friendCount,isOnline,address,email,lat,long);
        this.profileService.addFriend(newStatusPost)
        .subscribe(
            () => console.log('POST from status'),
            error => console.error(error)
        );
    }
 }