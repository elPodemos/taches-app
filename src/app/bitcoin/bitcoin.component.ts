import { Component, OnInit } from '@angular/core';
import { BitcoinService } from "../bitcoin.service";
import { Bitcoin } from "../bitcoin";

@Component({
  selector: 'app-bitcoin',
  templateUrl: `bitcoin.component.html`
})
export class BitcoinComponent implements OnInit{

  constructor(
    private service:BitcoinService
    ){}

  lastBitcoin!:Bitcoin;

  ngOnInit() {
    this.getLastValueBitcoin();
  }

  getLastValueBitcoin(){
    this.service.fetchAll().subscribe((data: any) =>{
      if (data.data && data.data.length > 0) {
        this.lastBitcoin = data.data[data.data.length - 1];
        this.lastBitcoin.priceUsd = (Number(this.lastBitcoin.priceUsd).toFixed(2)).toString();
      }
      return this.lastBitcoin;
    })
  }
}
