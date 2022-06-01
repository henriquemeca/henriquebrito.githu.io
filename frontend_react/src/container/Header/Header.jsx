import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={"greeting-text"}
              >
                Henrique
                <span className="wave-emoji">👋</span>
              </h1>
              <p
                className={"greeting-text-p subTitle"}
              >
                hello2
              </p>
              {/* <SocialMedia /> */}
              {/* <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {'google.com' && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={'google.com'}
                  />
                )}
              </div> */}
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
