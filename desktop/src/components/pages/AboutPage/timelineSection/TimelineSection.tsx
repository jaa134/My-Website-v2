import 'src/components/pages/aboutPage/timelineSection/TimelineSection.scss';

import React from 'react';

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
    <div className={bem('ball', '1')}></div>
    <div className={bem('ball', '2')}></div>
    <div className={bem('ball', '3')}></div>
    <div className={bem('ball', '4')}></div>
    <div className={bem('blurb', '1')}>
      <div className={bem('title')}>
        Who I Am&nbsp;<span className={bem('symbol')}>&#123;</span>
      </div>
      <div className={bem('message')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Quis viverra nibh cras pulvinar.
      </div>
    </div>
    <div className={bem('blurb', '2')}>
      <div className={bem('title')}>
        My Recent Year Was&nbsp;<span className={bem('symbol')}>&#123;</span>
      </div>
      <div className={bem('message')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Quis viverra nibh cras pulvinar.
      </div>
    </div>
    <div className={bem('blurb', '3')}>
      <div className={bem('title')}>
        So What's Next&nbsp;<span className={bem('symbol')}>&#123;</span>
      </div>
      <div className={bem('message')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Quis viverra nibh cras pulvinar.
      </div>
    </div>
    <div className={bem('picture')}>
      <img
        src="static/images/test.png"
        alt=""
      />
    </div>
    <div className={bem('year')}>
      <div className={bem('year-back')}>
        <div>20</div>
        <div>22</div>
        <div className={bem('year-shadow')}></div>
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
      <div className={bem('color-box', '1')}></div>
      <div className={bem('color-box', '2')}></div>
      <img
        className={bem('image', '1')}
        src="static/images/test.png"
        alt=""
      />
      <img
        className={bem('image', '2')}
        src="static/images/test.png"
        alt=""
      />
      <img
        className={bem('image', '3')}
        src="static/images/test.png"
        alt=""
      />
    </div>
  </div>
);

export default TimelineSection;
