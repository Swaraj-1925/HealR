import { Link } from "react-router-dom";
import ellipse from './../images/ellipse-3@2x.png';
import './../style/profile.css';

function Profile() {
    return (<div className="Profile">
        <div className="profile-container">

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
                                    <path className="icon-nav" id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z" fill="#000000" />
                                    <path className="icon-nav" id="rec (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z" fill="#000000" />
                                </g>
                            </g>
                        </svg>
                        <img className="semi-circle" alt="" src={ellipse} />
                    </div> </Link>
                </div>
            </div>
            <div className="settings">
                <h3>Settings</h3>

                <div className="box1">
                <Link to="/editProfile" style={{textDecoration: 'none'}}>  <div className="edit profile">

                        <svg
                            class="group2"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path className="icon-setting"
                                d="M2.95322 4.87728C2.95505 4.61466 3.06012 4.36329 3.24573 4.1775C3.43134 3.9917 3.6826 3.88637 3.94522 3.88428H21.9612C22.5092 3.88428 22.9532 4.32928 22.9532 4.87728V20.8913C22.9514 21.1539 22.8463 21.4053 22.6607 21.5911C22.4751 21.7769 22.2238 21.8822 21.9612 21.8843H3.94522C3.68203 21.884 3.42971 21.7793 3.24371 21.5931C3.0577 21.4069 2.95322 21.1545 2.95322 20.8913V4.87728ZM4.95322 5.88428V19.8843H20.9532V5.88428H4.95322ZM6.95322 7.88428H12.9532V13.8843H6.95322V7.88428ZM8.95322 9.88428V11.8843H10.9532V9.88428H8.95322ZM6.95322 15.8843H18.9532V17.8843H6.95322V15.8843ZM14.9532 7.88428H18.9532V9.88428H14.9532V7.88428ZM14.9532 11.8843H18.9532V13.8843H14.9532V11.8843Z"
                                fill="black"
                            />
                        </svg>

                        <h4>Edit profile </h4>

                    </div> </Link>
                  <Link to="/Subscription" style={{textDecoration: 'none'}}>  <div className="Subscription">
                    <svg
                class="group5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className="icon-setting"
                  d="M22 19V21H20V19H4V21H2V19C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V6C1 5.73479 1.10536 5.48043 1.29289 5.2929C1.48043 5.10536 1.73478 5 2 5H12.528C13.0902 4.37006 13.7793 3.86619 14.55 3.5215C15.3207 3.1768 16.1557 2.99908 17 3C18.777 3 20.374 3.773 21.472 5H22C22.2652 5 22.5196 5.10536 22.7071 5.2929C22.8946 5.48043 23 5.73479 23 6V18C23 18.2652 22.8946 18.5196 22.7071 18.7071C22.5196 18.8946 22.2652 19 22 19ZM11.341 7H3V17H21V13.472C20.0071 14.3613 18.7464 14.8946 17.4168 14.9879C16.0872 15.0812 14.7644 14.7291 13.6571 13.9871C12.5498 13.2452 11.721 12.1557 11.3017 10.8905C10.8823 9.62527 10.8961 8.25646 11.341 7ZM17 13C18.0609 13 19.0783 12.5786 19.8284 11.8284C20.5786 11.0783 21 10.0609 21 9C21 7.93914 20.5786 6.92172 19.8284 6.17158C19.0783 5.42143 18.0609 5 17 5C15.9391 5 14.9217 5.42143 14.1716 6.17158C13.4214 6.92172 13 7.93914 13 9C13 10.0609 13.4214 11.0783 14.1716 11.8284C14.9217 12.5786 15.9391 13 17 13ZM5 13H7V15H5V13ZM8 13H10V15H8V13Z"
                  fill="black"
                />
              </svg>
              <h4>Subscription</h4>

                    </div> </Link>
                    <Link to="/helpsupport" style={{textDecoration: 'none'}}>   <div className="Helpsupport">
                    <svg
                class="group6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className="icon-setting"
                  d="M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z"
                  fill="black"
                />
              </svg>
              <h4>help & support</h4>

                    </div></Link>
                    <Link to="/deleteaccount" style={{textDecoration: 'none'}}>  <div className="Deleteaccount">
                        <svg
                            class="vector8"
                            width="14"
                            height="19"
                            viewBox="0 0 14 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path className="icon-setting"
                                d="M10.8461 6.65807V16.5726H3.15384V6.65807H10.8461ZM9.40384 0.709351H4.59615L3.63461 1.7008H0.269226V3.68371H13.7308V1.7008H10.3654L9.40384 0.709351ZM12.7692 4.67516H1.23076V16.5726C1.23076 17.6632 2.09615 18.5555 3.15384 18.5555H10.8461C11.9038 18.5555 12.7692 17.6632 12.7692 16.5726V4.67516Z"
                                fill="black"
                            />
                        </svg>
                        <h4>Delete account</h4>

                    </div></Link>
                    <Link to="/privacypolicy" style={{textDecoration: 'none'}}> <div className="Privacypolicy">
                        <svg
                            class="group4"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path className="icon-setting"
                                d="M6 8V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6ZM19 10H5V20H19V10ZM11 15.732C10.6187 15.5119 10.3207 15.1721 10.1522 14.7653C9.98376 14.3586 9.9542 13.9076 10.0681 13.4823C10.1821 13.057 10.4332 12.6813 10.7825 12.4132C11.1318 12.1452 11.5597 11.9999 12 11.9999C12.4403 11.9999 12.8682 12.1452 13.2175 12.4132C13.5668 12.6813 13.8179 13.057 13.9319 13.4823C14.0458 13.9076 14.0162 14.3586 13.8478 14.7653C13.6793 15.1721 13.3813 15.5119 13 15.732V18H11V15.732ZM8 8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8Z"
                                fill="black"
                            />
                        </svg>
                        <h4>privcay policy</h4>

                    </div></Link>
                    <Link to="/logout" style={{textDecoration: 'none'}}> <div className="Logout">
                        <svg
                            class="logout"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.7308 8.34191L15.375 9.73986L16.8942 11.3163H9.03846V13.2992H16.8942L15.375 14.8657L16.7308 16.2735L20.5769 12.3077L16.7308 8.34191ZM5.1923 5.36755H11.9231V3.38464H5.1923C4.13461 3.38464 3.26923 4.27695 3.26923 5.36755V19.2479C3.26923 20.3385 4.13461 21.2308 5.1923 21.2308H11.9231V19.2479H5.1923V5.36755Z"
                                fill="black"
                            />
                        </svg>
                        <h4>Log Out</h4>

                    </div> </Link>
                </div>
            </div>

        </div>

    </div>);
}

export default Profile;