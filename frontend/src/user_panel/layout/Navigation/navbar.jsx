import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavCategories from './nav_cat';
import './navbar.css';
import NavCart from './cart';
import NavWishlist from './wishlist';
import SearchComponent from './searchComponent';
import { useAuth } from '../../utils/Authentication/AuthContext';
import UserProfile from './UserProfile/user-profile';

const Navbar = ({ heroHeight, setBlurBackground }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [CartComponent, setCartComponent] = useState(false);
  const [WishlistComponent, setWishlistComponent] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [passedHero, setPassedHero] = useState(false);
  const [productHovered, setProductHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [droppedDownProducts, setDroppedDownProducts] = useState(false);
  const {isLoggedIn}=useAuth();
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

  const toggleClass = () => {
    setIsActive(!isActive);
    setDroppedDownProducts(false);
    setIsSearchClicked(false);
    if (isActive) {
      setBlurBackground(false);
      return;
    }
    setBlurBackground(true);
  };

  const dropDown = () => {
    setDroppedDownProducts(!droppedDownProducts);
  };

  const products = useRef(null);

  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
    setIsActive(false);
    if (isSearchClicked) {
      setBlurBackground(false);
      return;
    }
    setBlurBackground(true);
  };

  const handleProductMouseOver = () => {
    setIsSearchClicked(false);
    setProductHovered(true);
    setBlurBackground(true);
  };

  const handleProductMouseOut = () => {
    setProductHovered(false);
    setBlurBackground(false);
  };

  function showCart() {
    setCartComponent(true);
    setWishlistComponent(false);
    handleSearchClick();
    handleProductMouseOver();
    setBlurBackground(false);
  }

  function showWishlist() {
    setCartComponent(false);
    setWishlistComponent(true);
    handleSearchClick();
    handleProductMouseOver();
    setBlurBackground(false);
  }

  function setUpMobileMenu() {}

  window.onload = {
    setUpMobileMenu,
  };

  useEffect(() => {
    if (window.scrollY >= heroHeight) {
      setPassedHero(true);
    } else {
      setPassedHero(false);
    }
    window.addEventListener('scroll', () => {
      if (window.scrollY >= heroHeight) {
        setPassedHero(true);
      } else {
        setPassedHero(false);
      }
    });
  }, [heroHeight]);

  useEffect(() => {
    const loadedCart = localStorage.getItem('cart');
    if (loadedCart) {
      setCart(JSON.parse(loadedCart));
    }
  }, []);

  useEffect(() => {
    const loadedWishlist = localStorage.getItem('wishlist');
    if (loadedWishlist) {
      setWishlist(JSON.parse(loadedWishlist));
    }
  }, []);

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        //const response = await fetch('./data.json');
        //console.log(response)
        //const jsonData = await response.json();
        setFetchedData([
          {
            _id: 2,
            name: 'Macbook',
            url: require('../../assets/images/category_images/macbooks.png'),
            desc: 'Sleek and powerful for all your computing needs.',
          },
          {
            _id: 3,
            name: 'iPad',
            url: require('../../assets/images/category_images/ipads.png'),
            desc: 'Versatile tablets for work, creativity, and entertainment.',
          },
          {
            _id: 4,
            name: 'Watch',
            url: require('../../assets/images/category_images/iwatch.png'),
            desc: 'Smartwatches that keep you connected and fit.',
          },
          {
            _id: 5,
            name: 'AirPod',
            url: require('../../assets/images/category_images/airpods.png'),
            desc: 'Wireless earphones with seamless integration.',
          },
          {
            _id: 1,
            name: 'iPhone',
            url: require('../../assets/images/category_images/iphone.png'),
            desc: 'Revolutionary smartphones with powerful features.',
          },
          {
            _id: 6,
            name: 'iMac',
            url: require('../../assets/images/category_images/iMac.png'),
            desc: 'All-in-one desktop computers with stunning displays.',
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav
        className={`${!passedHero ? 'dark nav-bar' : 'nav-bar'} ${
          isSearchClicked || productHovered ? 'colored-nav' : ''
        }`}
      >
        <Link to="/" className="logo-container">
          <svg
            className="svg logo"
            width="52"
            height="56"
            viewBox="0 0 52 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_204_100)">
              <path d="M50.1958 43.3617C49.2884 45.2832 48.2144 47.052 46.97 48.6782C45.2737 50.8951 43.8849 52.4296 42.8145 53.2818C41.1553 54.6805 39.3776 55.3968 37.474 55.4376C36.1073 55.4376 34.4592 55.0811 32.5408 54.358C30.616 53.6382 28.8472 53.2818 27.2298 53.2818C25.5336 53.2818 23.7144 53.6382 21.7685 54.358C19.8197 55.0811 18.2497 55.4579 17.0494 55.4953C15.2239 55.5666 13.4043 54.8299 11.5881 53.2818C10.4289 52.3549 8.9789 50.7661 7.24192 48.5152C5.37827 46.1116 3.8461 43.3243 2.64576 40.1467C1.36025 36.7144 0.71582 33.3907 0.71582 30.173C0.71582 26.487 1.58468 23.308 3.325 20.644C4.69274 18.5041 6.51231 16.8162 8.78965 15.577C11.067 14.3379 13.5277 13.7064 16.1776 13.666C17.6275 13.666 19.529 14.0771 21.8918 14.8851C24.2481 15.6958 25.761 16.107 26.4243 16.107C26.9202 16.107 28.6009 15.6262 31.4501 14.6678C34.1444 13.779 36.4184 13.411 38.2813 13.556C43.3293 13.9294 47.1218 15.7536 49.644 19.0399C45.1293 21.5474 42.896 25.0595 42.9405 29.5649C42.9812 33.0743 44.37 35.9946 47.0996 38.3134C48.3366 39.3896 49.718 40.2214 51.255 40.8121C50.9217 41.6982 50.5699 42.5469 50.1958 43.3617ZM38.6184 1.60031C38.6184 4.35094 37.5221 6.91919 35.337 9.29634C32.7 12.1223 29.5105 13.7553 26.0517 13.4976C26.0076 13.1676 25.9821 12.8203 25.9821 12.4554C25.9821 9.81475 27.2361 6.98879 29.4631 4.67818C30.5749 3.50828 31.9889 2.53552 33.7037 1.75953C35.4148 0.995126 37.0332 0.572392 38.5554 0.5C38.5999 0.867716 38.6184 1.23549 38.6184 1.60031Z" />
            </g>
            <defs>
              <clipPath id="clip0_204_100">
                <rect
                  width="50.5392"
                  height="55"
                  transform="translate(0.71582 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <span>iSTORE</span>
        </Link>
        <ul className="nav-options">
          <li className="nav-link">
            <Link to="/">Home </Link>
          </li>
          <li
            className="nav-link"
            ref={products}
            onMouseOver={handleProductMouseOver}
            onMouseOut={handleProductMouseOut}
          >
            <span>Products</span>
            <svg
              className="svg caretDown"
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.415 9.37499C8.08674 9.37557 7.7616 9.31126 7.45827 9.18577C7.15494 9.06027 6.87941 8.87607 6.6475 8.64374L0.03125 2.02624L1.79875 0.258743L8.415 6.87499L15.0312 0.258743L16.7987 2.02624L10.1825 8.64249C9.95069 8.87504 9.67521 9.05948 9.37187 9.18519C9.06854 9.3109 8.74335 9.3754 8.415 9.37499Z" />
            </svg>
            <div className="nav-product-menu">
              {fetchedData.map((category) => (
                <NavCategories key={category._id} data={category} />
              ))}
            </div>
          </li>
          <li className="nav-link">
            <Link to="/about">About us</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-accessories">
          <div className="nav-tools">
            <div className="search" onClick={handleSearchClick}>
              <svg
                className="svg search-icon"
                width="36"
                height="44"
                viewBox="0 0 36 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_204_116)">
                  <path d="M35.0344 37.0429L26.3296 28.3381C28.7018 25.4369 29.8681 21.7349 29.5873 17.9979C29.3065 14.2609 27.6002 10.7747 24.8211 8.26056C22.0421 5.74638 18.403 4.39652 14.6566 4.49019C10.9102 4.58387 7.34316 6.1139 4.69324 8.76382C2.04331 11.4137 0.513279 14.9808 0.419607 18.7272C0.325936 22.4736 1.6758 26.1127 4.18998 28.8917C6.70416 31.6707 10.1903 33.3771 13.9273 33.6579C17.6644 33.9387 21.3663 32.7724 24.2676 30.4002L32.9723 39.105C33.2474 39.3707 33.6158 39.5177 33.9981 39.5143C34.3805 39.511 34.7463 39.3576 35.0167 39.0872C35.2871 38.8169 35.4404 38.4511 35.4437 38.0687C35.4471 37.6864 35.3001 37.318 35.0344 37.0429ZM15.0451 30.7823C12.7376 30.7823 10.482 30.0981 8.5634 28.8161C6.64482 27.5342 5.14948 25.7121 4.26646 23.5803C3.38343 21.4485 3.1524 19.1027 3.60256 16.8396C4.05272 14.5765 5.16386 12.4977 6.79547 10.8661C8.42708 9.23445 10.5059 8.1233 12.769 7.67314C15.0321 7.22298 17.3779 7.45402 19.5097 8.33704C21.6415 9.22007 23.4636 10.7154 24.7455 12.634C26.0275 14.5526 26.7117 16.8082 26.7117 19.1156C26.7082 22.2088 25.478 25.1742 23.2908 27.3614C21.1036 29.5486 18.1382 30.7788 15.0451 30.7823Z" />
                </g>
                <defs>
                  <clipPath id="clip0_204_116">
                    <rect
                      width="35.0288"
                      height="44"
                      transform="translate(0.415039)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="cart-wishlist">
              <Link
                to="/cart"
                className="cart"
                onMouseOver={showCart}
                onMouseOut={handleProductMouseOut}
              >
                <span className="cart-badge">{cart.length}</span>
                <svg
                  className="svg"
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_204_120)">
                    <path d="M34.897 9.84375H29.9751C29.9751 7.23303 28.938 4.72923 27.0919 2.88317C25.2459 1.03711 22.7421 0 20.1313 0C17.5206 0 15.0168 1.03711 13.1708 2.88317C11.3247 4.72923 10.2876 7.23303 10.2876 9.84375H5.36572C4.06036 9.84375 2.80846 10.3623 1.88543 11.2853C0.962401 12.2084 0.443848 13.4603 0.443848 14.7656L0.443848 31.1719C0.446453 33.3467 1.31154 35.4317 2.84936 36.9695C4.38718 38.5073 6.47217 39.3724 8.64697 39.375H31.6157C33.7905 39.3724 35.8755 38.5073 37.4133 36.9695C38.9512 35.4317 39.8162 33.3467 39.8188 31.1719V14.7656C39.8188 13.4603 39.3003 12.2084 38.3773 11.2853C37.4542 10.3623 36.2023 9.84375 34.897 9.84375ZM20.1313 3.28125C21.8718 3.28125 23.541 3.97265 24.7717 5.20336C26.0024 6.43407 26.6938 8.10327 26.6938 9.84375H13.5688C13.5688 8.10327 14.2603 6.43407 15.491 5.20336C16.7217 3.97265 18.3909 3.28125 20.1313 3.28125ZM36.5376 31.1719C36.5376 32.4772 36.019 33.7291 35.096 34.6522C34.173 35.5752 32.9211 36.0938 31.6157 36.0938H8.64697C7.34161 36.0938 6.08971 35.5752 5.16668 34.6522C4.24365 33.7291 3.7251 32.4772 3.7251 31.1719V14.7656C3.7251 14.3305 3.89795 13.9132 4.20563 13.6055C4.5133 13.2979 4.9306 13.125 5.36572 13.125H10.2876V16.4062C10.2876 16.8414 10.4604 17.2587 10.7681 17.5663C11.0758 17.874 11.4931 18.0469 11.9282 18.0469C12.3633 18.0469 12.7806 17.874 13.0883 17.5663C13.396 17.2587 13.5688 16.8414 13.5688 16.4062V13.125H26.6938V16.4062C26.6938 16.8414 26.8667 17.2587 27.1744 17.5663C27.4821 17.874 27.8994 18.0469 28.3345 18.0469C28.7696 18.0469 29.1869 17.874 29.4946 17.5663C29.8022 17.2587 29.9751 16.8414 29.9751 16.4062V13.125H34.897C35.3321 13.125 35.7494 13.2979 36.0571 13.6055C36.3647 13.9132 36.5376 14.3305 36.5376 14.7656V31.1719Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_120">
                      <rect
                        width="45"
                        height="45"
                        fill="white"
                        transform="translate(0.443848)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div className="line-between"></div>
              <Link
                to="wishlist"
                className="wishlist"
                onMouseOver={showWishlist}
                onMouseOut={handleProductMouseOut}
              >
                <span className="wishlist-badge">{wishlist.length}</span>
                <svg
                  className="svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_204_127)">
                    <path d="M29.6103 1.52834C27.7335 1.55753 25.8977 2.08142 24.2882 3.04712C22.6787 4.01282 21.3525 5.38612 20.4436 7.02834C19.5347 5.38612 18.2085 4.01282 16.599 3.04712C14.9895 2.08142 13.1537 1.55753 11.2769 1.52834C8.28518 1.65832 5.46646 2.96709 3.43659 5.16872C1.40671 7.37035 0.330698 10.2859 0.443615 13.2783C0.443615 24.57 18.7036 37.6117 19.4803 38.165L20.4436 38.8467L21.4069 38.165C22.1836 37.615 40.4436 24.57 40.4436 13.2783C40.5565 10.2859 39.4805 7.37035 37.4506 5.16872C35.4208 2.96709 32.602 1.65832 29.6103 1.52834ZM20.4436 34.7433C15.0219 30.6933 3.77695 20.7433 3.77695 13.2783C3.66302 11.1695 4.38756 9.10122 5.79255 7.5245C7.19755 5.94779 9.16901 4.99059 11.2769 4.86167C13.3849 4.99059 15.3563 5.94779 16.7613 7.5245C18.1663 9.10122 18.8909 11.1695 18.7769 13.2783H22.1103C21.9963 11.1695 22.7209 9.10122 24.1259 7.5245C25.5309 5.94779 27.5023 4.99059 29.6103 4.86167C31.7182 4.99059 33.6897 5.94779 35.0947 7.5245C36.4997 9.10122 37.2242 11.1695 37.1103 13.2783C37.1103 20.7467 25.8653 30.6933 20.4436 34.7433Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_127">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0.443848)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div className="nav-cart-wishlist-menu">
                {CartComponent && <NavCart />}
                {WishlistComponent && <NavWishlist />}
              </div>
              <div
                className={
                  isActive
                    ? 'changeToClose mobile-nav-menu-button'
                    : 'mobile-nav-menu-button'
                }
                onClick={toggleClass}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
           {/* { !isLoggedIn &&
            (
              <Link to="/login" className="sign-up-button primary-btn">
              <svg
                className="svg"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.4438 0C9.41551 0 0.443848 8.97167 0.443848 20C0.443848 31.0283 9.41551 40 20.4438 40C31.4722 40 40.4438 31.0283 40.4438 20C40.4438 8.97167 31.4722 0 20.4438 0ZM13.7772 35.2733V35C13.7772 31.3233 16.7672 28.3333 20.4438 28.3333C24.1205 28.3333 27.1105 31.3233 27.1105 35V35.2733C25.0672 36.1683 22.8138 36.6667 20.4438 36.6667C18.0738 36.6667 15.8205 36.1683 13.7772 35.2733ZM30.3188 33.4183C29.5588 28.6533 25.4205 25 20.4438 25C15.4672 25 11.3305 28.6533 10.5688 33.4183C6.45218 30.38 3.77718 25.4967 3.77718 20C3.77718 10.81 11.2538 3.33333 20.4438 3.33333C29.6338 3.33333 37.1105 10.81 37.1105 20C37.1105 25.4967 34.4355 30.38 30.3188 33.4183ZM20.4438 8.33333C16.7672 8.33333 13.7772 11.3233 13.7772 15C13.7772 18.6767 16.7672 21.6667 20.4438 21.6667C24.1205 21.6667 27.1105 18.6767 27.1105 15C27.1105 11.3233 24.1205 8.33333 20.4438 8.33333ZM20.4438 18.3333C18.6055 18.3333 17.1105 16.8383 17.1105 15C17.1105 13.1617 18.6055 11.6667 20.4438 11.6667C22.2822 11.6667 23.7772 13.1617 23.7772 15C23.7772 16.8383 22.2822 18.3333 20.4438 18.3333Z" />
              </svg>

              <span>Sign-up</span>
          </Link>
            )
          } */}
          <UserProfile passedHero={{passedHero}}/>
        </div>
        <SearchComponent
          addClass={isSearchClicked}
          passedHeroSection={passedHero}
        />
        <div className={`${!isActive ? 'hide' : ''} mobile__nav__menu`}>
          <ul className="mobile__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${!droppedDownProducts ? 'closed' : ''} drop__down`}
            >
              <span className="drop__down__header" onClick={dropDown}>
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="512"
                  height="512"
                >
                  <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                </svg>
              </span>
              <ul className="drop__down__list">
                {fetchedData.map((category) => (
                  <li className="drop__down__sub">
                    <Link
                      to={`/${category.name.toLowerCase().replace(/\s/g, '')}`}
                      className="drop__down__header__sub"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart <span className="mobile-menu-badge">{cart.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                Wishlist
                <span className="mobile-menu-badge">{wishlist.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/login" className="primary-btn sign-up-button">
                <svg
                  className="svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.4438 0C9.41551 0 0.443848 8.97167 0.443848 20C0.443848 31.0283 9.41551 40 20.4438 40C31.4722 40 40.4438 31.0283 40.4438 20C40.4438 8.97167 31.4722 0 20.4438 0ZM13.7772 35.2733V35C13.7772 31.3233 16.7672 28.3333 20.4438 28.3333C24.1205 28.3333 27.1105 31.3233 27.1105 35V35.2733C25.0672 36.1683 22.8138 36.6667 20.4438 36.6667C18.0738 36.6667 15.8205 36.1683 13.7772 35.2733ZM30.3188 33.4183C29.5588 28.6533 25.4205 25 20.4438 25C15.4672 25 11.3305 28.6533 10.5688 33.4183C6.45218 30.38 3.77718 25.4967 3.77718 20C3.77718 10.81 11.2538 3.33333 20.4438 3.33333C29.6338 3.33333 37.1105 10.81 37.1105 20C37.1105 25.4967 34.4355 30.38 30.3188 33.4183ZM20.4438 8.33333C16.7672 8.33333 13.7772 11.3233 13.7772 15C13.7772 18.6767 16.7672 21.6667 20.4438 21.6667C24.1205 21.6667 27.1105 18.6767 27.1105 15C27.1105 11.3233 24.1205 8.33333 20.4438 8.33333ZM20.4438 18.3333C18.6055 18.3333 17.1105 16.8383 17.1105 15C17.1105 13.1617 18.6055 11.6667 20.4438 11.6667C22.2822 11.6667 23.7772 13.1617 23.7772 15C23.7772 16.8383 22.2822 18.3333 20.4438 18.3333Z" />
                </svg>
                Sign in
              </Link>
            </li>
          </ul>
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
