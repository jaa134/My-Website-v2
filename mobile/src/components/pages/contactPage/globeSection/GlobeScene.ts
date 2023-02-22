import 'src/components/pages/contactPage/globeSection/GlobeScene.scss';

import Globe, { GlobeInstance } from 'globe.gl';
import { DoubleSide, MeshLambertMaterial } from 'three';
import * as topojson from 'topojson-client';

import defineBlock from 'src/utils/defineBlock';

const globeURL = new URL('src/assets/datasets/globe.json?url', import.meta.url).href;

const markerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`;

interface MarkerData {
  lat: number;
  lng: number;
}

const HOME_LAT = 39.613319;
const HOME_LNG = -105.016647;

const bem = defineBlock('ContactGlobeScene');

export default class GlobeScene {
  private mountEl: HTMLElement;

  private globe: GlobeInstance;

  onLoadError: (error: unknown) => void;

  constructor(mountEl: HTMLElement, height: number, width: number, onLoadError: (error: unknown) => void) {
    this.mountEl = mountEl;

    this.globe = Globe() as unknown as GlobeInstance;
    this.globe.height(height);
    this.globe.width(width);

    this.onLoadError = onLoadError;
  }

  init() {
    // Config
    this.globe(this.mountEl)
      .backgroundColor('rgba(0,0,0,0)')
      .atmosphereColor('rgba(100,13,247,1)')
      .globeMaterial(new MeshLambertMaterial({ color: 0x140231 }))
      .showGlobe(true)
      .showAtmosphere(true)
      .pointOfView({ lat: HOME_LAT, lng: HOME_LNG, altitude: 2.25 });

    this.globe.controls().enableZoom = false;
    this.globe.controls().enableRotate = false;

    // Country layer
    fetch(globeURL)
      .then((res) => res.json())
      .then((landTopo: TopoJSON.Topology<TopoJSON.Objects<GeoJSON.GeoJsonProperties>>) => {
        if (!landTopo.objects.land) {
          throw new Error('Globe JSON is malformed!');
        }

        const geoJSON = topojson.feature(landTopo, landTopo.objects.land) as unknown as GeoJSON.FeatureCollection;
        this.globe
          .polygonsData(geoJSON.features)
          .polygonCapMaterial(new MeshLambertMaterial({ color: 0x640dfb, side: DoubleSide }))
          .polygonSideColor(() => 'rgba(0,0,0,0)');
      })
      .catch(this.onLoadError);

    // Markers
    const gData: MarkerData[] = [
      {
        lat: HOME_LAT,
        lng: HOME_LNG,
      },
    ];
    this.globe.htmlElementsData(gData).htmlElement(() => {
      const container = document.createElement('div');
      container.innerHTML = `<div class="${bem('marker-text')}">Littleton, CO</div>${markerSvg}`;
      container.className = bem('marker');
      return container;
    });
  }

  destroy() {
    this.globe._destructor();
  }
}
