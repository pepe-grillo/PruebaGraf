import React, { Component } from 'react';
import AgregaDatos from './agrega_datos';
import ListaDatos from './lista_datos';

class Datos extends Component {

  render() {
    return (
      <div className="Datos">
        <h3>Datos</h3>
        <AgregaDatos datosxy={this.props.datosxy} agregaDatoxy={this.props.agregaDatoxy}/>
        <ListaDatos registros={this.props.datosxy}/>
      </div>
    );
  }
}

export default Datos;