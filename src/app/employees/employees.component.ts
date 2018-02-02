import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  txtNome: string;
  txtEmail: string;

  employees: any[] = [
      {nome: 'Maria Machado',   email:'maria@gmail.com'},
      {nome: 'João da Silva',   email: 'joao@gmail.com'},
      {nome: 'Jenifer Lopez',   email: 'jenifer@gmail.com' },
      {nome: 'Steve Jobs',      email: 'jobs@gmail.com' },
      {nome: 'Mario Bross',     email: 'tiomario@gmail.com' }

  ]
  constructor() { }

  ngOnInit() {
  }

  addItem(form){
    this.employees.push({'nome': form.value.nome, 'email': form.value.email });
  }

  removeItem(){

  }
  editItem(){

  }


}
