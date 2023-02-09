import 'src/components/pages/homePage/globeSection/GlobeSection.scss';

import React, { useEffect, useRef } from 'react';

import defineBlock from 'src/utils/defineBlock';

import GlobeScene from 'src/components/pages/homePage/globeSection/GlobeScene';

const bem = defineBlock('HomeGlobeSection');

const GLOBE_HEIGHT = 900;
const GLOBE_WIDTH = 900;

const GlobeSection = () => {
  const globeMountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: GlobeScene | null = null;
    if (globeMountRef.current) {
      const onLoadError = () => {
        // noop
      };
      scene = new GlobeScene(globeMountRef.current, GLOBE_HEIGHT, GLOBE_WIDTH, onLoadError);
      scene.init();
    }
    return () => {
      scene?.destroy();
    };
  }, []);

  return (
    <div
      className={bem()}
      style={{ height: GLOBE_HEIGHT }}
    >
      <div className={bem('title')}>About Me</div>
      <div className={bem('subtitle', '1')}>Traveler / Thrill Seeker /</div>
      <div className={bem('subtitle', '2')}>Littleton, Colorado /</div>
      <div className={bem('bar')} />
      <div
        ref={globeMountRef}
        className={bem('globe')}
        style={{ width: GLOBE_WIDTH }}
      />
    </div>
  );
};

export default GlobeSection;
