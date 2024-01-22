import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Therapy from './../images/therapy.jpg';
import './../style/login-reg.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerm: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
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
          <div className="container-reg">
            <div className="signup-content">
              <div className="signup-form">
                <div className="blur-background"></div>
                <h2 className="form-title">Sign up</h2>
                <form onSubmit={handleSubmit} className="register-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
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
                      required
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
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="re-pass">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="re_pass"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agreeTerm"
                      id="agree-term"
                      className="agree-term"
                      checked={formData.agreeTerm}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span></span>I agree all statements in{' '}
                      <a href="#q" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                   <Link to="/dashboard"> <button type="submit" className="form-submit">SignUp</button></Link>
                  </div>
                </form>
                <Link to="/login" className="signup-image-link">
                  I am already a member
                </Link>
              </div>
              <div className="signup-image">
                <figure>
                  
                  <img src= {Therapy} alt="signin-img" />
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

export default SignUp;
