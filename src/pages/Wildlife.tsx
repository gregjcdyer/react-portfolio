import { ImageList, ImageListItem } from '@mui/material';
import ImageGallery from '../components/Images/ImageGallery';

const Wildlife = () => {
  // hard coded images for styling
  const images = [
    {
      id: '0',
      alt: '',
      src: 'https://picsum.photos/id/0/5000/3333',
    },
    {
      id: '1',
      alt: '',
      src: 'https://picsum.photos/id/1/5000/3333',
    },
    {
      id: '2',
      alt: '',
      src: 'https://picsum.photos/id/2/5000/3333',
    },
    {
      id: '3',
      alt: '',
      src: 'https://picsum.photos/id/3/5000/3333',
    },
    {
      id: '4',
      alt: '',
      src: 'https://picsum.photos/id/4/5000/3333',
    },
  ];
  return (
    <div>
      <h1>Wildlife</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default Wildlife;
