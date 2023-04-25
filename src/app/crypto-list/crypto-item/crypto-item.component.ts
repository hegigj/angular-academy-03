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

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
