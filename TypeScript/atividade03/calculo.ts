class Calculo{

    // Atributos
    valor1:number;
    valor2:number;
    operacao:string;

    // Cálculo
    calculo():number{
        
        // Total
        let total:number = 0;

        // Condicional
        switch(this.operacao){
            case "soma":
            total = this.valor1 + this.valor2;
            break;

            case "subtração":
            total = this.valor1 - this.valor2;
            break;
            
            case "multiplicação":
            total = this.valor1 * this.valor2;
            break;
            
            case "divisão":
            total = this.valor1 / this.valor2;
            break;
        }

        // Retorno
        return total;
    }


}