import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const divStyle = {
	height: 600
}

ReactDOM.render(
	<BrowserRouter style={divStyle}>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)
