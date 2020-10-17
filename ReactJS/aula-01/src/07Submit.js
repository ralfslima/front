import React from 'react';
import ReactDOM from 'react-dom';

class Formulario extends React.Component{

    constructor(props){
        super(props);

        this.state = {campo : ''};
    }

    aoDigitar = (objeto) => {
        this.setState({campo : objeto.target.value})
    }

    enviar = (objeto) => {
        objeto.preventDefault();

        if(this.state.campo == ''){
            alert('Favor preencher o campo');
        }else{
            alert('Você informou: '+this.state.campo);
        }
    }

    render(){
        return(
           <form onSubmit={this.enviar}>
                <input type="text" onChange={this.aoDigitar} placeholder="Informe algo..." />
                <input type="submit" />
           </form>
        )
    }

}

ReactDOM.render(<Formulario />, document.getElementById('root'));