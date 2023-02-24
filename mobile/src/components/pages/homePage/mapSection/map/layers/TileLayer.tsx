import PropTypes from 'prop-types';
import { useContext, useEffect, FunctionComponent } from 'react';
import OLTileLayer from 'ol/layer/Tile';
import TileSource from 'ol/source/Tile';

import MapContext from 'src/components/pages/homePage/mapSection/map/MapContext';

type Props = {
  source: TileSource;
  zIndex?: number;
};

const TileLayer: FunctionComponent<Props> = ({ source, zIndex = 0 }) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (map) {
      let tileLayer = new OLTileLayer({
        source,
        zIndex,
      });
      map.addLayer(tileLayer);

      return () => {
        map.removeLayer(tileLayer);
      };
    }

    return;
  }, [map]);

  return null;
};

TileLayer.propTypes = {
  source: PropTypes.instanceOf(TileSource).isRequired,
  zIndex: PropTypes.number,
};

export default TileLayer;
