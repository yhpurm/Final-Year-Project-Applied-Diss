import { Component,Input,Output,EventEmitter,ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from "../services/status.service";
import { ProfileService } from "../services/profile.service";
import { Status } from "../DataModals/status.model";
import { FlagStatus } from "../DataModals/status.model";

// varibles for holding maps and location objects
declare var google: any;
var geocoder = new google.maps.Geocoder();

@Component({
  moduleId: module.id,
  selector: 'postflag',
  templateUrl: 'flag.component.html',
  providers: [StatusService,ProfileService]
})

export class FlagComponent implements OnInit { 

  constructor(private statusService: StatusService, private profileService: ProfileService) {}
  // Variables
  map: any;
  username: string;
  title: string;
  text: String;
  date: Number;
  locationName: String;
  contact: String;
  lat: Number;
  long: Number;
  geolocationPosition: Object;

  ngOnInit(){

    // load view of map
    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 7,
          center: {lat: 53.1424, lng: -7.6921}
    });

    // add listner event for marker click
    google.maps.event.addListener(this.map, 'click', (event)=> {
      console.log(event.latLng);
      var lt = event.latLng.lat;
      var ln = event.latLng.lng;
      console.log(lt());
      console.log(ln());
      this.onStatusMarker(event.latLng.lat(),event.latLng.lng());
  });

  // asign username from local storage
  this.username = this.user.username;
  console.log(this.username);
  }
   
  // show user there lat and long
  onStatusMarker(lt: number,ln: number) {
    this.lat = lt;
    this.long = ln;

    alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
  }

  // POST status
  onStatusSubmit(){
      this.date = Date.now();
      const newStatusPost = new FlagStatus(this.username,this.date,this.title,this.text,this.locationName,this.contact,this.lat,this.long);
      console.log(newStatusPost);
      this.statusService.saveFlagPost(newStatusPost)
      .subscribe(
          () => console.log('POST from status'),
          error => console.error(error)
      );
  }

  // get username from local storage
  get user(): any {
    return JSON.parse(localStorage.getItem('user'));
  }
}

