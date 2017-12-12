import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './components/todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<ToDo />, 
	document.getElementById('root')
);

registerServiceWorker();
