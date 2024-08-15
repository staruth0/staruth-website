import impact from '../../../assets/images/about/impact.svg';

const Impact = () => {
  return (
    <section id="impact" className="container">
      <div className="even-columns">
        <div className="text">
          <h2>Our Impact</h2>
          <p>
            At iStore, we foster a vibrant and inclusive workplace culture. We
            believe in collaboration, continuous learning, and personal growth.
            Our team of passionate Apple enthusiasts brings deep knowledge and
            expertise to provide exceptional service to our customers.
          </p>
        </div>
        <div className="image">
          <img src={impact} alt="" />
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-box">
          <i className="bx bxs-truck"></i>
          <h3 className="stat-count">300 +</h3>
          <p className="stat-description">Products Delivered</p>
        </div>
        <div className="stats-box">
          <i className="bx bxs-check-circle"></i>
          <h3 className="stat-count">4.5</h3>
          <p className="stat-description">Average Product Rating</p>
        </div>
        <div className="stats-box">
          <i className="bx bxs-smile"></i>
          <h3 className="stat-count">200 +</h3>
          <p className="stat-description">Satisfied Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
