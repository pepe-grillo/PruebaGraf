import React, { Component } from 'react';
import RegDato from './RegDato';
import PropTypes from 'prop-types';

class ListaDatos extends Component {

  render() {
    let listaxy = this.props.registros.map((dato, index )=> <RegDato key={index} registro={dato}/>);
    return (
      <div className="ListaDatos">
        {listaxy}
      </div>
    );
  }
}

ListaDatos.propTypes = {
  registros: PropTypes.array
}

export default ListaDatos;