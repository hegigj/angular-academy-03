import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../app.component';

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
  edit: EventEmitter<Product>;

  @Output()
  delete: EventEmitter<string>;

  constructor() {
    this.edit = new EventEmitter<Product>();
    this.delete = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  onEdit(event: MouseEvent): void {
    if (this.itemName && this.amount) {
      this.edit.emit({
        name: this.itemName,
        amount: this.amount
      });
    }
  }

  onDelete(event: MouseEvent): void {
    if (this.itemName) {
      this.delete.emit(this.itemName);
    }
  }
}
