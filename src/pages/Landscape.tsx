import ImageGallery, {
  ImageGalleryProps,
} from '../components/Images/ImageGallery';

const Landscape = () => {
  const images: ImageGalleryProps['images'] = [];

  return (
    <div>
      <h1>Landscape</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default Landscape;
