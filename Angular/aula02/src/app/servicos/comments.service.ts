import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../modelo/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  // Construtor
  constructor(private http: HttpClient) { }

  // Obter dados (GET)
  obterDados():Observable<Comments[]>{
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
