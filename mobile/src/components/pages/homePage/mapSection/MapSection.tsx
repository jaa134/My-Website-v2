import 'src/components/pages/homePage/mapSection/MapSection.scss';

import React, { useState } from 'react';

import defineBlock from 'src/utils/css';

import Dialog from 'src/components/common/dialog/Dialog';
import Calendar from 'src/components/icons/general/Calendar';
import Location from 'src/components/icons/general/Location';
import MapCanvas from 'src/components/pages/homePage/mapSection/map/MapCanvas';

import { Marker } from 'src/constants/globeMarkers';

const bem = defineBlock('MapSection');

const MapSection = () => {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

  const onClickMarker = (marker: Marker) => {
    setSelectedMarker(marker);
  };

  return (
    <>
      <div className={bem()}>
        <div className={bem('header')}>
          <div className={bem('title')}>About Me</div>
          <div className={bem('subtitle', '1')}>Traveler / Thrill Seeker /</div>
          <div className={bem('subtitle', '2')}>Littleton, Colorado /</div>
          <div className={bem('bar')} />
        </div>
        <MapCanvas onClickMarker={onClickMarker} />
      </div>

      {selectedMarker && (
        <Dialog
          open
          title={selectedMarker.title}
          onClose={() => setSelectedMarker(null)}
        >
          <div className={bem('dialog-content')}>
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
            <div className={bem('dialog-image')}>
              <img
                src={selectedMarker.imageSrc}
                alt=""
              />
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default MapSection;
