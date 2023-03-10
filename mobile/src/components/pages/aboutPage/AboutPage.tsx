import 'src/components/pages/aboutPage/AboutPage.scss';

import React from 'react';

import defineBlock from 'src/utils/css';

import PageHeader from 'src/components/common/pageHeader/PageHeader';
import LineSplit from 'src/components/layout/lineSplit/LineSplit';
import CollageSection from 'src/components/pages/aboutPage/collageSection/CollageSection';
import GallerySection from 'src/components/pages/aboutPage/gallerySection/GallerySection';
import TimelineSection from 'src/components/pages/aboutPage/timelineSection/TimelineSection';

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
    <div className={bem('collage')}>
      <CollageSection />
    </div>
    <div className={bem('timeline')}>
      <TimelineSection />
    </div>
    <div className={bem('gallery')}>
      <GallerySection />
    </div>
  </div>
);

export default AboutPage;
