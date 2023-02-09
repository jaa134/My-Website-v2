import 'src/components/pages/aboutPage/AboutPage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import PageHeader from 'src/components/common/pageHeader/PageHeader';

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
    <div className={bem('timeline')} />
    <div className={bem('gallery')} />
  </div>
);

export default AboutPage;
