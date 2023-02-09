import 'src/components/pages/aboutPage/timelineSection/TimelineSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('TimelineSection');

const TimelineSection = () => (
  <div className={bem()}>
    <div className={bem('line')}>
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
    </div>
  </div>
);

export default TimelineSection;
