import React, { Component } from 'react';
import './group.css';
import { Route, Link } from 'react-router-dom';
import Calendar from './calendar';
import CreateEvent from './createEvent';

const divStyle = {
  height: 600
}

class Group extends Component {
  constructor(props){
    super(props);
    this.state = {
      creatEvent: false
    }
    this.showEventForm = this.showEventForm.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  showEventForm(){
    this.setState({
      createEvent: true
    });
  }

  hideEventForm = () => {
    this.setState({
      createEvent: false
    });
  }

  forceUpdateHandler () {
    this.forceUpdate();
  }

	render(){
    // console.log(this.props.match.params.id);
    let eventForm = null;
    if(this.state.createEvent == true) {
      eventForm = <CreateEvent hideEventForm={this.hideEventForm} userID={this.props.userID} currentGroup={this.props.match.params.id} forceUpdateHandler={this.forceUpdateHandler}/>
    }
		return(
      <div className="main" id="mainCal">
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
                    </form>
                  </li>
                  <li><a onClick={this.props._logout}><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <br />
        <div className="row">
          <div className="container" id="calContainer">    
            <div className="container-fluid text-center">    
              <div className="row content">
                <div className="col-sm-1"></div>
                <div className="col-lg-8 text-left" id="calBackground"> 
                  <div className="calendar" style={divStyle}>

                    <Calendar currentGroup={this.props.match.params.id}/>

                  </div>
                </div>
                <div className="col-sm-2 sidenav">
                  <button type="button" className="btn btn-hero" onClick={this.showEventForm}>add a new event</button>
                  <p>User 1</p>
                  <p>User 2</p>
                  <p>User 3</p>
                  {/*<div className="well">
                    <p>POLL #1</p>
                  </div>
                  <div className="well">
                    <p>POLL #2</p>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
          <createEventForm creatEvent={this.state.creatEvent} />
           {eventForm}
          <div className="row" id="footer">
            <p id="footerP">Created with love by: <a href="http://www.github.com/erinlevine" target="_blank">Erin</a>, <a href="http://www.github.com/njedic" target="_blank">Nikki</a>, <a href="http://www.github.com/emilypo89" target="_blank">Emily</a>, and <a href="http://www.github.com/adamk1230" target="_blank" >Adam</a></p>
          </div>
        </div>
		  </div>
    )
	}
		
}

export default Group;