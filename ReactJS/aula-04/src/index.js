// Importações
import React from 'react';
import ReactDOM from 'react-dom';

// Classe
class ProjetoCursos extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            vetor : [],
            nome : '',
            valor : ''
        }
    }

    // Ao carregar o componente
    componentDidMount(){
        fetch('http://localhost:3000/cursos')
        .then(resultado => resultado.json())
        .then(resultado => this.setState({vetor : resultado}))
        .catch(erro => alert("Falha ao obter dados"))
    }

    // Função teclar
    teclar = (elemento) => {
        let nome_elemento = elemento.target.name;
        let valor_elemento = elemento.target.value;

        this.setState({[nome_elemento] : valor_elemento});
    }

    // Função de cadastro
    cadastrar = () => {

        // Características para o envio
        let caracteristicas = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nome:this.state.nome,
                valor:this.state.valor
            })
        }

        // Efetuar o cadastro
        fetch('http://localhost:3000/cursos', caracteristicas)
        .then(resposta => resposta.json())
        .then(resposta => {
            let vetor_temporario = this.state.vetor;
            vetor_temporario.push(resposta);
            this.setState({vetor : vetor_temporario});
        })

    }

    // Função para remover
    remover = (codigo, linha) => {
       
         // Características para deletar
         let caracteristicas = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }

        // Efetuar a remoção
        fetch('http://localhost:3000/cursos/'+codigo, caracteristicas)
        .then(resposta => resposta.json())
        .then(resposta => {
            let vetor_temporario = this.state.vetor;
            vetor_temporario.splice(linha, 1);
            this.setState({vetor : vetor_temporario});
        })

    }

    // Render
    render(){
        return(
            <main>

                {/* Formulário */}
                <form>
                    <input type="text" onChange={this.teclar} name="nome" placeholder="Nome" />
                    <input type="text" onChange={this.teclar} name="valor" placeholder="Valor" />
                    <input type="button" value="Cadastrar" onClick={this.cadastrar} />
                </form>

                {/* Tabela */}
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Remover</th>
                        </tr>
                    </thead>  

                    <tbody>
                        {this.state.vetor.map((objeto, linha) => (
                            <tr key={linha}>
                                <td>{objeto.nome}</td>
                                <td>{objeto.valor}</td>
                                <td><button onClick={()=>(this.remover(objeto.id, linha))}>Remover</button></td>
                            </tr>
                        ))}
                    </tbody>  
                </table>

            </main>
        )
    }
}

// Exportar o componente
ReactDOM.render(<ProjetoCursos/>, document.getElementById('root'));