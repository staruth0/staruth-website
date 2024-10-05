import left_navigator from "../../../../assets/icons/expand_circle_left.png";
import right_navigator from "../../../../assets/icons/expand_circle_right.png";

function ServiceCard({ service }) {
  const { title, longDescription,gallery ,icon} = service;
  return (
    <div className="services-our-services-section-container">
      <div className="services-our-services-section-header">
        <div>
          <img src={icon} alt="service icon" className="service-icon" />
          <h1>{title}</h1>
        </div>
        <p>
          {longDescription}
        </p>
      </div>

      <div className="services-our-services-section-main">
              <div className="services-our-services-section-main-images">
                  {gallery.map((image) => {
                      <img src={image} alt="image" />;
                  })}
          
        </div>

        <div className="navigations">
          <img src={left_navigator} alt="" />
          <img src={right_navigator} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard