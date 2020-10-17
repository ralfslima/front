import React from 'react';
import ReactDOM from 'react-dom';

class Estados extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nome : 'Ralf',
            cargo: 'Desenvolvedor'    
        }
    }

    render(){
        return(
            <div>
                <h1>Participante: {this.state.nome}</h1>
                <h2>Cargo: {this.state.cargo}</h2>
            </div>
        )
    }

}

ReactDOM.render(<Estados />, document.getElementById('root'));