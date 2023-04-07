import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.scss']
})
export class SelectedItemsComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {
  @Input()
  itemCount: number;

  constructor() {
    this.itemCount = 0;
  }

  ngOnInit(): void {
    console.log('selected-items init');
  }
  
  ngAfterViewInit(): void {
    console.log('selected-items view init');
  }
  
  ngAfterViewChecked(): void {
    console.log('selected-items view checked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('selected-items', changes);
  }
}
