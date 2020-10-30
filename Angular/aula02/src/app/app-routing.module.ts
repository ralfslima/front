import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErroPaginaComponent } from './erro-pagina/erro-pagina.component';
import { ImcComponent } from './imc/imc.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { RequisicaoComponent } from './requisicao/requisicao.component';

const routes: Routes = [
  { path: 'imc', component: ImcComponent },
  { path: 'objeto', component: ObjetoComponent },
  { path: 'requisicao', component: RequisicaoComponent },
  { path: '', redirectTo: '/imc', pathMatch: 'full'},
  { path: '**', component: ErroPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
