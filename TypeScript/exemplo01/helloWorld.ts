class HelloWorld{

    mensagem():void{
        document.write("Aprendendo TypeScript")
    }

    somar(numero1:number, numero2:number):number{
        return numero1 + numero2
    }

    situacao(media:number):string{
        return media >= 7 ? "Aprovado(a)" : "Reprovado(a)"
    }

    login(email:string, senha:string):boolean{
        if(email == "ralf.lima@gmail.com" && senha == "123"){
            return true
        }else{
            return false
        }
    }

    funcaoAleatoria():any{}
    
}