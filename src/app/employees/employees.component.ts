import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import { HttpClient } from '@angular/common/http';
import { contacts } from 'assets/employees.json'

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

  employees: any[] = contacts;
 

  constructor(private http: HttpClient) { 
    // http.get('assets/employees.json').subscribe(result => {
    //   this.employees = result.json() as EmployeesComponent[];
    // }, error => console.error(error));
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
