// Importar o React
import React from 'react';

// Classe
class Menu extends React.Component{

    // Render
    render(){
        return(
            <nav>
                <a href="/">Início</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
            </nav>
        )
    }

}

// Exportar a classe
export default Menu;


