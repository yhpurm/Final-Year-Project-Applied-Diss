import { Component, OnInit , AfterViewInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-cryptonews',
  templateUrl: './cryptonews.component.html'
})

export class CryptonewsComponent implements AfterViewInit { 
  constructor() {}

  ngAfterViewInit () {
    !function(d,s,id){
        var js: any,
            fjs=d.getElementsByTagName(s)[0],
            p='https';
        if(!d.getElementById(id)){
            js=d.createElement(s);
            js.id=id;
            js.src=p+"://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);
        }
    }
    (document,"script","twitter-wjs");
  }
}