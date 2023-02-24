import PropTypes from 'prop-types';
import { FunctionComponent, useContext, useEffect } from 'react';
import OLVectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';

import MapContext from 'src/components/pages/homePage/mapSection/map/MapContext';

type Props = {
  source: VectorSource;
  style?: Style | null;
  zIndex?: number;
};

const VectorLayer: FunctionComponent<Props> = ({ source, style, zIndex = 0 }) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (map) {
      let vectorLayer = new OLVectorLayer({
        source,
        style,
        zIndex,
      });
      map.addLayer(vectorLayer);

      return () => {
        map.removeLayer(vectorLayer);
      };
    }

    return;
  }, [map]);
  return null;
};

VectorLayer.propTypes = {
  source: PropTypes.instanceOf(VectorSource).isRequired,
  style: PropTypes.instanceOf(Style),
  zIndex: PropTypes.number,
};

export default VectorLayer;
