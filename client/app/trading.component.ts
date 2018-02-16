import { Component } from '@angular/core';
import { trading} from "./trading.model";
import { tradingService } from "./trading.service";
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'trading',
  templateUrl: 'trading.component.html',
  providers: [tradingService]
})

export class tradingComponent implements OnInit { 

  trading: trading[] = [];
  username: string;
  fName: String;
  lName: String;
  address: String;
  email: string;
  lat: Number;
  long: Number[] = [];

  constructor(private tradingService: tradingService) {}
  
  ngOnInit() {

    // Avatars will be stored on the client side and the user option of which avatar is what we will actually be sending back and forth to he backend
    var imagePath = "\\avatars\\" + 1 + ".png";
    console.log(imagePath); 

    // This service gets the logged in users trading
    this.tradingService.gettradingByUsername(this.username)
    .subscribe(
        tradings => {
            this.trading = tradings;
            console.log("GET this users trading");  
        },
        error => console.error(error)
     );
    }
  }
