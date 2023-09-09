import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bitcoin } from "./bitcoin";

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  url = "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1"

  constructor(
    private http: HttpClient
  ) {}

  fetchAll() {
    return this.http.get(this.url);
  }

}
