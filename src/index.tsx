import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  (<Router><App /></Router>),
  document.getElementById('content') as HTMLElement
);
registerServiceWorker();
