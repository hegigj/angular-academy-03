import { Component, Input, OnInit } from '@angular/core';
import { Crypto } from '../app.component';

@Component({
  selector: 'app-crypto-trade',
  templateUrl: './crypto-trade.component.html',
  styleUrls: ['./crypto-trade.component.scss']
})
export class CryptoTradeComponent implements OnInit {
  @Input()
  cryptoOptions: Pick<Crypto, 'name'>[];

  constructor() {
    this.cryptoOptions = [];
  }

  ngOnInit(): void {
  }

  buy(): void {}
  sell(): void {}
}
