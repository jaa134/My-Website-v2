import 'src/components/pages/homePage/globeSection/GlobeSection.scss';

import React, { useEffect, useRef, useState } from 'react';

import { globeImagesPath } from 'src/constants/images';
import defineBlock from 'src/utils/defineBlock';

import Dialog from 'src/components/common/dialog/Dialog';
import Calendar from 'src/components/icons/general/Calendar';
import Location from 'src/components/icons/general/Location';
import GlobeScene, { Marker } from 'src/components/pages/homePage/globeSection/GlobeScene';

const bem = defineBlock('HomeGlobeSection');

const GLOBE_HEIGHT = 900;
const GLOBE_WIDTH = 900;

const markers: Marker[] = [
  {
    title: 'Rock Climbing',
    location: 'Denver, Colorado',
    date: 'Summer of 2022',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 39.7392,
    lng: -104.9903,
  },
  {
    title: 'Skiing',
    location: 'Vail, Colorado',
    date: 'Winter of 2023',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 39.6433,
    lng: -108.3781,
  },
  {
    title: 'Hiking',
    location: 'Garibaldi Provincial Park, Canada',
    date: 'Summer of 2022',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 48.9167,
    lng: -118.5,
  },
  {
    title: 'Skiing',
    location: 'Whistler, Canada',
    date: 'Winter of 2023',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 49.9167,
    lng: -122.75,
  },
  {
    title: 'Hiking',
    location: 'Grand Tetons, Wyoming',
    date: 'Summer of 2020',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 43.7904,
    lng: -110.6818,
  },
  {
    title: 'Fall Kayaking',
    location: 'Lake Tahoe, California',
    date: 'Fall of 2021',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 39.2,
    lng: -119.5,
  },
  {
    title: 'Walking Downtown',
    location: 'San Francisco, California',
    date: 'Fall of 2022',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    title: 'College Graduation',
    location: 'Cleveland, Ohio',
    description: 'Spring of 2019',
    imageSrc: `${globeImagesPath}/`,
    date: '',
    lat: 41.4993,
    lng: -81.6944,
  },
  {
    title: 'Thanksgiving Day',
    location: 'St. Louis, Missouri',
    date: 'Fall of 2021',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 38.627,
    lng: -90.1994,
  },
  {
    title: 'Sky Diving',
    location: 'Cape Town, South Africa',
    date: 'Spring of 2017',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: -31.9249,
    lng: 17.4241,
  },
  {
    title: 'Shark Cage Diving',
    location: 'Kleinbaai Harbor, South Africa',
    date: 'Spring of 2017',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: -33.6158,
    lng: 20.0,
  },
  {
    title: 'Parasailing',
    location: 'Punta Cana, Dominican Republic',
    date: 'Winter of 2023',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 18.5601,
    lng: -68.3725,
  },
  {
    title: 'Extreme Boat Tour',
    location: 'Punta Cana, Dominican Republic',
    date: 'Summer of 2019',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 17.0747,
    lng: -61.8175,
  },
  {
    title: 'Beach Work Retreat',
    location: 'Cancún, Mexico',
    date: 'Winter of 2022',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 21.1619,
    lng: -86.8515,
  },
  {
    title: 'Morning Baguettes',
    location: 'Toulouse, France',
    date: 'Spring of 2022',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 43.6047,
    lng: 1.4442,
  },
  {
    title: 'Fishing',
    location: 'Smith Lake, Alabama',
    date: 'Summer of 2017',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 34.0478,
    lng: -87.0249,
  },
  {
    title: 'Squaring Up With Grandma',
    location: 'Pflugerville, Texas',
    date: 'Summer of 2022',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 30.4548,
    lng: -97.6223,
  },
  {
    title: 'Family Vacation',
    location: 'Badlands & Mounth Rushmore, North Dakota',
    date: 'Summer of 2015',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 43.8803,
    lng: -103.4538,
  },
  {
    title: 'Open Water Swimming',
    location: 'Kenosha, Wisconsin',
    date: 'Summer of 2014',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 42.5847,
    lng: -87.8212,
  },
  {
    title: 'Hot Air Balloon Festival',
    location: 'Albuquerque, New Mexico',
    date: 'Summer of 2022',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 35.0844,
    lng: -106.6504,
  },
  {
    title: 'Trying Local Cuisine',
    location: 'Stone Town, Zanzibar',
    date: 'Spring of 2017',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: -6.1622,
    lng: 39.1921,
  },
  {
    title: 'Safari Trip',
    location: 'Chobe, Botswana',
    date: 'Spring of 2017',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: -18.4256,
    lng: 24.7143,
  },
  {
    title: 'Safari Trip',
    location: 'Krueger National Park, South Africa',
    date: 'Spring of 2017',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: -23.9884,
    lng: 31.5547,
  },
  {
    title: 'Peaking Over the Edge',
    location: 'Victoria Falls, Zimbabwe',
    date: 'Spring of 2017',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: -17.9257,
    lng: 27.8625,
  },
  {
    title: "Getting Lost in the M&M's Store",
    location: 'New York City, New York',
    date: 'Summer of 2018',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    title: 'Baking in the Heat',
    location: 'Grand Canyon, Arizona',
    date: 'Summer of 2018',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 36.0544,
    lng: -112.1401,
  },
  {
    title: 'Family Vacation',
    location: "Barry's Bay, Canada",
    date: 'Summer of 2014',
    description: '',
    imageSrc: `${globeImagesPath}/`,
    lat: 45.4884,
    lng: -77.6784,
  },
];

const GlobeSection = () => {
  const globeMountRef = useRef<HTMLDivElement>(null);

  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

  const onClickMarker = (marker: Marker) => {
    setSelectedMarker(marker);
  };

  useEffect(() => {
    let scene: GlobeScene | null = null;
    if (globeMountRef.current) {
      const onLoadError = () => {
        // noop
      };
      scene = new GlobeScene(globeMountRef.current, GLOBE_HEIGHT, GLOBE_WIDTH, markers, onClickMarker, onLoadError);
      scene.init();
    }
    return () => {
      scene?.destroy();
    };
  }, []);

  return (
    <>
      <div
        className={bem()}
        style={{ height: GLOBE_HEIGHT }}
      >
        <div className={bem('title')}>About Me</div>
        <div className={bem('subtitle', '1')}>Traveler / Thrill Seeker /</div>
        <div className={bem('subtitle', '2')}>Littleton, Colorado /</div>
        <div className={bem('bar')} />
        <div
          ref={globeMountRef}
          className={bem('globe')}
          style={{ width: GLOBE_WIDTH }}
        />
      </div>

      {selectedMarker && (
        <Dialog
          open
          title={selectedMarker.title}
          onClose={() => setSelectedMarker(null)}
        >
          <div className={bem('dialog-content')}>
            <div className={bem('dialog-image')}>
              <img
                src={selectedMarker.imageSrc}
                alt=""
              />
            </div>
            <div className={bem('dialog-blurb')}>
              <div className={bem('dialog-location')}>
                <Location />
                <div>{selectedMarker.location}</div>
              </div>
              <div className={bem('dialog-date')}>
                <Calendar />
                <div>{selectedMarker.date}</div>
              </div>
              <div className={bem('dialog-description')}>{selectedMarker.description}</div>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default GlobeSection;
