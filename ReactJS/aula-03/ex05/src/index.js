// Importações
import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './estilos.css'

// Classe
class Projeto extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            vetor : [],
            pokemon : '',
            pesquisa : []
        }
    }

    // Ao criar o componente
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(dados => dados.json())
        .then(dados => this.setState({vetor : dados.results}))
    }

    // Ao digitar
    digitar = (elemento) => {
        this.setState({pokemon : elemento.target.value.toLowerCase()})
    }

    // Pesquisa
    pesquisar = () => {

        if(this.state.pokemon === ""){
            alert("Informe o nome do Pokémon")
        }else{   
            fetch('https://pokeapi.co/api/v2/pokemon/'+this.state.pokemon)
            .then(dados => dados.json())
            .then(dados => this.setState({pesquisa : dados}))
            .catch(erro => alert("Pokémon não encontrado, tente novamente")) // Caso a API não retorne nenhum Pokémon
        }
    }


    // Renderização
    render(){
        return(
            <main className="container">

                {/* Pesquisa */}
                <div className="row pesquisa">
                    <div className="col-12">
                        <input type="text" name="pokemon" onChange={this.digitar} placeholder="Qual Pokémon está procurando?" className="form-control" />
                        <input type="button" onClick={this.pesquisar} className="btn btn-primary" value="Pesquisar" />
                    </div>
                </div>

                {/* Se houver pesquisa */}
                {this.state.pesquisa.length !== 0 &&    
                    <div className="row">
                        <div className="col-4 offset-4 descricao">
                        <img src={this.state.pesquisa.sprites.front_default} className="img-fluid"/>
                        <img src={this.state.pesquisa.sprites.back_default} className="img-fluid"/>
                            <p>Nome: {this.state.pesquisa.name}</p>
                            <p>Peso: {this.state.pesquisa.weight} kg</p>
                        </div>
                    </div>
                }

                {/* Lista de Pokémons */}
                <div className="row">

                    {this.state.vetor.map((dados, indice) =>(
                            <div key={indice} className="col-2">
                                <div className="card">
                                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(indice+1)+".png"} className="img-fluid"/>
                                    <p>{dados.name}</p>

                                </div>
                            </div>
                    ))}
                    
                </div>
            </main>
        );
    }

}

// Selecionar elemento HTML
ReactDOM.render(<Projeto />, document.getElementById("root"));