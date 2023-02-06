import 'src/components/pages/homePage/HomePage.scss';

import React from 'react';

import defineBlock from 'src/utils/defineBlock';

import WaveCanvas from 'src/components/layout/waveCanvas/WaveCanvas';

const bem = defineBlock('HomePage');

const HomePage = () => (
  <div className={bem()}>
    <div className={bem('about')}></div>
    <div className={bem('waves')}>
      <WaveCanvas />
    </div>
    <div className={bem('bubbles')}></div>
    <div className={bem('waves', 'inverted')}>
      <WaveCanvas />
    </div>
    <div className={bem('experience')}></div>
    <div className={bem('projects')}></div>
    <div className={bem('contact')}></div>
    <div className={bem('globe')}></div>
  </div>
);

export default HomePage;
