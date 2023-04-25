import { Component, Input } from '@angular/core';
import { Crypto } from '../app.component';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent {
  @Input()
  cryptoList: Crypto[];

  constructor() {
    this.cryptoList = [];
  }
}
