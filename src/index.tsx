import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import {AuthContextProvider} from './auth/AuthContext';
import {DailyContextProvider} from './auth/DailyContext';
import {BrowserRouter as Router} from 'react-router-dom';
import {MoodEffectProvider} from './auth/MoodEffect';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DailyContextProvider>
    <AuthContextProvider>
     <MoodEffectProvider>
      <Router>
        <App />
      </Router>
     </MoodEffectProvider>
    </AuthContextProvider>
  </DailyContextProvider>
);


