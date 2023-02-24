import OLTileLayer from 'ol/layer/Tile';
import TileSource from 'ol/source/Tile';
import PropTypes from 'prop-types';
import { FunctionComponent, useContext, useEffect } from 'react';

import MapContext from 'src/components/pages/homePage/mapSection/map/MapContext';

type Props = {
  source: TileSource;
  zIndex?: number;
}

const TileLayer: FunctionComponent<Props> = ({ source, zIndex = 0 }) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (map) {
      const tileLayer = new OLTileLayer({
        source,
        zIndex,
      });
      map.addLayer(tileLayer);

      return () => {
        map.removeLayer(tileLayer);
      };
    }

    return () => {
      // noop
    };
  }, [map]);

  return null;
};

TileLayer.propTypes = {
  source: PropTypes.instanceOf(TileSource).isRequired,
  zIndex: PropTypes.number,
};

export default TileLayer;
