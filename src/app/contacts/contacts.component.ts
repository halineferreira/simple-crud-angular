import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import { HttpClient } from '@angular/common/http';
import { contacts } from '../../assets/contacts.json'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  txtNome: string;
  txtEmail: string;
  txtEditNome: string;
  txtEditEmail: string;
  iEdit: number;
  contacts: any[] = contacts;

  constructor(private http: HttpClient) { 
    // http.get('assets/contacts.json').subscribe(result => {
    //   this.contacts = result.json() as ContactsComponent[];
    // }, error => console.error(error));
  }

  ngOnInit() {
  }

  addItem(){
    if(this.txtNome != null && this.txtEmail != null){
      this.contacts.push({'nome': this.txtNome, 'email': this.txtEmail });
      this.txtEmail = this.txtNome = null;
    } else {
      alert("Preencha todos os campos para inserir");
    }
  }

  removeItem(i){
    this.contacts.splice(i, 1);
  }

  editItem(i){
    this.txtEditNome = this.contacts[i].nome;
    this.txtEditEmail = this.contacts[i].email;
    this.iEdit = i;
  }

  saveChanges(){
      this.contacts[this.iEdit].nome = this.txtEditNome;
      this.contacts[this.iEdit].email = this.txtEditEmail;
  }

}
