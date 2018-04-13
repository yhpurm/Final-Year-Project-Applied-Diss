import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { Profile } from "../DataModals/profile.model";

@Component({
  moduleId: module.id,
  selector: 'Friends',
  templateUrl: 'friends.component.html',
  providers: [ProfileService]
})

export class FriendsComponent implements OnInit {

  // Modals
  profiles: Profile [] = [];

  constructor(private profileService: ProfileService) {}

    // On component initialization
    ngOnInit(){
      // Get friends from service
        this.profileService.getFriends()
           .subscribe(
            res => {
                    this.profiles = res;
                    console.log("results: " + this.profiles);
               },
               error => console.error("error:" + error)
            );
      }

      onDeleteFriend(name: string) {
        var retVal = confirm("Do you want to continue ?");
        if( retVal == true ){
            this.profileService
            .deleteFriend(name)
        .subscribe(
            result => console.log('DELETE from products'),
            error => console.error(error)
        );
        }else{
            alert("Delete cancled!");
            return false;
        }
    }
}