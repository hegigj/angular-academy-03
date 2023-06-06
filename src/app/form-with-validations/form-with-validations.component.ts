import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-with-validations',
  templateUrl: './form-with-validations.component.html',
  styleUrls: ['./form-with-validations.component.scss']
})
export class FormWithValidationsComponent implements OnInit, AfterViewInit {
  @ViewChild('userFormRef')
  userForm!: NgForm;

  constructor() {
    console.log(this.userForm);
  }

  ngOnInit(): void {
    console.log(this.userForm);
  }

  ngAfterViewInit(): void {
    console.log('Form with validation: ', this.userForm);
  }

  add(): void {}
}
