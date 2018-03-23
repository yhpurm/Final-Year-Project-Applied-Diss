import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { Profile } from "../DataModals/profile.model";
import { Status } from "../DataModals/status.model";
import { AuthService } from '../services/auth.service';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'viewmap',
  templateUrl: 'viewmap.component.html',
  providers: [ProfileService]
})

export class PeopleMapComponent implements OnInit {
  map: any;
  username: string;
  profiles: Profile[] = [];
  constructor(private profileService: ProfileService,
    private authService: AuthService) {}

  
  ngOnInit() {
    
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 4,
          center: {lat: 53.1424, lng: -7.6921}
    });

    this.profileService.getFriends()
           .subscribe(
            res => {
                    this.profiles = res;
                    for (let p of this.profiles){
                        console.log(p);
                        this.plotFriends(p);
                    }
               },
               error => console.error("error:" + error)
            );
 }

 plotFriends(friend: Profile){
    console.log("friend location:" + friend.lat + friend.long);

    var icon = {
      url: "/app/avatars/" + friend.avatar + ".png", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    var location = {lat: friend.lat, lng: friend.long};
    var marker = new google.maps.Marker({
    position: location, 
    map: this.map,
    icon: icon,
    title: friend.username,
    });
    marker.addListener('click', ()=> {
        alert(friend.aboutMe);
    }); 
 }

}