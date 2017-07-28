import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './dashboard';
import './index.css';

ReactDOM.render(
	<BrowserRouter>
	<Dashboard />
		
	</BrowserRouter>, document.getElementById("root"));