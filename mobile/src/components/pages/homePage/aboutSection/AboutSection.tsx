import 'src/components/pages/homePage/aboutSection/AboutSection.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import defineBlock from 'src/utils/css';

import Button from 'src/components/common/button/Button';
import Star from 'src/components/icons/general/Star';

import { RouteName } from 'src/constants/common';
import { albumImagesPath, miscImagesPath } from 'src/constants/images';

const bem = defineBlock('AboutSection');

const AboutSection = () => (
  <div className={bem()}>
    <div className={bem('blurb')}>
      <div className={bem('name')}>Jacob Alspaw</div>
      <div className={bem('title', '1')}>Front-End Lead,</div>
      <div className={bem('title', '2')}>Full-Stack Software Developer</div>
      <div className={bem('statement')}>
        I&#39;m an enthusiastic and creative technologist with hands-on skills in a wide range of software, tools, and
        programming languages.
      </div>
    </div>
    <div className={bem('pictures')}>
      <div className={bem('image')}>
        <img
          src={`${albumImagesPath}/GK6GvUHSho.jpg`}
          alt=""
        />
      </div>
      <div className={bem('image')}>
        <img
          src={`${albumImagesPath}/ypqCmdMDip.jpg`}
          alt=""
        />
      </div>
      <div className={bem('image')}>
        <img
          src={`${miscImagesPath}/profile--small.jpg`}
          alt=""
        />
      </div>
      <div className={bem('floating-symbol', '1')}>&#123;</div>
      <div className={bem('floating-symbol', '2')}>&#62;</div>
      <div className={bem('floating-symbol', '3')}>
        <Star />
      </div>
    </div>
    <div className={bem('contact')}>
      <Link to={RouteName.Contact}>
        <Button
          size="medium"
          type="filled"
          color="purple"
          label="Let's Talk"
        />
      </Link>
    </div>
  </div>
);

export default AboutSection;
