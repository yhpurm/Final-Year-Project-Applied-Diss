import { Component,Input,Output,EventEmitter,ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusService } from "./status.service";
import { Status } from "./status.model";
declare var google: any;
var geocoder = new google.maps.Geocoder();

@Component({
  moduleId: module.id,
  selector: 'poststatus',
  templateUrl: 'poststatus.component.html',
  providers: [StatusService]
})

export class PostStatusComponent implements OnInit { 

  constructor(private statusService: StatusService) {}
  // Variables
  map: any;
  username: string;
  title: string;
  text: String;
  date: Number;
  price: Number;
  value: Number;
  MyAddress: string;
  TargetAddress: string;
  lat: Number;
  long: Number;

  ngOnInit(){

    this.map = new google.maps.Map(document.getElementById('cryptoMap'), {
          zoom: 7,
          center: {lat: 53.1424, lng: -7.6921}
    });

    google.maps.event.addListener(this.map, 'click', (event)=> {
      console.log(event.latLng);
      var lt = event.latLng.lat;
      var ln = event.latLng.lng;
      console.log(lt());
      console.log(ln());
      this.onStatusMarker(event.latLng.lat(),event.latLng.lng(), this.MyAddress, this.TargetAddress);
  });
  }

  selectItem(value){
    this.TargetAddress = value;
   }
   
  onStatusMarker(lt: number,ln: number, myAdd: string, targetAdd: string) {
    this.lat = lt;
    this.long = ln;

    alert("Your Lat:" + this.lat + "\nYour Long" + this.long);
}


setPosition(position) {
  this.lat = position.coords.latitude;
  this.long = position.coords.longitude;
}

getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}


onAddMarker(name: string,lt: string,ln: string) {
        var lat = lt;
        var long = ln;
        var myLatLng = {lat: lat, lng: long},
            map = this.map,
            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: name,
            });
            
            marker.addListener('click', ()=> {
                // Stuff for when Tx is clicked goes here
        });
    }

onStatusSubmit(){
      this.date = Date.now();
      const newStatusPost = new Status(this.username,this.date,this.title,this.text,this.price,this.value,this.MyAddress,this.TargetAddress,this.lat,this.long);
      this.statusService.saveTx(newStatusPost)
      .subscribe(
          () => console.log('POST from stores'),
          error => console.error(error)
      );
}
}

