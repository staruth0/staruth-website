import workplace from '../../../assets/images/about/workplace.svg';

const Workplace = () => {
  return (
    <section id="workplace">
      <div className="container">
        <div className="even-columns">
          <div className="text">
            <h2>Our Workplace</h2>
            <p>
              At iStore, we foster a vibrant and inclusive workplace culture. We
              believe in collaboration, continuous learning, and personal
              growth. Our team of passionate Apple enthusiasts brings deep
              knowledge and expertise to provide exceptional service to our
              customers.
            </p>
          </div>
          <div className="image">
            <img src={workplace} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workplace;
