import 'src/components/pages/homePage/globeSection/GlobeScene.scss';

import { DoubleSide, Mesh, MeshLambertMaterial, SphereGeometry } from 'three';

import Globe, { GlobeInstance } from 'globe.gl';
import * as topojson from 'topojson-client';
import * as satellite from 'satellite.js';
import defineBlock from 'src/utils/defineBlock';

const globeURL = new URL('src/assets/datasets/globe.json?url', import.meta.url).href;
const satellitesURL = new URL('src/assets/datasets/satellites.txt?url', import.meta.url).href;

const markerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`;

type MarkerData = {
  lat: number;
  lng: number;
  size: number;
};

// @ts-ignore
const radiansToDegrees: (radian: number) => number = satellite.radiansToDegrees;
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 100; // km
const TIME_STEP = 1000; // per frame

const bem = defineBlock('HomeGlobeScene');

export class GlobeScene {
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
      .pointOfView({ lat: 39.6, lng: -98.5, altitude: 2.25 });

    this.globe.controls().enableZoom = false;

    // Country layer
    fetch(globeURL)
      .then((res) => res.json())
      .then((landTopo) => {
        const geoJSON = topojson.feature(landTopo, landTopo.objects.land) as unknown as GeoJSON.FeatureCollection;
        this.globe
          .polygonsData(geoJSON.features)
          .polygonCapMaterial(new MeshLambertMaterial({ color: 0x640dfb, side: DoubleSide }))
          .polygonSideColor(() => 'rgba(0,0,0,0)');
      })
      .catch(this.onLoadError);

    // Markers
    const N = 10;
    const gData: MarkerData[] = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 15 + Math.random() * 10,
    }));
    this.globe.htmlElementsData(gData).htmlElement((data: object) => {
      const { size } = data as MarkerData;
      const el = document.createElement('div');
      el.innerHTML = markerSvg;
      el.className = bem('marker');
      el.style.width = `${size}px`;

      el.style.setProperty('pointer-events', 'auto');
      el.style.cursor = 'pointer';
      el.onclick = () => console.info(data);
      return el;
    });

    // Satellites
    const satGeometry = new SphereGeometry((SAT_SIZE * this.globe.getGlobeRadius()) / EARTH_RADIUS_KM / 2);
    const satMaterial = new MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
    this.globe.objectThreeObject(() => {
      const satMesh = new Mesh(satGeometry, satMaterial);
      satMesh.addEventListener('pointerdown', () => {
        console.log('You clicked  satellite!');
      });
      return satMesh;
    });

    fetch(satellitesURL)
      .then((r) => r.text())
      .then((rawData) => {
        const tleData = rawData
          .replace(/\r/g, '')
          .split(/\n(?=[^12])/)
          .filter((d) => d)
          .map((tle) => tle.split('\n'));
        const satData = tleData
          .map(([name, ...tle]) => {
            if (!tle[0] || !tle[1]) {
              throw new Error('Bad satellite TLE data...');
            }
            return {
              satrec: satellite.twoline2satrec(tle[0], tle[1]),
              name: name?.trim().replace(/^0 /, '') ?? 'unknown satellite',
              lat: 0,
              lng: 0,
              alt: 0,
            };
          })
          .filter((d) => d && !!satellite.propagate(d.satrec, new Date()).position);

        let time = new Date();

        const frameTicker = () => {
          requestAnimationFrame(frameTicker);

          time = new Date(+time + TIME_STEP);

          // Update satellite positions
          const gmst = satellite.gstime(time);
          satData.forEach((d) => {
            const eci = satellite.propagate(d.satrec, time);
            if (!!eci.position) {
              const gdPos = satellite.eciToGeodetic(eci.position as satellite.EciVec3<number>, gmst);
              d.lat = radiansToDegrees(gdPos.latitude);
              d.lng = radiansToDegrees(gdPos.longitude);
              d.alt = gdPos.height / EARTH_RADIUS_KM + 1000;
            }
          });

          this.globe.objectsData(satData);
        };

        frameTicker();
      });
  }

  async destroy() {
    this.globe._destructor();
  }
}
