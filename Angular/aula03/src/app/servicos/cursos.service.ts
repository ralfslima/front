import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

 // URL
 private url:string = 'http://localhost:3000/cursos/';

 // Construtor
 constructor(private http: HttpClient) { }

 // Método Get
 public selecionarCursos():Observable<any>{
   return this.http.get<any>(this.url);
 }

 // Método Post
 public cadastrarCurso(dados):Observable<any>{
   return this.http.post<any>(this.url, dados);
 }

 // Método Delete
 public removerCurso(id):Observable<void>{
  return this.http.delete<void>(this.url+id);
}

}
