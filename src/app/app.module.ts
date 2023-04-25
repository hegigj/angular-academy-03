import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CryptoFilterComponent } from './crypto-filter/crypto-filter.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoItemComponent } from './crypto-list/crypto-item/crypto-item.component';
import { CryptoTradeComponent } from './crypto-trade/crypto-trade.component';
import { FormsModule } from '@angular/forms';
import { TrendDirective } from './trend.directive';

@NgModule({
  declarations: [
    AppComponent,
    CryptoFilterComponent,
    CryptoListComponent,
    CryptoItemComponent,
    CryptoTradeComponent,
    TrendDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
