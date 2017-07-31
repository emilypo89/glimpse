import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './components/views/landing'
import './index.css'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
	<BrowserRouter >
		<Landing />
	</BrowserRouter>,
	document.getElementById('root')
)
