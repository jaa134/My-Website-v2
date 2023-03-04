import 'src/components/pages/aboutPage/collageSection/CollageSection.scss';

import React from 'react';

import defineBlock from 'src/utils/css';

import { collageImagesPath } from 'src/constants/images';

const bem = defineBlock('CollageSection');

const images = Array.from({ length: 8 }).map((_, i) => {
  const id = `${i + 1}`;
  return (
    <img
      key={id}
      className={bem('image', id)}
      src={`${collageImagesPath}/image--${id}.jpg`}
      alt=""
    />
  );
});

const CollageSection = () => <div className={bem()}>{images}</div>;

export default CollageSection;
