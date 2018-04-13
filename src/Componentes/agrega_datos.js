import React, { Component } from 'react';
import PropType from 'prop-types';

class AgregaDatos extends Component {

    render() {
        return (
        <div className="AgregaDatos">
            <form onSubmit={this.agregaDatos.bind(this)}>
                valor x: <input type="number" ref="valorx"/>
                valor y: <input type="number" ref="valory"/>
                <input type="submit" ref="Agregar"/>
            </form>
        </div>
        );
    }

    agregaDatos(e){
        let listaDatos = this.props.datosxy;
        listaDatos.push({
            valorx: this.refs.valorx.value,
            valory: this.refs.valory.value
        });
        this.props.agregaDatoxy(listaDatos);
        e.preventDefault();
    }
}

AgregaDatos.PropType = {
    agregaDatoxy: PropType.func.isRequired
}

export default AgregaDatos;