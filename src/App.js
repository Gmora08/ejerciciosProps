import React, { Component } from 'react';
import Comida from './Comida';
import Colors from './Colors';
import Persona from './Persona';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comida
          img="http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/12/birria.jpg"
          platillo="Birria"
          costo={57.50}
          platillosDisponibles={20}
        />
        <hr />
        <Persona data={{persona:{name: 'Fulanito', age: '20'}}} sayHi={() => (alert('Hi'))} />
        <hr />
        <Colors colors={{colors: ['Amarillo', 'Rosa', 'Azul', 'Rojo', 'Verde']}} />
        <hr />
      </div>
    );
  }
}

export default App;
