import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App nome="Fulano de Tal" idade="42" />
  </React.StrictMode>,
  document.getElementById('root')
);

