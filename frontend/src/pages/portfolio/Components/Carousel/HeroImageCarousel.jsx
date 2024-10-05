import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './HeroImageCarousel.css';

const HeroImageCarousel = ({ images }) => {
  return (
    <div className="carousel">
      <Slide autoplay={false} easing="ease" indicators={true}>
        {images.map((image, index) => (
          <div className="each-slide" key={index}>
            <img src={image} alt={`Hero ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slide>  
    </div>
  );
};

export default HeroImageCarousel;
