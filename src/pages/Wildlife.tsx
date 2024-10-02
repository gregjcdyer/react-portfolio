import { ImageList, ImageListItem } from '@mui/material';
import ImageGallery from '../components/Images/ImageGallery';

const Wildlife = () => {
  // hard coded images for styling
  const images = [
    {
      id: '0',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
      download_url: 'https://picsum.photos/id/0/5000/3333',
    },
    {
      id: '1',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/LNRyGwIJr5c',
      download_url: 'https://picsum.photos/id/1/5000/3333',
    },
    {
      id: '2',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/N7XodRrbzS0',
      download_url: 'https://picsum.photos/id/2/5000/3333',
    },
    {
      id: '3',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/Dl6jeyfihLk',
      download_url: 'https://picsum.photos/id/3/5000/3333',
    },
    {
      id: '4',
      author: 'Alejandro Escamilla',
      width: 5000,
      height: 3333,
      url: 'https://unsplash.com/photos/y83Je1OC6Wc',
      download_url: 'https://picsum.photos/id/4/5000/3333',
    },
  ];
  return (
    <div>
      <h1>Wildlife</h1>
      <ImageList variant='masonry' cols={4} gap={8}>
        {images.map((img) => (
          <ImageListItem key={img.id}>
            <img
              src={img.download_url}
              alt=''
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Wildlife;
