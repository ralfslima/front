class Aluno{

    // Atributos
    nome:string;
    nota1:number;
    nota2:number;

    // Método para calcular a média
    calculo():number{
        return (this.nota1 + this.nota2) / 2;
    }

    // Situação
    situacao(media:number):string{
        return media >= 7 ? "Aprovado" : "Reprovado";
    }

    // Mensagem
    mensagem():void{
        let media:number = this.calculo();
        let situacao:string = this.situacao(media);

        alert(this.nome+" está "+situacao+" com média "+media);
    }

}