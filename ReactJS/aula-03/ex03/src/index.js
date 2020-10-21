/*
    IMPORTANTE!!!
    npm install --save react-router-dom
*/

// Importações
import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './inicio';
import Sobre from './sobre';
import Contato from './contato';
import Menu from './menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Class
class Principal extends React.Component{

    // Render
    render(){
        return(
            <div>
                <Menu />

                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact={true} component={Inicio}></Route>
                        <Route path='/sobre' component={Sobre}></Route>
                        <Route path='/contato' component={Contato}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

}

// Exportar componente
ReactDOM.render(<Principal />, document.getElementById('root'));