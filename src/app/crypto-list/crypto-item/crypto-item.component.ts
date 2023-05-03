import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.scss']
})
export class CryptoItemComponent implements OnChanges {
  @Input()
  name?: string;
  
  @Input()
  value?: number;

  trend: string;

  constructor() {
    this.trend = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['value'].currentValue) {
      const { firstChange, previousValue, currentValue } = changes['value'];

      if (!firstChange) {
        this.trend = (previousValue > currentValue) 
          ? 'down' 
          :  (previousValue < currentValue) 
            ? 'up' 
            : '';
      }
    }
  }
}
