import React from 'react';
import type Map from 'ol/Map';

type MapContext = {
  map?: Map | null;
};

const MapContext = React.createContext<MapContext>({});

export default MapContext;
