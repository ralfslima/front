// Importações
import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap/css/bootstrap.min.css';
import './estilos.css';

// Classe
class Projeto extends React.Component{

    // Construtor
    constructor(){
        super();

        this.state = {
            codigo:null,
            nome:'',
            valor:'',
            dados:[],
            btnCadastro:true
        }
    }

    // Evento de teclado
    teclado = (campo) => {
        let nome_campo = campo.target.name;
        let valor_campo = campo.target.value;
        this.setState({[nome_campo]:valor_campo});
    }

    // Evento de cadastro
    cadastrar = (e) => {
        // Não permite o refresh
        e.preventDefault();

        // Validar campos
        if(this.state.nome === "" || this.state.valor === ""){
            alert("Favor preencher os campos");
        }else if(isNaN(this.state.valor)){
            alert("Favor informar um valor válido")
        }else{
            // Criar um objeto
            let objCurso = {nome:this.state.nome, valor:this.state.valor};

            // Copiar o JSON
            let copiaDados = this.state.dados;

            // Adicinar o novo objeto
            copiaDados.push(objCurso);

            // Atribuir o JSON ao state dados
            this.setState({dados:copiaDados});

            // Limpar campos
            this.setState({nome:""});
            this.setState({valor:""});
        }
    }

    // Evento de seleção
    selecionar = (e) => {

        // Obter o índice
        this.setState({codigo:e.target.value});

        // Exibir nome do curso e valor
        this.setState({nome : this.state.dados[e.target.value].nome});
        this.setState({valor : this.state.dados[e.target.value].valor});

        // Alterar botões
        this.setState({btnCadastro : false});

    }

    // Evento de exclusão
    excluir = () => {

        // Copiar JSON
        let copiaDados = this.state.dados;

        // Remover o curso
        copiaDados.splice(this.state.codigo, 1);

        // Atualizar o JSON de dados
        this.setState({dados : copiaDados});

        // Alterar botões
        this.setState({btnCadastro : true});
        
        // Limpar campos
        this.setState({nome:""});
        this.setState({valor:""});

    }

    // Evento para alterar
    alterar = () => {

        // Criar um objeto
        let objCurso = {nome:this.state.nome, valor:this.state.valor};

        // Copiar o JSON
        let copiaDados = this.state.dados;

        // Alterar o curso
        copiaDados[this.state.codigo] = objCurso;

        // Atribuir o JSON ao state dados
        this.setState({dados:copiaDados});

        // Alterar botões
        this.setState({btnCadastro : true});

        // Limpar campos
        this.setState({nome:""});
        this.setState({valor:""});   

    }

    // Render
    render(){
        return(
            <main>
                <form onSubmit={this.cadastrar}>
                    <input type="text" value={this.state.nome} name="nome" onChange={this.teclado} placeholder="Nome" className="form-control"/>
                    <input type="text" value={this.state.valor} name="valor" onChange={this.teclado} placeholder="Valor" className="form-control"/>
                    
                    {this.state.btnCadastro ?
                    <input type="submit" className="btn btn-primary" />
                    :
                    <div>
                        <input type="button" value="Alterar" onClick={this.alterar} className="btn btn-warning" />
                        <input type="button" value="Excluir" onClick={this.excluir} className="btn btn-danger" />
                    </div>
                    }
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Selecionar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.dados.map((d, indice) => (
                            <tr key={indice}>
                                <td>{indice+1}</td>
                                <td>{d.nome}</td>
                                <td>{d.valor}</td>
                                <td><button className="btn btn-success" value={indice} onClick={this.selecionar}>Selecionar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        );
    }

}

// Enviar projeto para o HTML
ReactDOM.render(<Projeto />, document.getElementById("root"));