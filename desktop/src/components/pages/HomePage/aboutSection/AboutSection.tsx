import 'src/components/pages/homePage/aboutSection/AboutSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import Button from 'src/components/common/button/Button';

const bem = defineBlock('AboutSection');

const AboutSection = () => (
  <div className={bem()}>
    <div className={bem('blurb')}>
      <div className={bem('name')}>Jacob Alspaw</div>
      <div className={bem('title', '1')}>Front-End Lead,</div>
      <div className={bem('title', '2')}>Full-Stack Software Developer</div>
      <div className={bem('statement')}>
        I'm an enthusiastic and creative technologist with hands-on skills in a wide range of software, tools, and
        programming languages.
      </div>
      <div className={bem('contact')}>
        <Button
          size="medium"
          type="filled"
          color="purple"
          label="Let's Talk"
        />
      </div>
    </div>
    <div className={bem('spacer')}></div>
    <div className={bem('picture')}>
      <img src="static/images/test.png" />
      <img src="static/images/test.png" />
      <img src="static/images/test.png" />
      <div className={bem('floating-symbol', '1')}>&#123;</div>
      <div className={bem('floating-symbol', '2')}>&#62;</div>
      <div className={bem('floating-symbol', '3')}>
        <svg
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.3729 4.20704C21.3058 -1.01667 28.6942 -1.01667 30.6271 4.20704L33.7658 12.6893C34.3735 14.3316 35.6684 15.6265 37.3107 16.2342L45.793 19.3729C51.0167 21.3058 51.0167 28.6942 45.793 30.6271L37.3107 33.7658C35.6684 34.3735 34.3735 35.6684 33.7658 37.3107L30.6271 45.793C28.6942 51.0167 21.3058 51.0167 19.3729 45.793L16.2342 37.3107C15.6265 35.6684 14.3316 34.3735 12.6893 33.7658L4.20704 30.6271C-1.01667 28.6942 -1.01667 21.3058 4.20704 19.3729L12.6893 16.2342C14.3316 15.6265 15.6265 14.3316 16.2342 12.6893L19.3729 4.20704Z" />
        </svg>
      </div>
    </div>
  </div>
);

export default AboutSection;
