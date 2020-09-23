class Produto{

    // Atributos
    nome:string;
    valor:number;

    // Cálculo
    calculo():number{
        return this.valor >= 100 ? this.valor * 0.9 : this.valor;
    }

    // Mensagem
    mensagem():void{
        let calculo:number = this.calculo();
        document.write("O produto "+this.nome+" terá o valor R$"+calculo);
    }

}