import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ModalModule } from 'ngx-bootstrap';

import { Http ,HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
