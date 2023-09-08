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

  bitcoins:Bitcoin[] = []

  ngOnInit() {
    this.getAllBitcoin();
    console.log(this.bitcoins);
  }

  getAllBitcoin(){
    this.service.fetchAll().subscribe( data =>{
      console.log(data);
      this.bitcoins = data;
      return this.bitcoins;
    })
  }
}
