import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from "../services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor( 
    private authService: AuthService
   ) {
   }

  ngOnInit() {

  }

}