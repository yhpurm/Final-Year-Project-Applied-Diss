import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent { 

  word:string;
  constructor(private router: Router){}

  goToSearch(search:string){
    console.log(search);
    this.word = search;
    this.router.navigateByUrl(`/search?word=${this.word}`)
  }
}

