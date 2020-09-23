/*
    Classe   -> Molde / Representação
    Objeto   -> Resultado da classe
    Atributo -> Características
    Método   -> Função
*/

class Produto{

    // Atributos
    nome:string;
    valor:number;
    segmento:string;

    // ICMS
    icms():number{
        return this.segmento == "eletrônico" ? this.valor * 0.2 : this.valor * 0.1;
    }

    // Mensagem
    mensagem():void{
        let valorIcms = this.icms();
        document.write("O produto "+this.nome+" terá o ICMS de R$"+valorIcms);
    }

}