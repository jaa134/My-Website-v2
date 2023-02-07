import 'src/components/pages/aboutPage/AboutPage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('AboutPage');

const AboutPage = () => (
  <div className={bem()}>
    <div className={bem('timeline')}></div>
    <div className={bem('gallery')}></div>
  </div>
);

export default AboutPage;
