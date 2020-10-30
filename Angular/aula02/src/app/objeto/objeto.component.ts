import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/produto';

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  obj = new Produto();

  constructor() { }

  ngOnInit(): void {
  }

  retorno():void{
    console.log(this.obj);
  }

}
