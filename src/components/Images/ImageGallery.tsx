import React, { useState } from 'react';
import {
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface ImageGalleryProps {
  images: { src: string; alt: string; id: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (img: { src: string; alt: string }) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ImageList variant='masonry' cols={4} gap={8}>
        {images.map((img) => (
          <ImageListItem key={img.id} onClick={() => handleImageClick(img)}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        maxWidth='md'
        fullWidth
      >
        <DialogContent style={{ position: 'relative' }}>
          <IconButton
            style={{ position: 'absolute', top: 10, right: 10 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
