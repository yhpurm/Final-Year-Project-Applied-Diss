import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'Profile',
  templateUrl: 'profile.component.html',
  providers: []
})

export class PostStatusComponent { 

  username: string;
  fName: String;
  lName: String;
  address: String;
  email: string;
  lat: Number;
  long: Number[] = [];

  constructor() {}
  
  }
