import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component implements OnInit {

  // Atributos
  nome: string;
  marca: string;
  valor: number;

  // Vetor
  produtos = [];

  // Construtor
  constructor() { }

  // Método de cadastro
  cadastrar():void{
    // Cadastrar no vetor
    this.produtos.push({'nome':this.nome, 'marca':this.marca, 'valor':this.valor});

    // Limpar campos
    this.nome = null;
    this.marca = null;
    this.valor = null;
  }

  // Método para remover
  remover(indice):void{
    this.produtos.splice(indice, 1);
  }

  // Ao carregar o componente
  ngOnInit(): void {
  }

}
