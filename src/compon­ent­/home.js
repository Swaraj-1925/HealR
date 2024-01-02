import React from 'react';
import { Link } from "react-router-dom";
import qaImg from './../images/Anonymity Q&A.jpg';
import Depressionimg from './../images/Depression.jpg';
import ResourceImg from './../images/Resource Library.jpg';
import SupportImg from './../images/Support Forums.jpg';
import adhdimg from './../images/adhd.png';
import anxietyimg from './../images/anxiety.jpg';
import bipolarimg from './../images/bipolar.jpg';
import expertImg from './../images/expert-therapy.jpg';
import gmailimg from './../images/gmail-icon.png';
import logo from './../images/logo-png.png';
import lonelinessimg from './../images/loneliness.jpg';
import ptsdimg from './../images/ptsd.jpg';
import './../style/home.css';



const emailAddress = 'healr.society@gmail.com';

const gridItems = [
    {
        id: 1,
        imageSrc: Depressionimg,
        title: 'Depression',
        description: 'a heavy fog that blankets the mind, sapping joy and energy',
    },
    {
        id: 2,
        imageSrc: anxietyimg,
        title: 'Anxiety',
        description: 'a relentless companion, causing a perpetual state of worry and unease',
    },
    {
        id: 3,
        imageSrc: bipolarimg,
        title: 'Bipolar disorder',
        description: 'a rollercoaster of highs and lows, disrupting the equilibrium of daily life.',
    },
    {
        id: 4,
        imageSrc: lonelinessimg,
        title: 'loneliness',
        description: 'a haunting sensation that isolates one from the world, leaving an ache for connection',
    },
    {
        id: 5,
        imageSrc: ptsdimg,
        title: 'Post-traumatic stress disorder',
        description: 'PTSD, a battle scar from past trauma, triggering overwhelming emotions and flashbacks',
    },
    {
        id: 6,
        imageSrc: adhdimg,
        title: 'ADHD',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },


];



function home() {
    return (
<div>
        <div className="navbar">
            <div className="flex-container">
                <img className="logo" src={logo} alt="Imag" />
                <div className="links">
                    <Link to="/"><h5>Home</h5></Link>
                    <Link to="/prices"><h5>Prices</h5></Link>
                    <a href="#Services"><h5>Services</h5></a>
                    <a href="#foot"><h5>Contact</h5></a>
                </div>
            </div>
              <div className="backimg-small">
            <div className="backimg-large"> </div>
                <div className="main-text">
                    <div className="root"></div>
                    <h2 id="name">HealR</h2>
                    <h4 id="tagline">You are not alone. You are seen. I am with you. You are not alone.</h4>
                    <div className="buttonhome">
                    <Link to="/about"><button className="btn1">About us</button></Link>
                    <Link to="/join"><button className="btn2">Join in</button></Link>
                    </div>
                </div>
            
              </div>
    </div>

    <div className="grid">
            <div>
                <header className='py-5 header text-center'>
                    <h1 className="display-4">Common Challenges</h1>
                    <p className="font-italic text-muted mb-1">These challenges are part of life's journey, but you don't have to face them alone. Join us <b>we will help </b>  </p><p></p>

                </header>
            </div>
            <div className='grid-container'>
                {gridItems.map(item => (
                    <div key={item.id} className="grid-item">
                        <img className="gridimg" src={item.imageSrc} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
    </div>

    <div id="Services">
        <div className="services-container">
          <main>
        <header id="servicess2" >Services</header>
        <ul className="cards-container">
          <li className="cyan-feature-card">
            <h2>Expert Sessions</h2>
            <p>
              Access to specialized therapist sessions.
            </p>
            <img className="Servicesimg" src={expertImg}
                 alt="supervisor feature icon" />
          </li>
      
          <li className="red-feature-card">
            <h2>Anonymity Q&A</h2>
            <p>
              Ask questions anonymously to therapists.
            </p>
            <img className="Servicesimg" src={qaImg}
                 alt="team builder feature icon" />
          </li>
      
          <li className="orange-feature-card">
            <h2>Resource Library</h2>
            <p>
              Access books,music and much more.
            </p>
            <img className="Servicesimg" src={ResourceImg}
                 alt="karma feature icon" />
          </li>
      
          <li className="blue-feature-card">
            <h2>Support Forums</h2>
            <p>
              Share experiences and connect
            </p>
            <img className="Servicesimg" src={SupportImg} alt="" />
          </li>
        </ul>
      </main>
    </div>


    </div>
    <footer id='foot'>
        <p id='true'>
        Please feel free to reach out to us at
        <a href={`mailto:${emailAddress}`}><img src={gmailimg} id='true' alt=""/>{emailAddress}</a>.
      </p>
    </footer>

</div>
    );
}

export default home;
