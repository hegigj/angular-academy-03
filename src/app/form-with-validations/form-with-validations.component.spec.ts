import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithValidationsComponent } from './form-with-validations.component';

describe('FormWithValidationsComponent', () => {
  let component: FormWithValidationsComponent;
  let fixture: ComponentFixture<FormWithValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
