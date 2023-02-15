import 'src/components/pages/homePage/experienceSection/ExperienceSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('ExperienceSection');

const ExperienceSection = () => (
  <div className={bem()}>
    <div className={bem('title')}>What I Do</div>
    <div className={bem('subtitle', '1')}>Project Management /</div>
    <div className={bem('subtitle', '2')}>Front-End Development /</div>
    <div className={bem('bar')} />
    <div className={bem('cards')}>
      <div className={bem('card')}>
        <div className={bem('bubble-text')}>REACT</div>
        <div className={bem('bubble-text')}>JS</div>
        <div className={bem('bubble-text')}>NODE</div>
        <div className={bem('card-title')}>Software Development</div>
      </div>
      <div className={bem('card')}>
        <div className={bem('dev-screen-inner')} />
        <div className={bem('dev-screen-outer')} />
        <div className={bem('card-title')}>Websites & Mobile Apps</div>
      </div>
      <div className={bem('card')}>
        <div className={bem('project-grid')}>
          <div className={bem('project-grid-box')} />
          <div className={bem('project-grid-box')} />
          <div className={bem('project-grid-box')} />
          <div className={bem('project-grid-box')} />
          <div className={bem('project-grid-box')} />
          <div className={bem('project-grid-box')} />
          <div className={bem('project-grid-box')} />
        </div>
        <div className={bem('card-title')}>Project Management</div>
      </div>
      <div className={bem('card')}>
        <svg
          className={bem('seek-logo')}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <linearGradient
            id="search-shape-gradient"
            x2="0.35"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="rgba(223, 211, 244, 0.728125)"
            />
            <stop
              offset="60%"
              stopColor="rgba(131, 76, 230, 0.5)"
            />
          </linearGradient>
          <path
            fill="url('#search-shape-gradient')"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <div className={bem('card-title')}>Seek Opportunities</div>
      </div>
    </div>
  </div>
);

export default ExperienceSection;
