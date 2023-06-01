import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithFormDirectiveComponent } from './form-with-form-directive.component';

describe('FormWithFormDirectiveComponent', () => {
  let component: FormWithFormDirectiveComponent;
  let fixture: ComponentFixture<FormWithFormDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithFormDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithFormDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
