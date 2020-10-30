import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.css']
})
export class Componente01Component implements OnInit {

  constructor() { }

  // Variável de texto
  texto = "Hello World!";

  // Vetor de nomes
  nomes = ["Amanda", "Bruna", "Cleber", "Daniela", "Elaine"];

  // Variável boolean
  exibirTexto = false;

  // Evento de clique
  clique(){
    this.exibirTexto = !this.exibirTexto;
  }

  ngOnInit(): void {
  }

}
