import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './styles/main.scss';
import registerServiceWorker from './app/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
