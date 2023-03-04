import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'src/components/pages/aboutPage/gallerySection/GallerySection.scss';

import React, { useCallback, useState } from 'react';
import PhotoAlbum, { ClickHandlerProps, Photo } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import defineBlock from 'src/utils/css';

import Button from 'src/components/common/button/Button';
import Plus from 'src/components/icons/general/Plus';

import { photos } from 'src/constants/images';

const bem = defineBlock('GallerySection');

const IMAGE_PAGE_SIZE = 25;

const GallerySection = () => {
  const [imageCount, setImageCount] = useState<number>(IMAGE_PAGE_SIZE);

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const openLightbox = useCallback((handlerProps: ClickHandlerProps<Photo>) => {
    setCurrentImage(handlerProps.index);
    setLightboxIsOpen(true);
  }, []);

  return (
    <div className={bem()}>
      <div className={bem('title')}>Gallery</div>
      <PhotoAlbum
        layout="rows"
        photos={photos.slice(0, imageCount)}
        onClick={openLightbox}
      />
      {imageCount < photos.length && (
        <div className={bem('load-more')}>
          <Button
            size="medium"
            type="filled"
            color="purple"
            icon={<Plus />}
            label="Load More Images"
            onClick={() => {
              setImageCount(imageCount + IMAGE_PAGE_SIZE);
            }}
          />
        </div>
      )}

      <Lightbox
        plugins={[Captions, Zoom]}
        animation={{ swipe: 0 }}
        captions={{ descriptionTextAlign: 'center' }}
        open={lightboxIsOpen}
        close={() => setLightboxIsOpen(false)}
        index={currentImage}
        slides={photos.map((photo) => {
          const extensionStart = photo.src.indexOf('.');
          const newSrc = `${photo.src.substr(0, extensionStart)}--large${photo.src.substr(extensionStart)}`;
          return {
            src: newSrc,
            height: photo.height,
            width: photo.width,
            title: photo.title,
            description: photo.description,
          };
        })}
      />
    </div>
  );
};

export default GallerySection;
