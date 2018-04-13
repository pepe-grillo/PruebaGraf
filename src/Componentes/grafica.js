import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Grafica extends Component {
  render() {
    let paraGraf = [
      {
        x: this.props.datosxy.map(dato => dato.valorx),
        y: this.props.datosxy.map(dato => dato.valory),
        type: 'scatter',
        mode: 'lines+points',
        marker: {color: 'red'}
      }
    ];
    return (
      <div className="Grafica">
        <h3>Gráfica</h3>
        <Plot
              data={paraGraf}
              layout={ {width: 620, height: 540, title: 'Plot hecha con Plotly'} }
              config={ {modeBarButtonsToRemove: ['sendDataToCloud','hoverCompareCartesian','hoverClosestCartesian'],  displaylogo: false} }
              //{displayModeBar: false}
            />
      </div>
    );
  }
}

export default Grafica;