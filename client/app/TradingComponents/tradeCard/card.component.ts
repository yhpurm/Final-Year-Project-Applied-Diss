import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class ListCardComponent implements OnInit {
  @Input() coin;
  @Input() fiat;
  constructor() {}

  ngOnInit() {
  }

}