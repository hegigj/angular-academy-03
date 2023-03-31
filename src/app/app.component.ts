import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItems: any[];

  item?: string;
  amount?: number;

  constructor() {
    this.selectedItems = [];
  }
}
