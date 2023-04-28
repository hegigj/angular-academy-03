import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Crypto } from '../app.component';

export type CryptoAction = Omit<Crypto, 'id'>;

@Component({
  selector: 'app-crypto-trade',
  templateUrl: './crypto-trade.component.html',
  styleUrls: ['./crypto-trade.component.scss']
})
export class CryptoTradeComponent implements OnInit, OnChanges {
  @Input()
  cryptos?: Crypto[];

  cryptoOptions: string[];

  cryptoOption?: string;
  value?: number;

  @Output()
  onBuy: EventEmitter<CryptoAction>;

  @Output()
  onSell: EventEmitter<CryptoAction>;

  constructor() {
    this.cryptoOptions = [];
    this.onBuy = new EventEmitter<CryptoAction>();
    this.onSell = new EventEmitter<CryptoAction>();
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['cryptos'].currentValue instanceof Array) {
    if (this.cryptos instanceof Array) {
      this.cryptoOptions = this.cryptos.map((crypto) => crypto.name);
    }
  }

  buy(): void {
    this.onAction(this.onBuy);
  }
  sell(): void {
    this.onAction(this.onSell);
  }

  private onAction(onAction: EventEmitter<CryptoAction>): void {
    if (this.cryptoOption && this.value && this.value > 0) {
      onAction.emit({ name: this.cryptoOption, value: this.value });
    }
  }
}
