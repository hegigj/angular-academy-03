import { Component, Output, EventEmitter } from '@angular/core';

export type ValueOption = 'LESS' | 'GEATER';

export interface CryptoFilter {
  value: number;
  isLessThan: boolean;
}

@Component({
  selector: 'app-crypto-filter',
  templateUrl: './crypto-filter.component.html',
  styleUrls: ['./crypto-filter.component.scss']
})
export class CryptoFilterComponent {
  @Output()
  onFilter: EventEmitter<CryptoFilter>;

  valueOption?: ValueOption;
  value?: number;

  constructor() {
    this.onFilter = new EventEmitter<CryptoFilter>();
  }

  applyFilter(event: SubmitEvent): void {
    event.preventDefault();

    if (this.valueOption && this.value && this.value > 0) {
      this.onFilter.emit({
        value: this.value,
        isLessThan: this.valueOption === 'LESS'
      });
    }
  }
}
