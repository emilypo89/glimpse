import React, { Component } from 'react';
import './index.css'
import { Route, Link} from 'react-router-dom'
import Calendar from './containers/calendar.js'
class Main extends Component {

// constructor(){
// 	super()
// 	this.state = {
// 		show: true
// 	}
// }

//  showCalendar(){
//    this.setState({
//      show: false
//    });
//    console.log(this.state);
//  }
render(){


return (
<div className="Main">
	<div className="row" id="navBarRow">
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
				<div className="navbar-header">
					
					
					<a className="navbar-brand" id="logo" href="#dashboard">glimpse</a>
				</div>
				
				
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav">
						
						
						<li><a href="#">Create a Group</a></li>
						
						
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<form className="navbar-form pull-right">
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Search for a Group" />
								</div>
								<button type="submit" className="btn btn-default">Find</button>
							</form></li>
							<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		
		<button>
		<Link to="/calendar">This is a Button</Link>
		</button>
		
		<Route exact path="/calendar" component={Calendar} />
		<footer className="container-fluid text-center" id="footer">
			<p>Created with love by: <a href="http://www.github.com/erinlevine" target="_blank">Erin</a>, <a href="http://www.github.com/njedic" target="_blank">Nikki</a>, <a href="http://www.github.com/emilypo89" target="_blank">Emily</a>, and <a href="http://www.github.com/adamk1230" target="_blank" >Adam</a></p>
		</footer>
		
		
		
		
	</div>
	)
	}
	}
	export default Main;