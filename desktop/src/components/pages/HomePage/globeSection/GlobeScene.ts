import 'src/components/pages/homePage/globeSection/GlobeScene.scss';

import Globe, { GlobeInstance } from 'globe.gl';
import * as satellite from 'satellite.js';
import { DoubleSide, Mesh, MeshLambertMaterial, SphereGeometry } from 'three';
import * as topojson from 'topojson-client';

import defineBlock from 'src/utils/css';

import { Marker } from 'src/constants/globeMarkers';

const globeURL = new URL('src/assets/datasets/globe.json?url', import.meta.url).href;
const satellitesURL = new URL('src/assets/datasets/satellites.txt?url', import.meta.url).href;

const markerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`;

// @ts-ignore
const { radiansToDegrees } = satellite as { radiansToDegrees: (radians: number) => number };
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 100; // km
const TIME_STEP = 1000; // per frame

const bem = defineBlock('HomeGlobeScene');

export default class GlobeScene {
  private globe: GlobeInstance;

  private mountEl: HTMLElement;

  private markers: readonly Marker[];

  private onClickMarker: (marker: Marker) => void;

  private onLoadError: (error: unknown) => void;

  constructor(
    mountEl: HTMLElement,
    height: number,
    width: number,
    markers: readonly Marker[],
    onClickMarker: (marker: Marker) => void,
    onLoadError: (error: unknown) => void,
  ) {
    this.globe = Globe() as unknown as GlobeInstance;
    this.globe.height(height);
    this.globe.width(width);

    this.mountEl = mountEl;
    this.markers = [...markers];
    this.onClickMarker = onClickMarker;
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
      .pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });

    this.globe.controls().enableZoom = false;

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
    this.globe.htmlElementsData([...this.markers]).htmlElement((data: object) => {
      const el = document.createElement('div');
      el.innerHTML = markerSvg;
      el.className = bem('marker');
      el.addEventListener('click', () => this.onClickMarker(data as Marker));
      return el;
    });

    // Satellites
    const satGeometry = new SphereGeometry((SAT_SIZE * this.globe.getGlobeRadius()) / EARTH_RADIUS_KM / 2);
    const satMaterial = new MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.9 });
    this.globe.objectThreeObject(() => {
      const satMesh = new Mesh(satGeometry, satMaterial);
      satMesh.addEventListener('pointerdown', () => {
        // TODO
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
          this.globe.objectsData(
            satData.map((d) => {
              const data = { ...d };
              const eci = satellite.propagate(data.satrec, time);
              if (eci.position) {
                const gdPos = satellite.eciToGeodetic(eci.position as satellite.EciVec3<number>, gmst);
                data.lat = radiansToDegrees(gdPos.latitude);
                data.lng = radiansToDegrees(gdPos.longitude);
                data.alt = gdPos.height / EARTH_RADIUS_KM + 1000;
              }
              return data;
            }),
          );
        };

        frameTicker();
      });
  }

  destroy() {
    this.globe._destructor();
  }
}
