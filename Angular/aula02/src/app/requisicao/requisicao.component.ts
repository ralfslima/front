import { Component, OnInit } from '@angular/core';
import { Comments } from '../modelo/comments';
import { CommentsService } from '../servicos/comments.service';

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.css']
})
export class RequisicaoComponent implements OnInit {

  // Vetor
  vetor: Comments[];

  // Construtor
  constructor(private servico: CommentsService) { }

  // Ao carregar o componente
  ngOnInit(): void {
    this.selecionar();
  }

  // Chamar o método obterDados do serviço
  selecionar():void{
    this.servico.obterDados()
    .subscribe(retorno => {
      this.vetor = retorno;
    })
  }

}
