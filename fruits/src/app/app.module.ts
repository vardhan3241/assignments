import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { fruitscomponent } from './fruits/fruits.component';
import { studentcomponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    fruitscomponent,
    studentcomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,fruitscomponent,studentcomponent]
})
export class AppModule  { }
