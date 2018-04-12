import { Component, OnInit } from '@angular/core';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/mywallet.model";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { MlabsService } from "../services/mlabs.service";
import { ProfileService } from "../services/profile.service";

@Component({
  moduleId: module.id,
  selector: 'MlabsSearchResult',
  templateUrl: 'MlabsSearchResults.component.html',
  providers: [MlabsService,ProfileService]
})

export class MlabsSearchComponent implements OnInit {

    constructor(private route:ActivatedRoute, private mlabsService: MlabsService, private profileService: ProfileService) {}
    // variables
    value:string;

    // Modals
    profiles: Profile [] = [];

    // On component initialization
    ngOnInit(){
    this.route.queryParams.subscribe(params =>{
        // Retrieve string from router parameters
        this.value = params['word'];
        console.log("Searched word: " + this.value);

        // Contact MLABS service
        this.mlabsService.searchUsers(this.value)
       .subscribe(
        res => {
                this.profiles = res;
                console.log("MLABS search results: " + this.profiles);
           },
           error => console.error("error:" + error)
        );
        })
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