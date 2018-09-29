import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
//Wrap <App /> with <BrowserRouter> to allow routing
<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
