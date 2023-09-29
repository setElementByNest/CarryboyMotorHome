import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css"; // Import the CSS styles
import Gallery from 'react-image-gallery';
import './MyImageGallery.css'

const MyImageGallery = ({ images }) => {
  return (
    <Gallery items={images} />
  );
};

export default MyImageGallery;
