import 'src/components/pages/aboutPage/AboutPage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import PageHeader from 'src/components/common/pageHeader/PageHeader';
import LineSplit from 'src/components/layout/lineSplit/LineSplit';
import UnderConstruction from 'src/components/common/underConstruction/UnderConstruction';

const bem = defineBlock('AboutPage');

const AboutPage = () => (
  <div className={bem()}>
    <div className={bem('header')}>
      <PageHeader
        title="All You Need"
        subtitle="To Know About Me"
        description="I'm an enthusiastic and creative technologist with hands-on skills in a wide range of software, tools, and programming languages."
      />
    </div>
    <div className={bem('line-split')}>
      <LineSplit />
    </div>
    <UnderConstruction />
  </div>
);

export default AboutPage;
