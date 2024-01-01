import React from 'react';
import { Link } from 'react-router-dom';
import Quote from './../images/faquoteleft2x.png';
import bell from './../images/group2x.png';
import calender from './../images/icoutlinedaterange2x.png';
import mask from './../images/mask-group2x.png';
import meetup from './../images/meetup-icon2x.png';
import ellipse from './../images/ellipse-3@2x.png';
import './../style/dashboard.css';
import './../style/dashboard2.css';

function dashboard() {
  return (<div className="dashboard">
    <div className="home">
      <div className="dashbord-navbar">
        <div className="navbarContainer">
        <Link to="/dashboard"> <div className="icon-container">
            <svg className="icon-nav" width="30px" height="30px" viewBox="0 0 24 24" id="home-alt-3" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"><path d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z" ></path></svg>
            <img className="semi-circle" alt="" src={ellipse} />
          </div> </Link>
          <Link to="/bookappointment" >  <div className="icon-container">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="icon-nav" d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" />
              <path className="icon-nav" fillRule="evenodd" clipRule="evenodd" d="M22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12ZM16 13.25C16.4142 13.25 16.75 13.5858 16.75 14V15.25L18 15.25C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H16.75V18C16.75 18.4142 16.4142 18.75 16 18.75C15.5858 18.75 15.25 18.4142 15.25 18V16.75L14 16.75C13.5858 16.75 13.25 16.4142 13.25 16C13.25 15.5858 13.5858 15.25 14 15.25H15.25V14C15.25 13.5858 15.5858 13.25 16 13.25Z" />
            </svg>
            <img className="semi-circle" alt="" src={ellipse} />
          </div> </Link>
          <Link to='/messages'><div className="icon-container">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="icon-nav" opacity="0.15" d="M20 4H4V16H7V21L12 16H20V4Z" fill="#000000" />
              <path className="icon-nav" d="M7 21V16H4V4H20V16H12L7 21Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <img className="semi-circle" alt="" src={ellipse} />
          </div> </Link>
          <Link to='/profile'> <div className="icon-container">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="style=fill">
<g id="profile">
<path className="icon-nav" id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z" fill="#000000"/>
<path  className="icon-nav" id="rec (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z" fill="#000000"/>
</g>
</g>
</svg>
            <img className="semi-circle" alt="" src={ellipse} />
          </div> </Link>
        </div>
      </div>
    <div className='titlePage'> <h2>Home</h2></div>
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

      <Link to="/bookappointment">  <div className="peer-group-meetup">
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

  </div>
  </div>
 
   );
}

export default dashboard;
