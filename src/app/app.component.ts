import { Component } from '@angular/core';

export interface Crypto {
  id: number;
  name: string;
  value: number;
}

export type TradeAction = 'buy' | 'sell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
}
