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
              alert("title:" + status.text + "\n" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );
  
    // This service gets the logged in users posted statuses
    this.mlabsService.getBalGlobalStatus()
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/kml/shapes/info.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("title:" + status.text + "\n" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    // This service gets the logged in users posted statuses
    this.mlabsService.getStatsGlobalStatus()
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/kml/shapes/realestate.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("title:" + status.text + "\n" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    // This service gets the logged in users posted statuses
    this.mlabsService.getPoolGlobalStatus()
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("title:" + status.text + "\n" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    // This service gets the logged in users posted statuses
    this.mlabsService.getPriceGlobalStatus()
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/kml/shapes/volcano.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("title:" + status.text + "\n" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    // This service gets the logged in users posted statuses
    this.mlabsService.getFlagGlobalStatus()
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/kml/shapes/shopping.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("title:" + status.text + "\n" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );

    // This service gets the logged in users posted statuses
    this.mlabsService.getReqGlobalStatus()
    .subscribe(
        res => {
            res.forEach(status => {
            console.log("normal status:" + status.lat + status.long);
            var location = {lat: status.lat, lng: status.long};
            var marker = new google.maps.Marker({
            position: location, 
            map: this.map,
            icon: 'https://maps.google.com/mapfiles/kml/shapes/convenience.png',
            title: status.title,
            });
            marker.addListener('click', ()=> {
              alert("title:" + status.text + "\n" + status.text);
            }); 
          })  
        },
        error => console.error(error)
    );
 }

}