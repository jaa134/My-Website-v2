import 'src/components/pages/homePage/mapSection/map/MapCanvas.scss';

import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect, FunctionComponent } from 'react';
import { apply } from 'ol-mapbox-style';
import { Map, View, Feature } from 'ol';
import { Point } from 'ol/geom';
import { OSM, Vector } from 'ol/source';
import { Style, Icon } from 'ol/style';
import { fromLonLat } from 'ol/proj';

import { globeImagesPath } from 'src/constants/images';
import { Marker, markers } from 'src/constants/globeMarkers';

import defineBlock from 'src/utils/css';

import MapContext from 'src/components/pages/homePage/mapSection/map/MapContext';
import Layers from 'src/components/pages/homePage/mapSection/map/layers/Layers';
import TileLayer from 'src/components/pages/homePage/mapSection/map/layers/TileLayer';
import VectorLayer from 'src/components/pages/homePage/mapSection/map/layers/VectorLayer';
import Controls from 'src/components/pages/homePage/mapSection/map/controls/Controls';
import FullScreenControl from 'src/components/pages/homePage/mapSection/map/controls/FullScreenControl';
import ZoomControl from 'src/components/pages/homePage/mapSection/map/controls/ZoomControl';

const bem = defineBlock('MapCanvas');

const US_CENTER_COORDS = [-98.5795, 39.8283];
const DEFAULT_ZOOM = 2.5;

const markerFeatures = markers.map(
  (item) =>
    new Feature({
      geometry: new Point(fromLonLat([item.lng, item.lat])),
    }),
);

const markerStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1],
    anchorXUnits: 'fraction',
    anchorYUnits: 'fraction',
    imgSize: [16, 16],
    src: `${globeImagesPath}/icons/pin.svg`,
  }),
});

type Props = {
  onClickMarker: (marker: Marker) => void;
};

const MapCanvas: FunctionComponent<Props> = ({ onClickMarker }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  // on component mount
  useEffect(() => {
    if (mapRef.current) {
      const view = new View({
        center: fromLonLat(US_CENTER_COORDS),
        zoom: DEFAULT_ZOOM,
        minZoom: 1.1,
        maxZoom: 4,
      });

      let mapObject = new Map({
        view,
        layers: [],
        controls: [],
        overlays: [],
        target: mapRef.current,
      });

      mapObject.on('click', (evt) => {
        let firstMarkerClicked: Marker | null = null;

        mapObject.forEachFeatureAtPixel(
          evt.pixel,
          (feature) => {
            if (!firstMarkerClicked) {
              const markerFromFeature = markers[markerFeatures.findIndex((markerFeature) => markerFeature === feature)];
              if (markerFromFeature) {
                firstMarkerClicked = markerFromFeature;
              }
            }
          },
          {
            hitTolerance: 10,
          },
        );

        if (firstMarkerClicked) {
          onClickMarker(firstMarkerClicked);
        }
      });

      // Apply custom mapbox styles designed by you at "maptiler.com"
      apply(
        mapObject,
        'https://api.maptiler.com/maps/38ab1ce7-a436-49fe-9e0a-f4a254f493fe/style.json?key=BtnnD6JJnfgromJvW2xh',
      );

      setMap(mapObject);
      return () => mapObject.setTarget(undefined);
    }
    return;
  }, []);

  return (
    <div className={bem()}>
      <MapContext.Provider value={{ map }}>
        <div
          ref={mapRef}
          className="ol-map"
        >
          <Layers>
            <TileLayer
              source={new OSM()}
              zIndex={0}
            />
            <VectorLayer
              source={new Vector({ features: markerFeatures })}
              style={markerStyle}
              zIndex={1}
            />
          </Layers>
          <Controls>
            <FullScreenControl />
            <ZoomControl />
          </Controls>
        </div>
      </MapContext.Provider>
    </div>
  );
};

MapCanvas.propTypes = {
  onClickMarker: PropTypes.func.isRequired,
};

export default MapCanvas;
