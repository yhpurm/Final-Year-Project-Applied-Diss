import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { Profile } from "../DataModals/profile.model";
import { Status } from "../DataModals/status.model";
import { AuthService } from '../services/auth.service';

// Create variable that will hold map settings
declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'viewmap',
  templateUrl: 'viewmap.component.html',
  providers: [ProfileService]
})

export class PeopleMapComponent implements OnInit {

  // Variables
  map: any;
  // Modals
  profiles: Profile[] = [];
  constructor(private profileService: ProfileService,
    private authService: AuthService) {}

  // On component initialization
  ngOnInit() {
    
    // Set up google maps view
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 4,
          center: {lat: 53.1424, lng: -7.6921}
    });

    //GET friends from profile service
    this.profileService.getFriends()
           .subscribe(
            res => {
                    this.profiles = res;
                    // Unpack friends profile modals
                    for (let p of this.profiles){
                        console.log(p);
                        this.plotFriends(p);
                    }
               },
               error => console.error("error:" + error)
            );
 }

 // Plot friends profile to map
 plotFriends(friend: Profile){
    // log lat and long
    console.log("friend location:" + friend.lat + friend.long);

    // create icon from friends avatar
    var icon = {
      url: "/app/avatars/" + friend.avatar + ".png", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    // Create objects to mark on map
    var location = {lat: friend.lat, lng: friend.long};
    var marker = new google.maps.Marker({
    position: location, 
    map: this.map,
    icon: icon,
    title: friend.username,
    });
    // add listner to marker that shows profile about me section
    marker.addListener('click', ()=> {
        alert(friend.aboutMe);
    }); 
 }

}