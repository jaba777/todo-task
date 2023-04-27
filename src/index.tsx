import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {AuthContextProvider} from './auth/AuthContext';
import {BrowserRouter as Router} from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthContextProvider>
    <Router>
      <App />
    </Router>
  </AuthContextProvider>
);


