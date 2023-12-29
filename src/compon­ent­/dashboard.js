import React from 'react';
import { Link } from 'react-router-dom';
import Quote from './../images/faquoteleft2x.png';
import bell from './../images/group2x.png';
import calender from './../images/icoutlinedaterange2x.png';
import mask from './../images/mask-group2x.png';
import meetup from './../images/meetup-icon2x.png';
import './../style/dashboard.css';
import './../style/dashboard2.css';

function dashboard () {
    return (  <div className="android-large-1">
    <div className="home">
      <div className="bottom-navigation-icon"></div>
      <div className="welcome-back-sarina-container">
        <span className="good-afternoon">Good Afternoon</span>
        <span className="span">, </span>
        <b>Sarina!</b>
      </div>
      <div className="header">
        <img className="group-icon" alt="" src={bell} />

        <div className="ellipse-parent">
          <div className="group-child"></div>
          <div className="div">3</div>
        </div>
      </div>
      <div className="shadow"></div>
      <div className="rectangle-parent">
        <div className="rectangle"></div>
        <img
          className="mask-group-icon"
          alt=""
          src={mask}
        />

<Link to="/dashboard">  <div className="peer-group-meetup">
          <div className="on-1-sessions">1 on 1 Sessions</div>
          <div className="lets-open-up">
            Let’s open up to the things that matter the most
          </div>
          <div className="watch-now">
            <div className="watch-now-child"></div>
            <b className="book-now">Book Now</b>
            <img
              className="icoutline-date-range-icon"
              alt=""
              src={calender}
            />
          </div>
        </div></Link>
        <img className="meetup-icon" alt="" src={meetup} />
      </div>
      <div className="home-inner">
      <div className="rectangle-group">
          <div className="rectangle1"></div>
          <img
            className="mask-group-icon1"
            alt=""
            src={mask}
          />

          <img
            className="faquote-left-icon"
            alt=""
            src={Quote}
          />

          <div className="it-is-better">
            “It is better to conquer yourself than to win a thousand battles”
          </div>
      </div> 
        </div>
      <img className="home-child" alt="" src="./public/ellipse-3@2x.png" />
    </div>
  </div> );
}

export default dashboard;
