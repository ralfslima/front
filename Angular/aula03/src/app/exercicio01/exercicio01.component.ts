import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.css']
})
export class Exercicio01Component implements OnInit {

  // Atributos
  nome:string;
  nota1:number;
  nota2:number;
  nota3:number;
  texto:string;

  // Construtor
  constructor() { }

  // Evento de cálculo
  calcular():void{
    let media:number = (this.nota1 + this.nota2 + this.nota3) / 3;

    let situacao:string = media >= 7 ? "Aprovado(a) com média " : "Reprovado(a) com média ";
    
    this.texto = situacao + media;
  }

  // Ao carregar o componente
  ngOnInit(): void {
  }

}
