import React from 'react';

interface Props {
  src: string;
  alt: string;
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <img style={styles.image} src={src} alt={alt} />;
};

const styles = {
  image: {
    width: '200px',
    height: 'auto',
    padding: '1rem',
  },
};

export default Image;
