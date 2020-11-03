import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  // URL PokéAPI
  private url:string = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  private urlPesquisa: string = 'https://pokeapi.co/api/v2/pokemon/';

  // Construtor
  constructor(private http: HttpClient) { }

  // Método Get
  public selecionarPokemons():Observable<any>{
    return this.http.get<any>(this.url);
  }

  // Método Get
  public filtrarPokemon(nome:string):Observable<any>{
    return this.http.get<any>(this.urlPesquisa+nome);
  }
}
