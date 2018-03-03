import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './blockchain.service';

@Component({
  moduleId: module.id,
  selector: 'stats',
  templateUrl: 'postpoolstatus.component.html',
  providers: [BlockchainService]
})

export class PoolComponent implements OnInit {

  AntPool: number;
  GBMiners: number;
  SlushPool: number;
  KanoPool: number;
  GBMinter: number;
  BitFury: number;
  F2Pool: number;
  ViaBTC: number;
  CKPool: number;
  Unknown: number;
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit() {
    console.log("prices init");
    this.blockchainService.getPools()
       .subscribe(
        res => {
                console.log(res);
                this.AntPool = res.AntPool;
                this.GBMiners = res.GBMiners;
                this.SlushPool = res.SlushPool;
                this.KanoPool = res.KanoPool;
                this.BitFury = res.BitFury;
                this.F2Pool = res.F2Pool;
                this.ViaBTC = res.ViaBTC;
                this.CKPool = res.CKPool;
                this.Unknown = res.Unknown;
                
           },
           error => console.error("error:" + error)
    );

  }

 }