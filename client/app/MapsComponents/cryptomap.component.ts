import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { Profile } from "../DataModals/profile.model";
import { StatusService } from "../services/status.service";
import { Status } from "../DataModals/status.model";

// Create variable that will hold map settings
declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'cryptomap.component.html',
  providers: [ProfileService,StatusService]
})

export class CryptoMapComponent  {
  
}