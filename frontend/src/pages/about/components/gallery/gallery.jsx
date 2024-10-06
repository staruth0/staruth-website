import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css'; // Import Masonry
import SkeletonItem from './GallerySkeleton'; // Import SkeletonItem
import './gallery.css'; // Import the CSS file for styling

const Aboutgallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://staruthwebsite-api.vercel.app/aboutGallery/getAll'
        ); // Update with your backend URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="about-gallery-container">
        <Masonry
          breakpointCols={{ default: 3, 1100: 2, 700: 1 }} // Define breakpoints
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {[...Array(6)].map(
            (
              _,
              index // Display 6 skeleton items
            ) => (
              <SkeletonItem key={index} />
            )
          )}
        </Masonry>
      </div>
    ); // Loader while fetching
  }

  if (error) {
    return <div className="error">Error: {error}</div>; // Error handling
  }

  return (
    <div className="about-gallery-container">
      <Masonry
        breakpointCols={{ default: 3, 1100: 2, 700: 1 }} // Define breakpoints
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <div className="about-gallery-item" key={image.position}>
            <img src={image.url} alt={`about-gallery ${image.position}`} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Aboutgallery;
