import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../servicos/poke-api.service';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component implements OnInit {

  // Vetor
  vetor = [];
  
  // Nome do Pokémon
  nome: string;

  // Filtragem
  filtragem:boolean = false;

  // Construtor
  constructor(private servico: PokeApiService) {
    this.obterPokemons();
  }

  // Ao iniciar
  ngOnInit(): void {
  }

  // Obter todos os 151 Pokémons
  obterPokemons():void{
    this.servico.selecionarPokemons().subscribe(dados => {this.vetor = dados.results});
  }

  // Filtrar o pokémon
  filtrarPokemon():void{
    this.servico.filtrarPokemon(this.nome).subscribe(dados => {this.vetor = dados; this.filtragem = true; console.log(dados)});
  }

}
