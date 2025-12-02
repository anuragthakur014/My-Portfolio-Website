import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'; // or 'auto' if you prefer default behavior
}