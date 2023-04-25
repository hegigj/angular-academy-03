import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoFilterComponent } from './crypto-filter.component';

describe('CryptoFilterComponent', () => {
  let component: CryptoFilterComponent;
  let fixture: ComponentFixture<CryptoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
