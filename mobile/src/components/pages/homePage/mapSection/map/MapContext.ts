import type Map from 'ol/Map';
import React from 'react';

type MapContext = {
  map?: Map | null;
};

const context = React.createContext<MapContext>({});

export default context;
