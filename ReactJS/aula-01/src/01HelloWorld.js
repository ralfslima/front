import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{

    render(){
        return(
            <div>
                <h1>Hello World!!!</h1>
                <h2>Aprendendo ReactJS</h2>
            </div>
        )
    }

}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));