import { Component } from '@angular/core';

interface Product {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItems: Product[];

  item?: string;
  amount?: number;

  constructor() {
    this.selectedItems = [];

    // setTimeout(
    //   () => this.selectedItems.push(1),
    //   3000
    // );
  }

  addProduct(event: SubmitEvent): void {
    event.preventDefault();

    if (this.item && this.amount) {
      this.selectedItems.push({
        name: this.item,
        amount: this.amount
      });

      this.item = '';
      this.amount = undefined;
    }
  }

  deleteProduct(event: string): void {
    const itemToDelete: number = this.selectedItems.findIndex(
      item => item.name === event
    );
    if (itemToDelete !== -1)
      this.selectedItems.splice(itemToDelete, 1);
  }
}
