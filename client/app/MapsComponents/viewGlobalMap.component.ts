import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { Profile } from "../DataModals/profile.model";
import { StatusService } from "../services/status.service";
import { Status } from "../DataModals/status.model";
import { AuthService } from '../services/auth.service';
import { MlabsService } from '../services/mlabs.service';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'viewmap',
  templateUrl: 'viewmap.component.html',
  providers: [ProfileService,StatusService]
})

export class GlobalMapComponent implements OnInit {
  map: any;
  username: string;
  constructor(private mlabsService: MlabsService,
    private authService: AuthService,
    private statusService: StatusService) {}

  
  ngOnInit() {
    
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 4,
          center: {lat: 53.1424, lng: -7.6921}
    });

    console.log(this.username);
   
    // This service gets the logged in users posted statuses
    this.mlabsService.getGlobalStatus()
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/kml/shapes/euro.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("text:" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );
  
 }

}