import React, { Component } from 'react';
import './index.css'
import { Route, Link} from 'react-router-dom'
import Calendar from './containers/calendar.js'

class Main extends Component {
	
	constructor(){
		super()
		this.state = {
			show: true
		}
	}
  
  showCalendar(){
    this.setState({
      show: false
    });
    console.log(this.state);
  }

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
			        
				<button onClick={this.showCalendar} this.state.show> 
				<Link to="/calendar">This is a Button</Link>
				</button> 

				<h1>CALENDAR:</h1>
				<Route exact path="/calendar" component={Calendar} />

				<footer className="container-fluid text-center">
          			<p>Created with love by: <a href="http://www.github.com/erinlevine" target="_blank">Erin</a>, <a href="http://www.github.com/njedic" target="_blank">Nikki</a>, <a href="http://www.github.com/emilypo89" target="_blank">Emily</a>, and <a href="http://www.github.com/adamk1230" target="_blank" >Adam</a></p>
        		</footer>
			
				

			
				
			</div>
		)
	}
}

export default Main;