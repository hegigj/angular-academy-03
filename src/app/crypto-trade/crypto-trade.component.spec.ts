import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTradeComponent } from './crypto-trade.component';

describe('CryptoTradeComponent', () => {
  let component: CryptoTradeComponent;
  let fixture: ComponentFixture<CryptoTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
