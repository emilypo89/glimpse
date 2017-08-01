import React, { Component } from "react";
import { BrowserRouter, Link } from 'react-router-dom';



export default class Home extends Component {

  render() {
    return (
      <div>
        <h1>This is the home page.</h1>
        <ul>
        	<li><Link to="/signup">Sign Up</Link></li>
        	<li><Link to="/login">Login</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
      </div>
    );
  }
}