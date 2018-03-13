import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "./profile.service";
import { Profile } from "./profile.model";
import { StatusService } from "./status.service";
import { Status } from "./status.model";
import { AuthService } from './services/auth.service';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'viewmap',
  templateUrl: 'viewmap.component.html',
  providers: [ProfileService,StatusService]
})

export class ViewMapComponent implements OnInit {
  map: any;
  username: string;
  constructor(private profileService: ProfileService,
    private authService: AuthService,
    private statusService: StatusService) {}

  
  ngOnInit() {
    
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 12,
          center: {lat: 53.1424, lng: -7.6921}
    });

    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
    });

    console.log(this.username);
   
    // This service gets the logged in users posted statuses
    this.statusService.getStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status);
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

    this.statusService.getBalStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("balance status:" + status);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("text:" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    this.statusService.getStatsStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("stats status:" + status);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("text:" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    this.statusService.getPoolStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("pool status:" + status);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("text:" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );
   

   this.statusService.getPoolStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("pool status:" + status);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("text:" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    this.statusService.getPriceStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("price status:" + status);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("text:" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    this.statusService.getFlagsStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("flags status:" + status);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
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