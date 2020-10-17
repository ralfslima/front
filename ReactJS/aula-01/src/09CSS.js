import React from 'react';
import ReactDOM from 'react-dom';

import './estilos.css';

class Formulario extends React.Component{

    render(){

        let meuEstilo = {
            backgroundColor: 'yellow',
            color: 'red'
        }

        return(
           <form>
                <input type="text" placeholder="Informe seu nome" style={meuEstilo} />
           </form>
        )
    }

}

ReactDOM.render(<Formulario />, document.getElementById('root'));