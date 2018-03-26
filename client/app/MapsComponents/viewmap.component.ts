import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { Profile } from "../DataModals/profile.model";
import { StatusService } from "../services/status.service";
import { Status } from "../DataModals/status.model";
import { AuthService } from '../services/auth.service';

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

  // On component initialization
  ngOnInit() {
    
    // load map view
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 4,
          center: {lat: 53.1424, lng: -7.6921}
    });

    // get logged in username
    this.username = this.user.username;
    console.log(this.username);
   
    // This service gets the logged in users posted statuses
    this.statusService.getStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
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
            console.log("balance status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
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
            console.log("stats status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/purple-pushpin.png',
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
            console.log("pool status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
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
            console.log("price status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png',
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
            console.log("flags status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/ltblu-pushpin.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("text:" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    this.statusService.getReqStatusByUsername(this.username)
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("Request status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png',
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

  // returns logged in user from local storage
  get user(): any {
    return JSON.parse(localStorage.getItem('user'));
  }
  
 }