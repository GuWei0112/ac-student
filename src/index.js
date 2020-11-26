import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Window from './electron/window'

ReactDOM.render(
  <React.StrictMode>
    {/* <Window /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);