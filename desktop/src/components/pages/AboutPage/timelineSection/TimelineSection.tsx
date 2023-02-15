import 'src/components/pages/aboutPage/timelineSection/TimelineSection.scss';

import React from 'react';

import { albumImagesPath } from 'src/utils/constants';
import defineBlock from 'src/utils/defineBlock';

import MyLogoVariant2 from 'src/components/icons/logos/personal/MyLogoVariant2';

const bem = defineBlock('TimelineSection');

const TimelineSection = () => (
  <div className={bem()}>
    <svg
      viewBox="0 0 427 1507"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M426 3.50005C357.667 -1.33328 214.8 -2.19995 190 33.0001C159 77.0001 248.5 127.5 223.5 183C198.5 238.5 155 253.5 98.9997 293C42.9997 332.5 14.4997 358 32.4997 391.5C50.4997 425 229 371 241 434C253 497 76.4998 589 17.9998 740.5C-28.8002 861.7 32.8331 897.667 69.4998 900.5C150.833 955.667 315.8 1093.4 325 1203C334.2 1312.6 328.833 1451 325 1506.5" />
    </svg>
    <div className={bem('ball', '1')} />
    <div className={bem('ball', '2')} />
    <div className={bem('ball', '3')} />
    <div className={bem('ball', '4')} />
    <div className={bem('blurb', '1')}>
      <div className={bem('title')}>
        Who I Am&nbsp;<span className={bem('symbol')}>&#123;</span>
      </div>
      <div className={bem('message')}>
        I strive to live with an adeventurous mindset by seeking out new experiences and challenges that push me beyond
        my comfort zone. I embrace uncertainty, risk-taking, and the unknown to learn and grow from the obstacles I
        overcome.
      </div>
    </div>
    <div className={bem('blurb', '2')}>
      <div className={bem('title')}>
        My Recent Year Was&nbsp;<span className={bem('symbol')}>&#123;</span>
      </div>
      <div className={bem('message')}>
        ... full of excitement and wonder! I got engaged, spent time with many family members, traveled to Europe for
        the 1st time, and experienced the Colorado mountains through multi-pitch rock climbing, skiing, and high alpine
        hiking. It was a year that won&#39;t be forgotten.
      </div>
    </div>
    <div className={bem('blurb', '3')}>
      <div className={bem('title')}>
        So What&#39;s Next&nbsp;<span className={bem('symbol')}>&#123;</span>
      </div>
      <div className={bem('message')}>
        The future is not set in stone, and it&#39;s up to me to make the most of the opportunities and challenges that
        come my way. I&#39;ll continue to set goals, work hard towards achieving them, and make positive choices to
        create a bright future for myself.
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
      <img
        className={bem('image', '3')}
        src={`${albumImagesPath}/D18spL3vmq.jpg`}
        alt=""
      />
    </div>
  </div>
);

export default TimelineSection;
