import React, { Component } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import './landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div id="mainLanding">
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
                    <button type="button" className="btn btn-hero btn-lg"><Link to="/login">login</Link></button>
                    <button type="button" className="btn btn-hero btn-lg"><Link to="/signup">signup</Link></button>
                  </div>
              </div>
              <div className="item slides">
                <div className="slide-2"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>find out how glimpse makes organizing easier</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/login">login</Link></button>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/signup">signup</Link></button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-3"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>start now and create a shared calendar for everyone</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/login">login</Link></button>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/signup">signup</Link></button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-4"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>join other shared calendars and begin planning your next adventure</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/login">login</Link></button>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/signup">signup</Link></button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-5"></div>
                <div className="hero">
                  <hgroup>
                    <h1>glimpse</h1>
                    <h3>get started today</h3>
                  </hgroup>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/login">login</Link></button>
                  <button type="button" className="btn btn-hero btn-lg"><Link to="/signup">signup</Link></button>
                </div>
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
                <p className="aboutP">Glimpse is a new way to share your life with your friends, family, co-workers, or any group you can think of! No more endless back and forth group texts trying to schedule an event. Glimpse puts it all together in one seamless calendar application.</p>
                <p className="aboutP">Glimpse makes it super easy to create a group and get started editing your shared calendar so everyone can see what days you are free. Go ahead and start planning a family vacation or a weekend getaway for you and your friends. The possibilities are endless.</p>
            <p className="aboutP">Take a glimpse at your calendar, plan future adventures, and let the fun begin!</p>
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
          
          <div className="container" id="quoteCarousel">
            <div className="row">
              <div className="col-md-12" data-wow-delay="0.2s">
                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                  {/*<!-- Bottom Carousel Indicators -->*/}
                  <ol className="carousel-indicators">
                    <li data-target="#quote-carousel" data-slide-to="0" className="active"><img className="img-responsive " src={require('./img/sonia.jpg')} alt="smiling young lady" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to="1"><img className="img-responsive" src={require('./img/Alan.png')} alt="smiling nerd" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to="2"><img className="img-responsive" src={require('./img/ruby.jpg')} alt="young lady with hat" />
                    </li>
                  </ol>
                  {/*<!-- Carousel Slides / Quotes -->*/}
                  <div className="carousel-inner text-center">
                    {/*<!-- Quote 1 -->*/}
                    <div className="item active">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-8 col-sm-offset-2">
                            <p className="quotez">Making plans with friends and family has never been easier! Using glimpse allows me to plan ahead for special events and make sure that everyone can attend. 
                            <br />
                            Bye, endless group texts!</p>
                            <small>Sonia</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/*<!-- Quote 2 -->*/}
                    <div className="item">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-8 col-sm-offset-2">
                            <p className="quotez">My calendar used to be so topsy-turvy. I never knew where I was going to be on any given day, let alone weeks in advance. Signing up for glimpse was the best thing I could have done. Not only can my family see where I’m going each weekend, but it allows me to plan a little, organize a little, and adventure a little!</p>
                            <small>Alan</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/*<!-- Quote 3 -->*/}
                    <div className="item">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-8 col-sm-offset-2">
                            <p className="quotez">I love the fact that I can have many calendars for lots of groups. It allows me to check in with my family on one calendar, but also see what my friends are up to on a totally separate calendar. Planning activities with glimpse is a total breeze!</p>
                            <small>Ruby</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  {/*<!-- Carousel Buttons Next/Prev -->*/}
                  <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
                  <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            </div>
          </div>
              
          {/*<!-- FOOTER -->*/}
          
          <div className="row" id="footerLanding">
            <p id="footerPLanding">Created with love by: <a href="http://www.github.com/erinlevine" target="_blank">Erin</a>, <a href="http://www.github.com/njedic" target="_blank">Nikki</a>, <a href="http://www.github.com/emilypo89" target="_blank">Emily</a>, and <a href="http://www.github.com/adamk1230" target="_blank" >Adam</a></p>
          </div>
          
      </div>



    );
  }
}