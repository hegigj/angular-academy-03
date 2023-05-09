import { Injectable } from '@angular/core';
import { Crypto } from './app.component';
import { CryptoAction } from './crypto-trade/crypto-trade.component';
import { Observable } from './obs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  cryptos: Crypto[];

  action: Observable<string> = new Observable('none');

  constructor() {
    this.cryptos = [
      {
        id: 1,
        name: '$',
        value: 150000
      },
      {
        id: 2,
        name: 'BTC',
        value: 240000
      },
      {
        id: 3,
        name: 'Eth',
        value: 2200
      },
      {
        id: 4,
        name: 'All',
        value: 100
      },
      {
        id: 5,
        name: 'Doge',
        value: 2300
      }
    ];
  }

  buyCrypto(cryptoAction: CryptoAction): void {
    const { value } = cryptoAction;

    this.cryptoAction(
      cryptoAction,
      (cryptoValue) => cryptoValue + value 
    );

    this.action.update('buy');
  }

  sellCrypto(cryptoAction: CryptoAction): void {
    const { value } = cryptoAction;

    this.cryptoAction(
      cryptoAction,
      (cryptoValue) => cryptoValue - value 
    );

    this.action.update('sell');
  }

  private cryptoAction(
    cryptoAction: CryptoAction,
    action: (value: number) => number
  ): void {
    const { name, value } = cryptoAction;

    const cryptoIndex: number = this.cryptos.findIndex(
      crypto => crypto.name === name
    );

    if (cryptoIndex !== -1) {
      this.cryptos[cryptoIndex].value = action(this.cryptos[cryptoIndex].value)
    }
  }
}
