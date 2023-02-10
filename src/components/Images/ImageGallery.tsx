import React from 'react';
import Image from './Image';

interface Props {
  images: { src: string; alt: string }[];
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <Image key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default ImageGallery;
