import React, { Component } from 'react'
import './calendar.css'
import { Route, Link } from 'react-router-dom'

class Calendar extends Component {
	render(){
		return(
      <div className="container">
			
          
        <div className="container-fluid text-center">    
          <div className="row content">
            <div className="col-sm-2 sidenav">
              <p><a href="#">Link</a></p>
              <p><a href="#">Link</a></p>
              <p><a href="#">Link</a></p>
            </div>
            <div className="col-sm-8 text-left"> 
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <hr />
              <h3>Test</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="col-sm-2 sidenav">
              <div className="well">
                <p>ADS</p>
              </div>
              <div className="well">
                <p>ADS</p>
              </div>
            </div>
          </div>
        </div>

      </div>
		)
	}
		
}

export default Calendar;