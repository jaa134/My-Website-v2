import 'src/components/pages/aboutPage/AboutPage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import UnderConstruction from 'src/components/common/underConstruction/UnderConstruction';

const bem = defineBlock('AboutPage');

const AboutPage = () => (
  <div className={bem()}>
    <UnderConstruction />
  </div>
);

export default AboutPage;
