import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './blockchain.service';
import { Stats } from './blockstats.modal';

@Component({
  moduleId: module.id,
  selector: 'stats',
  templateUrl: 'blockstats.component.html',
  providers: [BlockchainService]
})

export class StatsComponent implements OnInit {

  market_price_usd: number;
  hash_rate: number;
  total_fees_btc: number;
  n_btc_mined: number;
  n_tx: number;
  n_blocks_mined: number;
  minutes_between_blocks: number;
  totalbc: number;
  n_blocks_total: number;
  estimated_transaction_volume_usd: number;
  blocks_size: number;
  miners_revenue_usd: number;
  nextretarget: number;
  difficulty: number;
  estimated_btc_sent: number;
  miners_revenue_btc: number;
  total_btc_sent: number;
  trade_volume_btc: number;
  trade_volume_usd: number;
  timestamp: number;
  
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit() {
    console.log("prices init");
    this.blockchainService.getBlockchainStats()
       .subscribe(
        res => {

               this.market_price_usd = res.market_price_usd;
               this.hash_rate = res.hash_rate;
               this.total_fees_btc = res.total_fees_btc;
               this.n_btc_mined = res.n_btc_mined;
               this.n_tx = res.n_tx;
               this.n_blocks_mined = res.n_blocks_mined;
               this.minutes_between_blocks = res.minutes_between_blocks;
               this.totalbc = res.totalbc;
               this.n_blocks_total = res.n_blocks_total;
               this.estimated_transaction_volume_usd = res.estimated_transaction_volume_usd;
               this.blocks_size = res.blocks_size;
               this.miners_revenue_usd = res.miners_revenue_usd;
               this.nextretarget = res.nextretarget;
               this.difficulty= res.difficulty;
               this.estimated_btc_sent = res.estimated_btc_sent;
               this.miners_revenue_btc = res.miners_revenue_btc;
               this.total_btc_sent = res.total_btc_sent;
               this.trade_volume_btc= res.trade_volume_btc;
               this.trade_volume_usd = res.trade_volume_usd;
               this.timestamp = res.timestamp;

           },
           error => console.error("error:" + error)
    );

  }

 }