import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // use Input decorator to expose the component property as an attribute
  // in this way this component can consume data from parent
  @Input('name')
  itemName?: string;

  @Input()
  amount?: number;

  @Output()
  delete: EventEmitter<string>;

  constructor() {
    this.delete = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  onDelete(event: MouseEvent): void {
    if (this.itemName) {
      this.delete.emit(this.itemName);
    }
  }
}
