import React from 'react';
import ReactDOM from 'react-dom';

class Propriedades extends React.Component{

    render(){
        return(
            <div>
                <h1>Participante: {this.props.nome}</h1>
                <h2>Curso de: {this.props.curso}</h2>
            </div>
        )
    }

}

ReactDOM.render(<Propriedades nome='Ralf' curso='ReactJS' />, document.getElementById('root'));