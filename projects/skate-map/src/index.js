import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavScroll from './components/Navbar.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavScroll />
    <App />
  </React.StrictMode>
);
