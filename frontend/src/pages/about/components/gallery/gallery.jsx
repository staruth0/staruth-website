import React, { useEffect, useState } from 'react';
import './gallery.css'; // Import the CSS file for styling

const Aboutgallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:5500/aboutGallery/getAll'); // Update with your backend URL
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
        return <div className="loader">Loading...</div>; // Loader while fetching
    }

    if (error) {
        return <div className="error">Error: {error}</div>; // Error handling
    }

    return (
        <div className="about-gallery-container">
            {images.map((image) => (
                <div className="about-gallery-item" key={image.position}>
                    <img src={image.url} alt={`about-gallery ${image.position}`} />
                </div>
            ))}
        </div>
    );
};

export default Aboutgallery;
