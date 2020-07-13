import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem [];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Meu Perfil', icon: 'pi pi-user', routerLink: ['#']},
      {label: 'Alterar Senha', icon: 'pi pi-key', routerLink: ['#']},
      {label: 'Sair', icon: 'pi pi-sign-out', routerLink: ['#']}
  ];
  };

  save() {

    }

  update() {
      
    }

  delete() {
      
    }

}
