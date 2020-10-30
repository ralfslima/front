import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcComponent } from './imc/imc.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { RequisicaoComponent } from './requisicao/requisicao.component';
import { ErroPaginaComponent } from './erro-pagina/erro-pagina.component';
import { TopoComponent } from './topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    ImcComponent,
    ObjetoComponent,
    RequisicaoComponent,
    ErroPaginaComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
