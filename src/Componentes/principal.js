import React, { Component } from 'react';
import Datos from './datos';
import Grafica from './grafica';

class Principal extends Component {

  constructor(){
    super();
    this.state = {datosxy: [
      {valorx: 1,
       valory: 1},
       {valorx: 2,
        valory: 3}
    ]}
  }

  render() {
    return (
      <div className="Principal">
        <Datos datosxy={this.state.datosxy} agregaDatoxy={this.agregaDatoxy.bind(this)}/>
        <Grafica datosxy={this.state.datosxy}/>
      </div>
    );
  }

  agregaDatoxy(listaDatos){
    this.setState({datosxy:listaDatos});
  }

}

export default Principal;