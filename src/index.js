import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Principal from './Componentes/principal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Principal />, document.getElementById('root'));
registerServiceWorker();
