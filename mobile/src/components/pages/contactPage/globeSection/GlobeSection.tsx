import 'src/components/pages/contactPage/globeSection/GlobeSection.scss';

import React, { useEffect, useRef } from 'react';

import defineBlock from 'src/utils/css';
import notify from 'src/utils/notificatons';

import GlobeScene from 'src/components/pages/contactPage/globeSection/GlobeScene';

const bem = defineBlock('ContactGlobeSection');

const GLOBE_HEIGHT = 600;
const GLOBE_WIDTH = 600;

const GlobeSection = () => {
  const globeMountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: GlobeScene | null = null;
    if (globeMountRef.current) {
      const onLoadError = () => {
        notify('Failed to load globe assets!');
      };
      scene = new GlobeScene(globeMountRef.current, GLOBE_HEIGHT, GLOBE_WIDTH, onLoadError);
      scene.init();
    }
    return () => {
      scene?.destroy();
    };
  }, []);

  return (
    <div className={bem()}>
      <div className={bem('title')}>
        Let&#39;s Meet For Coffee<span className={bem('symbol')}>&#123;</span>
      </div>
      <div className={bem('subtitle')}>
        Schedule a meeting with me! If I&#39;m not in the mountains hiking, camping, rock climbing, or skiing, then I
        would love to chat.
      </div>
      <div
        ref={globeMountRef}
        className={bem('globe')}
      />
    </div>
  );
};

export default GlobeSection;
