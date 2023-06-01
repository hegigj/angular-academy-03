import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormWithFormDirectiveComponent } from './form-with-form-directive/form-with-form-directive.component';
import { FormWithValidationsComponent } from './form-with-validations/form-with-validations.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    FormWithFormDirectiveComponent,
    FormWithValidationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
