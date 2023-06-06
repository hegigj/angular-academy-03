import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-with-validations',
  templateUrl: './form-with-validations.component.html',
  styleUrls: ['./form-with-validations.component.scss']
})
export class FormWithValidationsComponent implements OnInit {
  @ViewChild('userForm')
  userForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {}
}
