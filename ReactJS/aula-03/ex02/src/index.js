// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Classe
class Projeto extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            valor : 0,
            valorConvertido : 0
        }
    }

    // Ao digitar altera o valor do state
    aoDigitar = (elemento) => {
        this.setState({valor : elemento.target.value})
    }

    // Dólar para real
    dolarReal = () =>{
        let calculo = this.state.valor / 5.5;
        this.setState({valorConvertido : calculo.toFixed(2)});
    }

    realDolar = () =>{
        let calculo = this.state.valor * 5.5;
        this.setState({valorConvertido : calculo.toFixed(2)});
    }

    realEuro = () =>{
        let calculo = this.state.valor / 6.3;
        this.setState({valorConvertido : calculo.toFixed(2)});
    }

    euroReal = () =>{
        let calculo = this.state.valor * 6.3;
        this.setState({valorConvertido : calculo.toFixed(2)});
    }

    // Renderização
    render(){
        return(
            <form>
                <input type="text" placeholder="Informe o valor" onChange={this.aoDigitar}/>

                <input type="button" onClick={this.dolarReal} value="Dólar para Real"/>
                <input type="button" onClick={this.realDolar} value="Real para Dólar"/>
                <input type="button" onClick={this.euroReal} value="Euro para Real"/>
                <input type="button" onClick={this.realEuro} value="Real para Euro"/>
                
                <h1>{this.state.valorConvertido}</h1>
            </form>
        );
    }

}

// Selecionar elemento HTML
ReactDOM.render(<Projeto />, document.getElementById("root"));