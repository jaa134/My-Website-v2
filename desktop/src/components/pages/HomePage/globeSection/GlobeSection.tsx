import 'src/components/pages/homePage/globeSection/GlobeSection.scss';

import React, { useEffect, useRef, useState } from 'react';

import { Marker, markers } from 'src/constants/globeMarkers';

import defineBlock from 'src/utils/css';
import notify from 'src/utils/notificatons';

import Dialog from 'src/components/common/dialog/Dialog';
import Calendar from 'src/components/icons/general/Calendar';
import Location from 'src/components/icons/general/Location';
import GlobeScene from 'src/components/pages/homePage/globeSection/GlobeScene';

const bem = defineBlock('HomeGlobeSection');

const GLOBE_HEIGHT = 900;
const GLOBE_WIDTH = 900;

const GlobeSection = () => {
  const globeMountRef = useRef<HTMLDivElement>(null);

  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

  const onClickMarker = (marker: Marker) => {
    setSelectedMarker(marker);
  };

  useEffect(() => {
    let scene: GlobeScene | null = null;
    if (globeMountRef.current) {
      const onLoadError = () => {
        notify('Failed to load globe assets!');
      };
      scene = new GlobeScene(globeMountRef.current, GLOBE_HEIGHT, GLOBE_WIDTH, markers, onClickMarker, onLoadError);
      scene.init();
    }
    return () => {
      scene?.destroy();
    };
  }, []);

  return (
    <>
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

      {selectedMarker && (
        <Dialog
          open
          title={selectedMarker.title}
          onClose={() => setSelectedMarker(null)}
        >
          <div className={bem('dialog-content')}>
            <div className={bem('dialog-image')}>
              <img
                src={selectedMarker.imageSrc}
                alt=""
              />
            </div>
            <div className={bem('dialog-blurb')}>
              <div className={bem('dialog-location')}>
                <Location />
                <div>{selectedMarker.location}</div>
              </div>
              <div className={bem('dialog-date')}>
                <Calendar />
                <div>{selectedMarker.date}</div>
              </div>
              <div className={bem('dialog-description')}>{selectedMarker.description}</div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default GlobeSection;
