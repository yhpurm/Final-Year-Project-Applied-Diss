import { Component, OnInit } from '@angular/core';
import { Profile } from "./profile.model";
import { Wallet } from "./mywallet.model";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { ProfileService } from "./profile.service";

@Component({
  moduleId: module.id,
  selector: 'MlabsSearchResult',
  templateUrl: 'MlabsSearchResults.component.html',
  providers: [ProfileService]
})

export class MlabsSearchComponent implements OnInit {

    constructor(private route:ActivatedRoute) {}
    test:string;

    ngOnInit(){
    this.route.queryParams.subscribe(params =>{
        this.test = params['word'];
        console.log(this.test);
        })
    }

 }