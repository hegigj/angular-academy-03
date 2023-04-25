import { Component, Output, EventEmitter } from '@angular/core';

type ValueOption = 'LESS' | 'GREATER';

export interface CryptoFilter {
  isLess?: boolean;
  value?: number;
}

@Component({
  selector: 'app-crypto-filter',
  templateUrl: './crypto-filter.component.html',
  styleUrls: ['./crypto-filter.component.scss']
})
export class CryptoFilterComponent {
  @Output()
  onApplyFilter: EventEmitter<CryptoFilter>;

  valueOption?: ValueOption;
  value?: number;

  constructor() {
    this.onApplyFilter = new EventEmitter<CryptoFilter>();
  }

  applyFilter(event: SubmitEvent): void {
    event.preventDefault();
    
    if (this.valueOption && this.value && this.value >= 0) {
      this.onApplyFilter.emit({
        isLess: this.valueOption === 'LESS',
        value: this.value
      });
    }
  }
}
