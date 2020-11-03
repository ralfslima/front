import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicos/cursos.service';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {

  // Atributos
  nome: string;
  valor: number;

  // Vetor
  cursos = [];

  // Construtor
  constructor(private servico: CursosService) { }

  // Obter todos os cursos
  selecionarCursos():void{
    this.servico.selecionarCursos().subscribe(dados => {this.cursos = dados});
  }

  // Cadastrar curso
  cadastrarCurso():void{
    let meuJson:any = {"nome":this.nome, "valor":this.valor};
    this.servico.cadastrarCurso(meuJson).subscribe(dados => {this.selecionarCursos()});
  }

  // Obter todos os cursos
  removerCurso(id:number):void{
    this.servico.removerCurso(id).subscribe(dados => {this.selecionarCursos()});
  }

  // Ao iniciar o componente
  ngOnInit(): void {
    this.selecionarCursos();
  }

}
