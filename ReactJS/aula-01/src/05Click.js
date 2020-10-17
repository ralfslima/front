import React from 'react';
import ReactDOM from 'react-dom';

class Eventos extends React.Component{

    mensagem(){
        alert('Oi!');
    }

    mensagem2(nome){
        alert('Boa noite ' + nome);
    }

    render(){
        return(
            <div>
                <button onClick={this.mensagem}>Clique aqui</button>
                <button onClick={() => this.mensagem2('Ralf')}>Clique aqui tbm...</button>
            </div>
        )
    }

}

ReactDOM.render(<Eventos />, document.getElementById('root'));