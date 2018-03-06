import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MlabsService } from "./mlabs.service";
import { Profile } from "./profile.model";
import { AuthService } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [MlabsService]
})

export class AppComponent { 

  profile: Profile[] = [];
  word:string;
  constructor(private router: Router, private mlabsService: MlabsService, private authService: AuthService){}


  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  goToSearch(search:string){
    console.log(search);
    this.word = search;
    this.router.navigateByUrl(`/search?word=${this.word}`)

    this.mlabsService.searchUsers(this.word)
       .subscribe(
           users => {
               this.profile = users;
               console.log('GET from stores');
               
               users.forEach(store => {
                  // do stuff with response
               })  
           },
           error => console.error(error)
    );
  }
}

