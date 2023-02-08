import 'src/components/pages/homePage/aboutSection/AboutSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';
import Button from 'src/components/common/button/Button';
import Star from 'src/components/icons/general/Star';

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
        <Star />
      </div>
    </div>
  </div>
);

export default AboutSection;
