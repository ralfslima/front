// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Classe
class Projeto extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            numero : 0
        }
    }

    // Incrementar
    incrementar = () =>{
        let obterNumero = this.state.numero + 1;
        this.setState({numero : obterNumero});
    }

    // Decrementar
    decrementar = () =>{
        let obterNumero = this.state.numero - 1;
        this.setState({numero : obterNumero});
    }

    // Renderização
    render(){
        return(
            <div>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
                <h1>{this.state.numero}</h1>
            </div>
        );
    }

}

// Selecionar elemento HTML
ReactDOM.render(<Projeto />, document.getElementById("root"));