import React, { Component } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import axios from "axios";
import { Redirect } from 'react-router-dom';

export default class Landing extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.email);
    console.log(this.state.password);
  }
  handleSubmit(event) {
    event.preventDefault()
    // TODO - validate!
    axios
      .post('/auth/signup', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('youre good')
          this.setState({
            redirectTo: '/'
          })
        } else {
          console.log('duplicate')
        }
      })
  }

  // loginHandleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  loginHandleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')
    this.state._login(this.state.email, this.state.password)
    // clean up the form
    // this.setState({
    //  email: '',
    //  password: ''
    // })
    // redirect - will clean form
    this.setState({
      redirectTo: '/'
    })
    // axios
    //  .post('/auth/login', {
    //    email: this.state.email,
    //    password: this.state.password
    //  })
    //  .then(response => {
    //    if (response.status === 200) {
    //      // update the state
    //    }
    //    console.log(response)
    //  })
  }



  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <div>
        <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
          <div id="slider-top" className="carousel slide col-lg-12" data-ride="carousel">
            {/*<!-- Overlay --> */}
            {/*<!-- <div className="overlay"></div> -->*/}
            {/*<!-- Indicators -->*/}
            <ol className="carousel-indicators">
              <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#bs-carousel" data-slide-to="1"></li>
              <li data-target="#bs-carousel" data-slide-to="2"></li>
              <li data-target="#bs-carousel" data-slide-to="3"></li>
              <li data-target="#bs-carousel" data-slide-to="4"></li>
            </ol>

            {/*<!-- Wrapper for slides -->*/}
            <div className="carousel-inner">
              <div className="item slides active">
                <div className="slide-1"></div>
                  <div className="hero">
                    <hgroup>
                      <h1>glimpse</h1>
                      <h3>A unique shared calendar app for all the groups in your life.</h3>
                    </hgroup>
                    <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#loginModal">login</button>
                    <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#signUpModal">sign up</button>
                  </div>
              </div>
              <div className="item slides">
                <div className="slide-2"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>find out how glimpse makes organizing easier</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#loginModal">login</button>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#signUpModal">sign up</button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-3"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>start now and create a shared calendar for everyone</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#loginModal">login</button>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#signUpModal">sign up</button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-4"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>join other shared calendars and begin planning your next adventure</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#loginModal">login</button>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#signUpModal">sign up</button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-5"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>get started today</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#loginModal">login</button>
                  <button type="button" className="btn btn-hero btn-lg" data-toggle="modal" data-target="#signUpModal">sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/*<!-- MODAL FOR SIGN UP -->*/}
          <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Sign Up</h4>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label for="firstName">First Name:</label>
                      <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}  />
                    </div>
                    
                    <div className="form-group">
                      <label for="lastName">Last Name:</label>
                      <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}  />
                    </div>

                    <div className="form-group">
                      <label for="email">Email Address:</label>
                      <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                      <label for="password">Password:</label>
                      <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                      <label for="confirmPassword">Confirm Password:</label>
                      <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>

          {/*<!-- MODAL FOR LOG IN -->*/}
          <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="signUpModal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Login</h4>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label for="email">Email Address:</label>
                      <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label for="password">Password:</label>
                      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.loginHandleSubmit}>Login</button>
                </div>
              </div>
            </div>
          </div>



          {/*<!--SECTION FOR DESCRIPTION OF APP  -->*/}
          <section className="about-sec parallax-section" id="about">
            <div className="container">
              <div className="action-box text-left">
                  <h1 className="glimpseAbout">what is glimpse?</h1>
              </div>
              <div className="action-box text-left">
                <p className="aboutP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quasi, aspernatur quod recusandae ipsam, veritatis ipsa nulla nostrum! Perspiciatis odit aut voluptas dolorum officiis, vero repellendus corporis suscipit iste illo.</p>
                <p className="aboutP">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum amet quia cumque eligendi iste maxime, ea, cupiditate id numquam iusto quisquam veniam labore facilis non expedita quis? Autem, tempore architecto.</p>
              </div>
            </div>
          </section>

          {/*<!-- SECTION FOR AWESOME TALKING POINTS -->*/}
          
          <section className="action-sec" id="callToAction">
            <div className="container center">
              <div className="action-box text-center"><h2 className="awesome">why is glimpse awesome?</h2>
              </div>
              <br/>
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <i className="fa fa-users fa-5x" aria-hidden="true"></i><h3>stay connected</h3>
                  <p className="awesomeP">keep in touch with friends and family by letting everyone know your schedule.</p>
                </div>
                  
                <div className="col-lg-4">
                  <i className="fa fa-paper-plane fa-5x" aria-hidden="true"></i>
                  <h3>plan your adventures in advance</h3>
                  <p className="awesomeP">set up events days, weeks, months ahead of time to make sure everyone can attend.</p>
                </div>
                  
                <div className="col-lg-4">
                  <i className="fa fa-calendar-plus-o fa-5x" aria-hidden="true"></i>
                  <h3>stay organized</h3>
                  <p className="awesomeP">keep your schedule and events in one place.</p>
                </div>
              </div>
              <br/>
            </div>
          </section>

         {/*<!-- SECTION FOR TESTIMONIALS -->*/}
          
          <section className="action-sec" id="testimonials">
            <div className="container">
              <div className="action-box text-right"><h2 className="testimonialsH1">testimonials </h2></div>
                <br/>
              <div className="action-box text-left"><h4><i>"Blah blah"</i> - Erin</h4></div>
              <div className="action-box text-right"><h4><i>"Blah blah"</i> - Erin</h4></div>
              <div className="action-box text-center"><h4><i>"Blah blah"</i> - Erin</h4></div>
            </div>
          </section>
              
          {/*<!-- FOOTER -->*/}
          <footer className="container-fluid text-center" id="footer">
            <p id="footerP">Created with love by: <a href="http://www.github.com/erinlevine" target="_blank">Erin</a>, <a href="http://www.github.com/njedic" target="_blank">Nikki</a>, <a href="http://www.github.com/emilypo89" target="_blank">Emily</a>, and <a href="http://www.github.com/adamk1230" target="_blank" >Adam</a></p>
          </footer>
      </div>



    );
  }
}