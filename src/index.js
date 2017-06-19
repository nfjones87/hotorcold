import React from 'react';
import ReactDOM from 'react-dom';
import Gamebox from './components/gamebox'; 
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Gamebox />, document.getElementById('root'));
registerServiceWorker();
