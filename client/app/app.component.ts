import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent { 

  constructor(private router: Router){}

  goToSearch(search:string){
    console.log(search);
    this.router.navigateByUrl(`/search?${search}`)
  }
}

