import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exercicio01Component } from './exercicio01/exercicio01.component';
import { Exercicio02Component } from './exercicio02/exercicio02.component';
import { Exercicio03Component } from './exercicio03/exercicio03.component';
import { Exercicio04Component } from './exercicio04/exercicio04.component';

const routes: Routes = [
  {path: 'exercicio01', component: Exercicio01Component},
  {path: 'exercicio02', component: Exercicio02Component},
  {path: 'exercicio03', component: Exercicio03Component},
  {path: 'exercicio04', component: Exercicio04Component},
  {path: '', redirectTo: '/exercicio01', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
