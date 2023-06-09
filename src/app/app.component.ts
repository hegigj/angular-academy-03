import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cvForm: FormGroup;

  constructor() {
    this.cvForm = new FormGroup({
      personalData: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        // birthDate: new FormControl('', [Validators.required, Validators.max('2005-01-01')])
        birthDate: new FormControl('', [Validators.required])  
      }),
      education: new FormArray([ this.educationForm() ])
    });
  }

  educationForm(): FormGroup {
    return new FormGroup({
      university: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      end: new FormControl({ value: '', disabled: true }),
      ongoing: new FormControl({ value: '', disabled: true }),
    });
  }

  addEducation(): void {
    this.getFormArray(this.cvForm.get('education')).push(
      this.educationForm()
    );
  }

  getFormArray(control: AbstractControl | null): FormArray {
    return control as FormArray;
  }

  create(): void {
    console.log(this.cvForm);
  }
}
