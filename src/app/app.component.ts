import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

export function endOrOngoingRequired(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fg: FormGroup = control as FormGroup;

    if (fg.get('end')?.value || fg.get('ongoing')?.value) {
      return null;
    }

    return { endOrOngoingRequired: true };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<void>;
  cvForm: FormGroup;

  constructor() {
    this.onDestroy$ = new Subject<void>();

    this.cvForm = new FormGroup({
      personalData: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        // birthDate: new FormControl('', [Validators.required, Validators.max('2005-01-01')])
        birthDate: new FormControl('', [Validators.required]),  
        idCard: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ])  
      }),
      education: new FormArray([ this.educationForm() ])
    });
  }

  ngOnInit(): void {
    this.getFormArray(this.cvForm.get('education')).controls
      .map(educationForm => educationForm as FormGroup)
      .forEach((educationForm: FormGroup) => {
        educationForm.get('ongoing')?.valueChanges
          .pipe(
            distinctUntilChanged(),
            tap(isOngoing => {
              if (isOngoing) {
                educationForm.get('end')?.disable({ emitEvent: false });
              } else {
                educationForm.get('end')?.enable({ emitEvent: false });
              }
            }),
            takeUntil(this.onDestroy$)
          )
          .subscribe();
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  educationForm(): FormGroup {
    return new FormGroup({
      university: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      start: new FormControl('', Validators.required),
      // end: new FormControl({ value: '', disabled: true }),
      end: new FormControl(''),
      ongoing: new FormControl(''),
    }, endOrOngoingRequired());
  }

  addEducation(): void {
    this.getFormArray(this.cvForm.get('education')).push(
      this.educationForm()
    );
  }

  removeEducation(index: number): void {
    this.getFormArray(this.cvForm.get('education')).removeAt(index);
  }

  getFormArray(control: AbstractControl | null): FormArray {
    return control as FormArray;
  }

  // toggleOngoing(index: number): void {
  //   const educationForm: FormGroup = this.getFormArray(this.cvForm.get('education')).at(index) as FormGroup;

  //   if (educationForm.get('ongoing')?.value) {
  //     educationForm.get('end')?.disable({ emitEvent: false });
  //   } else {
  //     educationForm.get('end')?.enable({ emitEvent: false });
  //   }
  // }

  create(): void {
    console.log(this.cvForm);
  }
}
