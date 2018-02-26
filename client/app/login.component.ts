import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  messageClass;
  message;
  processing = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  createForm(){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }); 
  }

  

    // Function to disable form
    disableForm() {
      this.form.controls['username'].disable(); // Disable username field
      this.form.controls['password'].disable(); // Disable password field
    }
  
    // Function to enable form
    enableForm() {
      this.form.controls['username'].enable(); // Enable username field
      this.form.controls['password'].enable(); // Enable password field
    }

    // Functiont to submit form and login user
    onLoginSubmit() {
      this.processing = true; // Used to submit button while is being processed
      this.disableForm(); // Disable form while being process
      // Create user object from user's input
      const user = {
        username: this.form.get('username').value, // Username input field
        password: this.form.get('password').value // Password input field
      }
    }

    

  ngOnInit() {
  }

}
