import 'src/components/pages/aboutPage/timelineSection/TimelineSection.scss';

import React from 'react';

import { albumImagesPath } from 'src/constants/images';
import defineBlock from 'src/utils/css';

import MyLogoVariant2 from 'src/components/icons/logos/personal/MyLogoVariant2';

const bem = defineBlock('TimelineSection');

const TimelineSection = () => (
  <div className={bem()}>
    <div className={bem('container')}>
      <svg
        className={bem('line')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 281 1557"
      >
        <path d="M132.5 1C90.8333 28.5 -18.0277 78 4.00024 178C35.5001 321 186.726 283.082 244.5 388C307 501.5 289.16 593.335 178.5 730.5C95 834 133.5 868.5 145 888C190.333 1025.33 286.109 1312.94 277.5 1386.5C266.5 1480.5 244.5 1517 148 1556.5" />
      </svg>
      <div className={bem('ball', '1')} />
      <div className={bem('ball', '2')} />
      <div className={bem('ball', '3')} />
      <div className={bem('ball', '4')} />
      <div className={bem('ball', '5')} />
      <div className={bem('blurb', '1')}>
        <div className={bem('title')}>
          Who I Am&nbsp;<span className={bem('symbol')}>&#123;</span>
        </div>
        <div className={bem('message')}>
          I strive to live with an adeventurous mindset by seeking out new experiences and challenges that push me
          beyond my comfort zone. I embrace uncertainty, risk-taking, and the unknown to learn and grow from the
          obstacles I overcome.
        </div>
      </div>
      <div className={bem('blurb', '2')}>
        <div className={bem('title')}>
          My Recent Year&nbsp;<span className={bem('symbol')}>&#123;</span>
        </div>
        <div className={bem('message')}>
          I got engaged, traveled to Europe, and experienced the Colorado mountains through rock climbing, skiing, and
          high alpine hiking.
        </div>
      </div>
      <div className={bem('blurb', '3')}>
        <div className={bem('title')}>
          So What&#39;s Next&nbsp;<span className={bem('symbol')}>&#123;</span>
        </div>
        <div className={bem('message')}>
          I&#39;ll continue to set goals, work hard towards achieving them, and make positive choices to create a bright
          future for myself.
        </div>
      </div>
      <div className={bem('picture')}>
        <img
          src={`${albumImagesPath}/djnfv36LPa.jpg`}
          alt=""
        />
      </div>
      <div className={bem('year')}>
        <div className={bem('year-back')}>
          <div>20</div>
          <div>22</div>
          <div className={bem('year-shadow')} />
        </div>
        <div className={bem('year-front')}>
          <div>20</div>
          <div>22</div>
        </div>
      </div>
      <div className={bem('image-grid')}>
        <div className={bem('logo')}>
          <MyLogoVariant2 />
        </div>
        <div className={bem('color-box', '1')} />
        <div className={bem('color-box', '2')} />
        <img
          className={bem('image', '1')}
          src={`${albumImagesPath}/d9dK249xAz.jpg`}
          alt=""
        />
        <img
          className={bem('image', '2')}
          src={`${albumImagesPath}/js9FGG134c.jpg`}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default TimelineSection;
