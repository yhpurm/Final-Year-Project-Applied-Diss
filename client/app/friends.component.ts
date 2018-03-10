import { Component, OnInit } from '@angular/core';
import { ProfileService } from "./profile.service";
import { Profile } from "./profile.model";

@Component({
  moduleId: module.id,
  selector: 'Friends',
  templateUrl: 'friends.component.html',
  providers: [ProfileService]
})

export class FriendsComponent implements OnInit {

  profiles: Profile [] = [];
    constructor(
        private profileService: ProfileService) {}

  ngOnInit(){
    this.profileService.getFriends()
           .subscribe(
            res => {
                    console.log(res);
                    this.profiles = res;
                    console.log(this.profiles);
               },
               error => console.error("error:" + error)
            );
  }
 }