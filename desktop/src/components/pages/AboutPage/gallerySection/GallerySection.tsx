import 'src/components/pages/aboutPage/gallerySection/GallerySection.scss';

import React from 'react';
import PhotoAlbum from 'react-photo-album';

import defineBlock from 'src/utils/defineBlock';
import { photos } from 'src/utils/constants';

const bem = defineBlock('GallerySection');

const GallerySection = () => (
  <div className={bem()}>
    <div className={bem('title')}>Gallery</div>
    <PhotoAlbum
      layout="rows"
      photos={photos}
    />
  </div>
);

export default GallerySection;
