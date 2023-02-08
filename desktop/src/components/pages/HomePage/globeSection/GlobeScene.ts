import { DoubleSide, MeshLambertMaterial } from 'three';

import Globe, { GlobeInstance } from 'globe.gl';
import * as topojson from 'topojson-client';

const jsonURL = new URL('src/assets/json/globe.json?url', import.meta.url).href;

export class GlobeScene {
  private mountEl: HTMLElement;
  private globe: GlobeInstance;

  onLoadError: (error: unknown) => void;

  constructor(mountEl: HTMLElement, height: number, width: number, onLoadError: (error: unknown) => void) {
    this.mountEl = mountEl;

    this.globe = Globe();
    this.globe.height(height);
    this.globe.width(width);

    this.onLoadError = onLoadError;
  }

  init() {
    this.globe(this.mountEl)
      .backgroundColor('rgba(0,0,0,0)')
      .atmosphereColor('rgba(100,13,247,1)')
      .showGlobe(true)
      .showAtmosphere(true)
      .pointOfView({ lat: 39.6, lng: -98.5, altitude: 2.25 });

    this.globe.controls().enableZoom = false;

    this.globe.globeMaterial(new MeshLambertMaterial({ color: 0x140231 }));

    fetch(jsonURL)
      .then((res) => res.json())
      .then((landTopo) => {
        const geoJSON = topojson.feature(landTopo, landTopo.objects.land) as unknown as GeoJSON.FeatureCollection;
        this.globe
          .polygonsData(geoJSON.features)
          .polygonCapMaterial(new MeshLambertMaterial({ color: 0x640dfb, side: DoubleSide }))
          .polygonSideColor(() => 'rgba(0,0,0,0)');
      })
      .catch(this.onLoadError);
  }

  async destroy() {
    this.globe._destructor();
  }
}
