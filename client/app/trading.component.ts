import { Component } from '@angular/core';
import { Coin } from './trading.model'
@Component({
  moduleId: module.id,
  selector: 'trading',
  templateUrl: 'trading.component.html',
  styleUrls: ['trading.component.css']
})
export class TradingComponent {
  title: string;
  constructor() {
    this.title = 'Trading';
  }
}