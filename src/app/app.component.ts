import { Component } from '@angular/core';

export interface Product {
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

  editItem?: string;
  editAmount?: number;

  submitButtonLabel: string;

  constructor() {
    this.selectedItems = [];

    this.submitButtonLabel = 'Add';
  }

  loadProduct(event: Product): void {
    const { name, amount } = event;

    this.editItem = name;
    this.editAmount = amount;

    this.item = name;
    this.amount = amount;

    this.submitButtonLabel = 'Edit';
  }

  submitProduct(event: SubmitEvent): void {
    event.preventDefault();

    switch (this.submitButtonLabel) {
      case 'Add':
        this.addProduct();
        break;
      case 'Edit':
        this.editProduct();
        this.submitButtonLabel = 'Add';
        break;
    }
  }

  private addProduct(): void {
    if (this.item && this.amount) {
      this.selectedItems.push({
        name: this.item,
        amount: this.amount
      });

      this.item = '';
      this.amount = undefined;
    }
  }

  private editProduct(): void {
    const itemToReplace: number = this.selectedItems.findIndex(
      item => item.name === this.editItem && item.amount === this.editAmount
    );
    
    if (itemToReplace !== -1 && this.item && this.amount) {
      this.selectedItems.splice(itemToReplace, 1, {
        name: this.item,
        amount: this.amount
      });
    }

    this.item = '';
    this.amount = undefined;
  }

  deleteProduct(event: string): void {
    const itemToDelete: number = this.selectedItems.findIndex(
      item => item.name === event
    );
    if (itemToDelete !== -1)
      this.selectedItems.splice(itemToDelete, 1);
  }
}
