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
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png',
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
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
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
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/purple-pushpin.png',
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
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
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
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png',
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
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/ltblu-pushpin.png',
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
            icon: 'http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png',
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