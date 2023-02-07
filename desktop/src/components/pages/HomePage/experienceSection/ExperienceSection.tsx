import 'src/components/pages/homePage/experienceSection/ExperienceSection.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('ExperienceSection');

const ExperienceSection = () => (
  <div className={bem()}>
    <div className={bem('title')}>What I Do</div>
    <div className={bem('subtitle', '1')}>Project Management /</div>
    <div className={bem('subtitle', '2')}>Front-End Development /</div>
    <div className={bem('bar')}></div>
    <div className={bem('cards')}>
      <div className={bem('card')}></div>
      <div className={bem('card')}></div>
      <div className={bem('card')}></div>
      <div className={bem('card')}></div>
    </div>
  </div>
);

export default ExperienceSection;
