//Valida o cadastro do usuário
validaCadastro = () => {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if(nome == "" || idade == ""){
        alert("Favor preencher todos os campos");
        return false;
    }else if(nome.length < 3){
        alert("Favor informar um nome válido");
        return false;
    }else if(isNaN(idade) == true){
        alert("Favor informar uma idade válida");
        return false;
    }else{
        return true;
    }

}

// Valida a remoção do usuário
validaRemover = () => {
    return(confirm("Desejar remover esse usuário?"));
}