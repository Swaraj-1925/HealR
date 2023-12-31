import { Link } from "react-router-dom";
import ellipse from './../images/ellipse-3@2x.png';
import './../style/doc_Description.css';
import model from './../images/image-40.png';


function doc_Description() {
    return ( 
        <div className="doc_Description">
          <div className="doc_container">
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
              <path className="icon-nav" strokeWidth="1" fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" />
            </svg>
            <img className="semi-circle" alt="" src={ellipse} />
          </div> </Link>
        </div>
      </div>
      

      <div className="doctor-description-1">
        <div className="top-navigation">
          <div className="menu"></div>
          <div className="book-appointment">Book Appointment</div>
        </div>
        <div className="image">
          <img className="image-4" src={model} alt=""/>
        </div>
        <div className="information">
          <div className="frame-48095513">
            <div className="dr-elia-ana">Dr. Elia Ana</div>
            <div className="cardiologists-mars-hospital">
              Cardiologists | Mars Hospital
            </div>
          </div>
          <div className="reviews">
            <svg
              className="ant-design-star-filled"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9628 6.20682L11.4997 5.55819L9.5046 1.51346C9.45011 1.40272 9.36046 1.31307 9.24972 1.25858C8.97198 1.12147 8.63448 1.23572 8.49562 1.51346L6.5005 5.55819L2.03741 6.20682C1.91437 6.2244 1.80187 6.2824 1.71573 6.37029C1.6116 6.47732 1.55422 6.62131 1.5562 6.77062C1.55818 6.91993 1.61935 7.06235 1.72628 7.16658L4.95538 10.3148L4.19249 14.7603C4.1746 14.8637 4.18605 14.9701 4.22552 15.0673C4.265 15.1646 4.33094 15.2488 4.41585 15.3105C4.50077 15.3722 4.60127 15.4088 4.70595 15.4163C4.81063 15.4237 4.91531 15.4017 5.00812 15.3527L9.00011 13.2539L12.9921 15.3527C13.1011 15.4107 13.2276 15.4301 13.3489 15.409C13.6548 15.3562 13.8605 15.0662 13.8077 14.7603L13.0448 10.3148L16.2739 7.16658C16.3618 7.08045 16.4198 6.96795 16.4374 6.8449C16.4849 6.53729 16.2704 6.25252 15.9628 6.20682Z"
                fill="#FFD33C"
              />
            </svg>

            <div className="_5-0-332-reviews">5.0 (332 reviews)</div>
          </div>
        </div>
        <div className="containt">
        
          <div className="patients">
            <div className="icon">
              <div className="iconly">
                <svg
                  className="_2-user"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                   clipRule="evenodd"
                    d="M12.7124 4.76241C12.7124 7.40617 10.5489 9.52482 7.84933 9.52482C5.1507 9.52482 2.98631 7.40617 2.98631 4.76241C2.98631 2.11865 5.1507 0 7.84933 0C10.5489 0 12.7124 2.11865 12.7124 4.76241ZM0.5 14.9174C0.5 12.47 3.88553 11.8577 7.84933 11.8577C11.8347 11.8577 15.1987 12.4911 15.1987 14.9404C15.1987 17.3877 11.8131 18 7.84933 18C3.864 18 0.5 17.3666 0.5 14.9174ZM14.6734 4.84875C14.6734 6.19506 14.2605 7.45131 13.5364 8.49482C13.4611 8.60214 13.5276 8.74683 13.6587 8.76983C13.8407 8.79954 14.0276 8.81774 14.2184 8.82158C16.1167 8.87045 17.8202 7.67362 18.2908 5.87118C18.9885 3.19676 16.9415 0.795428 14.3339 0.795428C14.0511 0.795428 13.7801 0.824175 13.5159 0.876878C13.4797 0.884544 13.4405 0.901792 13.421 0.932455C13.3955 0.971743 13.4141 1.02253 13.4396 1.05607C14.2233 2.13216 14.6734 3.44206 14.6734 4.84875ZM17.8173 10.7023C19.0932 10.9466 19.9317 11.444 20.2791 12.1694C20.5736 12.7635 20.5736 13.4534 20.2791 14.0475C19.7478 15.1705 18.0335 15.5318 17.3672 15.6247C17.2292 15.6439 17.1186 15.5289 17.1333 15.3928C17.4738 12.2805 14.7664 10.8048 14.0658 10.4656C14.0364 10.4493 14.0296 10.4263 14.0325 10.411C14.0345 10.4014 14.0472 10.3861 14.0697 10.3832C15.5854 10.3545 17.2155 10.5586 17.8173 10.7023Z"
                    fill="#DE671D"
                  />
                </svg>
              </div>
            </div>
            <div className="count">
              <div className="_658">658+</div>
              <div className="patients2">Patients</div>
            </div>
          </div>
          <div className="years-expert">
            <div className="icon">
              <div className="iconly">
                <svg
                  className="activity"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                   clipRule="evenodd"
                    d="M15.6799 2.41C15.6799 1.08 16.7599 0 18.0899 0C19.4199 0 20.4999 1.08 20.4999 2.41C20.4999 3.74 19.4199 4.82 18.0899 4.82C16.7599 4.82 15.6799 3.74 15.6799 2.41ZM11.8298 12.7593L14.7198 9.0303L14.6798 9.0503C14.8398 8.8303 14.8698 8.5503 14.7598 8.3003C14.6508 8.0503 14.4098 7.8803 14.1508 7.8603C13.8798 7.8303 13.6108 7.9503 13.4498 8.1703L11.0308 11.3003L8.25976 9.1203C8.08976 8.9903 7.88976 8.9393 7.68976 8.9603C7.49076 8.9903 7.31076 9.0993 7.18976 9.2593L4.23076 13.1103L4.16976 13.2003C3.99976 13.5193 4.07976 13.9293 4.37976 14.1503C4.51976 14.2403 4.66976 14.3003 4.83976 14.3003C5.07076 14.3103 5.28976 14.1893 5.42976 14.0003L7.93976 10.7693L10.7898 12.9103L10.8798 12.9693C11.1998 13.1393 11.5998 13.0603 11.8298 12.7593ZM13.9498 1.7803C13.9098 2.0303 13.8898 2.2803 13.8898 2.5303C13.8898 4.7803 15.7098 6.5993 17.9498 6.5993C18.1998 6.5993 18.4398 6.5703 18.6898 6.5303V14.5993C18.6898 17.9903 16.6898 20.0003 13.2898 20.0003H5.90076C2.49976 20.0003 0.499756 17.9903 0.499756 14.5993V7.2003C0.499756 3.8003 2.49976 1.7803 5.90076 1.7803H13.9498Z"
                    fill="#DE671D"
                  />
                </svg>
              </div>
            </div>
            <div className="count2">
              <div className="_11">11+</div>
              <div className="years-expert2">Years expert</div>
            </div>
          </div>
          <Link to="/review" style={{textDecoration: 'none'}}> <div className="rating">
            <div className="icon">
              <svg
                className="ant-design-star-filled2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2836 8.27578L15.3328 7.41093L12.6726 2.01797C12.6 1.87031 12.4805 1.75078 12.3328 1.67812C11.9625 1.49531 11.5125 1.64765 11.3273 2.01797L8.66717 7.41093L2.71639 8.27578C2.55233 8.29922 2.40233 8.37656 2.28748 8.49375C2.14864 8.63645 2.07214 8.82843 2.07477 9.02752C2.07741 9.2266 2.15897 9.41649 2.30155 9.55547L6.60701 13.7531L5.58983 19.6805C5.56597 19.8183 5.58123 19.9602 5.63387 20.0898C5.68651 20.2195 5.77442 20.3318 5.88764 20.414C6.00086 20.4962 6.13486 20.5451 6.27444 20.555C6.41401 20.565 6.55359 20.5356 6.67733 20.4703L12 17.6719L17.3226 20.4703C17.468 20.5477 17.6367 20.5734 17.7984 20.5453C18.2062 20.475 18.4805 20.0883 18.4101 19.6805L17.393 13.7531L21.6984 9.55547C21.8156 9.44062 21.893 9.29062 21.9164 9.12656C21.9797 8.7164 21.6937 8.33672 21.2836 8.27578Z"
                  fill="#DE671D"
                />
              </svg>
            </div>
            <div className="count2">
              <div className="_5-0">5.0</div>
              <div className="rating2">Rating</div>
            </div>
          </div> </Link>
          <Link to="/review" style={{textDecoration: 'none'}}>  <div className="reviews2">
            <div className="icon">
              <div className="iconly">
                <svg
                  className="chat"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                   clipRule="evenodd"
                    d="M0 10.015C0 4.74712 4.21 0 10.02 0C15.7 0 20 4.65699 20 9.98498C20 16.1642 14.96 20 10 20C8.36 20 6.54 19.5593 5.08 18.698C4.57 18.3876 4.14 18.1572 3.59 18.3375L1.57 18.9384C1.06 19.0986 0.6 18.698 0.75 18.1572L1.42 15.9139C1.53 15.6034 1.51 15.2729 1.35 15.0125C0.49 13.4301 0 11.6975 0 10.015ZM8.7 10.015C8.7 10.7261 9.27 11.2969 9.98 11.307C10.69 11.307 11.26 10.7261 11.26 10.025C11.26 9.31397 10.69 8.74311 9.98 8.74311C9.28 8.7331 8.7 9.31397 8.7 10.015ZM13.31 10.025C13.31 10.7261 13.88 11.307 14.59 11.307C15.3 11.307 15.87 10.7261 15.87 10.025C15.87 9.31397 15.3 8.74311 14.59 8.74311C13.88 8.74311 13.31 9.31397 13.31 10.025ZM5.37 11.307C4.67 11.307 4.09 10.7261 4.09 10.025C4.09 9.31397 4.66 8.74311 5.37 8.74311C6.08 8.74311 6.65 9.31397 6.65 10.025C6.65 10.7261 6.08 11.2969 5.37 11.307Z"
                    fill="#DE671D"
                  />
                </svg>
              </div>
            </div>
            <div className="count2">
              <div className="_300">300+</div>
              <div className="reviews3">Reviews</div>
            </div>
          </div></Link>
        </div>
        <div className="title-description">
          <div className="about-me">About Me</div>
        </div>
          
       
          
          <Link to="/Schedule"><button className="book-appointment2">Book Appointment</button></Link>
         
       
      </div>
      </div>


  </div>  );
}

export default doc_Description;