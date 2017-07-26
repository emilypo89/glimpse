import React, { Component } from 'react';
import './index.css'
import { Route, Link} from 'react-router-dom'
import Calendar from './containers/calendar.js'

class Main extends Component {
	render(){
		return (
			<div className="Main">
					<nav className="navbar navbar-inverse">
			          <div className="container-fluid">
			            <div className="navbar-header">
			              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>                        
			              </button>
			              <a className="navbar-brand" href="#">Logo</a>
			            </div>
			            <div className="collapse navbar-collapse" id="myNavbar">
			              <ul className="nav navbar-nav">
			                <li className="active"><a href="#">Home</a></li>
			                <li><a href="#">About</a></li>
			                <li><a href="#">Projects</a></li>
			                <li><a href="#">Contact</a></li>
			              </ul>
			              <ul className="nav navbar-nav navbar-right">
			                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
			              </ul>
			            </div>
			          </div>
			        </nav>
				<button>
				<Link to="/calendar">This is a Button</Link>
				</button>

				<footer className="container-fluid text-center">
          			<p>Footer Text</p>
        		</footer>
			
				<Route exact path="/calendar" component={Calendar} />
			
				
			</div>
		)
	}
}

export default Main;