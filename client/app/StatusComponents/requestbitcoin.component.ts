import { Component } from '@angular/core';
import { Profile} from "../DataModals/profile.model";
import { ProfileService } from "../services/profile.service";
import { StatusService } from "../services/status.service";
import { Status } from "../DataModals/status.model";
import { OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'Request',
  templateUrl: 'requestbitcoin.component.html',
  providers: [ProfileService,StatusService]
})

export class RequestComponent implements OnInit { 

    
  profile: Profile[] = [];
  username: string;
  fName: String;
  lName: String;
  address: String;
  email: string;
  lat: Number;
  long: Number[] = [];

  

  constructor(private profileService: ProfileService,private statusService: StatusService) {}
  
  ngOnInit() {

    
    }
  }