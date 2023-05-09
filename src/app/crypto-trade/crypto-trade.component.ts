import { Component } from '@angular/core';
import { Crypto } from '../app.component';
import { CryptoService } from '../crypto.service';

export type CryptoAction = Omit<Crypto, 'id'>;

@Component({
  selector: 'app-crypto-trade',
  templateUrl: './crypto-trade.component.html',
  styleUrls: ['./crypto-trade.component.scss']
  // providers: [CryptoService]
})
export class CryptoTradeComponent {
  cryptoOptions: string[];

  cryptoOption?: string;
  value?: number;

  constructor(private cryptoService: CryptoService) {
    this.cryptoOptions = this.cryptoService.cryptos.map((crypto) => crypto.name);
  }

  buy(): void {
    if (this.cryptoOption && this.value) {
      this.cryptoService.buyCrypto({
        name: this.cryptoOption,
        value: this.value
      });
    }
  }
  sell(): void {
    if (this.cryptoOption && this.value) {
      this.cryptoService.sellCrypto({
        name: this.cryptoOption,
        value: this.value
      });
    }
  }
}
