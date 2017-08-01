import React, { Component } from 'react';
import './group.css';
import { Route, Link } from 'react-router-dom';
import Calendar from './calendar';

const divStyle = {
  height: 600
}

class Group extends Component {
	render(){
		return(
      <div className="container" id="calContainer">    
        <div className="container-fluid text-center">    
          <div className="row content">
            <div className="col-sm-2 sidenav">
              <p>User 1</p>
              <p>User 2</p>
              <p>User 3</p>
            </div>
            <div className="col-lg-8 text-left"> 
              


                
 
             
                

              <div className="calendar" style={divStyle}>

              <Calendar />
              </div>


            </div>
            <div className="col-sm-2 sidenav">
              <div className="well">
                <p>POLL #1</p>
              </div>
              <div className="well">
                <p>POLL #2</p>
              </div>
            </div>
          </div>
        </div>

      </div>
		)
	}
		
}

export default Group;