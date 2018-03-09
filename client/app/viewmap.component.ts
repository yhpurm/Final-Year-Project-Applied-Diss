import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "./profile.service";
import { Profile } from "./profile.model";
import { StatusService } from "./status.service";
import { Status } from "./status.model";

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'viewMap',
  templateUrl: 'viewMap.component.html',
  providers: [ProfileService,StatusService]
})

export class ViewMapComponent implements OnInit {

  constructor(private profileService: ProfileService,private statusService: StatusService) {}
  // Variables
  map: any;
  
  ngOnInit() {
    
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 12,
          center: {lat: 53.1424, lng: -7.6921}
    });
   
   }
 }