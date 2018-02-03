//import { EmployeesComponent } from './employees.component';
//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  txtNome: string;
  txtEmail: string;
  txtEditNome: string;
  txtEditEmail: string;
  iEdit: number;

  employees: any[] = []

  constructor(private http: Http) { 
    http.get('assets/employees.json').subscribe(result => {
      this.employees = result.json() as EmployeesComponent[];
    }, error => console.error(error));
  }

  ngOnInit() {
  }

  addItem(){
    if(this.txtNome != null && this.txtEmail != null){
      this.employees.push({'nome': this.txtNome, 'email': this.txtEmail });
      this.txtEmail = this.txtNome = null;
    } else {
      alert("Preencha todos os campos para inserir");
    }
  }

  removeItem(i){
    this.employees.splice(i, 1);
  }

  editItem(i){
    this.txtEditNome = this.employees[i].nome;
    this.txtEditEmail = this.employees[i].email;
    this.iEdit = i;
  }

  saveChanges(){
      this.employees[this.iEdit].nome = this.txtEditNome;
      this.employees[this.iEdit].email = this.txtEditEmail;
  }

}
