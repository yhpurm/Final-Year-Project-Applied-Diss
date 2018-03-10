import { Component, OnInit } from '@angular/core';
import { MlabsService } from "./mlabs.service";
import { Profile } from "./profile.model";

@Component({
  moduleId: module.id,
  selector: 'Global',
  templateUrl: 'global.component.html',
  providers: [MlabsService]
})

export class GlobalComponent implements OnInit {

    profiles: Profile [] = [];
    constructor(private mlabsService: MlabsService) {}

    ngOnInit(){
    
            this.mlabsService.getGlobalUsers()
           .subscribe(
            res => {
                    console.log(res);
                    this.profiles = res;
                    console.log(this.profiles);
               },
               error => console.error("error:" + error)
            );
        }
 }