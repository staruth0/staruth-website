import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import './index.css';
import { AuthProvider } from './user_panel/utils/Authentication/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

