import './../style/typetherapy.css';
import { Link } from 'react-router-dom';
import ellipse from './../images/ellipse-3@2x.png';
import { useState } from 'react';



function Typetherapy() {
    const [selectedOption, setSelectedOption] = useState('option1'); // State to track selected option

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

    return ( 
    <div className="typetherapy">
        <div className="Typetherapy">
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

            <div className='header-typetherapy'>
                <h2>Select package</h2>
            
            <div className='type'>
            <div className="radio-container">
      <div>
        <svg
          class="iconly-curved-bold-message"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            className='Typetherapy-icon'
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.1451 9.53C17.7931 9.952 14.6341 13.653 12.0111 13.653C9.39107 13.653 6.20007 9.955 5.84407 9.533C5.57807 9.216 5.61807 8.743 5.93507 8.476C6.25107 8.208 6.72407 8.25 6.99107 8.566C8.16207 9.953 10.5591 12.153 12.0111 12.153C13.4621 12.153 15.8371 9.955 16.9931 8.569C17.2581 8.252 17.7311 8.21 18.0491 8.473C18.3671 8.739 18.4101 9.212 18.1451 9.53ZM12.0001 2.383C4.59907 2.383 1.97607 4.899 1.97607 12C1.97607 19.1 4.59907 21.617 12.0001 21.617C19.4011 21.617 22.0241 19.1 22.0241 12C22.0241 4.899 19.4011 2.383 12.0001 2.383Z"
            fill="white"
          />
        </svg>
        <label>
        Message
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
        </label>
          <h4>₹600</h4>
      </div>

      <div>
        <svg
            class="call2"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className='Typetherapy-icon'
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.10982 8.39366C11.4341 11.717 12.1882 7.87227 14.3047 9.98734C16.3453 12.0273 17.5181 12.436 14.9327 15.0206C14.6089 15.2809 12.5514 18.4119 5.32054 11.1831C-1.91119 3.95334 1.21803 1.89371 1.47835 1.56996C4.06993 -1.02179 4.47159 0.157822 6.51212 2.19778C8.62868 4.31375 4.78559 5.07035 8.10982 8.39366Z"
              fill="white"
            />
          </svg>
        <label>
                Call
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          
        </label><h4>₹800</h4>
      </div>

      <div>
        <svg
            class="video"
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className='Typetherapy-icon'
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.2969 10.5383C14.3778 12.3704 12.8992 13.9196 10.9946 13.9975C10.8543 14.0034 4.01531 13.9896 4.01531 13.9896C2.11996 14.1335 0.461149 12.7715 0.311651 10.9463C0.300388 10.8103 0.30346 3.47219 0.30346 3.47219C0.219495 1.63815 1.69604 0.0849882 3.60163 0.00417628C3.74396 -0.00272231 10.5738 0.0100893 10.5738 0.0100893C12.4783 -0.131824 14.1423 1.24001 14.2897 3.07405C14.3 3.2061 14.2969 10.5383 14.2969 10.5383Z"
              fill="white"
            />
            <path
             className='Typetherapy-icon'
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3 4.97984L17.593 2.28484C18.409 1.61684 19.633 2.19884 19.632 3.25184L19.62 10.6008C19.619 11.6538 18.394 12.2308 17.58 11.5628L14.3 8.86784"
              fill="white"
            />
          </svg>
        <label>
        video call
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          
        </label><h4>₹1000</h4>
      </div>

      <p>Selected Option: {selectedOption}</p>
                </div>
                </div>


            </div>
        </div>
    </div>
     );
}

export default Typetherapy;