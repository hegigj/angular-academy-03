import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
