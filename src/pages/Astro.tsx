import ImageGallery, {
  ImageGalleryProps,
} from '../components/Images/ImageGallery';

const Astro = () => {
  const images: ImageGalleryProps['images'] = [];

  return (
    <div>
      <h1>Astro</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default Astro;
