import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

export interface ImageGalleryProps {
  images: { src: string; alt: string; id: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div>
      <ImageList variant='masonry' cols={4} gap={8}>
        {images.map((img) => (
          <ImageListItem key={img.id}>
            <img
              src={img.src}
              alt=''
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageGallery;
