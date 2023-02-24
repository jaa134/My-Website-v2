import { Zoom } from 'ol/control';
import { useContext, useEffect } from 'react';

import { htmlToElement } from 'src/utils/dom';

import MapContext from 'src/components/pages/homePage/mapSection/map/MapContext';

const ZoomControl = () => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (map) {
      const zoomInString =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 448 512"><path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/></svg>';
      const zoomOutString =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 448 512"><path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>';

      const zoomInLabel = htmlToElement(zoomInString) ?? '+';
      const zoomOutLabel = htmlToElement(zoomOutString) ?? '-';

      const zoomControl = new Zoom({ zoomInLabel, zoomOutLabel });
      map.addControl(zoomControl);

      return () => {
        map.removeControl(zoomControl);
      };
    }

    return () => {
      // noop
    };
  }, [map]);

  return null;
};

export default ZoomControl;
