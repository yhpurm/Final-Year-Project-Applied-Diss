import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../services/profile.service";
import { AuthService } from '../services/auth.service';
import { Payment } from "../DataModals/payment.modal";

@Component({
  moduleId: module.id,
  selector: 'history',
  templateUrl: 'history.component.html',
  providers: [ProfileService]
})

export class HistoryComponent implements OnInit {

  username: string;
  history: Payment [] = [];
  constructor(private profileService: ProfileService,
    private authService: AuthService) {}
    public showmap = true;
  // On component initialization
  ngOnInit() {
      // get logged in username
    this.username = this.user.username;
    console.log(this.username);
   
    this.profileService.getMyPayments()
    .subscribe(
        response => {
                this.history = response;
                console.log(this.history);
                console.log("got account history");
        },
        error => console.error(error)
    );
  }

  // returns logged in user from local storage
  get user(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

}