import 'src/components/pages/homePage/globeSection/GlobeSection.scss';

import React, { useEffect, useRef, useState } from 'react';

import { globeImagesPath } from 'src/constants/images';
import defineBlock from 'src/utils/defineBlock';

import Dialog from 'src/components/common/dialog/Dialog';
import Calendar from 'src/components/icons/general/Calendar';
import Location from 'src/components/icons/general/Location';
import GlobeScene, { Marker } from 'src/components/pages/homePage/globeSection/GlobeScene';
import notify from 'src/utils/notificatons';

const bem = defineBlock('HomeGlobeSection');

const GLOBE_HEIGHT = 900;
const GLOBE_WIDTH = 900;

const markers: Marker[] = [
  {
    title: 'Rock Climbing',
    location: 'Denver, Colorado',
    date: 'Summer of 2022',
    description:
      'Rock climbing has been my passion while living in Denver. I often try to climb outside on the weekends when weather permits. My favorite places to visit are Shelf Road and Clear Creek Canyon.',
    imageSrc: `${globeImagesPath}/js02SD12mx.jpg`,
    lat: 39.7392,
    lng: -104.9903,
  },
  {
    title: 'Skiing',
    location: 'Vail, Colorado',
    date: 'Winter of 2023',
    description:
      "My little brother graduated college, so we took a trip a trip to Vail to celebrate his accomplishments. At this point in time, I was a fairly new skier who was easily intimated by the mountain's steep runs. James was helping me improve all weekend.",
    imageSrc: `${globeImagesPath}/Kq1LBMzOgr.jpg`,
    lat: 39.6433,
    lng: -108.3781,
  },
  {
    title: 'Hiking',
    location: 'Garibaldi Provincial Park, Canada',
    date: 'Summer of 2022',
    description:
      'A bachelor party in the mountains was one of my favorite memories ever. David was set to get married a month later, so his closest friends went to British Columbia to celebrate. British Columbia easily has some of the best scenery in all of North America.',
    imageSrc: `${globeImagesPath}/wg0Fp4y2cC.jpg`,
    lat: 48.9167,
    lng: -118.5,
  },
  {
    title: 'Skiing',
    location: 'Whistler, Canada',
    date: 'Winter of 2023',
    description:
      'Whistler is known as one of the top skiing destinations in the world. The resort town is located in the Coast Mountains of British Columbia and offers a wide variety of skiing terrain, from beginner to expert. We experienced all forms of snow conditions, but mostly encountered thick fog. The views at the summit were legendary when skies were clear.',
    imageSrc: `${globeImagesPath}/Bgn5KIb3MN.jpg`,
    lat: 49.9167,
    lng: -122.75,
  },
  {
    title: 'Hiking',
    location: 'Grand Tetons, Wyoming',
    date: 'Summer of 2020',
    description:
      'The Tetons are breathtaking, with towering peaks that rise more than 7,000 feet above the surrounding landscape. During our stay, we launched hot air ballons from Jackson, rock climbed local crags, rafted the snake river, and backpacked throughout the mountain range.',
    imageSrc: `${globeImagesPath}/JmhhCcMRNf.jpg`,
    lat: 43.7904,
    lng: -110.6818,
  },
  {
    title: 'Fall Kayaking',
    location: 'Lake Tahoe, California',
    date: 'Fall of 2021',
    description:
      'Lake Tahoe is known for its stunning natural beauty, with crystal-clear water surrounded by towering mountains and dense forests. We were lucky to be able to explore the area around Lake Tahoe with some of our closest friends. We were the only group of people kayaking this time of year.',
    imageSrc: `${globeImagesPath}/4A2L1ScIVK.jpg`,
    lat: 39.2,
    lng: -119.5,
  },
  {
    title: 'Walking Downtown',
    location: 'San Francisco, California',
    date: 'Fall of 2022',
    description:
      "For her first time in San Francisco, I took Aemilee on a long coastal tour of the city that included walking Golden Gate bridge, Fisherman's Wharf, and the western beaches. Weather was perfect during our stay and we got to end the day with exceptional ramen and sushi in Presidio.",
    imageSrc: `${globeImagesPath}/QL6A5bFs4i.jpg`,
    lat: 37.7749,
    lng: -122.4194,
  },
  {
    title: 'College Graduation',
    location: 'Cleveland, Ohio',
    date: 'Spring of 2019',
    description:
      'This was a significant milestone in my life that marked the end of one chapter and the beginning of a new one. After being presented my diploma, my family and I took photos together in fron of our main campus library. The following week, I started my career as a software developer and the rest is history.',
    imageSrc: `${globeImagesPath}/sppdwlx2IM.jpg`,
    lat: 41.4993,
    lng: -81.6944,
  },
  {
    title: 'Thanksgiving Day',
    location: 'St. Louis, Missouri',
    date: 'Fall of 2021',
    description:
      "I'm very close to my family, so spending time with them is a meaningful and rewarding experience. Every Thanksgiving, my extended family comes together and meets at my childhood home (as is tradition) to eat good food and create memories. And, yes, we are that family that has to participate in a 5k each year.",
    imageSrc: `${globeImagesPath}/ydO77WYakD.jpg`,
    lat: 38.627,
    lng: -90.1994,
  },
  {
    title: 'Sky Diving',
    location: 'Cape Town, South Africa',
    date: 'Spring of 2017',
    description:
      'Skydiving provided a huge adrenaline rush and a sense of excitement that I had never experienced before. The sensation of freefalling through the air at high speed was so thrilling and exhilarating that I blacked out immediately after jumping from the plane. Even though I was fearing for my life, I would certainly skydive again.',
    imageSrc: `${globeImagesPath}/k27Lt7w4SG.jpg`,
    lat: -31.9249,
    lng: 17.4241,
  },
  {
    title: 'Shark Cage Diving',
    location: 'Kleinbaai Harbor, South Africa',
    date: 'Spring of 2017',
    description:
      'We observes sharks in their natural habitat from the safety of a submerged cage. The water was murky, so when sharks approached it was like they appeared out of nowhere. Our guides were very serious about keep limbs well inside the cage at all times. I made sure to follow their directions closely.',
    imageSrc: `${globeImagesPath}/ybX2pddzKz.jpg`,
    lat: -33.6158,
    lng: 20.0,
  },
  {
    title: 'Parasailing',
    location: 'Punta Cana, Dominican Republic',
    date: 'Winter of 2023',
    description:
      'During a work retreat in the Dominican Republic, we were able to go parasailing. It was an exciting and memorable experience because the crystal-clear waters and stunning beaches created a beautiful setting. We spotted a turtle swimming beneath us during our flight!',
    imageSrc: `${globeImagesPath}/AVsP3eH8o0.jpg`,
    lat: 18.5601,
    lng: -68.3725,
  },
  {
    title: 'Extreme Boat Tour',
    location: 'Island of Antigua',
    date: 'Summer of 2019',
    description:
      "We didn't know what to expect going into this resort activity, but we definitely got our money's worth by the end of the day. Our boat hopped massive waves as it took us around the island to perfectly secluded beaches, past colonial fortresses, and finally to a reef for snorkeling. We even got to see Oprah's private island.",
    imageSrc: `${globeImagesPath}/15o5GisKOx.jpg`,
    lat: 17.0747,
    lng: -61.8175,
  },
  {
    title: 'Beach Work Retreat',
    location: 'Cancún, Mexico',
    date: 'Winter of 2022',
    description:
      'My first week working at Loft Orbital was unforgettable. The company flew me out to San Francisco for onboarding and then invited me to Cancún for a work retreat with the rest of the company. It was an amazing way to meet approximately all 75 of my coworkers. We enjoyed the beaches, drank tropical drinks, and went snorkeling over the course of a few days.',
    imageSrc: `${globeImagesPath}/VkoL1Z5t7u.jpg`,
    lat: 21.1619,
    lng: -86.8515,
  },
  {
    title: 'Morning Baguettes',
    location: 'Toulouse, France',
    date: 'Spring of 2022',
    description:
      'Toulouse is a beautiful city in the southwest of France, known for its rich history, vibrant cultural scene, and delicious cuisine. None of this was suprising when I visited, but I was amazed by the access to fresh bread that the locals got each morning. I stopped to pick up a baguette after a morning run touring the city. It made for a great authentic breakfast!',
    imageSrc: `${globeImagesPath}/dNdheU3zCg.jpg`,
    lat: 43.6047,
    lng: 1.4442,
  },
  {
    title: 'Fishing',
    location: 'Smith Lake, Alabama',
    date: 'Summer of 2017',
    description:
      'Invited by a close friend to Alabama, we made sure to go fishing at one of the areas most popular lakes. Smith Lake is a beautiful and popular destination located in north-central Alabama, USA. The lake is formed by the Sipsey Fork of the Black Warrior River and is surrounded by stunning natural beauty, including forests, rolling hills, and rocky shorelines.',
    imageSrc: `${globeImagesPath}/C1IPRDRcrJ.jpg`,
    lat: 34.0478,
    lng: -87.0249,
  },
  {
    title: 'Squaring Up With Grandma',
    location: 'Pflugerville, Texas',
    date: 'Summer of 2022',
    description:
      "My grandmother (Mema) is one of the most kind individuals on this planet. She is a caring and nurturing presence who is always ready to lend an ear, offer a hug, or bake you cookies. I've admired her since a very young age. In this photo, we were play fighting during a family reunion and she thought she could beat me up. Who do you think would win?",
    imageSrc: `${globeImagesPath}/OXzleniTJY.jpg`,
    lat: 30.4548,
    lng: -97.6223,
  },
  {
    title: 'Family Vacation',
    location: 'Badlands & Mounth Rushmore, North Dakota',
    date: 'Summer of 2015',
    description:
      'Mount Rushmore was much smaller than I had anticipated. When we drove 12 hours to this monument, I expected better views than what we recieved. I was a little dissapointed to learn that I could not climb the monument faces like Nicholas Cage had done in National Treasure. The Badlands had a lot of bison, so that was cool.',
    imageSrc: `${globeImagesPath}/B9uaTAoQQb.jpg`,
    lat: 43.8803,
    lng: -103.4538,
  },
  {
    title: '5k Open Water Swimming',
    location: 'Kenosha, Wisconsin',
    date: 'Summer of 2014',
    description:
      'This was a recurring event that I had participated in during highschool. Our club swim team (RSCA) would travel by train in the summer from St. Louis to Chicago to Kenosha for this competition. I remember being very nervous for this race as it would be my longest by far. I finished, but my shoulders felt like jello.',
    imageSrc: `${globeImagesPath}/0Ou6rGjcJZ.jpg`,
    lat: 42.5847,
    lng: -87.8212,
  },
  {
    title: 'Hot Air Balloon Festival',
    location: 'Albuquerque, New Mexico',
    date: 'Summer of 2022',
    description:
      'This is one of the largest balloon festivals in the world. The festival takes place in early October and typically lasts for nine days. The attendees launch hundreds of hot air balloons, which take to the skies each morning and evening. The balloons come in a variety of shapes, sizes, and colors, and the sight of them filling the sky is truly spectacular.',
    imageSrc: `${globeImagesPath}/yZCBDwALXZ.jpg`,
    lat: 35.0844,
    lng: -106.6504,
  },
  {
    title: 'Starfish Whisperer',
    location: 'Stone Town, Zanzibar',
    date: 'Spring of 2017',
    description:
      'I spent the last week of my Study Abroad program by traveling to an archipelago located off the east coast of Africa in the Indian Ocean. We spent our time relaxing on stunning white sand beaches and crystal clear waters. My favorite memory was snorkeling and seeing thousands upon thousands of starfish resting on the ocean floor.',
    imageSrc: `${globeImagesPath}/lpZCBDmwhB.jpg`,
    lat: -6.1622,
    lng: 39.1921,
  },
  {
    title: 'Safari Trip',
    location: 'Chobe, Botswana',
    date: 'Spring of 2017',
    description:
      "Chobe is a national park located in northern Botswana, known for its vast wildlife and stunning natural beauty. It was the closest I've been to a real like Lion King. We saw a variety of wildlife including elephants, lions, leopards, giraffes, zebras, and many other species.",
    imageSrc: `${globeImagesPath}/13yKiPPxd1.jpg`,
    lat: -18.4256,
    lng: 24.7143,
  },
  {
    title: 'Safari Trip',
    location: 'Krueger National Park, South Africa',
    date: 'Spring of 2017',
    description:
      'Kruger National Park is one of the largest and most famous game reserves in Africa. It was my first time participating in a safari. We were extreemely lucky to see endagered painted dogs hunt a heard of Water Deer. Some deer entered the water where they were switfly attacked by both hippos and crocodiles! Poor deer...',
    imageSrc: `${globeImagesPath}/hj5n3NEtLU.jpg`,
    lat: -23.9884,
    lng: 31.5547,
  },
  {
    title: 'Peaking Over the Edge',
    location: 'Victoria Falls, Zimbabwe',
    date: 'Spring of 2017',
    description:
      'Victoria Falls is a waterfall located on the border of Zambia and Zimbabwe. It is one of the largest waterfalls in the world and is considered to be one of the Seven Natural Wonders of the World. It was crazy just how big the waterfall is, but I was even more suprised by the lack of safety railing. There were trails that led you right up to ledge to peak over!',
    imageSrc: `${globeImagesPath}/qCoVy84S2p.jpg`,
    lat: -17.9257,
    lng: 27.8625,
  },
  {
    title: "Getting Lost in the M&M's Store",
    location: 'New York City, New York',
    date: 'Summer of 2018',
    description:
      "Times Square is known for its bright lights, towering billboards, and bustling energy, and is considered one of the world's busiest pedestrian areas. I decided to checkout the shopping in the area and got lost in the Disney and M&M's stores. Here's a picture of me wearing a silly Disney hat.",
    imageSrc: `${globeImagesPath}/F1aH8cIeF8.jpg`,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    title: 'Baking in the Heat',
    location: 'Grand Canyon, Arizona',
    date: 'Summer of 2018',
    description:
      "The Grand Canyon is a breathtaking natural wonder formed over millions of years by the Colorado River cutting through the rock layers of the area. I hiked to the bottom with my family only to experience extreme heat that was bouncing off the canyon's walls. However, the views were well worth the dehydration and many leg cramps.",
    imageSrc: `${globeImagesPath}/uVPj8d5P73.jpg`,
    lat: 36.0544,
    lng: -112.1401,
  },
  {
    title: 'Family Vacation',
    location: "Barry's Bay, Canada",
    date: 'Summer of 2014',
    description:
      "Barry's Bay is a small town located in eastern Ontario, Canada and is situated in the heart of the Madawaska Valley. My family would travel here every few years for a reunion near my grandmother's childhood home. This would also be the location of my first beer (a delicious Canadian Molson) and the place where I'd discover my distaste for poutine.",
    imageSrc: `${globeImagesPath}/ePch0iKO3Z.jpg`,
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
        notify('Failed to load globe assets!');
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
