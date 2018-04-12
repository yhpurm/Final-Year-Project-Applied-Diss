import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'trading',
  templateUrl: './app/TradingComponents/trading.component.html',
  styleUrls: ['./app/TradingComponents/trading.component.css']
})
export class TradingComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    new TradingView.widget({
          "width": 980,
          "height": 610,
          "symbol": "BITFINEX:BTCEUR",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "White",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "hideideas": true,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650"
        });
    new TradingView.widget({
          "width": 980,
          "height": 610,
          "symbol": "BITSTAMP:ETHEUR",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Light",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "hideideas": true,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650"
        }
        );
        new TradingView.widget({
          "width": 980,
          "height": 610,
          "symbol": "BITSTAMP:BCHEUR",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Light",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "hideideas": true,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650"
        }
        );
        new TradingView.widget({
          "width": 980,
          "height": 610,
          "symbol": "BITSTAMP:LTCEUR",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "Light",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "hideideas": true,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650"
        }
        );
    }
  }