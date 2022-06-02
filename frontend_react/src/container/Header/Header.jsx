import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';


function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}

const Header = () => (
  <div className="app__header app__flex">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div> 
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
              >
                <div className="app__header-badge">
                  <div className="badge-cmp app__flex">
                    <div >
                      <h1><span className="wave-emoji">👋</span>Hello, I am Henrique ! </h1>
                      <p className="greeting-text-p">My passion is to understand business models and build impactful Analyses.<br/> I believe that data-driven decisions can change the world.</p>
                    </div>
                  </div>
                </div>
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                    text="See my resume"
                    newTab={true}
                    href={'https://drive.google.com/file/d/1N99R3AP95Izwwur42yqLyocVV-uMOUNf/view?usp=sharing'}
                  />
              </div>
              </motion.div>
            </div>
          </div> 
          <div className="greeting-image-div">
            {(
              <img
                alt="man sitting on table"
                src={images.manOnTable}
              ></img>
            )}
          </div>
        </div>
      </div>
  </div>
);

export default AppWrap(Header, 'home');
