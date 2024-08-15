import anisha from '../../../assets/images/about/anisha lee.svg';

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-box">
            <div className="image">
              <img src={anisha} alt="" />
            </div>
            <h3 className="name">Anisha Lee</h3>
            <p className="poosition">Co-Founder</p>
          </div>
          <div className="team-box">
            <div className="image">
              <img src={anisha} alt="" />
            </div>
            <h3 className="name">Anisha Lee</h3>
            <p className="poosition">Co-Founder</p>
          </div>
          <div className="team-box">
            <div className="image">
              <img src={anisha} alt="" />
            </div>
            <h3 className="name">Anisha Lee</h3>
            <p className="poosition">Co-Founder</p>
          </div>
          <div className="team-box">
            <div className="image">
              <img src={anisha} alt="" />
            </div>
            <h3 className="name">Anisha Lee</h3>
            <p className="poosition">Co-Founder</p>
          </div>
          <div className="team-box">
            <div className="image">
              <img src={anisha} alt="" />
            </div>
            <h3 className="name">Anisha Lee</h3>
            <p className="poosition">Co-Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
