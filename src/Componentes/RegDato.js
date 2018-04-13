import React, { Component } from 'react';


class RegDato extends Component {
  render() {
    return (
      <div className="RegDato">
        x: {this.props.registro.valorx}, y: {this.props.registro.valory}
      </div>
    );
  }
}

export default RegDato;