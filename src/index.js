import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Routers from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);


