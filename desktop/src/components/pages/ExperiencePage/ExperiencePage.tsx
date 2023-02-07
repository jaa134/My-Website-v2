import 'src/components/pages/experiencePage/ExperiencePage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('ExperiencePage');

const ExperiencePage = () => (
  <div className={bem()}>
    <div className={bem('work')}></div>
    <div className={bem('tools')}></div>
    <div className={bem('projects')}></div>
  </div>
);

export default ExperiencePage;
