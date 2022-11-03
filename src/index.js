import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// set the whole project to dark mode
document.body.style.backgroundColor = '#212529';
document.body.style.color = 'white';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
