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
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  price_btc: Number;
  h24_volume_usd: Number;
  market_cap_usd: Number;
  available_supply: Number;
  max_supply: Number;
  percent_change_1h: Number;
  percent_change_24h: Number;
  percent_change_7d: Number;
  last_updated: Number;

  constructor(private tradingService: tradingService) {}
  
  ngOnInit() {

    // Avatars will be stored on the client side and the user option of which avatar is what we will actually be sending back and forth to he backend
    var imagePath = "\\avatars\\" + 1 + ".png";
    console.log(imagePath); 

    // This service gets the logged in users trading
    this.tradingService.getTrading()
    .subscribe(
        tradings => {
            this.trading = tradings;
            console.log("GET this users trading");  
        },
        error => console.error(error)
     );
    }
  }
