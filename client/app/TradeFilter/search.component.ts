import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from '../trading.service';
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  providers: []
})
export class SearchFilterComponent implements OnInit {
  currencies: string[];
  cryptoCurrOptions: IMultiSelectOption[];
  selectedCurrency: string;
  optionsModel: number[];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 5,
    displayAllSelectedText: true
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Filter cryptos',
    allSelected: 'All selected',
  };

  constructor(private appService: AppService) {
    this.currencies = ['usd', 'eur'];
    this.selectedCurrency = '';
    this.cryptoCurrOptions = [];
    this.appService.coinsSubject.subscribe({
      next: (v) => this.updateCryptoOptions(v),
    });
  }

  ngOnInit() {
  }

  selectCurrency(newValue) {
    this.appService.loadMarketCaps(newValue);
  }

  filterChange(newValue) {
    // BUG method should not be triggered by filter select
    this.appService.updateFilter(newValue);
  }

  updateCryptoOptions(coins) {
    this.cryptoCurrOptions = [];
    coins.forEach((coin, index) => {
      this.cryptoCurrOptions.push({
        id: index,
        name: coin.id.charAt(0).toUpperCase() + coin.id.slice(1)
      });
    });
  }
}