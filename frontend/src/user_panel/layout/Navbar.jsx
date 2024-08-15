import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../assets/icons/apple_logo.svg';
import down from '../assets/icons/down.svg';
import favorite from '../assets/icons/heart.svg';
import cart from '../assets/icons/cart.svg';
import CartHover from '../commons/CartHover';

const Navbar = () => {
  // states
  const [topVisible, setTopVisible] = useState(false);
  const top = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  //useEffect is used to attach the event listener when the component is mounted and detach it otherwise
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 100) {
        setTopVisible(true);
      } else {
        setTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // return statement is used to remove the event listener before the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className={topVisible ? 'active' : ''}>
        <div className="container">
          {/* logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="" />
            <span>iSTORE</span>
          </Link>

          {/* desktop nav start */}
          <div className="desktop-nav">
            {/* links */}
            <div className="nav-links">
              <Link to="/">Home </Link>

              <div className="dropdown">
                <button>
                  <p>Products</p>
                  <img src={down} alt="" />
                </button>
                <div className="drop-down-menu-container">
                  <div className="drop-down-menu">
                    <Link to="/applemacbook">Mac</Link>
                    <Link to="/applemacbook">iPad</Link>
                    <Link to="/applemacbook">iPhone</Link>
                    <Link to="/applemacbook">Watch</Link>
                    <Link to="/applemacbook">Vision</Link>
                    <Link to="/applemacbook">AirPods</Link>
                    <Link to="/applemacbook">TV & Home</Link>
                  </div>
                </div>
              </div>

              <Link to="/about">About Us </Link>
              <Link to="/contact">Contact </Link>
            </div>
          </div>
          {/* desktop nav end */}

          {/* mobile nav */}
          {/* icons */}
          <div className="right-aligned">
            <div className="icons-container">
              <Link to="/cart" className="cart-icon">
                <img src={cart} alt="cart icon" />
              </Link>
              {/* cart hover */}
              <CartHover />
              <Link to="/">
                <img src={favorite} alt="heart icon" />
              </Link>
            </div>
            <Link to="/" className="profile">
              <img src="" alt="user profile" />
            </Link>

            <button className="menu-button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <button
        onClick={top}
        className={`scrollTop ${topVisible ? 'active' : ''}`}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </button>
    </>
  );
};

export default Navbar;
