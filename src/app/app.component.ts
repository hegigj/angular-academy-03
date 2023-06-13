import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, Subject, of } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { EmailService } from './email.service';

export function endOrOngoingRequired(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fg: FormGroup = control as FormGroup;

    if (fg.get('end')?.value || fg.get('ongoing')?.value) {
      return null;
    }

    return { endOrOngoingRequired: true };
  }
}

export function ALIDCARDValidator(birthControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control.parent;
    const birthDate = formGroup?.get(birthControlName);
    // 1997-01-16

    if (control.value && birthDate?.value) {
      const date = new Date(birthDate?.value);
      const month: number = date.getMonth() + 1;
      const day: number = date.getDate();

      let idMonth = +control.value.slice(2, 4);
      const idDay = +control.value.slice(4, 6);

      if (idMonth > 12) idMonth -= 50;

      return (idMonth === month && idDay === day) 
        ? null 
        : { idCardMismatch: true };
    }

    return { idCardMismatch: true };
  };
}

export function EmailUsed(service: EmailService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (control.value) {
      return service.checkIfEmailExists(control.value).pipe(
        map(emailExists => {
          return emailExists 
            ? { emailExists: true } 
            : null;
        })
      );
    }

    return of(null);
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<void>;
  cvForm: FormGroup;

  constructor(emailService: EmailService) {
    this.onDestroy$ = new Subject<void>();

    this.cvForm = new FormGroup({
      personalData: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl(
          '',
          [Validators.required, Validators.email],
          EmailUsed(emailService)
        ),
        // birthDate: new FormControl('', [Validators.required, Validators.max('2005-01-01')])
        birthDate: new FormControl('', [Validators.required]),  
        idCard: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          ALIDCARDValidator('birthDate')
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
