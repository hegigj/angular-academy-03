import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form-with-form-directive',
  templateUrl: './form-with-form-directive.component.html',
  styleUrls: ['./form-with-form-directive.component.scss']
})
export class FormWithFormDirectiveComponent implements AfterViewInit {
  @ViewChild('userFormRef')
  userForm!: NgForm;

  constructor(private userService: UserService) { }

  ngAfterViewInit(): void {
    console.log(this.userForm);
  }

  add(): void {
    if (this.userForm?.valid) {
      this.userService.createUser(this.userForm.value)
        .subscribe(() => this.userForm.reset());
    }
  }
}
