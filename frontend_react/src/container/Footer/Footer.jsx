import React, { useState,useRef } from 'react';

// import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

import emailjs from '@emailjs/browser';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('default_service','template_tfwmk0o',form.current,'bDt5flQG_BL5kjS_8')// process.env.EMAIL_APP_PUBLIC_KEY) process.env.EMAIL_APP_TEMPLATE_ID
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    setLoading(false);
    setIsFormSubmitted(true);
  };
 
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      {/* <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:henriquebritos@hotmail.com" className="p-text">henriquebritos@hotmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+55 (93) 9 9164 8755" className="p-text">+55 (93) 9 9164 8755</a>
          </div>
      </div> */}
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex"  ref={form} onSubmit={sendEmail}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username"/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email"/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <input type="submit" className="p-text sendbutton" value={!loading ? 'Send Message' : 'Sending...'}/>
            {/* {!loading ? 'Send Message' : 'Sending...'} */}
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
