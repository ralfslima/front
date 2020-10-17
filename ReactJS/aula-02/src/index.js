// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Class
class Principal extends React.Component{

    // Construtor
    constructor(){
        super();

        this.state = {
            nome:'',
            idade:'',
            vetor:[]
        }
    }

    // Função de teclar
    teclar = (campo) => {
        
        let nome_campo = campo.target.name;
        let valor_campo = campo.target.value;

        this.setState({[nome_campo]:valor_campo});
    }

    // Função de cadastro
    cadastrar = (elemento) => {
        
        elemento.preventDefault();

        let objeto = {
            nome:this.state.nome,
            idade:this.state.idade
        };

        let copiaVetor = this.state.vetor;

        copiaVetor.push(objeto);

        this.setState({vetor : copiaVetor});

        this.setState({nome:''});
        this.setState({idade:''});
    }

    // Render
    render(){
        return(
            <div>
                
                {/* Formulário */}
                <form onSubmit={this.cadastrar}>
                    <input type="text" onChange={this.teclar} value={this.state.nome} name="nome"  placeholder="Nome" />
                    <input type="text" onChange={this.teclar} value={this.state.idade} name="idade" placeholder="Idade" />
                    <input type="submit" />    
                </form>

                {/* Tabela */}
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.vetor.map((pessoa, linha) => (
                            <tr key={linha}>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.idade}</td>
                                <td>teste...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

}

// Exportar componente
ReactDOM.render(<Principal />, document.getElementById('root'));