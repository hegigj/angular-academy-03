import { Component } from '@angular/core';

export interface Crypto {
  id: number;
  name: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cryptos: Crypto[];

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

  log(e: any): void {
    console.log(e);
  }
}
