import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './blockchain.service';
import { StatusService } from './status.service';
import { PostPools } from "./pools.modal";

@Component({
  moduleId: module.id,
  selector: 'stats',
  templateUrl: 'postpoolstatus.component.html',
  providers: [BlockchainService,StatusService]
})

export class PoolComponent implements OnInit {

  title: string;
  text: string;
  AntPool: number;
  GBMiners: number;
  SlushPool: number;
  KanoPool: number;
  BitFury: number;
  F2Pool: number;
  ViaBTC: number;
  CKPool: number;
  Unknown: number;
  date: number;
  username: string;
  constructor(private blockchainService: BlockchainService, private statusService: StatusService) {}

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
                this.Unknown = res.Unknown;
                
           },
           error => console.error("error:" + error)
    );
}

  onStatusPoolSubmit(){
    this.date = Date.now();
    this.username = "test"
    const newStatusPost = new PostPools(this.username,this.date,this.title,this.text,this.Unknown,this.GBMiners,this.SlushPool
    ,this.KanoPool,this.BitFury,this.AntPool,this.F2Pool,this.ViaBTC);
    console.log(newStatusPost);
    this.statusService.savePoolPost(newStatusPost)
    .subscribe(
        () => console.log('POST from status'),
        error => console.error(error)
    );
  }

 }