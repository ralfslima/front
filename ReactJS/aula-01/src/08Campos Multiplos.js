import React from 'react';
import ReactDOM from 'react-dom';

class Formulario extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome : '',
            idade : 0
        };
    }

    aoDigitar = (objeto) => {

        let nomeInput = objeto.target.name;
        let valorInput = objeto.target.value;

        this.setState({[nomeInput] : valorInput})
    }

    render(){
        return(
           <form>
               <p>{this.state.nome}</p>
               <p>{this.state.idade}</p>
                <input type="text" onChange={this.aoDigitar} name="nome" placeholder="Informe seu nome" />
                <input type="text" onChange={this.aoDigitar} name="idade" placeholder="Informe sua idade" />
           </form>
        )
    }

}

ReactDOM.render(<Formulario />, document.getElementById('root'));