import React from 'react';
import ReactDOM from 'react-dom';

class Tabela extends React.Component{

    render(){

        // JSON
        let dados = [
            {"produto":"TV 32", "valor":2300},
            {"produto":"Notebook Dell", "valor":4700},
            {"produto":"Smartphone Galaxy S20", "valor":7000},
            {"produto":"Playstation 4", "valor":3700}
        ]

        return(
            <table>
                {dados.map((elemento) => (
                    <tr> 
                        <td>{elemento.produto}</td>
                        <td>{elemento.valor}</td>
                    </tr>
                ))}
            </table>
        );
    }

}

ReactDOM.render(<Tabela />, document.getElementById('root'));