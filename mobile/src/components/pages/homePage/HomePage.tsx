import 'src/components/pages/homePage/HomePage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import WaveCanvas from 'src/components/layout/waveCanvas/WaveCanvas';
import AboutSection from 'src/components/pages/homePage/aboutSection/AboutSection';
//import BubblesSection from 'src/components/pages/homePage/bubblesSection/BubblesSection';
import ContactSection from 'src/components/pages/homePage/contactSection/ContactSection';
//import ExperienceSection from 'src/components/pages/homePage/experienceSection/ExperienceSection';

const bem = defineBlock('HomePage');

const HomePage = () => (
  <div className={bem()}>
    <div className={bem('about')}>
      <AboutSection />
    </div>
    <div className={bem('waves')}>
      <WaveCanvas />
    </div>
    {/*
    <div className={bem('bubbles')}>
      <BubblesSection />
    </div>
    <div className={bem('experience')}>
      <ExperienceSection />
    </div>
    */}
    <div className={bem('contact')}>
      <ContactSection />
    </div>
  </div>
);

export default HomePage;
