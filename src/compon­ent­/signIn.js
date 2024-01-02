import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Therapy from './../images/Login.jpg';
import './../style/login-reg.css';

function SignIp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type} = e.target;
    
    // setFormData({
    //   ...formData,
    //   [name]: newValue,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can perform actions with the form data, like sending it to a server
  };

  return (
    <div className="reg">
      <div className="main">
      <main>
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <div className="blur-background"></div>
                <h2 className="form-title">Sign IN</h2>
                <form onSubmit={handleSubmit} className="register-form">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="pass"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group form-button">
                    <Link to="/dashboard"> <button type="submit" className="form-submit">Signin
                    </button></Link>
                  </div>
                </form>
                <Link to="/join" className="signup-image-link">
                  I am new Here
                </Link>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={Therapy} alt="signin-image" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}

export default SignIp;
